import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import DatePickerComponent from "./DatePickerComponent";

const validationSchema = Yup.object({
  startDate: Yup.string().required("Start date is required"),
});
const App: React.FC = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>Test</h1>
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
      </div>
    </>
  );
};

export default App;
