import { instance } from "@apis/instance";

const postLike = async (diaryId: number) => {
  const postLikeURL = `/user/diaries/public/detail?diaryId=${diaryId}`;

  const accessToken = sessionStorage.getItem("accessToken");

  const response = await instance.post(postLikeURL, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data);

  return response.data;
};

export default postLike;
