import { ArrowRight, ChevronDown, Download, Github, Linkedin } from "lucide-react"
import { Button } from "../component/Button"
import { AnimatedBorderButton } from "../component/AnimatedBorderButton"

const skills = [
  "React",
  "Redux",
  "Hooks",
  "Material UI",
  "Angular",
  "RxJS",
  "NGRX Store",
  "Prime NG",
  "Angular Material",
  "TypeScript",
  "Tailwind CSS",
  "JAVA",
  "Spring Boot",
  "MySQL",
  "Data Structures",
  "Algorithms" 
  ];


export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img src="/assets/hero-bg.jpg" alt="hero image" className="w-full h-full object-cover opacity-40"/>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background/full">

      </div>
      {/* green dots float around the screen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map(() => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
          >
          </div>
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Software Engineer • Frontend & UI Systems Specialist
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Designing <span className="text-primary glow-text">scalable, secure, and high-performance</span>
                {/* <br />
                secure and scalable */}
                <br />
                <span className="font-serif italic font-normal text-white">
                  web experiences</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Raiyan Haque — a frontend-focused software engineer with experience building enterprise-grade applications using Angular, React, Redux, RxJS, and TypeScript. Passionate about clean architecture, intuitive UI systems, and solving complex real-world problems through technology.
              </p>
            </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5"/>
                  Download Resume
                </AnimatedBorderButton>
              </div>

              {/* social links */}
              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">Follow me: </span>
                {[
                  {icon: Github, href:"https://github.com/raiyan002"},
                  {icon: Linkedin, href:"https://www.linkedin.com/in/raiyan-haque-9138411bb"}
                ].map((social, index) => {
                  return (
                    <a 
                      key={index} 
                      href={social.href}  
                      className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                      >
                      {<social.icon className="w-5 h-5" />}
                    </a>
                  )
                })}
              </div>
            </div>

          {/* right column - Profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div 
                className="absolute inset-0 rounded-3xl 
                bg-gradient-to-br from-primary/30 
                via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className=" relative glass rounded-3xl p-2 glow-border">
                <img src="/assets/profile-photo-front-dark.png" 
                alt="Raiyan Haque" 
                className="w-full aspect-[4/5] object-cover rounded-2xl" 
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Years EXP.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2
            animate-fade-in animation-delay-800">
          <a 
          href="#about" 
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce"/>
          </a>
        </div>
      </div>
    </section>
  )
}