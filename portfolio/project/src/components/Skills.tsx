import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain, 
  Palette, 
  Globe 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 90, color: 'from-blue-500 to-blue-600' },
      { name: 'HTML/CSS', level: 85, color: 'from-orange-500 to-orange-600' },
      { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-yellow-600' },
      { name: 'SQL', level: 80, color: 'from-green-500 to-green-600' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', level: 85, color: 'from-purple-500 to-purple-600' },
      { name: 'Deep Learning', level: 75, color: 'from-indigo-500 to-indigo-600' },
      { name: 'Neural Networks', level: 70, color: 'from-pink-500 to-pink-600' },
      { name: 'Natural Language Processing', level: 65, color: 'from-teal-500 to-teal-600' },
    ],
  },
  {
    title: 'Data Analytics',
    icon: BarChart3,
    skills: [
      { name: 'Power BI', level: 90, color: 'from-yellow-500 to-orange-500' },
      { name: 'Data Visualization', level: 85, color: 'from-green-500 to-blue-500' },
      { name: 'Statistical Analysis', level: 80, color: 'from-red-500 to-red-600' },
      { name: 'Data Mining', level: 75, color: 'from-purple-500 to-pink-500' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Database,
    skills: [
      { name: 'Pandas & NumPy', level: 85, color: 'from-blue-500 to-teal-500' },
      { name: 'Scikit-learn', level: 80, color: 'from-orange-500 to-red-500' },
      { name: 'TensorFlow', level: 70, color: 'from-orange-500 to-yellow-500' },
      { name: 'Jupyter Notebook', level: 90, color: 'from-gray-500 to-gray-600' },
    ],
  },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across various domains of AI, data science, and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress
                            value={inView ? skill.level : 0}
                            className="h-2"
                          />
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut" 
                            }}
                            className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-blue-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                I believe in lifelong learning and constantly updating my skills to stay current 
                with the rapidly evolving field of AI and data science. Currently exploring 
                advanced topics in generative AI, computer vision, and cloud computing.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}