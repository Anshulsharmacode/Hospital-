"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaHospital,
  FaUserMd,
  FaStethoscope,
  FaHeartbeat,
  FaAmbulance,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Doctors", href: "#" },
  { name: "Appointment", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Contact", href: "#" },
];

export function LandingPageOne() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white bg-opacity-90 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="font-bold text-2xl text-blue-600">
                HealthCare
              </span>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <button
                type="button"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button
              type="button"
              className="w-full text-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative w-full bg-cover bg-center pt-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-500/50"></div>
          <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Welcome to HealthCare
              </h1>
              <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Providing compassionate care and cutting-edge medical services
                to our community. Your health is our priority.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                >
                  Book Appointment
                </a>
                <a
                  href="#"
                  className="mt-3 sm:mt-0 sm:ml-3 flex items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Section */}
        <section id="doctors" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-blue-800">
              Meet Our Doctors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: "/doctor1.avif",
                  name: "Dr. John Doe",
                  specialty: "Cardiologist",
                  details:
                    "Dr. John Doe is a highly experienced Cardiologist with a passion for helping patients achieve optimal heart health. He has successfully treated numerous patients with various heart conditions.",
                  happyPatients: Math.floor(Math.random() * 100) + 50,
                },
                {
                  image: "/Doctor2.avif",
                  name: "Dr. Jeeni Smith",
                  specialty: "Pediatrician",
                  details:
                    "Dr. Jeeni Smith is a caring Pediatrician dedicated to providing top-notch healthcare for children of all ages. She has a gentle approach that helps children feel comfortable and at ease during their visits.",
                  happyPatients: Math.floor(Math.random() * 100) + 50,
                },
                {
                  image: "/doctor3.avif",
                  name: "Dr. Michaeli Johnson",
                  specialty: "Neurologist",
                  details:
                    "Dr. Michaeli Johnson is a skilled Neurologist known for his expertise in diagnosing and treating neurological disorders. He is committed to improving the quality of life for patients with neurological conditions.",
                  happyPatients: Math.floor(Math.random() * 100) + 50,
                },
              ].map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={128}
                      height={128}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600">{doctor.specialty}</p>
                  <p className="text-gray-600 mt-2">{doctor.details}</p>
                  <p className="text-gray-600 mt-2">
                    Happy Patients: {doctor.happyPatients}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Section */}
        <section id="appointment" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-blue-800">
              Book an Appointment
            </h2>
            <form className="mx-auto max-w-lg rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="department"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="painLevel"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Pain Level
                </label>
                <div className="flex justify-between">
                  {["😊", "🙂", "😐", "🙁", "😣"].map((emoji, index) => (
                    <label
                      key={index}
                      className="flex cursor-pointer flex-col items-center"
                    >
                      <input
                        type="radio"
                        name="painLevel"
                        value={index + 1}
                        className="sr-only"
                      />
                      <span className="text-3xl">{emoji}</span>
                      <span className="mt-1 text-xs">{index + 1}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="doctor"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Preferred Doctor
                </label>
                <input
                  type="text"
                  id="doctor"
                  name="doctor"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-extrabold text-white mb-12">
              Why Choose Us
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <FaHospital className="h-8 w-8 text-blue-300" />,
                  title: "Modern Facilities",
                  description:
                    "State-of-the-art medical facilities and equipment.",
                },
                {
                  icon: <FaUserMd className="h-8 w-8 text-blue-300" />,
                  title: "Expert Doctors",
                  description:
                    "Highly qualified and experienced medical professionals.",
                },
                {
                  icon: <FaHeartbeat className="h-8 w-8 text-blue-300" />,
                  title: "Patient-Centered Care",
                  description:
                    "Personalized care tailored to each patient's needs.",
                },
                {
                  icon: <FaAmbulance className="h-8 w-8 text-blue-300" />,
                  title: "24/7 Emergency",
                  description:
                    "Round-the-clock emergency services and support.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-blue-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "What should I bring for my first visit?",
                  answer:
                    "Please bring a valid ID, insurance information, and any relevant medical records. If you have a referral from another doctor, bring that as well.",
                },
                {
                  question: "Do you accept insurance?",
                  answer:
                    "Yes, we accept most major insurance plans. Please contact your insurance provider to confirm coverage and bring your insurance card to your appointment.",
                },
                {
                  question: "What are your emergency services?",
                  answer:
                    "Our emergency department is open 24/7 for urgent medical issues. If you are experiencing a medical emergency, please call 911 or visit the emergency room immediately.",
                },
                {
                  question: "Can I pay my bill online?",
                  answer:
                    "Yes, you can pay your bill online through our secure payment portal on our website. You will need your account number and payment details.",
                },
                {
                  question:
                    "What should I do if I need to cancel an appointment?",
                  answer:
                    "To cancel an appointment, please call our office at least 24 hours in advance to reschedule. Failure to do so may result in a cancellation fee.",
                },
                {
                  question: "Is there parking available?",
                  answer:
                    "Yes, we have ample parking available on-site. Valet parking is also offered at the main entrance.",
                },
                {
                  question: "How can I contact a patient?",
                  answer:
                    "You can contact a patient by calling the hospital&apos;s main line and asking to be transferred to their room. For privacy reasons, patient information cannot be provided without prior authorization.",
                },
                {
                  question:
                    "What are the hospital&apos;s visitor policies during flu season?",
                  answer:
                    "During flu season, visitor policies may be restricted to protect patients. Please check our website or call the hospital for the latest visitor guidelines.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                    onClick={() => {
                      const answer = document.getElementById(`answer-${index}`);
                      const icon = document.getElementById(`icon-${index}`);
                      if (answer && icon) {
                        answer.classList.toggle("hidden");
                        icon.classList.toggle("rotate-180");
                      }
                    }}
                  >
                    <span className="text-lg font-semibold text-blue-800">
                      {item.question}
                    </span>
                    <svg
                      id={`icon-${index}`}
                      className="h-6 w-6 text-blue-500 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id={`answer-${index}`}
                    className="hidden px-6 pb-4 text-gray-600"
                  >
                    <p className="animate-fadeIn">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray-600">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
              >
                Contact our support
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Providing quality healthcare services to our community for over
                50 years.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2" /> (123) 456-7890
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2" /> info@healthcare.com
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> 123 Health St, City,
                  Country
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>
              &copy; {new Date().getFullYear()} HealthCare Facility. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPageOne;
