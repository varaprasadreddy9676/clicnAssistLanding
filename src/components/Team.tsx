import { Brain, Code, Palette, Database, Smartphone, Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'AI/ML Engineer',
      icon: Brain,
      description: 'Whisper integration, speaker separation, LLM pipelines',
      color: 'text-primary'
    },
    {
      name: 'Priya Sharma',
      role: 'Backend Developer',
      icon: Database,
      description: 'Privacy architecture, local processing, API design',
      color: 'text-secondary'
    },
    {
      name: 'Raj Patel',
      role: 'Frontend Developer',
      icon: Code,
      description: 'React interface, demo interactions, responsive design',
      color: 'text-neon-glow'
    },
    {
      name: 'Sarah Kim',
      role: 'Integration Specialist',
      icon: Smartphone,
      description: 'HIMS adapters, WhatsApp integration, export formats',
      color: 'text-primary'
    },
    {
      name: 'Maya Gupta',
      role: 'UX Designer',
      icon: Palette,
      description: 'User research, clinical workflows, interface design',
      color: 'text-secondary'
    },
    {
      name: 'David Wong',
      role: 'Product Manager',
      icon: Users,
      description: 'Strategy, stakeholder alignment, go-to-market',
      color: 'text-neon-glow'
    }
  ];

  return (
    <section id="team" className="space-section bg-background relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-foreground mb-4">
            <span className="text-gradient">Built by</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="card-surface p-6 rounded-lg interactive-hover h-full">
                <div className="text-center">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-full bg-card-gradient border border-border/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${member.color}`}>
                    <member.icon className="h-8 w-8" />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-h3 text-foreground mb-1">{member.name}</h3>
                  <div className={`text-small font-medium mb-3 ${member.color}`}>
                    {member.role}
                  </div>

                  {/* Description */}
                  <p className="text-small text-muted leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Flip Card Effect on Hover */}
                <div className="absolute inset-0 bg-card-gradient rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <div className="text-center p-4">
                    <member.icon className={`h-12 w-12 mx-auto mb-2 ${member.color}`} />
                    <div className="text-small text-muted">
                      Core contributor to ClinicAssist's {member.role.toLowerCase()} architecture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Mission */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="card-elevated p-6 rounded-lg">
              <p className="text-body text-muted leading-relaxed">
                A multidisciplinary team passionate about solving real healthcare challenges 
                through thoughtful technology that respects privacy and empowers clinicians.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;