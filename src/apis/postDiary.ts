import { instance } from "@apis/instance";
import ContentProps from "@/types/contentProps";

const postDiary = async (content: ContentProps) => {
  const postDiaryURL = "/user/create";

  const accessToken = sessionStorage.getItem("accessToken");

  const response = await instance.post(postDiaryURL, content, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data);

  return response.data;
};

export default postDiary;
