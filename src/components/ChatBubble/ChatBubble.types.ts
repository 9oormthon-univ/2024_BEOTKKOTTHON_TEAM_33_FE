import ChatLoad from "@assets/lotties/chatLoading.json";
export interface BubbleText {
  text: string;
}

export const defaultOptions = {
  //예제1
  loop: true,
  autoplay: true,
  animationData: ChatLoad,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
