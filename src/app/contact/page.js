"use Client";
import { set } from "mongoose";
import { useState } from "react";

export default function Contact() {
  const [inputs, setinputs] = useState({});

  const handleInput = (e) => {
    setinputs((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInput}
              value={inputs.name ?? ""}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInput}
              value={inputs.email ?? ""}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleInput}
              value={inputs.message ?? ""}
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
