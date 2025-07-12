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

    window.scrollTo({ top: 0, behavior: 'smooth' });

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

        setTimeout(() => setSubmissionStatus(null), 2000);
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto p-3 sm:p-4 md:p-6">
      <p className="text-xs sm:text-sm md:text-lg text-blue-600 font-semibold uppercase">Contact us</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mt-1 sm:mt-2">
        Connect With Us <span className="inline-block">👋</span>
      </h1>
      <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
        Fill the form below and one of our team members will get back to you
        within 24 business hours to schedule a project discovery call.
      </p>

      {submissionStatus === "success" && (
        <p className="text-green-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">Message sent successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-600 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">
          Please fill out all required fields or try again later.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Name */}
          <div>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              What's your name?<span className="text-red-500"> *</span>
            </p>
            {formSubmitted && !name.trim() && (
              <p className="text-red-500 text-xs sm:text-sm mb-1 sm:mb-2">Name is required.</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-2 sm:border-3 transition-all outline-none placeholder-gray-500 
                ${formSubmitted && !name.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
            />
          </div>

          {/* Email */}
          <div>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              What's your email?<span className="text-red-500"> *</span>
            </p>
            {formSubmitted && !email.trim() && (
              <p className="text-red-500 text-xs sm:text-sm mb-1 sm:mb-2">Email is required.</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-2 sm:border-3 transition-all outline-none placeholder-gray-500 
                ${formSubmitted && !email.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
            />
          </div>

          {/* Company */}
          <div>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              What's your company?
            </p>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-2 sm:border-3 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none placeholder-gray-500"
            />
          </div>

          {/* Website */}
          <div>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 text-base sm:text-lg md:text-xl">
              What's your current website?
            </p>
            <input
              type="text"
              name="website"
              placeholder="Enter your website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-2 sm:border-3 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Services */}
        <div className="mt-4 sm:mt-6 md:mt-10">
          <p className="text-sm sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
            What services are you looking for?<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && selectedServices.length === 0 && (
            <p className="text-red-500 text-xs sm:text-sm mb-1 sm:mb-2">Please select at least one service.</p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {servicesList.map((service, index) => {
              const isSelected = selectedServices.includes(service.name);
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleService(service.name)}
                  className={`min-h-[100px] sm:min-h-[120px] md:min-h-[180px] flex flex-col items-center p-2 sm:p-3 md:p-4 pt-3 sm:pt-4 md:pt-6 bg-white rounded-2xl sm:rounded-3xl md:rounded-4xl shadow cursor-pointer border-2 sm:border-3 transition-all duration-300 ease-in-out 
                  ${isSelected ? service.color : "border-gray-200 hover:border-gray-400"}`}
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt={service.name}
                    className="mb-2 sm:mb-4 md:mb-7 w-10 sm:w-12 md:w-17 h-10 sm:h-12 md:h-20 object-cover rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm"
                  />
                  <span className="text-xs sm:text-sm md:text-md font-semibold text-gray-700 text-center">
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Type */}
        <div className="mt-4 sm:mt-6 md:mt-10">
          <p className="text-sm sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
            What kind of project are you looking for?
          </p>
          <div className="w-full flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {['One-time project', 'Ongoing maintenance', 'Both'].map((type, index) => (
              <label
                key={index}
                className="flex-1 min-w-[100px] flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-6 rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 sm:border-3 border-gray-300 hover:border-blue-500 cursor-pointer transition-all"
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type}
                  checked={projectType === type}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="form-radio text-blue-600 scale-100 sm:scale-125 md:scale-165"
                />
                <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Deadline */}
        <div className="mt-4 sm:mt-6 md:mt-10">
          <p className="text-sm sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
            When is the project deadline?
          </p>
          <div className="w-full flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {['ASAP', '1 month', '2 – 3 months', '3+ months'].map((deadlineOption, index) => (
              <label
                key={index}
                className="flex-1 min-w-[100px] flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-8 py-2 sm:py-3 md:py-6 rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 sm:border-3 border-gray-300 hover:border-blue-500 cursor-pointer transition-all text-xs sm:text-sm md:text-base font-semibold text-gray-700"
              >
                <input
                  type="radio"
                  name="deadline"
                  value={deadlineOption}
                  checked={deadline === deadlineOption}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="form-radio text-blue-600 scale-100 sm:scale-125 md:scale-165"
                />
                {deadlineOption}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mt-4 sm:mt-6 md:mt-10">
          <p className="text-sm sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
            Tell us a little more about your project<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && message.trim() === "" && (
            <p className="text-red-500 text-xs sm:text-sm mb-1 sm:mb-2">This field is required.</p>
          )}
          <textarea
            rows="4"
            name="message"
            value={message}
            onChange={handleTextareaChange}
            placeholder="Write here..."
            className={`w-full resize-none px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-2 sm:border-3 transition-all outline-none placeholder-gray-500 ${
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
        <div className="mt-4 sm:mt-6 md:mt-10 flex justify-center sm:justify-start">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-lg rounded-full shadow hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            Send message <span className="text-xs sm:text-sm md:text-lg"><Send className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" /></span>
          </button>
        </div>
      </form>
    </div>
  );
}