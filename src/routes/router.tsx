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
        element: <Album />
      },
      {
        path: "/diaryDetail",
        element: <DiaryDetail />
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
            <OtherCollection />
            <BottomNavBar />
          </>
        )
      },
      {
        path: "/writeDiary",
        element: <WriteDiary />
      }
    ]
  }
]);

export default router;
