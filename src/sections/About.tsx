import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Scalable Architecture",
    description:
      "Building clean, maintainable, and scalable frontend systems using modern Angular architecture, reusable components, and industry best practices.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Enhancing application performance through optimized data handling, efficient API management, lazy loading, and responsive UI design.",
  },
  {
    icon: Users,
    title: "Enterprise Collaboration",
    description:
      "Collaborating across teams to deliver reliable, user-focused enterprise applications with seamless functionality and smooth user experiences.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Solving complex frontend and security challenges through thoughtful engineering, dynamic access control systems, and modern development practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in ">
              <span className="text-secondary-foreground text-sm font-medium  tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the Future,
              <span className="font-serif italic font-normal text-white"> one component at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animatte-fade-in animation-delay-200">
              <p>
                I'm a Software Engineer with experience developing enterprise-grade
                web applications focused on performance, scalability, security, and 
                user experience. My journey into software development started with a 
                strong curiosity for technology and problem-solving, which gradually 
                evolved into a passion for building impactful digital products.
              </p>
              <p>
                I specialize in Angular, React, TypeScript, and modern frontend 
                engineering, with hands-on experience designing responsive UI systems, 
                implementing dynamic RBAC frameworks, optimizing application performance, 
                and developing secure, production-ready applications used at scale.
              </p>
              <p>
                At Digit Insurance, I’ve worked on large-scale insurance platforms 
                where I contributed to building configurable enrollment systems, 
                secure HR and employee portals, real-time data visualization features, 
                and robust document management solutions. I enjoy solving complex 
                frontend challenges while maintaining clean, scalable, and maintainable 
                code architecture.
              </p>
              <p>
                Beyond development, I continuously explore system design, backend technologies, 
                cloud platforms, and modern engineering practices as I progress toward becoming 
                a well-rounded full-stack engineer.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “I believe great software is built at the intersection of performance, 
                usability, scalability, and thoughtful engineering.”
              </p>
            </div>
          </div>

          {/* right column - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
              key={idx} 
              className="glass p-6 rounded-3xl animate-fade-in"
              style={{
                animationDelay: `${100 + idx * 100}ms`,
              }}
              > 
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}