import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useCheckoutStore from "../../Store/CheckoutStore/CheckoutStore";
import { deliveryDefaultValues } from "../FormDefault/FormDefaults";

const CheckoutStep2 = () => {
  const navigate = useNavigate();
  const deliveryData = useCheckoutStore((state) => state.deliveryData);
  const setDeliveryData = useCheckoutStore((state) => state.setDeliveryData);
  const initialValues = deliveryData || deliveryDefaultValues;

  return (
    <div>
      <h1>Shipment address</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          address: Yup.string().required("Address?!"),
          city: Yup.string().required("city?!"),
          postalCode: Yup.string().required("zip code?!"),
        })}
        onSubmit={(values) => {
          setDeliveryData(values);
          navigate("/checkout/step-3");
        }}
      >
        {() => (
          <Form>
            <div>
              <Field name="address" placeholder="Your address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div>
              <Field name="city" placeholder="City" />
              <ErrorMessage name="city" component="div" className="error" />
            </div>
            <div>
              <Field name="postalCode" placeholder="zip code" />
              <ErrorMessage
                name="postalCode"
                component="div"
                className="error"
              />
            </div>
            <button type="submit">Next step</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutStep2;
