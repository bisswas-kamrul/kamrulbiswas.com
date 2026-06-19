import React, { useState } from "react";
import axios from "axios";
import Container from "../../Container";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/send-email", form);

      alert("Message sent successfully!");

      // form reset
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="bg-gray-900">
      <Container>
        <div className="py-20 px-10 bg-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white font-kamrul">
            Contact Me
          </h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="p-3 rounded bg-gray-700 text-white"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 rounded bg-gray-700 text-white"
              required
            />

            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="p-3 rounded bg-gray-700 text-white"
              required
            />

            <button
              type="submit"
              className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-[#16476A] cursor-pointer transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
