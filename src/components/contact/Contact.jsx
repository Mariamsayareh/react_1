import { useState } from "react";
import style from "./contact.module.css";

function Contact() {
  console.log("useState");
  console.log(useState);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const validateField = (id, value) => {
    let errorMsg = "";

    switch (id) {
      case "Full_Name":
        if (!/^[A-Z][a-z]{2,}$/.test(value)) {
          errorMsg = "Name must start with a capital letter and be at least 3 letters.";
        }
        break;

      case "email_address":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMsg = "Enter a valid email address.";
        }
        break;

      case "numbers":
        if (!/^\d{7,15}$/.test(value)) {
          errorMsg = "Enter a valid phone number (7–15 digits).";
        }
        break;

      case "messages":
        if (value.trim().length < 5) {
          errorMsg = "Message must be at least 5 characters.";
        }
        break;

      default:
        break;
    }

    setErrors({ ...errors, [id]: errorMsg });
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    validateField(id, value);
  };

  const getInputClass = (id) => {
    if (!form[id]) return "form-control";
    return errors[id] ? "form-control is-invalid" : "form-control is-valid";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all before submitting
    Object.keys(form).forEach((key) => {
      validateField(key, form[key]);
    });

    const hasErrors = Object.values(errors).some((err) => err !== "");
    if (!hasErrors) {
      alert("Form submitted successfully :)!!!!!!!");
      setForm({ name: "", email: "", number: "", message: "" });
      setErrors({ name: "", email: "", number: "", message: "" });
    }
  };

  return (
    <>
      <h2 className={`${style.comtact} text-center fw-bold text-uppercase mb-4`}>Contact</h2>
      <div className="container mb-5 pb-5">
        <form className="w-75 m-auto mt-5" onSubmit={handleSubmit}>
          <div className={`form-floating mb-3`}>
            <input
              type="text"
              id="Full_Name"
              placeholder="Full Name"
              className={`${style.forms} form-control form-floating ${errors.Full_Name ? style.invalid : style.valid}`}
              value={form.Full_Name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="Full_Name">Full Name</label>
            {errors.Full_Name && (
              <p className="text-danger">{errors.Full_Name}</p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              id="email_address"
              placeholder="Email Address"
              className={`${style.forms} form-control form-floating ${errors.email_address ? style.invalid : style.valid}`}
              value={form.email_address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="email_address">Email Address</label>
            {errors.email_address && (
              <p className="text-danger">{errors.email_address}</p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              id="numbers"
              placeholder="Phone Number"
              className={`${style.forms} form-control form-floating ${errors.numbers ? style.invalid : style.valid}`}
              value={form.numbers}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="numbers">Phone Number</label>
            {errors.numbers && (
              <p className="text-danger">{errors.numbers}</p>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              id="messages"
              placeholder="Message"
              className={`${style.forms} form-control form-floating ${errors.messages ? style.invalid : style.valid}`}
              value={form.messages}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="messages">Message</label>
            {errors.messages && (
              <p className="text-danger">{errors.messages}</p>
            )}
          </div>

          <button type="submit" className={`${style.colorText} text-white btn py-3 px-4`}>
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
