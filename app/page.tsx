"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Users, Brain, Mic, Menu, X } from 'lucide-react';
import Link from 'next/link';

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-brand-dark/70 border-b border-brand-glassBorder">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-serif text-white font-bold tracking-wide">
          Laura<span className="text-brand-accent">Ballo</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-brand-text/80 text-sm font-medium">
          <Link href="#" className="hover:text-brand-accent transition-colors">Training</Link>
          <Link href="#" className="hover:text-brand-accent transition-colors">Coaching</Link>
          <Link href="#" className="hover:text-brand-accent transition-colors">Speaking</Link>
          <div className="h-4 w-[1px] bg-brand-glassBorder"></div>
          <button className="text-brand-text hover:text-white transition-colors">FR</button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent/90 text-white rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(118,74,241,0.3)]">
            Book a Consultation
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-primary/30 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-glass border border-brand-glassBorder text-brand-accent text-xs font-semibold tracking-wider mb-6">
            LEADERSHIP & NEGOTIATION
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
            Master the Art of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-muted">Conflict Resolution</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Transition from manager to visionary leader. I help organizations navigate complexity through emotional intelligence and strategic negotiation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-all">
              Discover Training
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-brand-glass border border-brand-glassBorder text-white rounded-full font-medium hover:bg-brand-glass/20 transition-all backdrop-blur-sm flex items-center gap-2">
              <Brain className="w-4 h-4 text-brand-accent" />
              Ask AI Coach
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 rounded-2xl bg-brand-glass border border-brand-glassBorder hover:border-brand-accent/50 transition-all duration-300 group hover:-translate-y-1">
    <div className="w-12 h-12 rounded-xl bg-brand-primary/50 flex items-center justify-center mb-6 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-serif text-white font-semibold mb-3">{title}</h3>
    <p className="text-brand-muted text-sm leading-relaxed">{desc}</p>
  </div>
);

// --- MAIN PAGE ---

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen text-brand-text font-sans selection:bg-brand-accent/30">
      <Navbar />
      
      <HeroSection />

      {/* Services Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <ServiceCard 
            icon={Users}
            title="Corporate Training"
            desc="Workshops on conflict management and negotiation designed for high-stakes corporate environments."
          />
          <ServiceCard 
            icon={Brain}
            title="Executive Coaching"
            desc="One-on-one leadership development focusing on emotional intelligence and personal authority."
          />
          <ServiceCard 
            icon={Mic}
            title="Keynote Speaking"
            desc="Inspiring talks on 'The Art of Resonance' and leadership psychology for your next event."
          />
        </div>
      </section>

      {/* Podcast Strip (Placeholder) */}
      <section className="py-20 border-t border-brand-glassBorder bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-serif text-white mb-2">Podcast <span className="italic text-brand-accent">Expression</span></h2>
            <p className="text-brand-muted text-sm">Latest Episode: Leading through Uncertainty</p>
          </div>
          
          <div className="flex-1 w-full max-w-md bg-brand-glass border border-brand-glassBorder rounded-lg p-4 flex items-center gap-4">
             <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Play className="fill-white text-white ml-1" size={16} />
             </div>
             <div className="flex-1">
                <div className="h-1 bg-brand-glassBorder rounded-full w-full mb-1">
                   <div className="h-1 bg-brand-accent w-1/3 rounded-full"></div>
                </div>
                <div className="flex justify-between text-[10px] text-brand-muted">
                   <span>12:04</span>
                   <span>45:00</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}