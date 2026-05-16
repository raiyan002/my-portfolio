import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../component/AnimatedBorderButton";

const projects = [
  {
    title: "Tic Tac Toe 2.0",
    description: "A strategic twist on classic Tic-Tac-Toe featuring dynamic moving pieces and AI gameplay.",
    Image: "/assets/projects/tic-tac-toe-2.0-proj.png",
    tags: ["Angular", "TypeScript", "RxJS"],
    link: "https://tic-tac-toe-2-0-flax.vercel.app/",
    github: "https://github.com/raiyan002/tic-tac-toe-2.0"
  },
  // {
  //   title: "Project Two",
  //   description: "An e-commerce platform that provides a seamless shopping experience with advanced search and personalized recommendations.",
  //   Image: "/assets/projects/project2.png",
  //   tags: ["Next.js", "GraphQL", "PostgreSQL"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Project Three",
  //   description: "A real-time chat application that supports group conversations, file sharing, and video calls.",
  //   Image: "/assets/projects/project3.png",
  //   tags: ["Angular", "Firebase", "WebRTC"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Project Four",
  //   description: "A task management tool that helps teams collaborate and stay organized with features like Kanban boards and time tracking.",
  //   Image: "/assets/projects/project4.png",
  //   tags: ["React", "TypeScript", "Tailwind CSS"],
  //   link: "#",
  //   github: "#",
  // }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that 
            <span className="font-serif italic font-normal text-white"> make a difference</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects that showcase my skills in building impactful digital products. Each project reflects my commitment to quality, innovation, and user-centric design.
          </p>
        </div>

        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${100 + idx * 100}ms`,
              }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.Image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/50
                  to-transparent opacity-60"
                />

                {/* overlay link */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5"/>
                  </a>
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <Github className="w-5 h-5"/>
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight 
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1
                    group-hover:-translate-y-1 transition-all"
                    onClick={() => window.open(project.link, '_blank')}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                ))}</div>
              </div>
            </div>
            
          ))}

        </div>

        {/* view all cta */}

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <ArrowUpRight className="w-5 h-5"/>
            View All Projects
          </AnimatedBorderButton>
        </div>
      </div>

    </section>
  )
}