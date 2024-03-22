import { Outlet, createBrowserRouter } from "react-router-dom";
import Album from "../pages/album/Album";
import DiaryDetail from "../pages/diaryDetail/DiaryDetail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyCollection from "../pages/myCollection/MyCollection";
import MyPage from "../pages/myPage/MyPage";
import OnBoarding from "../pages/onBoarding/OnBoarding";
import OtherCollection from "../pages/otherCollection/OtherCollection";
import WriteDiary from "../pages/writeDiary/WriteDiary";
import BottomNavBar from "@components/BottomNavbar/BottomNavbar";
import Header from "@components/HeaderNav/HeaderNav";

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
        element: (
          <>
            <Header type="withLogo" text="" />
            <Home />
            <BottomNavBar />
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
            <Header type="textOnly" text="나의 추억 기록함" />
            <MyCollection />
            <BottomNavBar />
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
            <BottomNavBar />
          </>
        )
      },
      {
        path: "/writeDiary",
        element: (
          <>
            <Header type="withPrevButton" text="해봄이" />
            <WriteDiary />
          </>
        )
      }
    ]
  }
]);

export default router;
