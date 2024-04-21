import { instance } from "@apis/instance";

const deleteLike = async (diaryId: number) => {
  const deleteLikeURL = `/user/diaries/public/detail?diaryId=${diaryId}`;

  const accessToken = sessionStorage.getItem("accessToken");

  const response = await instance.delete(deleteLikeURL, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data);

  return response.data;
};

export default deleteLike;
