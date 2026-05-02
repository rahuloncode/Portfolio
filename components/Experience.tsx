import React from "react";
import { ExternalLink, Download, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Front End Developer",
      company: "Addicor Technologies Pvt Ltd",
      period: "December 2023 - present",
      desc: "As a Frontend Developer at Addicor Technologies, I design and develop responsive, user-centric web interfaces using HTML, CSS, and JavaScript, with a strong focus on performance and accessibility. I work closely with UI/UX designers and backend teams to life and ensure seamless user experiences.",
      bullets: [
        "Developed dynamic and scalable web applications using React.js and Next.js, enabling server-side rendering and improved SEO.",
        "Managed application state efficiently using Redux, enhancing performance and maintainability.",
        "Implemented JWT-based authentication to ensure secure user access and session handling.",
        "Integrated and interacted with online databases and APIs to deliver real-time data to the frontend.",
        "Followed modern frontend development best practices, including responsive design, component-based architecture, and version control using Git.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Addicor Technologies Pvt Ltd",
      period: "August 2023 - October 2023",
      desc: "Assisted in designing and building responsive websites using HTML, CSS, and JavaScript. Worked with the development team to improve page layouts, enhance user interfaces, and ensure cross-browser compatibility. Gained hands-on experience in debugging, code optimization, and creating interactive web components.",
    },
  ];

  return (
    <section id="experience" className="py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-5xl mb-24 italic">Experience</h2>

        <div className="space-y-24">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-12 border-l-2 border-gray-100"
            >
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-yellow-200 border-4 border-white shadow-sm" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    {exp.role} -- {exp.company}
                  </h3>
                  <p className="text-gray-400 font-medium">{exp.period}</p>
                </div>
                <a
                  href="https://addicortechnologies.com/"
                  target="blank"
                  className="flex items-center gap-1 text-blue-500 font-medium text-sm mt-2 md:mt-0"
                >
                  at goto <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-gray-600 italic mb-8 max-w-4xl">{exp.desc}</p>

              {exp.bullets && (
                <ul className="space-y-4 max-w-3xl">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-gray-500 leading-relaxed"
                    >
                      <ChevronRight
                        size={16}
                        className="mt-1 flex-shrink-0 text-brand"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-32">
          <h3 className="font-serif text-3xl mb-12">
            Certification & Additional Courses
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="p-8 border border-gray-200 rounded-sm hover:-translate-y-2 transition-all group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full mb-6 flex items-center justify-center group-hover:bg-brand transition-colors ">
                  <Download
                    size={20}
                    className="text-gray-400 group-hover:text-navy"
                  />
                </div>
                <p className="font-medium text-sm">
                  Certification In JavaScript, React and Next JS - Udemy
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
