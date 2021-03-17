import React from 'react';

import Title from '../ui/Title';
import Service from './Service';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Front-End Development',
      text:
        'I like coding projects from scratch and in the process help you to create your dream website and help your bussiness grow.',
    },
    {
      id: 2,
      title: 'Back-End Development',
      text:
        "As a back-end project I'll help you to develop the API that will serve your website or project. We will connected the front-end of your project to the back-end and a database",
    },
    {
      id: 3,
      title: 'Mobile App Development',
      text:
        "I'll will help you develop the logic needed to put your application idea online and it will be available for both, iOS and Android systems.",
    },
  ];

  // md:grid md:grid-cols-2 md:gap-8 lg:gap-10 lg:grid-cols-3 md:auto-rows-auto
  return (
    <section>
      <Title title="What I do" />
      <div className="max-w-screen-xl mx-auto mt-8 md:grid md:grid-cols-2 md:gap-8">
        {services.map(service => {
          const { id, title, text } = service;

          return <Service key={id} id={id} title={title} text={text} />;
        })}
      </div>
    </section>
  );
}
