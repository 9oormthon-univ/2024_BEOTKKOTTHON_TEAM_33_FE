import { MapProps } from "@components/KakaoMap/KakaoMap.types";
import { instance } from "./instance";

const postAroundSeniorCenter = async (latitude: number, longitude: number): Promise<MapProps> => {
  const postAroundSeniorCenterURL = "/locations";

  try {
    const accessToken = sessionStorage.getItem("accessToken");

    const requestBody = {
      latitude,
      longitude
    };

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };

    const response = await instance.post(postAroundSeniorCenterURL, requestBody, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default postAroundSeniorCenter;
