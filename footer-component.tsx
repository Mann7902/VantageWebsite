import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, url: '#' },
    { icon: FaTwitter, url: '#' },
    { icon: FaLinkedin, url: '#' },
    { icon: FaInstagram, url: '#' },
  ];

  const quickLinks = ['Services', 'About', 'Team', 'Contact'];

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Company Name</h3>
          <p className="text-gray-400">Transforming businesses through innovation