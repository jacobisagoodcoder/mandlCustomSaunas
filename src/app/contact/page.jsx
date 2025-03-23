"use client";

import { Heebo } from "next/font/google/index.js";
import Header from "../../components/Header.jsx";



import { useState } from "react";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
          email: "jacobvandyke194@gmail.com", // Replace with actual business email
          subject: "New Contact Form Submission",
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("Email sent successfully!");
      } else {
        setSuccess("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess("Error sending email.");
    }

    setLoading(false);
  };

  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        placeholder="Your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2">
        {loading ? "Sending..." : "Send Email"}
      </button>
      {success && <p>{success}</p>}
    </form>
    </>
  );
}


export default ContactPage;