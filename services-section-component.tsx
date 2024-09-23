import React from 'react';
import { AutomationIcon, ChatbotIcon, ConsultingIcon } from './Icons';

const ServiceCard = ({ title, description, Icon }) => (
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-[#00BFFF] transition-shadow duration-300">
    <Icon className="text-[#00BFFF] w-12 h-12 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: 'Automations',
      description: 'Streamline your processes with our cutting-edge automation solutions.',
      Icon: AutomationIcon,
    },
    {
      title: 'Chatbot',
      description: 'Enhance customer interactions with our AI-powered chatbots.',
      Icon: ChatbotIcon,
    },
    {
      title: 'Consulting',
      description: 'Get expert advice to optimize your digital strategy and operations.',
      Icon: ConsultingIcon,
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
