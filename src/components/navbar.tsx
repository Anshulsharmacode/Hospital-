"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

export function LandinngPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <header className="absolute w-full z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="inline-flex items-center space-x-2">
            <span className="font-bold text-2xl text-white">HealthCare</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-white hover:text-gray-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100"
            >
              Contact Us
            </button>
          </div>
          <div className="lg:hidden">
            <Menu
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer text-white"
            />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xl text-blue-600">
                        HealthCare
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to HealthCare
            </h1>
            <p className=" mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Providing compassionate care and cutting-edge medical services to
              our community. Your health is our priority.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                >
                  Book Appointment
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-2 py-16 md:px-0 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="relative">
          <div className="absolute inset-0 bg-[url('/faq-background.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold leading-tight text-blue-800 sm:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-auto">
                Find answers to common questions about our hospital services and
                policies.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl space-y-6 md:mt-16">
              {[
                {
                  question: "What are the visiting hours?",
                  answer:
                    "Visiting hours are from 9 AM to 8 PM daily. Please check with the specific department for any exceptions.",
                },
                {
                  question: "How can I make an appointment?",
                  answer:
                    "You can make an appointment by calling our scheduling department at (123) 456-7890 or using our online appointment system.",
                },
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
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
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

      <section className="min-h-screen w-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Our Healthcare Plans
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Basic Plan Card */}
            <div className="rounded-xl bg-white shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="border-b border-blue-200">
                <div className="px-6 py-4">
                  <h3 className="mb-2 text-2xl font-bold text-blue-800">
                    Basic Plan
                  </h3>
                  <p className="text-blue-600">
                    Essential care for everyday needs.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="mb-4 font-medium text-blue-700">
                  Features included:
                </p>
                <ul className="mb-6 space-y-2">
                  {[
                    "Basic Consultation",
                    "Routine Check-ups",
                    "24/7 Nurse Hotline",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="mr-2 h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <p className="font-semibold text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <p className="mb-6 text-lg font-semibold text-blue-800">
                  Starting from <span className="text-2xl">₹2,500/mo</span>
                </p>
                <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Premium Plan Card */}
            <div className="rounded-xl bg-white shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="border-b border-purple-200">
                <div className="px-6 py-4">
                  <h3 className="mb-2 text-2xl font-bold text-purple-800">
                    Premium Plan
                  </h3>
                  <p className="text-purple-600">
                    Comprehensive coverage for all your needs.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="mb-4 font-medium text-purple-700">
                  Features included:
                </p>
                <ul className="mb-6 space-y-2">
                  {[
                    "Comprehensive Consultation",
                    "Specialized Medical Services",
                    "Priority Scheduling",
                    "24/7 Access to Specialists",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="mr-2 h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <p className="font-semibold text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <p className="mb-6 text-lg font-semibold text-purple-800">
                  Starting from <span className="text-2xl">₹6,000/mo</span>
                </p>
                <button className="w-full rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* VIP Plan Card */}
            <div className="rounded-xl bg-white shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="border-b border-yellow-200">
                <div className="px-6 py-4">
                  <h3 className="mb-2 text-2xl font-bold text-yellow-800">
                    VIP Plan
                  </h3>
                  <p className="text-yellow-600">
                    Exclusive care with top-notch services.
                  </p>
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="mb-4 font-medium text-yellow-700">
                  Features included:
                </p>
                <ul className="mb-6 space-y-2">
                  {[
                    "Personalized Health Plans",
                    "1-on-1 Specialist Consultations",
                    "Annual Health Check-ups",
                    "Exclusive Wellness Programs",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="mr-2 h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <p className="font-semibold text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <p className="mb-6 text-lg font-semibold text-yellow-800">
                  Starting from <span className="text-2xl">₹12,000/mo</span>
                </p>
                <button className="w-full rounded-md bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Medical background"
            layout="fill"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xl text-gray-200">
            Providing comprehensive care with cutting-edge technology and
            compassionate staff
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg
                    className="h-8 w-8 text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                ),
                title: "Medical Services",
                description:
                  "Comprehensive care including emergency services, surgeries, and specialized treatments.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8 text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Qualified Staff",
                description:
                  "Expert healthcare professionals dedicated to providing the best patient care.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8 text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ),
                title: "Advanced Technology",
                description:
                  "State-of-the-art equipment for accurate diagnostics and effective treatments.",
              },
              {
                icon: (
                  <svg
                    className="h-8 w-8 text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                ),
                title: "Patient Care",
                description:
                  "Holistic approach to healing, including emotional support and rehabilitation services.",
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-10">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-center text-sm text-gray-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQs */}

      {/* footer */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <footer className="py-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center">
                <svg
                  width="40"
                  height="46"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600"
                >
                  <path
                    d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="ml-4 text-xl font-semibold text-gray-800">
                  HealthCare Facility
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-600 md:mt-0">
                © 2024 HealthCare Facility. All rights reserved.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  About Us
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      History
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Accreditations
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Locations
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Main Hospital
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Outpatient Clinic
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Urgent Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Specialty Centers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Pharmacy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Services
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Emergency Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Primary Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Surgical Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Diagnostic Imaging
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Rehabilitation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Policies
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Patient Rights
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Insurance Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Visitor Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-600"
                    >
                      Patient Forms
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Contact Us
                </h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-600">
                      (123) 456-7890
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-600">
                      info@hospital.org
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-600">
                      123 Health St, City, Country
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LandinngPageOne;
