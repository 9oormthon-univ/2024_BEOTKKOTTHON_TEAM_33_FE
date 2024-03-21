import ImagePagination from "@components/ImagePagination/ImagePagination";

const images = [
  "../src/assets/icons/Voice Activated Device.jpg",
  "../src/assets/icons/Users Network.jpg",
  "../src/assets/icons/Sending Receiving Texts Messages.jpg"
];

const Login = () => {
  return <ImagePagination images={images} isLogin={true} />;
};

export default Login;
