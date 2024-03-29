import React from 'react';

export default function About() {
  return (
    <section
      id='about'
      className='flex h-[calc(100vh-64px)] flex-col justify-center bg-portfolio-background px-[18px]'
    >
      <div className='m-auto max-w-[320px] flex-col text-center md:max-w-[420px]'>
        <h1 className=' mb-[32px] font-primary text-[20px] text-[#f3b61f]'>
          About Me
        </h1>
        <p className='mx-auto mb-small w-[300px] font-tertiary text-[14px] text-portfolio-text md:w-[400px] md:text-left lg:mb-large lg:text-[16px]'>
          🌟 Welcome, Digital Voyagers! I&lsquo;m Siddharth S Kumar, a Senior
          Backend Sorcerer with a passion for crafting code-driven epics.
          Through the intricate realms of Javascript, Typescript, Golang, and
          more, I shape digital landscapes that captivate and inspire.
        </p>
        <p className='mb-small font-tertiary text-[14px] text-portfolio-text md:w-[400px] md:text-left lg:mb-large lg:text-[16px]'>
          🔮 My journey encompasses the mastery of Postgres, MongoDB, MySQL, and
          Redis, where I wield data like a seasoned enchanter. With Kafka,
          RabbitMQ, and AWS SQS, I orchestrate harmonies of communication that
          bridge worlds.
        </p>
        <p className='mx-auto mb-small block w-[300px] font-tertiary text-[14px] text-portfolio-text md:w-[400px] md:text-left lg:mb-large lg:text-[16px]'>
          🌩️ Guided by Agile and Scrum, I voyage the clouds of AWS and GCP,
          painting solutions on the canvas of cloud computing.
        </p>
        <p className='font-tertiary text-[14px] text-portfolio-text md:w-[400px] md:text-left lg:mb-large lg:text-[16px]'>
          🚀 My education at Christ College of Engineering revealed a love for
          innovation, echoed in hackathons and entrepreneurial ventures.
        </p>
      </div>
    </section>
  );
}
