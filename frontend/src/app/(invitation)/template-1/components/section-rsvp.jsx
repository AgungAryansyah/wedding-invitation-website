"use client";

import React from "react";
import { useState } from "react";
import { Instrument_Sans } from "next/font/google";

const instrument = Instrument_Sans({ 
  subsets: ["latin"],
  style: ['normal', 'italic']
});

const SectionRsvp = ({ isEmbedded = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attending: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const containerClasses = isEmbedded
    ? "bg-black text-black"
    : "min-h-screen bg-black text-black";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAttendingChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("RSVP Data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage("Thank you for your RSVP!");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        attending: "",
      });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={containerClasses}>
      {/* Content container */}
      <div
        className={`${isEmbedded ? "" : "relative z-10"} bg-white max-w-md mx-auto px-4 py-16`}
      >
        {/* Section Title */}
        <h2
          className={`${instrument.className} text-4xl font-bold text-center mb-4 text-[#333333]`}
        >
          RSVP
        </h2>

        {/* Subtitle */}
          <p className={`${instrument.className} absolute left-1/2 -translate-x-1/2 text-center bg-white px-1 italic text-gray-600 text-[0.7rem] whitespace-nowrap`}>
            Kindly respond by <strong>Aug 21, 2025</strong>. <br className="xxs:hidden" />
            We look forward to celebrating with you!
          </p>

          {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="pt-2.5">
          {/* Form Container with Border */}
          <div className="bg-white border-1 border-[#c4c4c4] rounded-lg">
            {/* Name Field */}
            <div className="px-6 pb-2 pt-6">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 bg-[#c4c4c4]/10 border-1 border-[#c4c4c4] rounded-lg"
              />
            </div>

            {/* Phone Field */}
            <div className="px-6 pb-6 pt-2">
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Your Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone"
                required
                className="w-full px-4 py-3 bg-[#c4c4c4]/10 border-1 border-[#c4c4c4] rounded-lg"
              />
            </div>
          </div>

          <div className="pt-4">
            {/* Attendance Question */}
            <h3 className="absolute left-1/2 -translate-x-1/2 text-center text-lg font-bold text-gray-800 bg-white px-1 whitespace-nowrap">
              Will you be attending?
            </h3>
            <div className="pt-4">
              {/* Form Container with Border */}
              <div className="bg-white border-1 border-[#c4c4c4] rounded-lg">
                {/* Radio Options */}
                <div className="flex flex-row px-6 py-8">
                  <label className="flex w-1/2 items-center cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === "yes"}
                      onChange={() => handleAttendingChange("yes")}
                      className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500 pr-2"
                    />
                    <span className="ml-1 text-xs text-gray-700 pr-3">
                      Accepts with Pleasure!
                    </span>
                  </label>

                  <label className="flex w-1/2 items-center cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === "no"}
                      onChange={() => handleAttendingChange("no")}
                      className="w-4 h-4 text-gray-600 border-gray-300 focus:ring-gray-500 pl-2"
                    />
                    <span className="ml-1 text-xs text-gray-700">
                      Declines with Regrets.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex pb-4 justify-center">
                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.name ||
                      !formData.phone ||
                      !formData.attending
                    }
                    className="bg-[#434343] text-white py-1 px-6 rounded-full text-xs"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <div className="text-center mt-4">
                    <p
                      className={`text-sm ${submitMessage.includes("Thank you") ? "text-green-600" : "text-red-600"}`}
                    >
                      {submitMessage}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionRsvp;
