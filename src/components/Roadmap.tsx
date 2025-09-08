import { useState, useEffect } from 'react';
import { Rocket, Target, BarChart3, CheckCircle } from 'lucide-react';

const Roadmap = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);

  const milestones = [
    {
      icon: CheckCircle,
      title: 'MVP (Hackathon)',
      description: 'Local transcription, summary, mock export, demo site',
      status: 'completed',
      timeframe: 'Current'
    },
    {
      icon: Rocket,
      title: 'v1 (6 months)',
      description: 'Multilingual transcription & real adapter pilots',
      status: 'planned',
      timeframe: '6 months'
    },
    {
      icon: BarChart3,
      title: 'v2 (12 months)',
      description: 'Analytics dashboard & telemedicine integration',
      status: 'future',
      timeframe: '12 months'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-milestone') || '0');
            setVisibleMilestones(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const milestoneElements = document.querySelectorAll('[data-milestone]');
    milestoneElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="space-section bg-surface/30 relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-foreground mb-4">
            <span className="text-gradient">Roadmap</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-milestone={index}
                className={`relative transition-all duration-700 ${
                  visibleMilestones.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-6 md:gap-8">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed'
                        ? 'bg-success text-background animate-pulse-glow'
                        : milestone.status === 'planned'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-surface border-2 border-muted text-muted'
                    }`}>
                      <milestone.icon className="h-6 w-6" />
                    </div>
                    
                    {/* Glow effect for active milestone */}
                    {visibleMilestones.includes(index) && milestone.status !== 'future' && (
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="card-surface p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-h3 text-foreground">{milestone.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          milestone.status === 'completed'
                            ? 'bg-success/20 text-success'
                            : milestone.status === 'planned'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted/20 text-muted'
                        }`}>
                          {milestone.timeframe}
                        </span>
                      </div>
                      
                      <p className="text-body text-muted leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Progress indicator */}
                      {milestone.status === 'completed' && (
                        <div className="mt-4 flex items-center gap-2 text-success">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-small font-medium">Completed</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future Vision */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card-gradient rounded-full border border-border/50">
              <Target className="h-4 w-4 text-secondary" />
              <span className="text-small text-muted font-medium">
                Vision: Transform healthcare documentation across India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;