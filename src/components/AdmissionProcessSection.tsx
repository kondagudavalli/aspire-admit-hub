import React from 'react';
import { FileText, Upload, CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AdmissionProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Complete Application",
      description: "Fill out our comprehensive online application form with your personal and academic information.",
      color: "bg-primary text-primary-foreground"
    },
    {
      icon: Upload,
      title: "Submit Documents",
      description: "Upload your transcripts, letters of recommendation, and any required essays or portfolios.",
      color: "bg-accent text-accent-foreground"
    },
    {
      icon: CheckCircle,
      title: "Review Process",
      description: "Our admissions committee carefully reviews your application and supporting materials.",
      color: "bg-academic-blue text-white"
    },
    {
      icon: GraduationCap,
      title: "Admission Decision",
      description: "Receive your admission decision and begin your journey toward academic excellence.",
      color: "bg-academic-gold text-academic-navy"
    }
  ];

  return (
    <section id="admissions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Simple Admission Process</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Our streamlined four-step process makes applying to college straightforward and stress-free. 
            Follow these steps to begin your academic journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="text-center h-full hover:shadow-card-academic transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="mb-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-muted rounded-full text-sm font-bold text-muted-foreground mb-3">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-academic rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-6 opacity-90">
            Begin your application today and take the first step toward your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start Application
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Download Checklist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcessSection;