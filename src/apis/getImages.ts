import { imgInstance } from "@apis/instance";

const getImages = async () => {
  const getImagesURL = "/list";

  const response = await imgInstance.get(getImagesURL);

  console.log(response.data);

  return response.data;
};

export default getImages;
