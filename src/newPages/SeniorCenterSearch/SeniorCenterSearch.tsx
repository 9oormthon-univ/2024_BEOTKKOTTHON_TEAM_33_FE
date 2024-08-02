import * as S from "./SeniorCenterSearch.styles";
import BackArrow from "@assets/icons/backArrow.svg?react";
import SmileIcon from "@assets/icons/smileIcon.svg?react";
import SadIcon from "@assets/icons/sadIcon.svg?react";
import ProductCard from "@components/ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useSeniorCenterList from "@hooks/useSeniorCenterList";
import useIntersect from "@hooks/useIntersect";
import Spinner from "@components/Spinner/Spinner";

const SeniorCenterSearch = () => {
  const defaultMsg = "지도를 옮겨서\n가까운 경로당을 찾아보세요";
  const noDataMsg = "검색 결과가 없어요.\n다시 한번 확인해주세요!";
  const navigate = useNavigate();
  const searchBarRef = useRef<HTMLInputElement | null>(null);
  const searchBtnRef = useRef<HTMLButtonElement | null>(null);

  const [isSearched, setIsSearched] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { data, error, hasNextPage, isFetching, fetchNextPage, refetch } =
    useSeniorCenterList(searchValue);

  if (error) console.log(error);

  const ref = useIntersect<HTMLDivElement>(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching && data.results.length > 0) {
      await fetchNextPage();
    }
  });

  useEffect(() => {
    if (searchBarRef.current) searchBarRef.current.focus();
  }, []);

  useEffect(() => {
    if (searchBarRef.current) {
      searchBarRef.current.focus();

      const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          searchBtnRef.current?.click();
        }
      };
      searchBarRef.current.addEventListener("keypress", handleKeyPress);

      return () => {
        searchBarRef.current?.removeEventListener("keypress", handleKeyPress);
      };
    }
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <S.SearchBarWrapper>
        <div onClick={() => navigate(-1)}>
          <BackArrow />
        </div>

        <S.SearchBar
          type="text"
          value={searchValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target.value)
          }
          placeholder="검색어를 입력하세요"
          ref={searchBarRef}
        />
        <S.SearchBtn
          onClick={async () => {
            setIsSearched(true);
            await refetch();
          }}
          ref={searchBtnRef}
        >
          검색
        </S.SearchBtn>
      </S.SearchBarWrapper>
      <S.ListWrapper>
        {!isSearched ? (
          <S.ExpressionWrapper>
            <SmileIcon />
            <S.AlertMsg>{defaultMsg}</S.AlertMsg>
          </S.ExpressionWrapper>
        ) : isSearched && data.results.length === 0 ? (
          <S.ExpressionWrapper>
            <SadIcon />
            <S.AlertMsg>{noDataMsg}</S.AlertMsg>
          </S.ExpressionWrapper>
        ) : (
          data.results.map((item) => (
            <>
              <div key={item.id} style={{ padding: "16px" }}>
                <ProductCard selectedProduct={item} />
              </div>
              <div ref={ref} />
            </>
          ))
        )}
        {isFetching && <Spinner />}
      </S.ListWrapper>
    </>
  );
};

export default SeniorCenterSearch;
