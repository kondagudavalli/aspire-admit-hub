import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-academic-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                <GraduationCap className="w-6 h-6 text-academic-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold">eCAP</h3>
                <p className="text-sm text-white/70">Electronic College Admission Portal</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Empowering students to achieve their academic dreams through innovative technology 
              and personalized support.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#admissions" className="text-white/80 hover:text-accent transition-colors">Admissions</a></li>
              <li><a href="#programs" className="text-white/80 hover:text-accent transition-colors">Academic Programs</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Student Life</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Financial Aid</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Campus Tours</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Student Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Application Help</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Contact Counselor</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Live Chat</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Status Check</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <div>
                  <p className="text-white/90">123 University Avenue</p>
                  <p className="text-white/70">Education City, EC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white/90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white/90">admissions@ecap.edu</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-white/80">
                <strong>Office Hours:</strong><br />
                Mon-Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © 2024 Electronic College Admission Portal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-accent text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;