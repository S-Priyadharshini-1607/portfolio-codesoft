import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey in artificial intelligence and data science,
            building a strong foundation for my professional career.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border-blue-500/20 hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5"></div>
            <CardContent className="relative p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mb-2">
                        Currently Pursuing
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-bold">Bachelor of Technology</h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-lg">
                      <span className="font-semibold mr-2">Major:</span>
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                        Artificial Intelligence & Data Science
                      </span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span className="font-medium">Arunai Engineering College</span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>2022 - 2026</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                      <h4 className="font-semibold mb-2">Core Subjects</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Machine Learning & Deep Learning</li>
                        <li>• Data Structures & Algorithms</li>
                        <li>• Statistical Analysis</li>
                        <li>• Computer Vision</li>
                      </ul>
                    </div>
                    
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                      <h4 className="font-semibold mb-2">Specializations</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Natural Language Processing</li>
                        <li>• Data Mining & Analytics</li>
                        <li>• Business Intelligence</li>
                        <li>• AI Ethics & Applications</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-right">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-32 h-32 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">8.8</div>
                      <div className="text-sm text-blue-100">CGPA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-end text-yellow-500 mb-2">
                    <Trophy className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Academic Excellence</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Maintaining high academic standards while actively participating in 
                    research projects and industry internships.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="font-semibold mb-4">Academic Achievements & Activities</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-500 mb-1">Top 10%</div>
                    <div className="text-sm text-muted-foreground">Class Ranking</div>
                  </div>
                  <div className="text-center p-4 bg-background/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-500 mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Research Projects</div>
                  </div>
                  <div className="text-center p-4 bg-background/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-500 mb-1">Active</div>
                    <div className="text-sm text-muted-foreground">Club Participation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Academic Goals</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Focused on graduating with honors while building practical experience through
                internships and projects. Planning to pursue advanced research in AI applications
                and contribute to innovative solutions in the field of data science.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}