// import React from "react";
// import SubmitProjectPage from "./pages/SubmitProjectPage/index";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ToastContainer, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Header from "./components/CommonPageSection/Header/Header";
// import { Outlet } from "react-router";
// import ProjectListPage from "./pages/ProjectListPage";
// import ProjectDetail from "./pages/ProjectListPage/ProjectDetail/ProjectDetail";
// const Layout = () => {
//   return (
//     <div>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         transition={Bounce}
//         theme="light"
//       />
//       <Header />
//       <Outlet />
//     </div>
//   );
// };
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import DatePickerComponent from "./DatePickerComponent";

const validationSchema = Yup.object({
  startDate: Yup.string().required("Start date is required"),
});
const App: React.FC = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       { index: true, element: <SubmitProjectPage /> },
  //       {
  //         path: "submit",
  //         element: <SubmitProjectPage />,
  //       },
  //       {
  //         path: "list",
  //         element: <ProjectListPage />,
  //       }
  //       , {
  //         path: "detail/:id",
  //         element: <ProjectDetail />,
  //       }
  //     ],
  //   },
  // ]);

  return (
    <>
      <h1 style={{ color: "red" }}>
        Test
        {/* <RouterProvider router={router} /> */}
      </h1>
      <div>
        <Formik
          initialValues={{ startDate: "2024-08-08" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form values:", values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="startDate"
                label="Start Date"
                as={DatePickerComponent}
              />
              <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        {}
      </div>
    </>
  );
};

export default App;
