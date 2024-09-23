import React from 'react';

const TeamMember = ({ name, role, imageUrl }) => (
  <div className="text-center">
    <div className="relative w-48 h-48 mx-auto mb-4">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full w-full h-full object-cover border-4 border-[#00BFFF] transition-all duration-300 hover:border-8 hover:shadow-lg hover:shadow-[#00BFFF]"
      />
    </div>
    <h3 className="text-xl font-bold">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', imageUrl: '/api/placeholder/150/150' },
    { name: 'Jane Smith', role: 'CTO', imageUrl: '/api/placeholder/150/150' },
    { name: 'Mike Johnson', role: 'Lead Developer', imageUrl: '/api/placeholder/150/150' },
    { name: 'Sarah Brown', role: 'UX Designer', imageUrl: '/api/placeholder/150/150' },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
