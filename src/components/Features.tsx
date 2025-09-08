import { Mic, Users, FileText, Shield, Plug, Smartphone } from 'lucide-react';
import { useRevealAnimation } from '@/hooks/useParallax';

const Features = () => {
  const { elementRef: sectionRef, isRevealed: sectionRevealed } = useRevealAnimation({ threshold: 0.2 });
  const { elementRef: titleRef, isRevealed: titleRevealed } = useRevealAnimation({ threshold: 0.8, delay: 200 });
  const { elementRef: gridRef, isRevealed: gridRevealed } = useRevealAnimation({ threshold: 0.6, delay: 400 });
  const features = [
    {
      icon: Mic,
      title: 'Local Transcription (Whisper)',
      description: 'Offline audio-to-text. Audio never leaves the device.',
      color: 'text-primary',
      techDetails: {
        implementation: 'OpenAI Whisper Base Model',
        performance: '~1.2s processing time per minute of audio',
        accuracy: '95%+ on medical terminology',
        languages: 'English, Spanish, Hindi support',
        size: '150MB model size',
        hardware: 'Runs on-device, no internet required'
      }
    },
    {
      icon: Users,
      title: 'Speaker Separation',
      description: 'Distinguish doctor, patient, attendant automatically.',
      color: 'text-secondary',
      techDetails: {
        implementation: 'PyAnnote Audio Pipeline',
        performance: 'Real-time voice activity detection',
        accuracy: '90%+ speaker diarization accuracy',
        model: 'Pre-trained on medical conversations',
        processing: '<500ms latency per utterance',
        output: 'Timestamped speaker labels'
      }
    },
    {
      icon: FileText,
      title: 'Structured Summaries',
      description: 'SOAP, medications, advice, follow-ups in JSON.',
      color: 'text-neon-glow',
      techDetails: {
        implementation: 'Custom NLP pipeline + GPT-3.5',
        format: 'Standardized SOAP note structure',
        extraction: 'Named Entity Recognition (NER)',
        entities: 'Medications, diagnoses, procedures',
        validation: 'JSON Schema validation',
        export: 'FHIR R4 compatible format'
      }
    },
    {
      icon: Shield,
      title: 'PII Masking & Consent',
      description: 'Auto-detects personal data and replaces it before cloud calls.',
      color: 'text-primary',
      techDetails: {
        implementation: 'SpaCy + Presidio framework',
        detection: 'Regex + ML-based PII detection',
        masking: 'Token replacement with placeholders',
        types: 'Names, addresses, phone numbers, SSNs',
        compliance: 'HIPAA & GDPR compliant',
        encryption: 'AES-256 end-to-end encryption'
      }
    },
    {
      icon: Plug,
      title: 'Pluggable Export',
      description: 'JSON/CSV/FHIR-lite mock exports ready to integrate.',
      color: 'text-secondary',
      techDetails: {
        implementation: 'Modular export adapters',
        formats: 'JSON, CSV, HL7 FHIR R4',
        apis: 'RESTful endpoints with OpenAPI spec',
        auth: 'JWT token-based authentication',
        integration: 'Webhook support for real-time sync',
        compatibility: 'EHR systems (Epic, Cerner, Allscripts)'
      }
    },
    {
      icon: Smartphone,
      title: 'Patient Reminders',
      description: 'WhatsApp & SMS templates for medicine & appointment reminders.',
      color: 'text-neon-glow',
      techDetails: {
        implementation: 'Twilio + WhatsApp Business API',
        templates: 'Personalized message templates',
        scheduling: 'Cron-based reminder system',
        languages: 'Multi-language support (15+ languages)',
        delivery: '99%+ SMS delivery rate',
        optOut: 'Built-in unsubscribe handling'
      }
    }
  ];

  return (
    <section ref={sectionRef} id="features" className={`space-section bg-surface/20 relative transition-all duration-1000 ${sectionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container-custom">
        <div ref={titleRef} className={`text-center mb-12 transition-all duration-1000 delay-200 ${titleRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-h2 text-foreground mb-4">
            <span className="text-gradient">Features</span>
          </h2>
        </div>

        <div ref={gridRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${gridRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div key={index} className="group animate-scroll-parallax flip-card" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="flip-card-inner h-full">
                {/* Front of card */}
                <div className="flip-card-front card-surface p-4 rounded-lg interactive-hover h-full">
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 p-2 rounded-lg bg-background/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-gradient transition-colors leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover hint */}
                  <div className="absolute bottom-3 right-3 text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Hover for tech details
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-back card-surface p-4 rounded-lg h-full bg-gradient-to-br from-surface to-surface/80 overflow-hidden">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`flex-shrink-0 p-2 rounded-lg bg-background/50 ${feature.color}`}>
                        <feature.icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground text-gradient leading-tight">
                        {feature.title}
                      </h3>
                    </div>

                    <div className="flex-1 space-y-2 overflow-y-auto">
                      {Object.entries(feature.techDetails).slice(0, 4).map(([key, value]) => (
                        <div key={key} className="border-l-2 border-primary/30 pl-2">
                          <div className="text-xs text-muted uppercase tracking-wide mb-0.5 leading-none">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-xs text-foreground font-medium leading-tight">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 text-center">
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-full text-xs text-primary font-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                        Tech Details
                      </div>
                    </div>
                  </div>
                </div>
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