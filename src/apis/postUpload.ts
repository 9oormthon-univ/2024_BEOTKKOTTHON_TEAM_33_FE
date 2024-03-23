import { instance } from "@apis/instance";

const postUpload = async (photos: string[]) => {
  const postUploadURL = "/user/upload/url";

  //   const accessToken = sessionStorage.getItem("accessToken");
  const accessToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJybGRuZDEyMzQ1NUBuYXZlci5jb20iLCJpYXQiOjE3MTEyMDUwMzIsImV4cCI6MTcxMTQ2NDIzMn0.vt0daDkKbASW3xjownyrWT2RBQ7Byo7WWKS1-G8Qdm9hdva9l2zaC8WpTOu2TeTBCQ9qvrWI2b_bFdExA5l_1Q";

  const response = await instance.post(postUploadURL, photos, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data);

  return response.data;
};

export default postUpload;
