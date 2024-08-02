import { Outlet, createBrowserRouter } from "react-router-dom";
import Album from "../pages/album/Album";
import DiaryDetail from "../pages/diaryDetail/DiaryDetail";
import Home from "../newPages/homeOther/HomeOther";
import Login from "../pages/login/Login";
import MyCollection from "../pages/myCollection/MyCollection";
import MyPage from "../pages/myPage/MyPage";
import OnBoarding from "../pages/onBoarding/OnBoarding";
import OtherCollection from "../pages/otherCollection/OtherCollection";
import WriteDiary from "../pages/writeDiary/WriteDiary";
import NewBottom from "@components/NewBottomNav/NewBottomNav";
import Header from "@components/HeaderNav/HeaderNav";
import MyInfo from "../newPages/myInfo/MyInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        // element: (
        //   <>
        //     <Header type="withLogo" text="" />
        //     <Home />
        //     <BottomNavBar />
        //   </>
        // )
        element: (
          <>
            <Header type="withNewLogo" text="" />
            <Home />
            <NewBottom />
          </>
        )
      },
      {
        path: "/album",
        element: (
          <>
            <Header type="withPrevButton" text="최근 사진" />
            <Album />
          </>
        )
      },
      {
        path: "/diaryDetail",
        element: (
          <>
            <DiaryDetail />
          </>
        )
      },
      {
        path: "/onBoarding",
        element: <OnBoarding />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/myCollection",
        element: (
          <>
            <Header type="textOnly" text="내 정보" />
            <MyInfo />
            <MyCollection />
            <NewBottom />
          </>
        )
      },
      {
        path: "/myPage",
        element: <MyPage />
      },
      {
        path: "/otherCollection",
        element: (
          <>
            <Header type="textOnly" text="함께보기" />
            <OtherCollection />
            <NewBottom />
          </>
        )
      },
      {
        path: "/writeDiary",
        element: (
          <>
            <Header type="withPrevButton" text="도움받아 쓰기" />
            <WriteDiary />
          </>
        )
      },
      {
        path: "/lesson",
        element: (
          <>
            <Header type="withNewLogo" text="" />
            <Home />
            <NewBottom />
          </>
        )
      },
      {
        path: "/location",
        element: (
          <>
            <Header type="withNewLogo" text="" />
            <Home />
            <NewBottom />
          </>
        )
      },
      {
        path: "/myInfo",
        element: (
          <>
            <Header type="textOnly" text="내 정보" />
            <MyInfo />
            <MyCollection />
            <NewBottom />
          </>
        )
      }
    ]
  }
]);

export default router;
