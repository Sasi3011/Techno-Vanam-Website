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
    <div className="max-w-3xl mx-auto p-6">
      <p className="text-sm text-blue-600 font-semibold uppercase">Contact us</p>
      <h1 className="text-4xl font-bold text-gray-900 mt-2">
        Send us a message <span className="inline-block">👋</span>
      </h1>
      <p className="text-gray-500 mt-2">
        Fill the form below and one of our team members will get back to you
        within 24 business hours to schedule a project discovery call.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What's your name?</label>
          <input type="text" placeholder="Enter your full name" className="w-full border-b border-gray-300 focus:outline-none py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What's your email?</label>
          <input type="email" placeholder="Enter your email address" className="w-full border-b border-gray-300 focus:outline-none py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What's your company?</label>
          <input type="text" placeholder="Enter your company name" className="w-full border-b border-gray-300 focus:outline-none py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">What's your current website?</label>
          <input type="text" placeholder="Enter your website URL" className="w-full border-b border-gray-300 focus:outline-none py-2" />
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
            className={`flex flex-col items-center p-4 bg-white rounded-xl shadow transition cursor-pointer border-2 ${
              isSelected ? service.color : "border-transparent"
            }`}
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
