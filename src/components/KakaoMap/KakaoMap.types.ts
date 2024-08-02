export interface UserPositionType {
  lat: number | null;
  lng: number | null;
  errorMessage: string;
  isLoading: boolean;
}

export interface MapCenter {
  lat: number;
  lng: number;
}

export interface UserPositionType {
  lat: number | null;
  lng: number | null;
  errorMessage: string;
  isLoading: boolean;
}

export interface ProductType {
  facility_name: string;
  id: number;
  latitude: number;
  longitude: number;
  number_addr: string | null;
  operation_time: string;
  phone_number: string;
  road_name_addr: string | null;
}

export interface MapProps {
  products: ProductType[];
}
