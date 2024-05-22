import React, { useState } from "react";
import "./FeedbackForm.css";
import SubmissionsTable from './SubmissionsTable';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    serviceQuality: "",
    beverageQuality: "",
    restaurantCleanliness: "",
    overallExperience: "",
  });

  const [errors, setErrors] = useState({});
 const [submitted, setSubmitted] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [submissions, setSubmissions] = useState([]);
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   const handleSubmit = (event) => {
     event.preventDefault();
     if (validate()) {
       const newSubmission = { ...formData };
       setSubmissions((prevSubmissions) => [...prevSubmissions, newSubmission]);

       // Save form data to localStorage
       localStorage.setItem("submissions", JSON.stringify(submissions));

       // Reset form data
       setFormData({
         name: "",
         email: "",
         phone: "",
         countryCode: "+1",
         serviceQuality: "",
         beverageQuality: "",
         restaurantCleanliness: "",
         overallExperience: "",
       });

       // Set submitted state to true
       setSubmitted(true);
     }
   };
const handleClose = () => {
  setShowTable(true);
};
  

  return (
    <div className="container">
      {showTable ? (
        <SubmissionsTable submissions={submissions} />
      ) : (
        <div className="form-wrapper">
          <>
            <p className="header">Aromatic bar</p>
            <form onSubmit={handleSubmit}>
              <div className="column">
                <label className="required">Customer Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <label className="required">Phone:</label>
                <div className="phone-input">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input
                    type="text"
                    name="phone"
                    placeholder="99999"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <p className="error">{errors.phone}</p>}

                <p className="required">
                  Please rate the quality of the service you received from your
                  host:
                </p>
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="serviceQuality"
                      value="Excellent"
                      onChange={handleChange}
                      checked={formData.serviceQuality === "Excellent"}
                    />
                    Excellent
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="serviceQuality"
                      value="Good"
                      onChange={handleChange}
                      checked={formData.serviceQuality === "Good"}
                    />
                    Good
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="serviceQuality"
                      value="Fair"
                      onChange={handleChange}
                      checked={formData.serviceQuality === "Fair"}
                    />
                    Fair
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="serviceQuality"
                      value="Bad"
                      onChange={handleChange}
                      checked={formData.serviceQuality === "Bad"}
                    />
                    Bad
                  </label>
                </div>
                {errors.serviceQuality && (
                  <p className="error">{errors.serviceQuality}</p>
                )}

                <p className="required">Was our restaurant clean?</p>
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="restaurantCleanliness"
                      value="Excellent"
                      onChange={handleChange}
                      checked={formData.restaurantCleanliness === "Excellent"}
                    />
                    Excellent
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="restaurantCleanliness"
                      value="Good"
                      onChange={handleChange}
                      checked={formData.restaurantCleanliness === "Good"}
                    />
                    Good
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="restaurantCleanliness"
                      value="Fair"
                      onChange={handleChange}
                      checked={formData.restaurantCleanliness === "Fair"}
                    />
                    Fair
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="restaurantCleanliness"
                      value="Bad"
                      onChange={handleChange}
                      checked={formData.restaurantCleanliness === "Bad"}
                    />
                    Bad
                  </label>
                </div>
                {errors.restaurantCleanliness && (
                  <p className="error">{errors.restaurantCleanliness}</p>
                )}
              </div>
              <div className="column">
                <label className="required">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <p className="required">
                  Please rate the quality of your beverage:
                </p>
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="beverageQuality"
                      value="Excellent"
                      onChange={handleChange}
                      checked={formData.beverageQuality === "Excellent"}
                    />
                    Excellent
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="beverageQuality"
                      value="Good"
                      onChange={handleChange}
                      checked={formData.beverageQuality === "Good"}
                    />
                    Good
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="beverageQuality"
                      value="Fair"
                      onChange={handleChange}
                      checked={formData.beverageQuality === "Fair"}
                    />
                    Fair
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="beverageQuality"
                      value="Bad"
                      onChange={handleChange}
                      checked={formData.beverageQuality === "Bad"}
                    />
                    Bad
                  </label>
                </div>
                {errors.beverageQuality && (
                  <p className="error">{errors.beverageQuality}</p>
                )}

                <p className="required">
                  Please rate your overall dining experience:
                </p>
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      name="overallExperience"
                      value="Excellent"
                      onChange={handleChange}
                      checked={formData.overallExperience === "Excellent"}
                    />
                    Excellent
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="overallExperience"
                      value="Good"
                      onChange={handleChange}
                      checked={formData.overallExperience === "Good"}
                    />
                    Good
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="overallExperience"
                      value="Fair"
                      onChange={handleChange}
                      checked={formData.overallExperience === "Fair"}
                    />
                    Fair
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="overallExperience"
                      value="Bad"
                      onChange={handleChange}
                      checked={formData.overallExperience === "Bad"}
                    />
                    Bad
                  </label>
                </div>
                {errors.overallExperience && (
                  <p className="error">{errors.overallExperience}</p>
                )}
              </div>
              <button type="submit" className="submit-button">
                Submit Review
              </button>
            </form>
            {submitted && (
              <div className="success-message">
                <p>Thank you for completing the information</p>
                <button onClick={handleClose} className="close-button">
                  Close
                </button>
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
