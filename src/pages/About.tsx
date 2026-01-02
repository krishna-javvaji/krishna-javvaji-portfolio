import { motion } from 'framer-motion';
import { Linkedin, Github, Download, Award, GraduationCap, Briefcase } from 'lucide-react';
import { krishnaInfo } from '@/data/krishna';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import krishnaProfileImg from '@/assets/krishna-profile.png';

/**
 * About page with Krishna's biography and professional information
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About Krishna Javvaji"
        description={`Learn about ${krishnaInfo.name}, ${krishnaInfo.title}. ${krishnaInfo.heroIntroduction}`}
        image={krishnaProfileImg}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-wide mb-4">
                About Me
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {krishnaInfo.title} | {krishnaInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Portrait Image */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end">
                  <img
                    src={krishnaProfileImg}
                    alt="Krishna Javvaji"
                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                  />
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {krishnaInfo.socialLinks.linkedin && (
                    <a
                      href={krishnaInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-md hover:bg-accent hover:border-primary/50 transition-colors"
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
                      className="p-3 border border-border rounded-md hover:bg-accent hover:border-primary/50 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                  <Button
                    variant="outline"
                    size="default"
                    className="gap-2"
                  >
                    <Download className="size-4" />
                    Download CV
                  </Button>
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-wide">
                    {krishnaInfo.name}
                  </h2>
                  <p className="text-xl text-primary font-light tracking-wide">
                    {krishnaInfo.title}
                  </p>
                </div>

                <Separator />

                {/* Summary */}
                <div className="space-y-4">
                  <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    {krishnaInfo.heroIntroduction}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${krishnaInfo.email}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {krishnaInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Phone: </span>
                    <a
                      href={`tel:${krishnaInfo.phone}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {krishnaInfo.phone}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{krishnaInfo.location}</span>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Status: </span>
                    <span className="text-primary">{krishnaInfo.availability}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <Award className="size-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-heading font-medium">
                  Certifications
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid gap-4">
              {krishnaInfo.certifications.map((cert, index) => (
                <ScrollReveal key={cert} delay={index * 0.1}>
                  <motion.div
                    className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <p className="font-light text-foreground">{cert}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-center mb-12">
                Technical Skills
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              {krishnaInfo.skills.map((skill, index) => (
                <ScrollReveal key={skill.name} delay={index * 0.1}>
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm font-light">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="h-3 bg-skill-bar-bg rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border bg-card">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <Briefcase className="size-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-heading font-medium">
                  Work Experience
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="space-y-8">
              {krishnaInfo.experience.map((exp, index) => (
                <ScrollReveal key={exp.company} delay={index * 0.1}>
                  <motion.div
                    className="p-6 rounded-lg bg-background border border-border"
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-foreground">{exp.title}</h3>
                        <p className="text-primary font-light">{exp.company}</p>
                      </div>
                      <p className="text-sm text-muted-foreground font-light mt-1 md:mt-0">{exp.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm font-light text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <GraduationCap className="size-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-heading font-medium">
                  Education
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-6">
              {krishnaInfo.education.map((edu, index) => (
                <ScrollReveal key={edu.institution} delay={index * 0.1}>
                  <motion.div
                    className="p-6 rounded-lg bg-card border border-border"
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="text-lg font-medium text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-primary font-light mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground font-light">{edu.location}</p>
                    <div className="flex justify-between mt-3 pt-3 border-t border-border">
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                      <span className="text-sm text-primary">GPA: {edu.gpa}</span>
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
