import { useState, useRef, useEffect } from "react";
import * as S from "./KakaoMap.styles";
import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import { ProductsMarkers } from "../ProductMarker/ProductMarker";
import { PositionMarker } from "../PositionMarker/PositionMarker";
import { MapProps, MapCenter, UserPositionType, ProductType } from "./KakaoMap.types";
import ProductCardForMap from "../ProductCard/ProductCardForMap";
import Search from "../Search/Search";
import SearchBar from "@components/SearchBar/SearchBar";

const KakaoMap = ({ products }: MapProps) => {
  const [selectedProductId, setSelectedProductId] = useState<number>(
    products.length > 0 ? products[0].id : 0
  );
  const [mapCenter, setMapCenter] = useState<MapCenter>({
    lat: products.length > 0 ? products[0].latitude : 33.450701,
    lng: products.length > 0 ? products[0].longitude : 126.570667
  });
  const [userPosition, setUserPosition] = useState<UserPositionType>({
    lat: null,
    lng: null,
    errorMessage: "",
    isLoading: true
  });

  const selectedProduct = products.find((product) => product.id === selectedProductId);

  const mapRef = useRef<kakao.maps.Map>(null);

  const initPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log("curr position", newPosition);
          setMapCenter(newPosition);
          setUserPosition((prev) => ({
            ...prev,
            lat: newPosition.lat,
            lng: newPosition.lng,
            isLoading: false
          }));
          mapRef.current?.setLevel(5);
          mapRef.current?.setCenter(
            new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude)
          );
        },
        (err) => {
          setUserPosition((prev) => ({
            ...prev,
            errorMessage: err.message,
            isLoading: false
          }));
        }
      );
    } else {
      setUserPosition((prev) => ({
        ...prev,
        errorMessage: "현재 위치를 사용할 수 없습니다.",
        isLoading: false
      }));
    }
  };

  useEffect(() => {
    initPosition();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProductId(products[0].id);
    }
  }, [products]);

  return (
    <>
      <Map
        center={mapCenter}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 1000
        }}
        level={5}
        ref={mapRef}
      >
        {userPosition.lat && userPosition.lng ? <PositionMarker position={userPosition} /> : null}
        {products.length > 0 && (
          <MarkerClusterer averageCenter={true} minLevel={10} styles={[S.clustererStyles]}>
            <ProductsMarkers
              products={products}
              selectedProductId={selectedProductId}
              setSelectedProductId={setSelectedProductId}
            />
          </MarkerClusterer>
        )}
        <Search />
      </Map>
      <ProductCardForMap selectedProduct={selectedProduct as ProductType} />
      <SearchBar />
    </>
  );
};

export default KakaoMap;
