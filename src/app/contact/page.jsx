"use client";

import { Heebo } from "next/font/google/index.js";
import Header from "../../components/Header.jsx";
import "../../styles/contact.css";

import { useState } from "react";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: "New Contact Form Submission",
          message,
            fName,
            lName,
            email
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("Contact info was sent successfully!");
      } else {
        setSuccess("Failed to send Contact info.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess("Error sending Contact info.");
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div></div>
        <fieldset>
          <legend>Contact Us</legend>
          <div className="inputContainer">
            <label>First Name:</label>
            <input type="text" onChange={(e) => setfName(e.target.value)} required/>
          </div>
          <div className="inputContainer">
            <label>Last Name:</label>
            <input type="text" onChange={(e) => setlName(e.target.value)} required/>
          </div>
          <div className="inputContainer">
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div>
          <textarea
            placeholder="Any other details, questions, or comments..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          </div>
          <div>
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Email"}
          </button>
          {success && <p>{success}</p>}
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default ContactPage;
