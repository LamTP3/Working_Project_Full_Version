import React from "react";
import SubmitProjectPage from "./pages/SubmitProjectPage/SubmitProjectPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/CommonPageSection/Header/Header";
import { Outlet } from "react-router";
import ProjectListPage from "./pages/ProjectListPage/ProjectListPage";
import ProjectDetail from "./pages/ProjectDetailPage/DetailPage";
import { ROUTER } from "./helper/contant";
const Layout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        theme="light"
      />
      <Header />
      <Outlet />
    </div>
  );
};

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTER.HOME,
      element: <Layout />,
      children: [
        { index: true, element: <SubmitProjectPage /> },
        {
          path: ROUTER.SUBMIT_PROJECT,
          element: <SubmitProjectPage />,
        },
        {
          path: ROUTER.PROJECT_LIST,
          element: <ProjectListPage />,
        },
        {
          path: ROUTER.PROJECT_DETAIL,
          element: <ProjectDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
