import { motion } from 'framer-motion';
import { Linkedin, Github, Download } from 'lucide-react';
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
        description={`Learn about ${krishnaInfo.name}, ${krishnaInfo.tagline}. ${krishnaInfo.heroIntroduction}`}
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
                Data Engineer & Technology Enthusiast
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
                    {krishnaInfo.tagline}
                  </p>
                </div>

                <Separator />

                {/* Biography */}
                <div className="space-y-4">
                  {krishnaInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
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
      </div>
    </>
  );
}
