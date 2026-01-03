import { motion } from 'framer-motion';
import { krishnaInfo } from '@/data/krishna';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Database, Settings, Brain, Sparkles, Download, Linkedin, Github, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import krishnaProfileImg from '@/assets/krishna-profile.png';

/**
 * Krishna Javvaji Portfolio Homepage
 * Features hero, about, skills, services, projects, and testimonials
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'database': return <Database className="size-8 text-primary" />;
      case 'settings': return <Settings className="size-8 text-primary" />;
      case 'brain': return <Brain className="size-8 text-primary" />;
      case 'sparkles': return <Sparkles className="size-8 text-primary" />;
      default: return <Database className="size-8 text-primary" />;
    }
  };

  return (
    <>
      <SEOHead 
        title="Krishna Javvaji - Data Engineer"
        description="Krishna Javvaji - Data Engineer specializing in Data Engineering, Machine Learning, AI, ETL, and DevOps."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end">
          {/* Geometric Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="triangles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <polygon points="50,0 100,100 0,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#triangles)" className="text-copper" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-24">
              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <motion.p
                    className="text-lg font-light tracking-wide text-hero-foreground-muted"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Hey! I am
                  </motion.p>
                  <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-wide text-hero-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {krishnaInfo.name}
                  </motion.h1>
                  <motion.p
                    className="text-2xl md:text-3xl font-light text-hero-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {krishnaInfo.title}
                  </motion.p>
                  <motion.p
                    className="text-lg font-light text-hero-foreground-muted max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                  >
                    {krishnaInfo.tagline}
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-transparent border border-hero-foreground/50 text-hero-foreground hover:bg-hero-foreground/10"
                  >
                    <Link to="/portfolio">View Works</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right - Profile Image */}
              <motion.div
                className="relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={krishnaProfileImg}
                    alt="Krishna Javvaji"
                    className="w-full max-w-md lg:max-w-lg object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* About Text */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-wide">
                    About Me
                  </h2>
                  <p className="text-lg font-light leading-relaxed text-muted-foreground">
                    {krishnaInfo.heroIntroduction}
                  </p>
                  <p className="text-base font-light leading-relaxed text-muted-foreground">
                    {krishnaInfo.biography.split('\n\n').slice(0, 2).join(' ')}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="default"
                      className="gap-2"
                    >
                      <Download className="size-4" />
                      Download CV
                    </Button>
                    {krishnaInfo.socialLinks.linkedin && (
                      <a
                        href={krishnaInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded-md hover:bg-accent transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="size-5" />
                      </a>
                    )}
                    {krishnaInfo.socialLinks.github && (
                      <a
                        href={krishnaInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-border rounded-md hover:bg-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="size-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  <h3 className="text-xl font-heading font-medium">My Skills</h3>
                  <div className="space-y-5">
                    {krishnaInfo.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between text-sm font-light">
                          <span>{skill.name}</span>
                          <span className="text-primary">{skill.percentage}%</span>
                        </div>
                        <div className="h-2 bg-skill-bar-bg rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-wide">
                  What I Do
                </h2>
                <p className="text-lg text-muted-foreground font-light">
                  What I can do for you
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {krishnaInfo.services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.1}>
                  <motion.div
                    className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center space-y-4"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-center">
                      {getServiceIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-heading font-medium">{service.title}</h3>
                    <p className="text-muted-foreground font-light text-sm">{service.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-wide">
                My Works
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                A selection of recent projects
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-primary transition-colors"
              >
                <span>More Works</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-card">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-wide">
                  Testimonials
                </h2>
                <p className="text-lg text-muted-foreground font-light">
                  What people say about me
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {krishnaInfo.testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} delay={index * 0.1}>
                  <motion.div
                    className="p-6 rounded-lg bg-background border border-border space-y-4"
                    whileHover={{ y: -3 }}
                  >
                    <p className="text-muted-foreground font-light text-sm italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
