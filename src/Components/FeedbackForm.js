import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = ({ addSubmission }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    restaurantCleanliness: "",
    overallExperience: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone number is invalid";
    if (!formData.serviceQuality)
      newErrors.serviceQuality = "Please rate the service quality";
    if (!formData.beverageQuality)
      newErrors.beverageQuality = "Please rate the beverage quality";
    if (!formData.restaurantCleanliness)
      newErrors.restaurantCleanliness =
        "Please rate the restaurant cleanliness";
    if (!formData.overallExperience)
      newErrors.overallExperience = "Please rate your overall experience";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      addSubmission(formData);
      setMessage("Thank you for your feedback!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceQuality: "",
        beverageQuality: "",
        restaurantCleanliness: "",
        overallExperience: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Customer Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-section">
          <p>
            Please rate the quality of the service you received from your host:
          </p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="serviceQuality"
                value="Excellent"
                onChange={handleChange}
              />{" "}
              Excellent
            </label>
            <label>
              <input
                type="radio"
                name="serviceQuality"
                value="Good"
                onChange={handleChange}
              />{" "}
              Good
            </label>
            <label>
              <input
                type="radio"
                name="serviceQuality"
                value="Fair"
                onChange={handleChange}
              />{" "}
              Fair
            </label>
            <label>
              <input
                type="radio"
                name="serviceQuality"
                value="Bad"
                onChange={handleChange}
              />{" "}
              Bad
            </label>
          </div>
          {errors.serviceQuality && (
            <p className="error">{errors.serviceQuality}</p>
          )}
        </div>

        <div className="form-section">
          <p>Please rate the quality of your beverage:</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="beverageQuality"
                value="Excellent"
                onChange={handleChange}
              />{" "}
              Excellent
            </label>
            <label>
              <input
                type="radio"
                name="beverageQuality"
                value="Good"
                onChange={handleChange}
              />{" "}
              Good
            </label>
            <label>
              <input
                type="radio"
                name="beverageQuality"
                value="Fair"
                onChange={handleChange}
              />{" "}
              Fair
            </label>
            <label>
              <input
                type="radio"
                name="beverageQuality"
                value="Bad"
                onChange={handleChange}
              />{" "}
              Bad
            </label>
          </div>
          {errors.beverageQuality && (
            <p className="error">{errors.beverageQuality}</p>
          )}
        </div>

        <div className="form-section">
          <p>Was our restaurant clean?</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="restaurantCleanliness"
                value="Excellent"
                onChange={handleChange}
              />{" "}
              Excellent
            </label>
            <label>
              <input
                type="radio"
                name="restaurantCleanliness"
                value="Good"
                onChange={handleChange}
              />{" "}
              Good
            </label>
            <label>
              <input
                type="radio"
                name="restaurantCleanliness"
                value="Fair"
                onChange={handleChange}
              />{" "}
              Fair
            </label>
            <label>
              <input
                type="radio"
                name="restaurantCleanliness"
                value="Bad"
                onChange={handleChange}
              />{" "}
              Bad
            </label>
          </div>
          {errors.restaurantCleanliness && (
            <p className="error">{errors.restaurantCleanliness}</p>
          )}
        </div>

        <div className="form-section">
          <p>Please rate your overall dining experience:</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="overallExperience"
                value="Excellent"
                onChange={handleChange}
              />{" "}
              Excellent
            </label>
            <label>
              <input
                type="radio"
                name="overallExperience"
                value="Good"
                onChange={handleChange}
              />{" "}
              Good
            </label>
            <label>
              <input
                type="radio"
                name="overallExperience"
                value="Fair"
                onChange={handleChange}
              />{" "}
              Fair
            </label>
            <label>
              <input
                type="radio"
                name="overallExperience"
                value="Bad"
                onChange={handleChange}
              />{" "}
              Bad
            </label>
          </div>
          {errors.overallExperience && (
            <p className="error">{errors.overallExperience}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default FeedbackForm;
