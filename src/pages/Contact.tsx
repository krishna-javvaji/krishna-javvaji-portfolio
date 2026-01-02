import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { krishnaInfo } from '@/data/krishna';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Contact page with form and contact information
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Krishna Javvaji"
        description={`Get in touch with ${krishnaInfo.name} for data engineering projects, collaborations, and consulting.`}
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
                Let's Talk
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Get in touch for collaborations and opportunities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-wide">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Fill out the form below and I'll get back to you soon. {krishnaInfo.availability}
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-wide">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Prefer to reach out directly? Here's how you can contact me.
                  </p>
                </div>

                <Separator />

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-accent">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${krishnaInfo.email}`}
                        className="text-base md:text-lg font-light hover:text-primary transition-colors"
                      >
                        {krishnaInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-accent">
                      <Phone className="size-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Phone</p>
                      <a
                        href={`tel:${krishnaInfo.phone}`}
                        className="text-base md:text-lg font-light hover:text-primary transition-colors"
                      >
                        {krishnaInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-md bg-accent">
                      <MapPin className="size-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Location</p>
                      <p className="text-base md:text-lg font-light">{krishnaInfo.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm font-light tracking-wide text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-4">
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
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
