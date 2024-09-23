import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Discover Our Journey So Far</h2>
        <p className="text-xl mb-8">
          From humble beginnings to industry leaders, our journey has been marked by
          <span className="text-[#00BFFF]"> innovation</span>,
          <span className="text-[#00BFFF]"> dedication</span>, and a
          <span className="text-[#00BFFF]"> passion</span> for excellence.
        </p>
        <button className="bg-[#00BFFF] text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default AboutUsSection;
