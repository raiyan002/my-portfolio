const Experiences = [
  {
    period: "June 2024 - Present",
    role: "Software Engineer",
    company: "Go Digit General Insurance Limited",
    description:
      "Developing enterprise-grade insurance platforms with a focus on scalable frontend architecture, secure access control systems, performance optimization, and responsive user experiences. Worked on configurable enrollment systems, dynamic RBAC frameworks, real-time analytics dashboards, and secure HR/Employee portals using modern Angular ecosystem.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Tailwind CSS",
      "JavaScript",
      "REST APIs"
    ],
    current: true
  },
  {
    period: "June 2023 - June 2024",
    role: "Trainee Developer",
    company: "Go Digit General Insurance Limited",
    description:
      "Contributed to the development and maintenance of large-scale insurance applications, focusing on frontend development, production support, UI enhancements, secure document handling, and application performance improvements. Gained hands-on experience working on production systems and resolving critical issues efficiently.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "JavaScript",
      "HTML",
      "CSS",
      "Git"
    ],
    current: false
  }
];

export const Experience = () => {
  return (
    <section 
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5
        rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"          
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in
            animation-delay-100 text-secondary-foreground"
          >
            Experience that <span className="font-serif italic text-white">shapes my expertise </span>
          </h2>
          <p
            className="text-muted-foreground animate-fade-in animation-delay-200"
          >
            A snapshot of my professional journey, highlighting key roles and projects that have contributed to my growth as a Developer.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="timeline-glow absolute -left-px md:left-1/2  top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
          
          {/* experience items */}
          <div className="space-y-12">
            {Experiences.map((exp,idx)=> (
              <div 
              key={idx}
              className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
              style={{ animationDelay: `${150 + (idx*150)}ms`}}
            >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-75"/>
                  )}
                </div>

                {/* content */}
                <div 
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 
                    ? "md:pr-16 md:text-right" 
                    : "md:col-start-2 md:pl-16"
                  }`}>
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 text-xs
                      ${idx%2 === 0 
                        ? "md:justify-end"
                        : ""
                      }
                      `}>
                      {exp.technologies.map((tech,idx)=> (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground" 
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

    </section>
  )
}