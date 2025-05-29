import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useCheckoutStore from "../../Store/CheckoutStore/CheckoutStore";

const CheckoutStep1 = () => {
  const navigate = useNavigate();
  const userData = useCheckoutStore((state) => state.userData);
  const setUserData = useCheckoutStore((state) => state.setUserData);

  return (
    <div>
      <h1>Contact information</h1>
      <Formik
        initialValues={userData || { name: "", email: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Your name"),
          email: Yup.string().email("Wrong email").required("Email!"),
        })}
        onSubmit={(values) => {
          setUserData(values);
          navigate("/checkout/step-2");
        }}
      >
        {() => (
          <Form>
            <div>
              <Field name="name" placeholder="Your name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field name="email" type="email" placeholder="Your email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <button type="submit">Next step</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutStep1;
