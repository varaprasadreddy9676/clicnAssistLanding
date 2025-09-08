import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download, Radio } from 'lucide-react';
import heroImage from '@/assets/hero-hologram.jpg';

const Hero = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const sampleTranscript = [
    "Doctor: Good morning, how are you feeling today?",
    "Patient: I've been having some chest pain and shortness of breath.",
    "Doctor: When did these symptoms start?",
    "Patient: About three days ago, especially when I climb stairs.",
  ];

  const startDemo = () => {
    setIsTyping(true);
    setTranscript('');
    setShowSummary(false);

    let currentIndex = 0;
    let currentText = '';

    const typeWriter = () => {
      if (currentIndex < sampleTranscript.length) {
        const currentLine = sampleTranscript[currentIndex];
        if (currentText.length < currentLine.length) {
          currentText += currentLine[currentText.length];
          setTranscript(prev => {
            const lines = prev.split('\n');
            lines[currentIndex] = currentText;
            return lines.join('\n');
          });
          setTimeout(typeWriter, 50);
        } else {
          currentIndex++;
          currentText = '';
          if (currentIndex < sampleTranscript.length) {
            setTranscript(prev => prev + '\n');
            setTimeout(typeWriter, 500);
          } else {
            setTimeout(() => {
              setShowSummary(true);
              setIsTyping(false);
            }, 1500);
          }
        }
      }
    };

    typeWriter();
  };

  return (
    <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon-glow rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero text-foreground leading-tight">
                Turn every consultation into{' '}
                <span className="text-gradient">clarity</span>.
              </h1>
              
              <p className="text-body text-lg max-w-lg">
                ClinicAssist listens to doctor-patient conversations, creates structured clinical notes, 
                and delivers simple patient prescriptions — privately and instantly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-hover font-medium px-8 py-3 rounded-hero"
              >
                <Play className="mr-2 h-5 w-5" />
                See Interactive Demo
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 font-medium px-8 py-3 rounded-hero"
              >
                <Download className="mr-2 h-5 w-5" />
                Download 1-page proposal
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Canvas */}
          <div className="relative">
            <div className="card-surface p-8 rounded-hero">
              <img
                src={heroImage}
                alt="Holographic doctor and patient with voice waveform"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Interactive Demo Elements */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Button
                    onClick={startDemo}
                    disabled={isTyping}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90 animate-pulse-glow"
                  >
                    <Radio className="mr-2 h-4 w-4" />
                    {isTyping ? 'Recording...' : 'Start Demo'}
                  </Button>
                  
                  {isTyping && (
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-primary animate-waveform"></div>
                      <div className="w-1 h-4 bg-primary animate-waveform" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-4 bg-primary animate-waveform" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-4 bg-primary animate-waveform" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                  )}
                </div>

                {transcript && (
                  <div className="bg-surface/50 p-4 rounded-lg border border-border/50">
                    <h4 className="text-sm font-medium text-foreground mb-2">Live Transcript:</h4>
                    <div className="text-small space-y-1">
                      {transcript.split('\n').map((line, index) => (
                        <div key={index} className={line.startsWith('Doctor:') ? 'text-primary' : 'text-secondary'}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {showSummary && (
                  <div className="bg-card-gradient p-4 rounded-lg border border-primary/20 glow-primary">
                    <h4 className="text-sm font-medium text-foreground mb-2">Clinical Summary:</h4>
                    <div className="text-small space-y-1 text-muted">
                      <div><strong>Chief Complaint:</strong> Chest pain, shortness of breath</div>
                      <div><strong>Duration:</strong> 3 days</div>
                      <div><strong>Triggers:</strong> Physical exertion (stairs)</div>
                      <div><strong>Next Steps:</strong> ECG, chest X-ray recommended</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;