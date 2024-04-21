import { instance } from "@apis/instance";

const getDiary = async (filterIndex: number) => {
  const getDiaryURL = `/user/diaries/${filterIndex}`;

  const accessToken = sessionStorage.getItem("accessToken");

  const response = await instance.get(getDiaryURL, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data.data);

  return response.data.data;
};

export default getDiary;
