import React from "react";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black overflow-hidden">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        Domain for Sale
      </header>

      <main className="flex-grow p-6 md:p-8 text-center overflow-y-auto">
        <h1 className="text-3xl font-bold mb-1">Premium Domain for Sale!</h1>
        <p className="text-lg mb-1">Contact us for more information.</p>

        <p className="mb-1">
          Contact Number: <span className="font-semibold">+92 321 4994145</span>
        </p>

        {/* WhatsApp Link */}
        <div className="mt-3 mb-8">
          <a
            href="https://wa.me/+923214994145?text=Hello,%20I%20would%20like%20to%20contact%20you%20regarding%20your%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-green-500 text-white p-3 rounded-lg hover:bg-green-400 transition duration-300 shadow-md">
            WhatsApp
          </a>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
