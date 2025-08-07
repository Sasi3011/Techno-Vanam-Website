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
    <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8">
      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-blue-600 font-semibold uppercase">Contact us</p>
      <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mt-1 xs:mt-2 sm:mt-3">
        Connect With Us <span className="inline-block">👋</span>
      </h1>
      <p className="text-gray-500 mt-1 xs:mt-2 sm:mt-3 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl">
        Fill the form below and one of our team members will get back to you
        within 24 business hours <br className="hidden sm:block"/>to schedule a project discovery call.
      </p>

      {submissionStatus === "success" && (
        <p className="text-green-600 mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg">Message sent successfully!</p>
      )}
      {submissionStatus === "error" && (
        <p className="text-red-600 mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg">
          Please fill out all required fields or try again later.
        </p>
      )}

      <div onSubmit={handleSubmit} className="mt-3 xs:mt-4 sm:mt-6 md:mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          {/* Name */}
          <div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 xs:mb-2">
              What's your name?<span className="text-red-500"> *</span>
            </p>
            {formSubmitted && !name.trim() && (
              <p className="text-red-500 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Name is required.</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 md:py-3 rounded-md border-2 xs:border-3 transition-all outline-none placeholder:text-xs md:placeholder:text-sm placeholder-gray-500 
                ${formSubmitted && !name.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
            />
          </div>

          {/* Email */}
          <div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 xs:mb-2">
              What's your email?<span className="text-red-500"> *</span>
            </p>
            {formSubmitted && !email.trim() && (
              <p className="text-red-500 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Email is required.</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 md:py-3 rounded-md border-2 xs:border-3 transition-all outline-none placeholder:text-xs md:placeholder:text-sm placeholder-gray-500 
                ${formSubmitted && !email.trim() ? "border-red-500" : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"}`}
            />
          </div>

          {/* Company */}
          <div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 xs:mb-2">
              What's your company?
            </p>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 md:py-3 rounded-md border-2 xs:border-3 transition-all outline-none placeholder:text-xs md:placeholder:text-sm placeholder-gray-500 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Website */}
          <div>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 xs:mb-2">
              What's your current website?
            </p>
            <input
              type="text"
              name="website"
              placeholder="Enter your website URL"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 md:py-3 rounded-md border-2 xs:border-3 transition-all outline-none placeholder:text-xs md:placeholder:text-sm placeholder-gray-500 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Services */}
        <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-8">
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 xs:mb-2 md:mb-4">
            What services are you looking for?<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && selectedServices.length === 0 && (
            <p className="text-red-500 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Please select at least one service.</p>
          )}
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {servicesList.map((service, index) => {
              const isSelected = selectedServices.includes(service.name);
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleService(service.name)}
                  className={`flex flex-col items-center justify-between p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl xs:rounded-2xl sm:rounded-3xl bg-white shadow cursor-pointer border-2 xs:border-3 sm:border-4 transition-all duration-300 ease-in-out min-h-[100px] xs:min-h-[120px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[200px] 
                  ${isSelected ? service.color : "border-gray-200 hover:border-gray-400"}`}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 w-10 xs:w-12 sm:w-16 md:w-20 lg:w-24 h-10 xs:h-12 sm:h-16 md:h-20 lg:h-24 object-cover rounded-md sm:rounded-lg shadow-sm"
                  />
                  <span className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 text-center">{service.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Type */}
        <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-8">
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 xs:mb-2 md:mb-4">
            What kind of project are you looking for?
          </p>
          <div className="w-full flex flex-wrap gap-2 xs:gap-3 sm:gap-4 md:gap-5">
            {['One-time project', 'Ongoing maintenance', 'Both'].map((type, index) => (
              <label
                key={index}
                className="flex-1 min-w-[80px] xs:min-w-[100px] sm:min-w-[120px] flex items-center gap-2 xs:gap-3 sm:gap-4 px-2 xs:px-3 sm:px-4 md:px-6 py-1 xs:py-2 sm:py-3 md:py-4 rounded-2xl xs:rounded-3xl sm:rounded-4xl border-2 border-gray-300 hover:border-blue-500 cursor-pointer transition-all"
              >
                <input
                  type="radio"
                  name="projectType"
                  value={type}
                  checked={projectType === type}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="form-radio text-blue-600 w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 border-gray-300 checked:border-blue-600 hover:border-blue-500"
                />
                <span className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Deadline */}
        <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-8">
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 xs:mb-2 md:mb-4">
            When is the project deadline?
          </p>
          <div className="w-full flex flex-wrap gap-2 xs:gap-3 sm:gap-4 md:gap-5">
            {['ASAP', '1 month', '2 – 3 months', '3+ months'].map((deadlineOption, index) => (
              <label
                key={index}
                className="flex-1 min-w-[80px] xs:min-w-[100px] sm:min-w-[120px] flex items-center gap-2 xs:gap-3 sm:gap-4 px-2 xs:px-3 sm:px-4 md:px-6 py-1 xs:py-2 sm:py-3 md:py-4 rounded-2xl xs:rounded-3xl sm:rounded-4xl border-2 border-gray-300 hover:border-blue-500 cursor-pointer transition-all text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700"
              >
                <input
                  type="radio"
                  name="deadline"
                  value={deadlineOption}
                  checked={deadline === deadlineOption}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="form-radio text-blue-600 w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 border-gray-300 checked:border-blue-600 hover:border-blue-500"
                />
                {deadlineOption}
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-8">
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-1 xs:mb-2">
            Tell us a little more about your project<span className="text-red-500"> *</span>
          </p>
          {formSubmitted && message.trim() === "" && (
            <p className="text-red-500 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">This field is required.</p>
          )}
          <textarea
            rows="4"
            name="message"
            value={message}
            onChange={handleTextareaChange}
            placeholder="Write here..."
            className={`w-full resize-none px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 md:py-3 rounded-md border-2 xs:border-3 transition-all outline-none placeholder:text-xs md:placeholder:text-sm placeholder-gray-500 ${
              formSubmitted && message.trim() === ""
                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                : "border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            }`}
          />
          <div className="text-[10px] xs:text-xs sm:text-sm md:text-base mt-1 xs:mt-2 text-gray-500">
            {countWords(message)} / 1000 words
          </div>
        </div>

        {/* Submit */}
        <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-8 flex justify-center sm:justify-start">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-3 xs:px-4 sm:px-6 md:px-8 py-1 xs:py-2 sm:py-3 md:py-4 text-[10px] xs:text-xs sm:text-sm md:text-base rounded-full shadow hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            Send message <Send className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}