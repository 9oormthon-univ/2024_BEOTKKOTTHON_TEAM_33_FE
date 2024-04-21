import { instance } from "@apis/instance";

const getDiaryDetail = async (diaryId: number) => {
  const getDiaryDetailURL = `/user/diaries/detail/${diaryId}`;

  const accessToken = sessionStorage.getItem("accessToken");

  const response = await instance.get(getDiaryDetailURL, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data.data);

  return response.data.data;
};

export default getDiaryDetail;
