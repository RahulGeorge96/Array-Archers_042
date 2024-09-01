import React, { useState } from "react";
import "./payment.css";
import {
  FaCreditCard,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardType: "",
    isSubmitting: false,
  });

  const [errors, setErrors] = useState({});
  let [clickedcheck, setClickdcheck] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    let updatedValue = value;

    if (id === "cardNumber") {
      updatedValue = value.replace(/\D/g, "").slice(0, 16);
      if (/^4/.test(updatedValue)) {
        formData.cardType = "Visa";
      } else if (/^5[1-5]/.test(updatedValue)) {
        formData.cardType = "Mastercard";
      } else if (/^3[47]/.test(updatedValue)) {
        formData.cardType = "Amex";
      } else {
        formData.cardType = "";
      }
    } else if (id === "cvv") {
      updatedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: updatedValue,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.cardName) newErrors.cardName = "Cardholder name is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiryMonth)
      newErrors.expiryMonth = "Expiry month is required";
    if (!formData.expiryYear) newErrors.expiryYear = "Expiry year is required";
    if (!formData.cvv) newErrors.cvv = "CVV is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormData((prevData) => ({ ...prevData, isSubmitting: true }));

    setTimeout(() => {
      setFormData((prevData) => ({ ...prevData, isSubmitting: false }));
      setClickdcheck(!clickedcheck);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 2000);
  };

  return (
    <>
      <div
        style={{ textAlign: "center" }}
        className="popforpaymentsucees"
        id={clickedcheck ? "popforpaymentsuceesddd" : "popforpaymentsucees"}
      >
        <div class="cardsssss">
          <div
            style={{
              borderRadius: "200px",
              height: "200px",
              width: "200px",
              background: "#F8FAF5",
              margin: "0 auto",
            }}
          >
            <i class="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p>
            We received your purchase request;
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
      <div
        className="containerssssss"
        style={{ display: clickedcheck ? "none" : "block" }}
      >
        <div
          className="payment-form-container"
          role="form"
          aria-labelledby="paymentFormTitle"
        >
          <h2 id="paymentFormTitle">Payment Details</h2>
          <form
            style={{ height: "510px" }}
            className="payment-form"
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                placeholder="John Doe"
                value={formData.cardName}
                onChange={handleChange}
                aria-label="Cardholder Name"
                aria-required="true"
                required
              />
              {errors.cardName && (
                <span className="error">{errors.cardName}</span>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="cardNumber">Card Number</label>
              <div className="card-number-input">
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber.replace(/(.{4})/g, "$1 ").trim()}
                  onChange={handleChange}
                  aria-label="Card Number"
                  aria-required="true"
                  required
                />
                <span className="card-icon">
                  {formData.cardType === "Visa" && <FaCcVisa />}
                  {formData.cardType === "Mastercard" && <FaCcMastercard />}
                  {formData.cardType === "Amex" && <FaCcAmex />}
                  {!formData.cardType && <FaCreditCard />}
                </span>
              </div>
              {errors.cardNumber && (
                <span className="error">{errors.cardNumber}</span>
              )}
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="expiryMonth">Expiry Month</label>
                <select
                  id="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  aria-label="Expiry Month"
                  aria-required="true"
                  required
                >
                  <option
                    value=""
                    disabled
                    style={{ backgroundColor: "#fff", color: "#000" }}
                  >
                    Month
                  </option>
                  {[...Array(12)].map((_, idx) => (
                    <option
                      style={{ backgroundColor: "#fff", color: "#000" }}
                      key={idx}
                      value={idx + 1}
                    >
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </option>
                  ))}
                </select>
                {errors.expiryMonth && (
                  <span className="error">{errors.expiryMonth}</span>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="expiryYear">Expiry Year</label>
                <select
                  id="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  aria-label="Expiry Year"
                  aria-required="true"
                  required
                >
                  <option
                    style={{ backgroundColor: "#fff", color: "#000" }}
                    value=""
                    disabled
                  >
                    Year
                  </option>
                  {Array.from(
                    { length: 10 },
                    (_, idx) => new Date().getFullYear() + idx
                  ).map((year) => (
                    <option
                      style={{ backgroundColor: "#fff", color: "#000" }}
                      key={year}
                      value={year}
                    >
                      {year}
                    </option>
                  ))}
                </select>
                {errors.expiryYear && (
                  <span className="error">{errors.expiryYear}</span>
                )}
              </div>

              <div className="input-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  maxLength="3"
                  type="password"
                  id="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                  aria-label="CVV"
                  aria-required="true"
                  required
                />
                {errors.cvv && <span className="error">{errors.cvv}</span>}
              </div>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={formData.isSubmitting}
              aria-busy={formData.isSubmitting}
            >
              {formData.isSubmitting ? "Processing..." : "Pay Now"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
