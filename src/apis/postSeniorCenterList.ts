import { MapProps } from "@components/KakaoMap/KakaoMap.types";
import { flaskInstance } from "./instance";

const postSeniorCenterList = async (page: number, keyword: string): Promise<MapProps> => {
  const postSeniorCenterListURL = "/search";

  try {
    const accessToken = sessionStorage.getItem("accessToken");

    const requestBody = {
      keyword,
      page
    };

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };

    const response = await flaskInstance.post(postSeniorCenterListURL, requestBody, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default postSeniorCenterList;