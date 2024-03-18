import { Outlet, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Album from "../pages/album/Album";
import DiaryDetail from "../pages/diaryDetail/DiaryDetail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyCollection from "../pages/myCollection/MyCollection";
import MyPage from "../pages/myPage/MyPage";
import OnBoarding from "../pages/onBoarding/OnBoarding";
import OtherCollection from "../pages/otherCollection/OtherCollection";
import WriteDiary from "../pages/writeDiary/WriteDiary";

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
        element: <OnBoarding />
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
        path: "/home",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/myCollection",
        element: <MyCollection />
      },
      {
        path: "/myPage",
        element: <MyPage />
      },
      {
        path: "/otherCollection",
        element: <OtherCollection />
      },
      {
        path: "/writeDiary",
        element: <WriteDiary />
      }
    ]
  }
]);

export default router;
