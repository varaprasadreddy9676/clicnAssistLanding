import { useState } from 'react';
import { ChevronDown, Shield, UserCheck, Plug } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      icon: Shield,
      question: 'Is audio stored in cloud?',
      answer: 'No — local by default. De-identified text only if cloud summarization enabled.',
      color: 'text-primary'
    },
    {
      icon: UserCheck,
      question: 'Will you automate prescriptions?',
      answer: 'No — clinician reviews summaries before saving.',
      color: 'text-secondary'
    },
    {
      icon: Plug,
      question: 'Can it integrate with our HIMS?',
      answer: 'Yes — via adapters; we will show mocks for the demo.',
      color: 'text-neon-glow'
    }
  ];

  return (
    <section className="space-section bg-surface/20 relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-foreground mb-4">
            Quick <span className="text-gradient">Checks</span>
          </h2>
          <p className="text-body text-muted">
            Common questions from judges and stakeholders
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-surface rounded-lg border border-border/50 overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-surface/50 transition-colors"
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-background/50 ${faq.color}`}>
                      <faq.icon className="h-5 w-5" />
                    </div>
                    <span className="font-heading font-medium text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted transition-transform duration-200 ${
                      openItem === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItem === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-12">
                      <p className="text-body text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Note */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card-gradient rounded-full border border-border/50">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-small text-muted font-medium">
              Demo uses synthetic and consented data only
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;