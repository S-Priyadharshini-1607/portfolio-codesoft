import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Artificial Intelligence',
    issuer: 'IBM',
    date: '2024',
    category: 'AI/ML',
    description: 'Comprehensive training in AI fundamentals, machine learning algorithms, and practical applications.',
    skills: ['Machine Learning', 'AI Ethics', 'Neural Networks'],
    color: 'from-blue-600 to-blue-700',
    logo: '🏢', // Using emoji as placeholder for company logos
  },
  {
    title: 'Generative AI Fundamentals',
    issuer: 'Google Cloud',
    date: '2024',
    category: 'AI/ML',
    description: 'Advanced course on generative AI models, including GPT, DALL-E, and practical implementation.',
    skills: ['Generative AI', 'Large Language Models', 'Prompt Engineering'],
    color: 'from-green-500 to-green-600',
    logo: '🌐',
  },
  {
    title: 'GPT & Language Models',
    issuer: 'OpenAI',
    date: '2024',
    category: 'NLP',
    description: 'Specialized training in GPT models, fine-tuning, and natural language processing applications.',
    skills: ['GPT Models', 'NLP', 'Text Generation'],
    color: 'from-purple-500 to-purple-600',
    logo: '🤖',
  },
  {
    title: 'Power BI Data Analytics',
    issuer: 'Microsoft',
    date: '2024',
    category: 'Data Analytics',
    description: 'Professional certification in Power BI for business intelligence and data visualization.',
    skills: ['Power BI', 'Data Visualization', 'Business Intelligence'],
    color: 'from-yellow-500 to-orange-500',
    logo: '📊',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Cisco',
    date: '2024',
    category: 'Security',
    description: 'Foundation course in cybersecurity principles, threat detection, and security protocols.',
    skills: ['Network Security', 'Threat Analysis', 'Security Protocols'],
    color: 'from-red-500 to-red-600',
    logo: '🔒',
  },
  {
    title: 'Data Science with Python',
    issuer: 'Coursera',
    date: '2023',
    category: 'Data Science',
    description: 'Comprehensive program covering data analysis, visualization, and machine learning with Python.',
    skills: ['Python', 'Data Analysis', 'Statistical Modeling'],
    color: 'from-indigo-500 to-indigo-600',
    logo: '🐍',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'Andrew Ng - Coursera',
    date: '2023',
    category: 'AI/ML',
    description: 'Advanced deep learning course covering neural networks, CNNs, RNNs, and optimization.',
    skills: ['Deep Learning', 'CNNs', 'RNNs', 'TensorFlow'],
    color: 'from-teal-500 to-teal-600',
    logo: '🧠',
  },
  {
    title: 'Cloud Computing Essentials',
    issuer: 'AWS',
    date: '2023',
    category: 'Cloud',
    description: 'Introduction to cloud computing concepts, AWS services, and cloud architecture.',
    skills: ['AWS', 'Cloud Architecture', 'Serverless Computing'],
    color: 'from-orange-500 to-orange-600',
    logo: '☁️',
  },
];

const categories = ['All', 'AI/ML', 'Data Analytics', 'NLP', 'Security', 'Data Science', 'Cloud'];

export function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through professional certifications and courses
            from industry-leading organizations and platforms.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'hover:bg-blue-500/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${certificate.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {certificate.logo}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {certificate.category}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Award className="h-4 w-4 mr-1" />
                      <span className="font-medium">{certificate.issuer}</span>
                      <Calendar className="h-4 w-4 ml-4 mr-1" />
                      <span>{certificate.date}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {certificate.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-1">
                      {certificate.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-500 group-hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-500 mb-2">10+</div>
                  <div className="text-muted-foreground">Certificates Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-500 mb-2">500+</div>
                  <div className="text-muted-foreground">Learning Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">5+</div>
                  <div className="text-muted-foreground">Skill Areas</div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">Commitment to Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continuously expanding my knowledge through industry-recognized certifications
                  and staying updated with the latest trends in AI, data science, and technology.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}