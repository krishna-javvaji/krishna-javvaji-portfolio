import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

/**
 * Portfolio page with projects grid
 */
export default function Portfolio() {
  return (
    <>
      <SEOHead 
        title="Portfolio - Krishna Javvaji"
        description="Browse Krishna Javvaji's portfolio of data engineering projects, research work, and technical implementations."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-wide mb-4">
                My Works
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                A collection of projects spanning data engineering, machine learning, and DevOps
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-12 md:py-16 px-2 md:px-4">
          <PortfolioGrid projects={projects} />
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
