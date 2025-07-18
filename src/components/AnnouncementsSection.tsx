import React from 'react';
import { Bell, Calendar, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "Fall 2024 Application Deadline Extended",
      content: "Good news! We've extended the application deadline for Fall 2024 admissions to March 15th to give students more time to submit their applications.",
      type: "deadline",
      date: "March 10, 2024",
      urgent: true
    },
    {
      id: 2,
      title: "Virtual Campus Tours Available",
      content: "Join our virtual campus tours every Saturday at 2 PM EST. Experience our facilities and academic environment from the comfort of your home.",
      type: "event",
      date: "Every Saturday",
      urgent: false
    },
    {
      id: 3,
      title: "Scholarship Applications Open",
      content: "Merit-based scholarships for incoming freshmen are now available. Apply by April 1st for consideration. Awards range from $5,000 to full tuition.",
      type: "scholarship",
      date: "Due April 1, 2024",
      urgent: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'deadline': return 'bg-destructive text-destructive-foreground';
      case 'event': return 'bg-primary text-primary-foreground';
      case 'scholarship': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Bell className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-3xl font-bold text-primary">Latest Announcements</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest news, deadlines, and opportunities from our admissions office.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-card-academic transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getTypeColor(announcement.type)} variant="secondary">
                    {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                  </Badge>
                  {announcement.urgent && (
                    <Badge variant="destructive" className="animate-pulse">
                      Urgent
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {announcement.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {announcement.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {announcement.content}
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary">
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            <Clock className="mr-2 w-5 h-5" />
            View All Announcements
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;