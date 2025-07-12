import React, { useState } from "react";
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const servicesList = [
  { name: "Web Design", color: "border-blue-500" },
  { name: "UI/UX Design", color: "border-pink-500" },
  { name: "Development", color: "border-green-500" },
  { name: "Branding", color: "border-yellow-500" },
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [projectType, setProjectType] = useState("");
  const [deadline, setDeadline] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!name.trim() || !email.trim()) {
      setSubmissionStatus("error");
      return; // Required fields missing
    }

    if (selectedServices.length === 0 || message.trim() === "") {
      setSubmissionStatus("error");
      return; // Other required fields missing
    }

    // EmailJS configuration
    const templateParams = {
      from_name: name,
      from_email: email,
      company: company || "Not provided",
      website: website || "Not provided",
      services: selectedServices.join(", "),
      project_type: projectType || "Not specified",
      deadline: deadline || "Not specified",
      message: message,
      to_email: "official@technovanam.com",
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setSubmissionStatus("success");
          // Reset form
          setName("");
          setEmail("");
          setCompany("");
          setWebsite("");
          setSelectedServices([]);
          setProjectType("");
          setDeadline("");
          setMessage("");
          setFormSubmitted(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSubmissionStatus("error");
        }
      );
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const countWords = (text) =>
    text.trim().split(/\s+/).filter(Boolean).length;

  const handleTextareaChange = (e) => {
    const text = e.target.value;
    if (countWords(text) <= 1000) {
      setMessage(text);
    }
  };

  return (
    <div className="max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto p-6">
      <p className="text-lg text-blue-600 font-semibold uppercase">Contact us</p>
      <h1 className="text-6xl font-bold text-gray-900 mt-2">
        Connect With Us <span className="inline-block">👋</span>
      </h1>
      <p className="text-gray-500 mt-2 text-lg">
        Fill the form below and one of our team members will get back to you
        within 24 business hours to schedule a project discovery call.
      </p>

      {submissionStatus === "success" && (
        <p className="text-green-600 mt-4">Message sent successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-600 mt-4">
          Please fill out all required fields or try again later.
        </p>
      )}

      {/* Input Fields with Labels on Top */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-md">
        {/* Name Field */}
        <div>
          <p className="text-base font-semibold text-gray-800 mb-2 text-lg">
            What's your name?<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && !name.trim() && (
            <p className="text-red-500 text-sm mb-2">Name is required.</p>
          )}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 
              ${formSubmitted && !name.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
          />
        </div>

        {/* Email Field */}
        <div>
          <p className="text-base font-semibold text-gray-800 mb-2 text-lg">
            What's your email?<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && !email.trim() && (
            <p className="text-red-500 text-sm mb-2">Email is required.</p>
          )}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 
              ${formSubmitted && !email.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
          />
        </div>

        {/* Company Field */}
        <div>
          <p className="text-base font-semibold text-gray-800 mb-2 text-lg">
            What's your company?
          </p>
          <input
            type="text"
            placeholder="Enter your company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 rounded-md border-3 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none placeholder-gray-500"
          />
        </div>

        {/* Website Field */}
        <div>
          <p className="text-base font-semibold text-gray-800 mb-2 text-lg">
            What's your current website?
          </p>
          <input
            type="text"
            placeholder="Enter your website URL"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-3 rounded-md border-3 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-10">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          What services are you looking for?<span className="text-red-500"> *</span>
        </p>

        {formSubmitted && selectedServices.length === 0 && (
          <p className="text-red-500 text-sm mb-2">Please select at least one service.</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pr-90">
          {servicesList.map((service, index) => {
            const isSelected = selectedServices.includes(service.name);
            return (
              <button
                key={index}
                type="button"
                onClick={() => toggleService(service.name)}
                className={`min-h-[180px] flex flex-col items-center p-4 pt-6 bg-white rounded-4xl shadow cursor-pointer border-3 transition-all duration-300 ease-in-out 
                ${isSelected ? service.color : "border-gray-200 hover:border-gray-400"}`}
              >
                <img
                  src={`src/assets/poster.png`}
                  alt={service.name}
                  className="mb-7 w-17 h-20 object-cover rounded-2xl shadow-l"
                />
                <span className="text-md font-semibold text-gray-700 text-center">
                  {service.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Type */}
      <div className="mt-10">
        <p className="text-lg font-semibold text-gray-800 mb-4">What kind of project are you looking for?</p>
        <div className="w-full flex flex-wrap gap-4 ">
          {['One-time project', 'Ongoing maintenance', 'Both'].map((type, index) => (
            <label
              key={index}
              className="flex-1 min-w-[100px] flex items-center gap-4 px-8 py-6 rounded-4xl border-3 border-gray-300 hover:border-blue-500 cursor-pointer transition-all"
            >
              <input
                type="radio"
                name="projectType"
                value={type}
                onChange={(e) => setProjectType(e.target.value)}
                className="form-radio text-blue-600 scale-165"
              />
              <span className="text-l font-semibold text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Deadline with Equal Width and Bigger Radius */}
      <div className="mt-10">
        <p className="text-lg font-semibold text-gray-800 mb-4">When is the project deadline?</p>
        <div className="flex flex-wrap gap-4 ">
          {['ASAP', '1 month', '2 – 3 months', '3+ months'].map((deadline, index) => (
            <label
              key={index}
              className="flex-1 min-w-[100px] flex items-center gap-4 px-8 py-6 rounded-4xl border-3 border-gray-300 hover:border-blue-500 cursor-pointer transition-all text-l font-semibold text-gray-700"
            >
              <input
                type="radio"
                name="deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="form-radio text-blue-600 scale-165"
              />
              {deadline}
            </label>
          ))}
        </div>
      </div>

      {/* Textarea */}
      <div className="mt-10">
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Tell us a little more about your project<span className="text-red-500"> *</span>
        </p>

        {formSubmitted && message.trim() === "" && (
          <p className="text-red-500 text-sm mb-2">This field is required.</p>
        )}

        <textarea
          rows="4"
          required
          value={message}
          onChange={handleTextareaChange}
          placeholder="Write here..."
          className={`w-full px-4 py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 ${
            formSubmitted && message.trim() === ""
              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
              : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          }`}
        />
        <div className="text-sm text-gray-500 mt-1">
          {countWords(message)} / 1000 words
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-10">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-8 py-4 text-lg rounded-full shadow hover:bg-blue-700 transition-all flex items-center gap-2"
        >
          Send message <span className="text-lg"><Send className="w-5 h-5" /></span>
        </button>
      </div>
    </div>
  );
}