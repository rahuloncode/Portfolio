import React from "react";

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-200 p-12 rounded-sm border border-gray-100">
      <h3 className="font-serif text-3xl mb-8">
        Skill that <span className="bg-brand px-2">MATTERS</span>
      </h3>

      <div className="space-y-6 text-sm md:text-base">
        <p>
          <strong>• Front-end Technologies:</strong> JavaScript, Bootstrap,
          React, Redux, Tailwind, Next JS, TypeScript, GSAP.
        </p>
        <p>
          <strong>• Backend Technologies:</strong> Node, Express, Mongoose, NEXT
          JS.
        </p>
        <p>
          <strong>• API Consuming:</strong> REST API, CRUD Operation with
          Authentication, NextAuth, Resend Mail, OTP and JWT.
        </p>
        <p>
          <strong>• DataBase:</strong> MongoDB.
        </p>
        <p>
          <strong>• Online DataBase:</strong> MongoDB Atlas, Firebase, Appwrite,
          Cloudinary and MockAPI.
        </p>
      </div>

      <p className="mt-12 text-gray-600 leading-relaxed max-w-4xl m-auto text-center">
        Creative web developer skilled in HTML, CSS, and JavaScript, with a
        focus on crafting responsive and visually engaging user interfaces. I
        bring ideas to life by seamlessly blending design and functionality.
        Passionate about clean code, I strive to create intuitive web
        experiences that leave a lasting impact.
      </p>
    </div>
  );
};

export default Skills;
