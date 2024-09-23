import React from 'react';

const TestimonialCard = ({ name, testimonial }) => (
  <div className="bg-gray-900 p-6 rounded-lg border border-[#00BFFF] hover:shadow-lg hover:shadow-[#00BFFF] transition-all duration-300">
    <p className="text-gray-300 mb-4">{testimonial}</p>
    <p className="font-bold">{name}</p>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Alice Johnson',
      testimonial: 'Their automation solutions have transformed our business processes. Highly recommended!',
    },
    {
      name: 'Bob Williams',
      testimonial: 'The chatbot they developed for us has significantly improved our customer service.',
    },
    {
      name: 'Carol Davis',
      testimonial: 'Their consulting services provided invaluable insights for our digital transformation.',
    },
    {
      name: 'David Miller',
      testimonial: 'Working with this team has been a game-changer for our company. Exceptional results!',
    },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
