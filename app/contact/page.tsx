'use client';

import { useState, useEffect } from 'react';
import { Phone, Users, Calendar, Star, Globe, MessageSquare, Target, Trophy } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactNumbers = [
    {
      title: "Customer Support",
      number: "+1 (800) 123-4567",
      description: "Your Name",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-red-900/20 to-red-950/10",
      delay: 100
    },
    {
      title: "Sales Department",
      number: "+1 (800) 234-5678",
      description: "Your Name",
      icon: <Target className="w-6 h-6" />,
      color: "from-rose-900/20 to-rose-950/10",
      delay: 200
    },
    {
      title: "Corporate Office",
      number: "+1 (800) 345-6789",
      description: "Your Name",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-black/30 to-red-950/20",
      delay: 300
    }
  ];

  const achievements = [
    {
      title: "250K+ Happy Clients",
      icon: <Users className="w-8 h-8" />,
      color: "border-red-800/50"
    },
    {
      title: "15+ Years Experience",
      icon: <Calendar className="w-8 h-8" />,
      color: "border-red-900/50"
    },
    {
      title: "98% Satisfaction Rate",
      icon: <Star className="w-8 h-8" />,
      color: "border-rose-900/50"
    },
    {
      title: "50+ Countries Served",
      icon: <Globe className="w-8 h-8" />,
      color: "border-black/50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0000] flex items-center justify-center p-4 md:p-8">
      <div className={`
        w-full max-w-6xl bg-gradient-to-br from-[#1a0a0a] to-[#0f0505] 
        rounded-3xl shadow-2xl shadow-red-950/30 border border-[#2c0a0a]
        overflow-hidden
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        
        <div className="h-2 bg-gradient-to-r from-transparent via-red-900 to-transparent"></div>
        
        <div className="p-8 md:p-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-300 via-red-500 to-rose-300 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with our team of experts. We're here to answer your questions and help you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-950 to-black border border-red-900/50">
                  <Phone className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Contact Numbers</h2>
              </div>
              <p className="text-gray-400 mb-8">Reach us through any of our dedicated lines</p>
              
              <div className="space-y-6">
                {contactNumbers.map((contact, index) => (
                  <div
                    key={index}
                    className={`
                      p-6 rounded-2xl bg-gradient-to-br ${contact.color} 
                      border border-red-900/30 backdrop-blur-sm
                      hover:scale-[1.02] hover:border-red-700/50 
                      transition-all duration-500 cursor-pointer
                      group hover:shadow-xl hover:shadow-red-900/10
                      ${isVisible ? 'animate-in slide-in-from-left' : ''}
                    `}
                    style={{ animationDelay: `${contact.delay}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-red-900/40 to-black/40 group-hover:from-red-800/60 transition-all duration-300">
                        <div className="text-red-400">
                          {contact.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                          {contact.title}
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </h3>
                        <p className="text-2xl font-bold text-red-300 mb-1 group-hover:text-red-200 transition-colors duration-300">
                          {contact.number}
                        </p>
                        <p className="text-gray-400 italic">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-950 to-black border border-red-900/50">
                  <Trophy className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Achievements</h2>
              </div>
              <p className="text-gray-400 mb-8">Nurturing the science for tomorrow</p>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`
                      p-6 rounded-2xl bg-gradient-to-br from-black/40 to-red-950/10 
                      border ${achievement.color} backdrop-blur-sm
                      hover:scale-[1.05] hover:border-red-600/50
                      transition-all duration-500 cursor-pointer
                      group
                      ${isVisible ? 'animate-in fade-in' : ''}
                    `}
                    style={{ animationDelay: `${index * 150 + 400}ms` }}
                  >
                    <div className="text-center">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-950/50 to-black/50 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-red-400">
                          {achievement.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-transparent via-red-950/20 to-transparent border border-red-900/30 text-center">
                <div className="inline-flex items-center gap-2 text-red-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-semibold">Always Available • 24/7 Support</span>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-red-900/30 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved. Crafted with precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;