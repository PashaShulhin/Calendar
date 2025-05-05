import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useCheckoutStore from "../../Store/CheckoutStore/CheckoutStore";

const CheckoutStep3 = () => {
  const navigate = useNavigate();
  const paymentData = useCheckoutStore((state) => state.paymentData);
  const setPaymentData = useCheckoutStore((state) => state.setPaymentData);
  const userData = useCheckoutStore((state) => state.userData);
  const deliveryData = useCheckoutStore((state) => state.deliveryData);

  return (
    <div>
      <h1>Payment method</h1>
      <Formik
        initialValues={paymentData || { paymentMethod: "" }}
        validationSchema={Yup.object({
          paymentMethod: Yup.string().required("Payment method"),
        })}
        onSubmit={(values) => {
          setPaymentData(values);
          navigate("/checkout/confirmation");
        }}
      >
        {() => (
          <Form>
            <div>
              <Field as="select" name="paymentMethod">
                <option value="">Payment method</option>
                <option value="cardDebit">Debit</option>
                <option value="cardCredit">Credit</option>
              </Field>
              <ErrorMessage name="paymentMethod" component="div" />
            </div>
            <button type="submit">Submit your order</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutStep3;
