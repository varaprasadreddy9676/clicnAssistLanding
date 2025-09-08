import { Mic, Users, FileText, Shield, Plug, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Mic,
      title: 'Local Transcription (Whisper)',
      description: 'Offline audio-to-text. Audio never leaves the device.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Speaker Separation',
      description: 'Distinguish doctor, patient, attendant automatically.',
      color: 'text-secondary'
    },
    {
      icon: FileText,
      title: 'Structured Summaries',
      description: 'SOAP, medications, advice, follow-ups in JSON.',
      color: 'text-neon-glow'
    },
    {
      icon: Shield,
      title: 'PII Masking & Consent',
      description: 'Auto-detects personal data and replaces it before cloud calls.',
      color: 'text-primary'
    },
    {
      icon: Plug,
      title: 'Pluggable Export',
      description: 'JSON/CSV/FHIR-lite mock exports ready to integrate.',
      color: 'text-secondary'
    },
    {
      icon: Smartphone,
      title: 'Patient Reminders',
      description: 'WhatsApp & SMS templates for medicine & appointment reminders.',
      color: 'text-neon-glow'
    }
  ];

  return (
    <section id="features" className="space-section bg-surface/20 relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-foreground mb-4">
            <span className="text-gradient">Features</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="card-surface p-6 rounded-lg interactive-hover h-full">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-background/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h3 text-foreground mb-2 group-hover:text-gradient transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-small text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card-gradient rounded-full border border-border/50">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-small text-muted font-medium">
              Privacy-first architecture • Local processing • HIPAA-ready design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;