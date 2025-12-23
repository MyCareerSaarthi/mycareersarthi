'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Check, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CareerAssessmentSlide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[600px] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-56 h-56 bg-gradient-to-br from-purple-300/50 to-pink-300/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-300/40 to-fuchsia-300/40 rounded-full blur-3xl"></div>
        <svg className="absolute top-1/4 right-1/4 w-32 h-32 opacity-30" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" className="stroke-pink-300" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <circle cx="50" cy="50" r="30" className="stroke-purple-300" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        </svg>
      </div>

      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1 relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
          Career Assessment & Roadmap
        </h1>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              Understand your strengths and career direction.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              Get clarity on role fit and next steps.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              Move forward with a clear action plan.
            </span>
          </li>
        </ul>

        <Link href="/career-mentoring" className="pt-2">
          <button className="px-8 py-3.5 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-0 bg-white text-purple-600 hover:bg-purple-50">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="flex items-center justify-center order-1 lg:order-2 relative z-10">
        <div className="relative w-full max-w-lg">
          <img
            src="/home/slide/career-assessment.svg"
            alt="Career Assessment & Roadmap"
            className="w-full h-auto object-cover drop-shadow-2xl pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

const InterviewPreparationSlide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[600px] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-56 h-56 bg-gradient-to-br from-yellow-400/50 to-red-400/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-44 h-44 bg-gradient-to-br from-amber-400/40 to-orange-300/40 rounded-full blur-3xl"></div>
        <svg className="absolute top-1/3 left-1/4 w-24 h-24 opacity-30" viewBox="0 0 100 100">
          <path d="M20 50 L50 20 L80 50 L50 80 Z" className="stroke-orange-500" strokeWidth="2" fill="none" />
          <path d="M30 50 L50 30 L70 50 L50 70 Z" className="stroke-amber-500" strokeWidth="1.5" fill="none" />
        </svg>
        <div className="absolute bottom-1/4 right-1/3 grid grid-cols-3 gap-2 opacity-40">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1 relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
          Interview Preparation
        </h1>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              Practice interviews in a real-world setting.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              Receive expert and AI-driven feedback.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              Answer with confidence and clarity.
            </span>
          </li>
        </ul>

        <Link href="/interview-preparation" className="pt-2">
          <button className="px-8 py-3.5 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-0 bg-white text-orange-600 hover:bg-orange-50">
            Start Practicing
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="flex items-center justify-center order-1 lg:order-2 relative z-10">
        <div className="relative w-full max-w-lg">
          <img
            src="/home/slide/interview-preparation.svg"
            alt="Interview Preparation"
            className="w-full h-auto object-cover drop-shadow-2xl pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

const AIProfileScorerSlide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[600px] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-52 h-52 bg-gradient-to-br from-blue-300/50 to-cyan-300/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-cyan-300/40 to-blue-400/40 rounded-full blur-3xl"></div>
        <svg className="absolute top-1/4 right-1/3 w-28 h-28 opacity-30" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="8" className="stroke-blue-300" strokeWidth="2" fill="none" />
          <rect x="30" y="30" width="40" height="40" rx="6" className="stroke-cyan-300" strokeWidth="1.5" fill="none" />
        </svg>
        <div className="absolute bottom-1/3 left-1/4 flex gap-3 opacity-40">
          <div className="w-4 h-4 bg-blue-300 rounded-sm rotate-45"></div>
          <div className="w-4 h-4 bg-cyan-300 rounded-sm rotate-45"></div>
          <div className="w-4 h-4 bg-blue-400 rounded-sm rotate-45"></div>
        </div>
      </div>

      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 lg:order-1 relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
          AI Profile Scorer
        </h1>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              See how your profile matches target roles.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              Identify gaps in your LinkedIn and resume.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-base md:text-lg leading-relaxed text-white/95">
              Improve alignment with data-backed insights.
            </span>
          </li>
        </ul>

        <Link href="/ai-powered-profile-scoring" className="pt-2">
          <button className="px-8 py-3.5 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-0 bg-white text-[#0A66C2] hover:bg-blue-50">
            Score My Profile
          </button>
        </Link>
      </div>

      {/* Right Image Section with Floating LinkedIn Logo */}
      <div className="flex items-center justify-center order-1 lg:order-2 relative z-10">
        <div className="relative w-full max-w-lg">
          {/* Floating LinkedIn Logo */}
          <div className="absolute -top-6 -right-6 z-20">
            <div className="bg-white p-4 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-10 h-10 md:w-12 md:h-12 text-[#0A66C2]" fill="#0A66C2" />
            </div>
          </div>
          
          <img
            src="/home/slide/ai-profile-scorer.svg"
            alt="AI Profile Scorer"
            className="w-full h-auto object-cover drop-shadow-2xl pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};


const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('next');
  const [dragStart, setDragStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const slides = [
    { component: <CareerAssessmentSlide />, bg: 'bg-primary dark:bg-primary' },
    { component: <InterviewPreparationSlide />, bg: 'bg-gradient-to-br from-orange-400 to-orange-400 dark:from-orange-600 dark:to-orange-700' },
    { component: <AIProfileScorerSlide />, bg: 'bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] dark:from-[#004182] dark:via-[#003366] dark:to-[#002244]' }
  ];

  const nextSlide = useCallback(() => {
    setDirection('next');
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setDirection(index > activeSlide ? 'next' : 'prev');
    setActiveSlide(index);
  }, [activeSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    setIsDragging(false);
  };

  const handleDragStart = (e) => {
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleDragMove = (e) => {
    if (!dragStart) return;
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const diff = dragStart - clientX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setDragStart(null);
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setDragStart(null);
    setIsDragging(false);
  };

  return (
    <section 
      className={`relative max-w-3/4 rounded mx-auto w-full overflow-hidden transition-all duration-700 ease-in-out ${slides[activeSlide].bg} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className="container relative mx-auto px-4 md:px-6 lg:px-8 max-w-7xl select-none">
        {/* Slides Container */}
        <div className="relative min-h-[500px] md:min-h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === activeSlide
                  ? 'opacity-100 translate-x-0 z-10'
                  : index < activeSlide
                  ? 'opacity-0 -translate-x-full z-0'
                  : 'opacity-0 translate-x-full z-0'
              }`}
            >
              {slide.component}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20  backdrop-blur-sm text-white rounded-r-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-0 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 backdrop-blur-sm text-white rounded-l-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-0 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === activeSlide
                  ? 'bg-white w-12 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(-15px) rotate(-2deg);
          }
          75% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;