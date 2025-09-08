import { Stethoscope, Github, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Demo', href: '#demo' },
    { label: 'Features', href: '#features' },
    { label: 'Team', href: '#team' },
    { label: 'Download', href: '#' }
  ];

  return (
    <footer id="contact" className="bg-surface/40 border-t border-border/50">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left - Logo & Pitch */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <span className="font-heading text-lg font-bold text-foreground">
                  ClinicAssist
                </span>
              </div>
              <p className="text-small text-muted leading-relaxed">
                Because every consultation deserves clarity.
              </p>
            </div>

            {/* Center - Navigation */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {footerLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted hover:text-foreground transition-colors text-left text-small"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right - Contact */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-foreground">Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:team@clinicassist.ai"
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-small"
                >
                  <Mail className="h-4 w-4" />
                  team@clinicassist.ai
                </a>
                <a
                  href="https://github.com/clinicassist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-small"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
                <div className="text-small text-muted">
                  <strong>Hackathon ID:</strong> SIH-2024-HC-001
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA Section */}
        <div className="py-8 border-t border-border/50">
          <div className="text-center space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              Ready to transform your clinic?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('#demo')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-hover"
              >
                Try Interactive Demo
              </Button>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                Download Proposal PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-small text-muted text-center md:text-left">
              © 2024 ClinicAssist. Built with privacy and care.
            </div>
            
            <div className="text-small text-muted text-center md:text-right">
              Demo uses synthetic/consented data only. 
              <br className="md:hidden" />
              <span className="md:ml-2">Privacy-first healthcare technology.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;