import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download, Radio } from 'lucide-react';
import heroImage from '@/assets/hero-hologram.jpg';
import { useMultiLayerParallax, useScrollProgress } from '@/hooks/useParallax';

const Hero = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const { backgroundRef, midgroundRef, foregroundRef, mouseLayerRef } = useMultiLayerParallax();
  const scrollProgress = useScrollProgress();

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
      {/* Advanced Parallax Background Layers */}
      <div ref={backgroundRef} className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Deep space particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-particle-drift"></div>
        <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-secondary rounded-full animate-particle-drift" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-neon-glow rounded-full animate-particle-drift" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Midground Parallax Layer */}
      <div ref={midgroundRef} className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon-glow rounded-full animate-float-fast" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary rounded-full animate-float-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Mouse-tracking parallax layer */}
      <div ref={mouseLayerRef} className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-rotate-3d"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-secondary/40 rounded-full animate-rotate-3d" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Foreground Parallax Layer */}
      <div ref={foregroundRef} className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-16 right-16 w-4 h-4 border-2 border-primary rounded-full animate-parallax-float"></div>
        <div className="absolute bottom-16 left-16 w-3 h-3 border-2 border-secondary rounded-full animate-parallax-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-50">
        <div 
          className="h-full bg-primary-gradient transition-all duration-300 ease-smooth"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="container-custom py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div ref={mouseLayerRef} className="space-y-8 animate-parallax-mouse">
            <div className="space-y-6">
              <h1 className="text-hero text-foreground leading-tight animate-scroll-parallax">
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
                onClick={(e) => {
                  console.log('Demo button clicked', e);
                  const demoElement = document.getElementById('demo');
                  if (demoElement) {
                    demoElement.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    console.error('Demo element not found');
                  }
                }}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-hover font-medium px-8 py-3 rounded-hero"
                style={{ position: 'relative', zIndex: 10 }}
              >
                <Play className="mr-2 h-5 w-5" />
                See Interactive Demo
              </Button>
              
              <Button
                onClick={(e) => {
                  console.log('Download button clicked', e);
                  try {
                    const proposalData = {
                      title: "ClinicAssist - Voice-to-EMR Assistant",
                      overview: "Privacy-first AI assistant for busy Indian clinics that converts doctor-patient conversations into structured clinical notes and prescriptions.",
                      problem: "Doctors spend 2+ hours daily on documentation, taking time away from patient care.",
                      solution: "Local AI transcription with speaker separation, structured summaries, and automated patient reminders.",
                      tech: "OpenAI Whisper, PyAnnote Audio, Custom NLP, FHIR R4 compatibility",
                      market: "India has 1.2M+ clinics, growing digital health adoption at 25% CAGR",
                      team: "Healthcare + AI experts with proven track record",
                      ask: "Seeking partnerships with clinics for pilot program"
                    };
                    
                    const proposalText = `CLINICASSIST - ONE PAGE PROPOSAL

OVERVIEW
${proposalData.overview}

THE PROBLEM
${proposalData.problem}

OUR SOLUTION
${proposalData.solution}

TECHNOLOGY STACK
${proposalData.tech}

MARKET OPPORTUNITY
${proposalData.market}

TEAM
${proposalData.team}

WHAT WE'RE LOOKING FOR
${proposalData.ask}

Contact: hello@clinicassist.ai | clinicassist.ai`;
                    
                    const blob = new Blob([proposalText], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'ClinicAssist-Proposal.txt';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    console.log('Download completed');
                  } catch (error) {
                    console.error('Download failed:', error);
                  }
                }}
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 font-medium px-8 py-3 rounded-hero"
                style={{ position: 'relative', zIndex: 10 }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download 1-page proposal
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Canvas */}
          <div ref={foregroundRef} className="relative animate-parallax-mouse">
            <div className="card-surface p-8 rounded-hero">
              <img
                src={heroImage}
                alt="Holographic doctor and patient with voice waveform"
                className="w-full h-64 object-cover rounded-lg mb-6 animate-scroll-parallax"
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