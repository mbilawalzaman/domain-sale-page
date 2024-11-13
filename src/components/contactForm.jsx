import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors when user modifies the field
    if (name === "phone") {
      setErrors({ ...errors, phone: "" });
    }
    if (name === "name") {
      setErrors({ ...errors, name: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check if the phone number is exactly 11 digits long
    const phonePattern = /^[0-9]{11}$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 11-digit phone number.";
      isValid = false;
    }

    // Validate name to contain only letters and spaces
    const namePattern = /^[A-Za-z\s]+$/;
    if (formData.name && !namePattern.test(formData.name)) {
      newErrors.name = "Name should only contain letters and spaces.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission logic here
      alert("Message sent successfully");
      // Reset form after submission
      setFormData({ name: "", email: "", message: "", phone: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-left mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-white w-full p-2 border border-gray-300 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-left mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-left mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-white w-full p-2 border border-gray-300 rounded"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-left mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-white w-full p-2 border border-gray-300 rounded"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
