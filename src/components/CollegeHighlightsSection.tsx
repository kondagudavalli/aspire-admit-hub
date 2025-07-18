import React from 'react';
import { Users, Award, BookOpen, Globe, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CollegeHighlightsSection = () => {
  const highlights = [
    {
      icon: Users,
      number: "25,000+",
      label: "Active Students",
      description: "Diverse student body from around the world"
    },
    {
      icon: Award,
      number: "95%",
      label: "Graduate Success",
      description: "Employment rate within 6 months of graduation"
    },
    {
      icon: BookOpen,
      number: "200+",
      label: "Academic Programs",
      description: "Undergraduate and graduate degree options"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Represented",
      description: "International student community"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Excellence in Education",
      description: "Ranked among top institutions nationwide with world-class faculty and cutting-edge research opportunities."
    },
    {
      icon: TrendingUp,
      title: "Career Success",
      description: "Strong industry partnerships and career services ensure our graduates are prepared for the modern workforce."
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Rich campus life with over 300 student organizations, sports teams, and cultural activities."
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our Institution?</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover what makes us a leader in higher education and why thousands of students 
            choose us to build their future.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="text-center hover:shadow-card-academic transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">
                      {highlight.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {highlight.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center group-hover:bg-accent-light transition-colors duration-300">
                  <Icon className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card-academic max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Experience Our Campus
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Take a virtual tour or schedule an in-person visit to see what makes our campus special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-button-academic">
                Virtual Tour
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeHighlightsSection;