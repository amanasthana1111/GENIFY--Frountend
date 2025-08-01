import React from 'react';

const About = () => {
  return (
    <section className="bg-[#0a0c10] min-h-screen text-white px-6 py-20 grid place-items-center">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          About Genify
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
Revolutionizing web development through the power of artificial intelligence and modern web technologies        </p>

        <div className="bg-[#11131a] rounded-2xl p-8 shadow-xl border border-[#1c1e24]">
          <h3 className="text-2xl font-semibold mb-4 text-white">Our Philosophy</h3>
          <p className="text-gray-400">
            We believe the future belongs to those who create. That’s why we build tools that help developers and creators focus less on boilerplate and more on brilliance. Our mission is to simplify workflows, amplify imagination, and redefine what’s possible on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
