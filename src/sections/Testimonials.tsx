import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react";

const testimonials = [
  {
    quote: "Raiyan has demonstrated exceptional commitment, technical excellence, and professionalism. His ability to deliver scalable solutions on time while maintaining a strong focus on quality and usability makes him a valuable asset to the team.",
    author: "Anoop Ravi",
    role: "Vice President - Delivery, Digit Insurance",
    avatar: "/assets/Anoop.png"
  },
  {
    quote: "Raiyan consistently delivers high-quality solutions with strong ownership and attention to detail. His problem-solving ability, UI expertise, and debugging skills have made a significant impact on the reliability and user experience of our applications.",
    author: "Aji Bhaskaran",
    role: "Lead Engineer, Digit Insurance ",
    avatar: "/assets/Aji.jpg"
  },
]

export const Testimonials = () => {
  const [activeidx, setActiveidx] = useState(0);  

  const next = () => {
    setActiveidx((prev) => (prev + 1) % testimonials.length);
  }

  const previous = () => {
    setActiveidx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section 
      id="testimonials"
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div 
        className="container mx-auto px-6 relative z-10"
      >
        {/* section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider
          uppercase animate-fade-in animation-delay-100">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 
          animate-fade-in animation-delay-200 text-secondary-foreground">
            Kind words from {" "}
            <span className="font-serif italic text-white">amazing people.</span>
          </h2>
        </div>

        {/* testimonial crousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* main testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in delay-300">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground"/>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeidx].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[activeidx].avatar} 
                  alt={testimonials[activeidx].author} 
                  className="w-14 h-14 rounded-full ring-2 ring-primary/20"
                />
                <div className="flex flex-col justify-center gap-1">
                  <div className="font-semibold">{testimonials[activeidx].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeidx].role}</div>
                </div>
              </div>
            </div>
            {/* testimonial naviation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}>
                <ChevronLeft/>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                <button
                  onClick={() => setActiveidx(index)}
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300
                   ${index === activeidx 
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                   }`}/>
                ))}
              </div>

              <button 
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={next}>
                <ChevronRight/>
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}