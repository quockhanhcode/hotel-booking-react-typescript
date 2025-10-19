import { lazy, Suspense, type FC, type LazyExoticComponent } from "react";
import { type RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomeTemplate/HomePage"));
const AboutPage = lazy(() => import("@/pages/HomeTemplate/AboutPage"));
const AuthTemplate = lazy(() => import("@/pages/AuthTemplate"));
const LoginPage = lazy(() => import("@/pages/AuthTemplate/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/AuthTemplate/RegisterPage"));
const DashBoard = lazy(() => import("@/pages/AdminTemplate/"));

const withSuspense = (Component: LazyExoticComponent<FC>) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: withSuspense(HomePage),
  },
  {
    path: "/about",
    element: withSuspense(AboutPage),
  },
  {
    path: "/dasboard",
    element: withSuspense(DashBoard),
  },
  {
    path: "/auth",
    element: withSuspense(AuthTemplate),
    children: [
      { path: "login", element: withSuspense(LoginPage) },
      { path: "register", element: withSuspense(RegisterPage) },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];
