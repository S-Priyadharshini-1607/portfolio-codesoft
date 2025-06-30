import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Database, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Passionate about artificial intelligence and its applications in solving complex problems.',
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Skilled in data analysis, visualization, and extracting insights from complex datasets.',
  },
  {
    icon: Code,
    title: 'ML Developer',
    description: 'Experienced in building machine learning models and implementing AI solutions.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics Expert',
    description: 'Proficient in business intelligence tools and data-driven decision making.',
  },
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated AI & Data Science student with a strong foundation in machine learning,
            data analytics, and business intelligence. My journey combines academic excellence with
            practical experience through internships and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-background/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Currently pursuing B.Tech in AI & Data Science at Arunai Engineering College
                    with a strong academic record (CGPA: 8.8/10). I've gained practical experience
                    through internships at Intel Unnati Labs and Cognifyz Technologies, where I
                    worked on cutting-edge AI and data analytics projects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My expertise spans across Python programming, machine learning algorithms,
                    data visualization with Power BI, and various AI technologies. I'm passionate
                    about continuous learning and staying updated with the latest trends in AI and
                    data science.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-500">8.8</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-500">2+</div>
                    <div className="text-sm text-muted-foreground">Internships</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold text-green-500">10+</div>
                    <div className="text-sm text-muted-foreground">Certificates</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-500">5+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}