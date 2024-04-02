import { instance } from "@apis/instance";
import ReContentProps from "@/types/reContentProps";

const postReDiary = async (content: ReContentProps) => {
  const postReDiaryURL = "/user/retry";

  const accessToken = sessionStorage.getItem("accessToken");

  const response = await instance.post(postReDiaryURL, content, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data);

  return response.data;
};

export default postReDiary;
