import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Play, Radio, FileText, Send, Download, Check } from 'lucide-react';
import whatsappImage from '@/assets/whatsapp-preview.jpg';

const InteractiveDemo = () => {
  const [demoState, setDemoState] = useState<'idle' | 'recording' | 'transcribing' | 'summarizing' | 'complete'>('idle');
  const [transcript, setTranscript] = useState('');
  const [showExport, setShowExport] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const sampleTranscript = `Doctor: Good morning, Mrs. Sharma. How are you feeling today?
Patient: I've been having this persistent cough for about two weeks now, and sometimes I feel short of breath.
Doctor: I see. Any fever or chest pain?
Patient: No fever, but there's a slight tightness in my chest when I cough.
Doctor: Let me examine you. Based on your symptoms, I'd like to prescribe some medication and schedule a follow-up.`;

  const summaryData = {
    soap: {
      subjective: "Patient reports persistent cough for 2 weeks with shortness of breath and chest tightness when coughing. No fever.",
      objective: "Physical examination performed.",
      assessment: "Probable respiratory infection",
      plan: "Prescribe medications, schedule follow-up in 1 week"
    },
    medications: [
      { name: "Azithromycin", dosage: "500mg once daily", duration: "3 days" },
      { name: "Salbutamol inhaler", dosage: "2 puffs when needed", duration: "As required" }
    ]
  };

  const startDemo = () => {
    setDemoState('recording');
    setTranscript('');
    setShowExport(false);
    setShowWhatsApp(false);

    // Simulate recording for 3 seconds
    setTimeout(() => {
      setDemoState('transcribing');
      
      // Simulate transcription
      let currentChar = 0;
      const typeTranscript = () => {
        if (currentChar < sampleTranscript.length) {
          setTranscript(sampleTranscript.slice(0, currentChar + 1));
          currentChar++;
          setTimeout(typeTranscript, 30);
        } else {
          setDemoState('complete');
        }
      };
      typeTranscript();
    }, 2000);
  };

  const handleSummarize = () => {
    setDemoState('summarizing');
    setTimeout(() => {
      setDemoState('complete');
    }, 2000);
  };

  return (
    <section id="demo" className="space-section bg-background relative">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h2 text-foreground mb-4">
            Experience it — <span className="text-gradient">demo the flow</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Try a sample consultation or play the recorded demo to see the end-to-end flow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 rounded-lg">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Demo Controls */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={startDemo}
                    disabled={demoState !== 'idle' && demoState !== 'complete'}
                    className={`${
                      demoState === 'recording' 
                        ? 'bg-destructive text-destructive-foreground animate-pulse-glow' 
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    <Radio className="mr-2 h-4 w-4" />
                    {demoState === 'recording' ? 'Recording...' : 'Record Sample'}
                  </Button>

                  {demoState === 'complete' && (
                    <Button
                      onClick={handleSummarize}
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary/10"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Summarize
                    </Button>
                  )}
                </div>

                {/* Waveform Visualization */}
                {(demoState === 'recording' || demoState === 'transcribing') && (
                  <div className="flex items-center justify-center gap-1 p-4 bg-surface/50 rounded-lg">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-primary animate-waveform"
                        style={{
                          height: `${Math.random() * 40 + 10}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Transcript Display */}
                {transcript && (
                  <div className="bg-surface/50 p-4 rounded-lg border border-border/50">
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Radio className="h-4 w-4 text-primary" />
                      Live Transcript:
                    </h4>
                    <div className="text-small text-muted whitespace-pre-wrap max-h-40 overflow-y-auto">
                      {transcript}
                      {demoState === 'transcribing' && (
                        <span className="border-r-2 border-primary animate-blink">|</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {demoState === 'complete' && (
                  <div className="flex gap-3">
                    <Dialog open={showExport} onOpenChange={setShowExport}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Export
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-surface border-border">
                        <DialogHeader>
                          <DialogTitle className="text-foreground">Export Options</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="bg-background p-4 rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">JSON Export:</h4>
                            <pre className="text-xs text-muted overflow-x-auto">
{JSON.stringify(summaryData, null, 2)}
                            </pre>
                          </div>
                          <div className="flex gap-2">
                            <Button className="bg-success text-background">
                              <Check className="mr-2 h-4 w-4" />
                              Download JSON
                            </Button>
                            <Button variant="outline">Download CSV</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog open={showWhatsApp} onOpenChange={setShowWhatsApp}>
                      <DialogTrigger asChild>
                        <Button className="flex-1 bg-success text-background hover:bg-success/90">
                          <Send className="mr-2 h-4 w-4" />
                          Send to Patient
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md bg-surface border-border">
                        <DialogHeader>
                          <DialogTitle className="text-foreground">WhatsApp Preview</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={whatsappImage}
                            alt="Patient WhatsApp prescription preview"
                            className="w-full rounded-lg"
                          />
                          <div className="text-small text-muted text-center">
                            Preview of patient prescription message
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>

              {/* Right - Summary Display */}
              <div className="space-y-4">
                {demoState === 'summarizing' && (
                  <div className="card-surface p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-medium text-foreground">Generating Summary...</span>
                    </div>
                  </div>
                )}

                {(demoState === 'complete' || demoState === 'summarizing') && (
                  <div className="bg-card-gradient p-6 rounded-lg border border-primary/20 glow-primary">
                    <h4 className="font-heading font-semibold text-foreground mb-4">Clinical Summary (SOAP)</h4>
                    
                    <div className="space-y-3 text-small">
                      <div>
                        <strong className="text-primary">Subjective:</strong>
                        <p className="text-muted mt-1">{summaryData.soap.subjective}</p>
                      </div>
                      <div>
                        <strong className="text-primary">Objective:</strong>
                        <p className="text-muted mt-1">{summaryData.soap.objective}</p>
                      </div>
                      <div>
                        <strong className="text-primary">Assessment:</strong>
                        <p className="text-muted mt-1">{summaryData.soap.assessment}</p>
                      </div>
                      <div>
                        <strong className="text-primary">Plan:</strong>
                        <p className="text-muted mt-1">{summaryData.soap.plan}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/50">
                      <h5 className="font-medium text-foreground mb-3">Medications:</h5>
                      <div className="space-y-2">
                        {summaryData.medications.map((med, index) => (
                          <div key={index} className="bg-surface/50 p-3 rounded">
                            <div className="font-medium text-secondary">{med.name}</div>
                            <div className="text-small text-muted">{med.dosage} • {med.duration}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Fallback Video Option */}
            <div className="mt-8 pt-6 border-t border-border/50 text-center">
              <Button variant="outline" className="border-muted text-muted hover:bg-muted/10">
                <Play className="mr-2 h-4 w-4" />
                Play Demo Video (Alternative)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;