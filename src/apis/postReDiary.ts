import { instance } from "@apis/instance";
import ReContentProps from "@/types/reContentProps";

const postReDiary = async (content: ReContentProps) => {
  const postReDiaryURL = "/user/retry";

  // const accessToken = sessionStorage.getItem("accessToken");
  const accessToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJybGRuZDEyMzQ1NUBuYXZlci5jb20iLCJpYXQiOjE3MTEyMDUwMzIsImV4cCI6MTcxMTQ2NDIzMn0.vt0daDkKbASW3xjownyrWT2RBQ7Byo7WWKS1-G8Qdm9hdva9l2zaC8WpTOu2TeTBCQ9qvrWI2b_bFdExA5l_1Q";

  const response = await instance.post(postReDiaryURL, content, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data);

  return response.data;
};

export default postReDiary;
