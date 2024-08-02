import * as S from "./ProductCard.styles";
import TimerIcon from "@assets/icons/timerIcon.svg?react";
import PhoneIcon from "@assets/icons/phoneIcon.svg?react";
import { ProductType } from "@components/KakaoMap/KakaoMap.types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  selectedProduct: ProductType;
}

const ProductCardForMap = ({ selectedProduct }: ProductCardProps) => {
  const {
    id,
    facility_name,
    number_addr,
    operation_time,
    phone_number,
    road_name_addr,
    latitude,
    longitude
  } = selectedProduct;
  const navigate = useNavigate();

  return (
    <S.CardWrapper
      onClick={() =>
        navigate(`/seniorCenterMap?latitude=${latitude}&longitude=${longitude}&id=${id}`)
      }
    >
      <S.ProductTitle>{facility_name}</S.ProductTitle>
      <S.AddressWrapper>
        <S.Address>{number_addr}</S.Address>
        <S.SubAddress>{road_name_addr}</S.SubAddress>
      </S.AddressWrapper>

      <S.InfoWrapper>
        <S.InfoItem>
          <TimerIcon />
          <S.InfoTitle>운영시간</S.InfoTitle>
          <S.InfoContent>{operation_time}</S.InfoContent>
        </S.InfoItem>
        <S.InfoItem>
          <PhoneIcon />
          <S.InfoTitle>전화번호</S.InfoTitle>
          <S.InfoContent>{phone_number}</S.InfoContent>
        </S.InfoItem>
      </S.InfoWrapper>
    </S.CardWrapper>
  );
};

export default ProductCardForMap;
