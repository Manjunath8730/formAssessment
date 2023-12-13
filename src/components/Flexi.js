import React, { useState } from "react";

const Flexi = ({ onSubmit, config }) => {
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e, name) => {
    // destructure the value
    const { value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.items.map((item, index) => {
        // destructure the properties
        const { name, label, type, values } = item;
        //for TextField
        if (type === "TextField") {
          return (
            <div key={index}>
              <label htmlFor={name}>{label}</label>
              <input
                type="text"
                id={name}
                name={name}
                onChange={(e) => handleChange(e, name)}
              />
            </div>
          );
        }
        //for DropDown
        else if (type === "DropDown") {
          return (
            <div key={index}>
              <label htmlFor={name}>{label}</label>
              <select
                id={name}
                name={name}
                onChange={(e) => handleChange(e, name)}
              >
                <option value="">Select {label}</option>
                {values.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        } else {
          return null;
        }
      })}

      <button type="submit">Submit</button>

      {/* when submit the form then only this user detail displayed */}
      {formSubmitted && (
        <div>
          <h2>User Detail:</h2>
          <p>Name: {formData.person_name || ""}</p>
          <p>State: {formData.states || ""}</p>
        </div>
      )}
    </form>
  );
};

export default Flexi;