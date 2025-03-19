import { lazy, Suspense } from "react";
import Spinner from "../components/common/Spinner";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";
import React from "react";
import Dashborad from "../components/pages/Dashborad";

const Page = lazy(() => import("../components/pages/ProfilePage"));
const IdentityRecord = lazy(() => import("../components/pages/IdentityRecord"));
const Notification = lazy(() => import("../components/pages/Notification"));
const RecentActivity = lazy(() => import("../components/pages/RecentActivity"));
const Support = lazy(() => import("../components/pages/Support"));

const AuthOptionsPage = lazy(() => import("../components/home/OptionPage"));
const UserReigster = lazy(() => import("../components/auth/UserReigster"));
const UserLogIn = lazy(() => import("../components/auth/UserLogIn"));
const AdminLogIn = lazy(() => import("../components/auth/AdminLogIn"));
const AdminReigster = lazy(() => import("../components/auth/AdminReigster"));

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<Spinner />}>
    <Component />
  </Suspense>
);

const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <AuthOptionsPage />,
  },
  {
    path: "/user-register",
    element: <UserReigster />,
  },
  {
    path: "/user-login",
    element: <UserLogIn />,
  },
  {
    path: "/admin-login",
    element: <AdminLogIn />,
  },
  {
    path: "/admin-register",
    element: <AdminReigster />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      { index: true, element: withSuspense(Dashborad) },
      { path: "profile", element: withSuspense(Page) },
      { path: "identity-record", element: withSuspense(IdentityRecord) },
      { path: "notification", element: withSuspense(Notification) },
      { path: "recent-activity", element: withSuspense(RecentActivity) },
      { path: "support", element: withSuspense(Support) },
    ],
  },
];

export const mainRouter = createBrowserRouter(routesConfig);
