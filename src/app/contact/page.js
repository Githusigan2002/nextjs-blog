"use client";
import { useState } from "react";

export default function Contact() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");

  // Update inputs
  const handleInput = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default GET request

    try {
      const res = await fetch("/api/enquiry", {
        // ✅ correct API path
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      setMessage(data.message || "Enquiry submitted!");
      setInputs({});

      setTimeout(() => {
        setMessage("");
      },3000);
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={inputs.name ?? ""}
              onChange={handleInput}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={inputs.email ?? ""}
              onChange={handleInput}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={inputs.message ?? ""}
              onChange={handleInput}
              rows="4"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
}
