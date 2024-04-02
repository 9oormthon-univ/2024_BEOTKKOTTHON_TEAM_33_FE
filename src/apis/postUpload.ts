import { instance } from "@apis/instance";

const postUpload = async (photos: string[]) => {
  const postUploadURL = "/user/upload/url";

  const accessToken = sessionStorage.getItem("accessToken");

  const response = await instance.post(postUploadURL, photos, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data);

  return response.data;
};

export default postUpload;
