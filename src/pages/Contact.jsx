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
      <p className="text-sm text-blue-600 font-semibold uppercase">Contact us</p>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">
        Send us a message <span className="inline-block">👋</span>
      </h1>
      <p className="text-gray-500 mt-2">
        Fill the form below and one of our team members will get back to you
        within 24 business hours to schedule a project discovery call.
      </p>

      <div className="mt-8 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        <p className="text-lg font-semibold text-gray-800 mb-4">Tell us about yourself</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "What's your name?", type: "text", placeholder: "Enter your full name" },
            { label: "What's your email?", type: "email", placeholder: "Enter your email address" },
            { label: "What's your company?", type: "text", placeholder: "Enter your company name" },
            { label: "What's your current website?", type: "text", placeholder: "Enter your website URL" },
          ].map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-lg px-4 py-2 transition-all outline-none"
              />
            </div>
          ))}
        </div>
      </div>

       <div className="mt-8">
    <p className="font-semibold text-gray-700 mb-4">
      What services are you looking for?
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {servicesList.map((service, index) => {
  const isSelected = selectedServices.includes(service.name);
  return (
    <button
      key={index}
      type="button"
      onClick={() => toggleService(service.name)}
      className={`flex flex-col items-center p-4 bg-white rounded-xl shadow cursor-pointer border-2 transition-all duration-300 ease-in-out 
        ${isSelected ? service.color : "border-transparent hover:border-gray-300"}`}
    >
      <img
        src={`https://via.placeholder.com/64`}
        alt={service.name}
        className="mb-2"
      />
      <span className="text-sm font-medium text-gray-700 text-center">
        {service.name}
      </span>
    </button>
  );
})}

    </div>
  </div>

      <div className="mt-8">
        <p className="font-semibold text-gray-700 mb-4">What kind of project are you looking for?</p>
        <div className="flex flex-wrap gap-4">
          {['One-time project', 'Ongoing maintenance', 'Both'].map((type, index) => (
            <label key={index} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 cursor-pointer">
              <input type="radio" name="projectType" className="form-radio text-blue-600" />
              <span className="text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>


      <div className="mt-8">
      <p className="font-semibold text-gray-700 mb-4">When is the project deadline?</p>
      <div className="flex flex-wrap gap-4">
        {['ASAP', '1 month', '2 – 3 months', '3+ months'].map((deadline, index) => (
          <label key={index} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 cursor-pointer">
            <input type="radio" name="deadline" className="form-radio text-blue-600" />
            <span className="text-sm text-gray-700">{deadline}</span>
          </label>
        ))}
      </div>
    </div>

      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700 mb-1">Tell us a little more about you project</label>
        <textarea
          rows="4"
          required
          value={message}
          onChange={handleTextareaChange}
          placeholder="Please feel free to write as much (or as little) as you need."
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
        <div className="text-sm text-gray-500 mt-1">
          {countWords(message)} / 1000 words
        </div>

      </div>

      <div className="mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-all flex items-center gap-2">
          Send message <span className="text-lg">✈️</span>
        </button>
      </div>
    </div>
  );
}
