import React from "react";
import SubmitProjectPage from "./pages/Organisms/SubmitProjectPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/CommonPageSection/Header/Header";
import { Outlet } from "react-router";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetail from "./pages/ProjectListPage/ProjectDetail/ProjectDetail";
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
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <SubmitProjectPage /> },
        {
          path: "submit",
          element: <SubmitProjectPage />,
        },
        {
          path: "list",
          element: <ProjectListPage />,
        },
        {
          path: "detail/:id",
          element: <ProjectDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
