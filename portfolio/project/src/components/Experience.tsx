import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    company: 'Cognifyz Technologies',
    position: 'Data Science Intern',
    period: 'May 2025 - June 2025',
    location: 'Remote',
    type: 'Internship',
    description: 'Working on advanced data science projects involving machine learning model development, data analysis, and business intelligence solutions.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Statistical Modeling'],
    highlights: [
      'Developed predictive models for business forecasting',
      'Performed comprehensive data analysis and visualization',
      'Collaborated with cross-functional teams on AI solutions',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Intel Unnati Labs',
    position: 'AI Research Intern',
    period: 'July 2024 - August 2024',
    location: 'Hybrid',
    type: 'Research Internship',
    description: 'Participated in cutting-edge AI research projects focusing on deep learning applications and neural network optimization.',
    technologies: ['Deep Learning', 'TensorFlow', 'Python', 'Neural Networks'],
    highlights: [
      'Researched advanced deep learning architectures',
      'Optimized neural network performance for real-world applications',
      'Contributed to open-source AI projects',
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through internships and professional experiences in AI and data science,
            where I've applied theoretical knowledge to solve real-world challenges.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background z-10"></div>

                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="secondary" className={`bg-gradient-to-r ${experience.color} text-white`}>
                          {experience.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{experience.position}</h3>
                      
                      <div className="flex items-center mb-3 text-muted-foreground">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{experience.company}</span>
                        <MapPin className="h-4 w-4 ml-4 mr-1" />
                        <span>{experience.location}</span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Looking Forward</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                I'm actively seeking new opportunities to apply my skills in AI and data science.
                Open to full-time positions, research opportunities, and challenging projects
                that push the boundaries of what's possible with artificial intelligence.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}