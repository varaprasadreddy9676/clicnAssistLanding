import { Mic, Users, FileText, Shield, Plug, Smartphone } from 'lucide-react';

const Solution = () => {
  const steps = [
    {
      icon: Mic,
      title: 'Record locally (Whisper)',
      description: 'secure transcription',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Speaker separation',
      description: 'doctor vs. patient',
      color: 'text-secondary'
    },
    {
      icon: FileText,
      title: 'LLM-assisted structured summary',
      description: 'EMR-ready JSON + patient prescription',
      color: 'text-neon-glow'
    }
  ];

  return (
    <section className="space-section bg-surface/30 relative">
      <div className="container-custom">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-h2 text-foreground mb-6">
            ClinicAssist: <span className="text-gradient">voice → structure → care</span>
          </h2>
        </div>

        {/* Three-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card-surface p-6 rounded-lg interactive-hover text-center h-full">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-background/50 ${step.color}`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-h3 text-foreground mb-2">{step.title}</h3>
                <p className="text-small text-muted">{step.description}</p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/50"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 border-r border-t border-primary/50 transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <div className="card-surface p-8 rounded-lg">
            <p className="text-body text-center leading-relaxed">
              We keep audio processing local for privacy, mask personal details, and produce a 
              clinician-reviewed summary that can be exported to any HIMS format or sent to 
              patients as a clear WhatsApp message.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[
                { icon: Shield, text: 'Privacy First' },
                { icon: Mic, text: 'Local Processing' },
                { icon: Plug, text: 'HIMS Compatible' },
                { icon: Smartphone, text: 'WhatsApp Ready' }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-border/50">
                  <feature.icon className="h-4 w-4 text-primary" />
                  <span className="text-small text-muted font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;