import React, { useState } from "react";

const servicesList = [
  { name: "Web Design", color: "border-blue-500" },
  { name: "UI/UX Design", color: "border-pink-500" },
  { name: "Development", color: "border-green-500" },
  { name: "Branding", color: "border-yellow-500" },
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [message, setMessage] = useState("");

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
        Send us a message <span className="inline-block">👋</span>
      </h1>
      <p className="text-gray-500 mt-2 text-lg">
        Fill the form below and one of our team members will get back to you
        within 24 business hours to schedule a project discovery call.
      </p>

      {/* Input Fields with Labels on Top */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-md">
        {[
          { label: "What's your name?", type: "text", placeholder: "Enter your name" },
          { label: "What's your email?", type: "email", placeholder: "Enter your email" },
          { label: "What's your company?", type: "text", placeholder: "Enter your company name" },
          { label: "What's your current website?", type: "text", placeholder: "Enter your website URL" },
        ].map((field, index) => (
          <div key={index}>
            <p className="text-base font-semibold text-gray-800 mb-2 text-xl">{field.label}</p>
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 rounded-md border-2 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none placeholder-gray-500"
            />
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          What services are you looking for?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pr-90">
          {servicesList.map((service, index) => {
            const isSelected = selectedServices.includes(service.name);
            return (
              <button
                key={index}
                type="button"
                onClick={() => toggleService(service.name)}
                className={`min-h-[180px] flex flex-col items-center p-4 pt-6 bg-white rounded-4xl shadow cursor-pointer border-2 transition-all duration-300 ease-in-out 
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
        <p className="text-xl font-semibold text-gray-800 mb-4">What kind of project are you looking for?</p>
        <div className="w-full flex flex-wrap gap-4 ">
          {['One-time project', 'Ongoing maintenance', 'Both'].map((type, index) => (
            <label
              key={index}
              className="flex-1 min-w-[100px] flex items-center gap-2 px-4 py-4 rounded-xl border border-gray-300 hover:border-blue-500 cursor-pointer transition-all"
            >
              <input type="radio" name="projectType" className="form-radio text-blue-600" />
              <span className="text-sm font-semibold text-gray-700 ">{type}</span>
            </label>
          ))}
        </div>

      </div>

      {/* Deadline with Equal Width and Bigger Radius */}
      <div className="mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-4">When is the project deadline?</p>
        <div className="flex flex-wrap gap-4 ">
          {['ASAP', '1 month', '2 – 3 months', '3+ months'].map((deadline, index) => (
            <label
              key={index}
              className="flex-1 min-w-[100px] flex items-center  gap-2 px-4 py-4 rounded-2xl border border-gray-300 hover:border-blue-500 cursor-pointer transition-all text-sm font-semibold text-gray-700"
            >
              <input type="radio" name="deadline" className="form-radio text-blue-600" />
              {deadline}
            </label>
          ))}
        </div>
      </div>

      {/* Textarea */}
      <div className="mt-10">
        <p className="text-xl font-semibold text-gray-800 mb-2">Tell us a little more about your project</p>
        <textarea
          rows="4"
          required
          value={message}
          onChange={handleTextareaChange}
          placeholder="Write here..."
          className="w-full px-4 py-3 rounded-md border-2 border-gray-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none placeholder-gray-500"
        />
        <div className="text-sm text-gray-500 mt-1">
          {countWords(message)} / 1000 words
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-all flex items-center gap-2">
          Send message <span className="text-lg">✈️</span>
        </button>
      </div>
    </div>
  );
}
