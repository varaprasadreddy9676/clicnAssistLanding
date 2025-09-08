import { useState, useEffect } from 'react';
import { Clock, TrendingUp, Wifi, Quote } from 'lucide-react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Clock,
      value: 2,
      suffix: 'min saved',
      description: '~ 2 hours/day per doctor',
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      value: 40,
      suffix: '%',
      description: 'improved medication adherence (projected)',
      color: 'text-secondary'
    },
    {
      icon: Wifi,
      value: 100,
      suffix: '%',
      description: 'works offline for basic transcription',
      color: 'text-neon-glow'
    }
  ];

  const languages = ['English', 'Hindi', 'Telugu', 'Tamil (planned)'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isVisible, value]);

    return (
      <span className="font-heading font-bold text-4xl lg:text-5xl">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section id="impact" className="space-section bg-background relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-foreground mb-4">
            Small changes. <span className="text-gradient">Big impact</span>.
          </h2>
        </div>

        {/* Stats Counters */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="card-surface p-8 rounded-lg interactive-hover">
                <div className={`inline-flex p-4 rounded-full bg-background/50 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                
                <div className={`${stat.color} mb-2`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </div>
                
                <p className="text-small text-muted font-medium">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-elevated p-8 rounded-lg">
            <div className="text-center">
              <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
              <blockquote className="text-body text-lg text-foreground leading-relaxed mb-6">
                "ClinicAssist saved me two hours every clinic day — I can actually listen to patients."
              </blockquote>
              <footer className="text-small text-muted">
                <cite className="font-medium">— Dr. S. Sharma, GP</cite>
              </footer>
            </div>
          </div>
        </div>

        {/* Language Support */}
        <div className="text-center">
          <h3 className="text-h3 text-foreground mb-6">Language Support</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((language, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full border ${
                  language.includes('planned')
                    ? 'border-muted/50 text-muted bg-surface/30'
                    : 'border-primary/30 text-primary bg-primary/10'
                }`}
              >
                <span className="text-small font-medium">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;