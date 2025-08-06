import React, { useState } from "react";
import { Send } from 'lucide-react';
// Used in Contact Form
import WebDesignImage from "../assets/Contact Page/Web Design Service Contact.png";
// Used in Contact Form
import UIUXDesignImage from "../assets/Contact Page/UX Design Service Contact.png";
// Used in Contact Form
import DevelopmentImage from "../assets/Contact Page/Development Service Contact.png";
// Used in Contact Form
import BrandingImage from "../assets/Contact Page/Branding Service Contact.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const servicesList = [
  { name: "Web Design", color: "border-red-500", image: WebDesignImage },
  { name: "UI/UX Design", color: "border-green-500", image: UIUXDesignImage },
  { name: "Development", color: "border-blue-500", image: DevelopmentImage },
  { name: "Branding", color: "border-yellow-400", image: BrandingImage },
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
  const location = useLocation();
  const scrollContainer = document.querySelector('.custom-scrollbar');


  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };
  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const emailFromURL = params.get("email");
  if (emailFromURL) {
    setEmail(emailFromURL);
  }
}, [location]);
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
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
    <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-600 font-semibold uppercase">Contact us</p>
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mt-1 sm:mt-2">
        Connect With Us <span className="inline-block">👋</span>
      </h1>
      <p className="text-gray-500 mt-1 sm:mt-2 text-lg sm:text-sm md:text-base lg:text-lg">
        Fill the form below and one of our team members will get back to you
        within 24 business hours <br/>to schedule a project discovery call.
      </p>

      {submissionStatus === "success" && (
        <p className="text-green-600 mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base">Message sent successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-600 mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base">
          Please fill out all required fields or try again later.
        </p>
      )}

      <div onSubmit={handleSubmit} className="mt-4 sm:mt-6 md:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Name */}
          <div>
            <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
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
              className={`w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 
                ${formSubmitted && !name.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
            />
          </div>

          {/* Email */}
          <div>
            <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
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
              className={`w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 
                ${formSubmitted && !email.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
            />
          </div>

          {/* Company */}
          <div>
            <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
              What's your company?
            </p>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Website */}
          <div>
            <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
              What's your current website?
            </p>
            <input
              type="text"
              name="website"
              placeholder="Enter your website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Services */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 md:mb-4">
            What services are you looking for?<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && selectedServices.length === 0 && (
            <p className="text-red-500 text-xs sm:text-sm mb-1 sm:mb-2">Please select at least one service.</p>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 ">
            {servicesList.map((service, index) => {
              const isSelected = selectedServices.includes(service.name);
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleService(service.name)}
                  className={`min-h-[130px] sm:min-h-[150px] md:min-h-[200px] flex flex-col items-center p-2 sm:p-3 md:p-4 pt-3 sm:pt-4 md:pt-6 pb-2  bg-white rounded-2xl sm:rounded-3xl shadow cursor-pointer border-4 transition-all duration-300 ease-in-out 
                  ${isSelected ? service.color : "border-gray-200 hover:border-gray-400"}`}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="mb-4 sm:mb-6 md:mb-8 w-8 sm:w-10 md:w-26 h-15 sm:h-10 md:h-26 object-cover rounded-md sm:rounded-lg shadow-sm"
                  />
<span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 text-center">                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Type */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 md:mb-4">
            What kind of project are you looking for?
          </p>
          <div className="w-full flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {['One-time project', 'Ongoing maintenance', 'Both'].map((type, index) => (
              <label
                key={index}
                className="flex-1 min-w-[80px] sm:min-w-[100px] flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 rounded-3xl sm:rounded-4xl  border-3 border-gray-300 hover:border-blue-500 cursor-pointer transition-all"
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type}
                  checked={projectType === type}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="form-radio text-blue-600 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
                />
                <span className="text-xs sm:text-sm md:text-base font-semibold text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Deadline */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 md:mb-4">
            When is the project deadline?
          </p>
          <div className="w-full flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {['ASAP', '1 month', '2 – 3 months', '3+ months'].map((deadlineOption, index) => (
              <label
                key={index}
                className="flex-1 min-w-[80px] sm:min-w-[100px] flex items-center gap-2 sm:gap-3 px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 rounded-3xl sm:rounded-4xl border-3 border-gray-300 hover:border-blue-500 cursor-pointer transition-all text-xs sm:text-sm md:text-base font-semibold text-gray-700"
              >
                <input
                  type="radio"
                  name="deadline"
                  value={deadlineOption}
                  checked={deadline === deadlineOption}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="form-radio text-blue-600 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
                />
                {deadlineOption}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mt-4 sm:mt-6 md:mt-8">
          <p className="text-lg sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
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
            className={`w-full resize-none px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 rounded-md border-3 transition-all outline-none placeholder-gray-500 ${
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
        <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center sm:justify-start">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-base sm:text-sm md:text-base rounded-full shadow hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            Send message <Send className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}