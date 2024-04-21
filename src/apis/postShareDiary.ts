import { instance } from "@apis/instance";

const postShareDiary = async (diaryId: number) => {
  const postSharDiaryURL = `/user/diaries/detail?diaryId=${diaryId}`;

  const accessToken = sessionStorage.getItem("accessToken");

  const response = await instance.post(postSharDiaryURL, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data);

  return response.data;
};

export default postShareDiary;
