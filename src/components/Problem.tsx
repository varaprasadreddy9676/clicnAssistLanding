import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, FileX } from 'lucide-react';
import problemImage from '@/assets/problem-chaos.jpg';

const Problem = () => {
  const stats = [
    {
      icon: Clock,
      stat: '40–60 patients/day',
      description: 'in many clinics — doctors have <4 minutes per patient.'
    },
    {
      icon: Users,
      stat: '60% of instructions',
      description: 'are forgotten within an hour.'
    },
    {
      icon: FileX,
      stat: 'Multiple HIMS/EMRs',
      description: 'with incompatible formats make records unusable.'
    }
  ];

  return (
    <section className="space-section bg-background relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-h2 text-foreground">
              Doctors are <span className="text-gradient">overloaded</span>.
              <br />
              Patients are <span className="text-gradient">confused</span>.
            </h2>

            <div className="space-y-6">
              {stats.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-surface border border-border/50 group-hover:border-primary/50 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-foreground mb-1">
                      {item.stat}
                    </div>
                    <div className="text-small text-muted">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 group"
            >
              Why this matters
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="card-surface p-6 rounded-lg interactive-hover">
              <img
                src={problemImage}
                alt="Doctor surrounded by paperwork and clock"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-small text-muted italic">
                  Real problem, real clinic workflows.
                </p>
              </div>
            </div>
            
            {/* Floating problem indicators */}
            <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-medium animate-pulse-glow">
              Time Pressure
            </div>
            <div className="absolute -bottom-4 -left-4 bg-warning text-background px-3 py-1 rounded-full text-xs font-medium animate-float">
              Data Loss
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;