import { OtherContentParams } from "@/types/otherCollectionProps";
import { instance } from "./instance";

const getOtherCollection = async (params: OtherContentParams) => {
  const getOtherCollectionURL = "/user/diaries/public";

  try {
    const accessToken = sessionStorage.getItem("accessToken");

    const config = {
      params,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };

    const response = await instance.get(getOtherCollectionURL, config);

    console.log(response.data);
    console.log("제목" + response.data.data.content); //첫 일기 제목 나옴
    return response.data.data.content;
  } catch (error) {
    console.error("에러:", error);
    throw error;
  }
};

export default getOtherCollection;
