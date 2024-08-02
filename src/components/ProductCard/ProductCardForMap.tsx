import * as S from "./ProductCard.styles";
import TimerIcon from "@assets/icons/timerIcon.svg?react";
import PhoneIcon from "@assets/icons/phoneIcon.svg?react";
import { ProductType } from "@components/KakaoMap/KakaoMap.types";

interface ProductCardForMapProps {
  selectedProduct: ProductType;
}

const ProductCardForMap = ({ selectedProduct }: ProductCardForMapProps) => {
  const { facility_name, number_addr, operation_time, phone_number, road_name_addr } =
    selectedProduct;

  return (
    <S.CardContainer>
      <S.MapCardWrapper>
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

        <S.FriendBtn>
          <S.FriendBtnText>내 친구</S.FriendBtnText>
          <S.FriendBtnBoldTxt>4명</S.FriendBtnBoldTxt>
        </S.FriendBtn>
      </S.MapCardWrapper>
    </S.CardContainer>
  );
};

export default ProductCardForMap;
