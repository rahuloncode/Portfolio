import React from "react";

const Education = () => {
  const records = [
    {
      title: "Bachelor Of Science",
      institution: "Purvanchal University",
      period: "July 2020 - July 2023",
      desc: "I have completed BSc graduate with a strong foundation in Maths. Equipped with theoretical knowledge and practical skills gained through coursework and hands-on projects. I am a proactive learner, team player, and problem-solver, committed to continuous growth and making meaningful contributions to the organization.",
    },
    {
      title: "Intermediate",
      institution: "Shah Faiz Public School",
      period: "Completed in 2020",
    },
    {
      title: "High School",
      institution: "Shah Faiz Public School",
      period: "Completed in 2018",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-5xl mb-24">Education</h2>
        <div className="space-y-16">
          {records.map((rec, idx) => (
            <div
              key={idx}
              className="border-b border-gray-100 pb-16 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="text-xl font-bold uppercase">{rec.title}</h3>
                <p className="text-sm font-bold text-gray-400">
                  at <span className="text-blue-500">{rec.institution} ↗</span>
                </p>
              </div>
              <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-6">
                {rec.period}
              </p>
              {rec.desc && (
                <p className="text-sm text-gray-500 leading-relaxed max-w-4xl">
                  {rec.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
