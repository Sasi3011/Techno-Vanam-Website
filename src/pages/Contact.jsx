import React, { useState } from "react";
import { Send } from 'lucide-react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!name.trim() || !email.trim() || selectedServices.length === 0 || message.trim() === "") {
      setSubmissionStatus("error");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("company", company);
    formData.append("website", website);
    formData.append("services", selectedServices.join(", "));
    formData.append("projectType", projectType);
    formData.append("deadline", deadline);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/xkgbdaen", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setName("");
        setEmail("");
        setCompany("");
        setWebsite("");
        setSelectedServices([]);
        setProjectType("");
        setDeadline("");
        setMessage("");
        setFormSubmitted(false);
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="max-w-[90%] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto p-4 sm:p-6">
      <p className="text-sm sm:text-lg text-blue-600 font-semibold uppercase">Contact us</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
        Connect With Us <span className="inline-block">👋</span>
      </h1>
      <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
        Fill the form below and one of our team members will get back to you
        within 24 business hours to schedule a project discovery call.
      </p>

      {submissionStatus === "success" && (
        <p className="text-green-600 mt-4 text-sm sm:text-base">Message sent successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-600 mt-4 text-sm sm:text-base">
          Please fill out all required fields or try again later.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Name */}
          <div>
            <p className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-xl">
              What's your name?<span className="text-red-500"> *</span>
            </p>
            {formSubmitted && !name.trim() && (
              <p className="text-red-500 text-xs sm:text-sm mb-2">Name is required.</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 
                ${formSubmitted && !name.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
            />
          </div>

          {/* Email */}
          <div>
            <p className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-xl">
              What's your email?<span className="text-red-500"> *</span>
            </p>
            {formSubmitted && !email.trim() && (
              <p className="text-red-500 text-xs sm:text-sm mb-2">Email is required.</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 
                ${formSubmitted && !email.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
            />
          </div>

          {/* Company */}
          <div>
            <p className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-xl">
              What's your company?
            </p>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border-3 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none placeholder-gray-500"
            />
          </div>

          {/* Website */}
          <div>
            <p className="text-base sm:text-lg font-semibold text-gray-800 mb-2 text-xl">
              What's your current website?
            </p>
            <input
              type="text"
              name="website"
              placeholder="Enter your website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border-3 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Services */}
        <div className="mt-6 sm:mt-10">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            What services are you looking for?<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && selectedServices.length === 0 && (
            <p className="text-red-500 text-xs sm:text-sm mb-2">Please select at least one service.</p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 pr-90">
            {servicesList.map((service, index) => {
              const isSelected = selectedServices.includes(service.name);
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleService(service.name)}
                  className={`min-h-[120px] sm:min-h-[180px] flex flex-col items-center p-3 sm:p-4 pt-4 sm:pt-6 bg-white rounded-3xl sm:rounded-4xl shadow cursor-pointer border-3 transition-all duration-300 ease-in-out 
                  ${isSelected ? service.color : "border-gray-200 hover:border-gray-400"}`}
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt={service.name}
                    className="mb-4 sm:mb-7 w-12 sm:w-17 h-12 sm:h-20 object-cover rounded-xl sm:rounded-2xl shadow-sm"
                  />
                  <span className="text-sm sm:text-md font-semibold text-gray-700 text-center">
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Type */}
        <div className="mt-6 sm:mt-10">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            What kind of project are you looking for?
          </p>
          <div className="w-full flex flex-wrap gap-3 sm:gap-4">
            {['One-time project', 'Ongoing maintenance', 'Both'].map((type, index) => (
              <label
                key={index}
                className="flex-1 min-w-[100px] flex items-center gap-3 sm:gap-4 px-4 sm:px-8 py-3 sm:py-6 rounded-3xl sm:rounded-4xl border-3 border-gray-300 hover:border-blue-500 cursor-pointer transition-all"
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type}
                  checked={projectType === type}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="form-radio text-blue-600 scale-125 sm:scale-165"
                />
                <span className="text-sm sm:text-base font-semibold text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Deadline */}
        <div className="mt-6 sm:mt-10">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            When is the project deadline?
          </p>
          <div className="w-full flex flex-wrap gap-3 sm:gap-4">
            {['ASAP', '1 month', '2 – 3 months', '3+ months'].map((deadlineOption, index) => (
              <label
                key={index}
                className="flex-1 min-w-[100px] flex items-center gap-3 sm:gap-4 px-4 sm:px-8 py-3 sm:py-6 rounded-3xl sm:rounded-4xl border-3 border-gray-300 hover:border-blue-500 cursor-pointer transition-all text-sm sm:text-base font-semibold text-gray-700"
              >
                <input
                  type="radio"
                  name="deadline"
                  value={deadlineOption}
                  checked={deadline === deadlineOption}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="form-radio text-blue-600 scale-125 sm:scale-165"
                />
                {deadlineOption}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 sm:mt-10">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Tell us a little more about your project<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && message.trim() === "" && (
            <p className="text-red-500 text-xs sm:text-sm mb-2">This field is required.</p>
          )}
          <textarea
            rows="4"
            name="message"
            value={message}
            onChange={handleTextareaChange}
            placeholder="Write here..."
            className={`w-full resize-none px-3 sm:px-4 py-2 sm:py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 ${
              formSubmitted && message.trim() === ""
                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            }`}
          />
          <div className="text-xs sm:text-sm text-gray-500 mt-1">
            {countWords(message)} / 1000 words
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6 sm:mt-10 flex justify-center sm:justify-start">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-full shadow hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            Send message <span className="text-sm sm:text-lg"><Send className="w-4 sm:w-5 h-4 sm:h-5" /></span>
          </button>
        </div>
      </form>
    </div>
  );
}