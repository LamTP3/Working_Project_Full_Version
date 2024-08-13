import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/CommonPageSection/Header/Header";
import { Outlet } from "react-router";
import { ROUTER } from "./helper/contant";
import { ProjectListPage, SubmitProjectPage, DetailProjectPage } from "./pages";
import GlobalStyle from "./style/styled";
const Layout = () => {
  return (
    <div>
      <GlobalStyle />
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
          element: <DetailProjectPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
