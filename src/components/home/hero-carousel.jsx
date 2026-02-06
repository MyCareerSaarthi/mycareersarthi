"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Check, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Consistent typography classes for all slides
const headingClass =
  "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg";
const listItemClass =
  "text-xs sm:text-sm md:text-base lg:text-base leading-relaxed text-white/95";
const buttonBaseClass =
  "px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-0";

// Consistent slide shell for proper layout
const slideShellClass =
  "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-center relative overflow-hidden h-full";

// Reusable check icon component
const CheckIcon = () => (
  <div className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5 bg-white/30">
    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
  </div>
);

const CareerAssessmentSlide = () => {
  return (
    <div className={slideShellClass}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-56 h-56 bg-gradient-to-br from-purple-300/50 to-pink-300/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-300/40 to-fuchsia-300/40 rounded-full blur-3xl"></div>
        <svg
          className="absolute top-1/4 right-1/4 w-32 h-32 opacity-30"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            className="stroke-pink-300"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            className="stroke-purple-300"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
          />
        </svg>
      </div>

      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 relative z-10">
        <h1 className={headingClass}>
          Career Assessment & Roadmap to Ace the Indian Job Market
        </h1>

        <ul className="space-y-3 sm:space-y-4">
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Get a clear career diagnosis based on your experience, skills, and
              the current Indian job market
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Understand which job roles make sense for you now, which roles to
              avoid, and where your experience is actually valued by hiring
              companies.
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Save months (often years) of wrong applications with a clear
              career roadmap that defines target roles, skill gaps, and next
              steps focused on real job outcomes.
            </span>
          </li>
        </ul>

        <Link href="/career-mentoring" className="pt-1 sm:pt-2">
          <button
            className={`${buttonBaseClass} bg-white text-purple-600 hover:bg-purple-50`}
          >
            Get career clarity
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="flex items-center justify-center order-1 lg:order-2 relative z-10">
        <div className="relative w-full max-w-full">
          <video
            src="https://res.cloudinary.com/rohanphulkar/video/upload/v1768917721/career-assessment_k7tema.mp4"
            autoPlay
            muted
            loop
            playsInline
            unselectable="on"
            className="w-full h-auto object-cover pointer-events-none rounded"
          />
        </div>
      </div>
    </div>
  );
};

const InterviewPreparationSlide = () => {
  return (
    <div className={slideShellClass}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-56 h-56 bg-gradient-to-br from-yellow-400/50 to-red-400/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-44 h-44 bg-gradient-to-br from-amber-400/40 to-orange-300/40 rounded-full blur-3xl"></div>
        <svg
          className="absolute top-1/3 left-1/4 w-24 h-24 opacity-30"
          viewBox="0 0 100 100"
        >
          <path
            d="M20 50 L50 20 L80 50 L50 80 Z"
            className="stroke-orange-500"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M30 50 L50 30 L70 50 L50 70 Z"
            className="stroke-amber-500"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <div className="absolute bottom-1/4 right-1/3 grid grid-cols-3 gap-2 opacity-40">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 relative z-10">
        <h1 className={headingClass}>
          Interview Preparation That Helps You Convert Interviews into Offers
        </h1>

        <ul className="space-y-3 sm:space-y-4">
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Prepare for interviews with structured answers, role-specific
              depth, and real work stories so you clearly demonstrate value to
              hiring managers and interview panels.
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Understand what interviewers actually evaluate at mid-level and
              senior-level roles beyond surface-level questions and rehearsed
              answers.
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Practice through expert-led mock interviews that mirror real
              hiring rounds, helping you improve confidence, clarity, and
              conversion rate from interview calls to offer letters.
            </span>
          </li>
        </ul>

        <Link href="/interview-preparation" className="pt-1 sm:pt-2">
          <button
            className={`${buttonBaseClass} bg-white text-orange-600 hover:bg-orange-50`}
          >
            Prepare the right way
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="flex items-center justify-center order-1 lg:order-2 relative z-10">
        <div className="relative w-full max-w-full">
          <video
            src="https://res.cloudinary.com/rohanphulkar/video/upload/v1768904684/interview-preparation_huxamd.mp4"
            autoPlay
            muted
            loop
            playsInline
            unselectable="on"
            className="w-full h-auto object-cover pointer-events-none rounded"
          />
        </div>
      </div>
    </div>
  );
};

const JobSearchSlide = () => {
  return (
    <div className={slideShellClass}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-56 h-56 bg-gradient-to-br from-yellow-400/50 to-red-400/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-44 h-44 bg-gradient-to-br from-amber-400/40 to-orange-300/40 rounded-full blur-3xl"></div>
        <svg
          className="absolute top-1/3 left-1/4 w-24 h-24 opacity-30"
          viewBox="0 0 100 100"
        >
          <path
            d="M20 50 L50 20 L80 50 L50 80 Z"
            className="stroke-orange-500"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M30 50 L50 30 L70 50 L50 70 Z"
            className="stroke-amber-500"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <div className="absolute bottom-1/4 right-1/3 grid grid-cols-3 gap-2 opacity-40">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 relative z-10">
        <h1 className={headingClass}>
          Job Search Strategy Built to 10X Interview Calls
        </h1>

        <ul className="space-y-3 sm:space-y-4">
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Build a focused job search strategy, so you stop applying blindly
              and start targeting roles and companies that actually convert into
              interview calls.
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Learn where to apply, where not to apply, how recruiters shortlist
              candidates, and how to prioritise roles with higher hiring
              probability instead of volume-based applications.
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Reduce wasted effort and application fatigue by aligning your job
              search with recruiter behaviour, role expectations, and how hiring
              actually works today in India.
            </span>
          </li>
        </ul>

        <Link href="/job-search-strategy" className="pt-1 sm:pt-2">
          <button
            className={`${buttonBaseClass} bg-white text-orange-600 hover:bg-orange-50`}
          >
            Prepare the right way
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="flex items-center justify-center order-1 lg:order-2 relative z-10">
        <div className="relative w-full max-w-full">
          <video
            src="https://res.cloudinary.com/rohanphulkar/video/upload/v1770353729/job-search_wfidzc.mp4"
            autoPlay
            muted
            loop
            playsInline
            unselectable="on"
            className="w-full h-auto object-cover pointer-events-none rounded"
          />
        </div>
      </div>
    </div>
  );
};

const AIProfileScorerSlide = () => {
  return (
    <div className={slideShellClass}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-52 h-52 bg-gradient-to-br from-blue-300/50 to-cyan-300/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-cyan-300/40 to-blue-400/40 rounded-full blur-3xl"></div>
        <svg
          className="absolute top-1/4 right-1/3 w-28 h-28 opacity-30"
          viewBox="0 0 100 100"
        >
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            rx="8"
            className="stroke-blue-300"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="30"
            y="30"
            width="40"
            height="40"
            rx="6"
            className="stroke-cyan-300"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <div className="absolute bottom-1/3 left-1/4 flex gap-3 opacity-40">
          <div className="w-4 h-4 bg-blue-300 rounded-sm rotate-45"></div>
          <div className="w-4 h-4 bg-cyan-300 rounded-sm rotate-45"></div>
          <div className="w-4 h-4 bg-blue-400 rounded-sm rotate-45"></div>
        </div>
      </div>

      {/* Left Content Section */}
      <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 relative z-10">
        <h1 className={headingClass}>
          AI-Based LinkedIn & Resume Scoring to 10X Interview Calls
        </h1>

        <ul className="space-y-3 sm:space-y-4">
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              See how your LinkedIn profile or resume matches your target job
              role and job description, and why recruiters, hiring managers, or
              ATS systems may be rejecting it today
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Identify hidden gaps blocking interview calls, including ATS
              keyword mismatches, role misalignment, and the criteria recruiters
              use to shortlist candidates.
            </span>
          </li>
          <li className="flex items-start gap-2 sm:gap-3">
            <CheckIcon />
            <span className={listItemClass}>
              Increase interview shortlisting potential by up to 5–10× with a
              role-aligned profile score built for real job search outcomes, not
              generic feedback or templates.
            </span>
          </li>
        </ul>

        <Link href="/linkedin/analyze" className="pt-1 sm:pt-2">
          <button
            className={`${buttonBaseClass} bg-white text-[#0A66C2] hover:bg-blue-50`}
          >
            Score my profile
          </button>
        </Link>
      </div>

      {/* Right Image Section with MacBook Pro Style Frame */}
      <div className="flex items-center justify-center order-1 lg:order-2 relative z-10">
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
          {/* MacBook Pro Container */}
          <div className="relative">
            {/* Screen Lid */}
            <div className="relative bg-gradient-to-b from-[#06080d] via-[#010101] to-[#000000] rounded-t-[12px] sm:rounded-t-[16px] p-[6px] sm:p-2 shadow-xl">
              {/* Inner Black Bezel */}
              <div className="relative bg-black rounded-t-[10px] sm:rounded-t-[14px] overflow-hidden">
                {/* Notch with Camera */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[80px] h-[6px] sm:h-[8px] bg-black rounded-b-[4px] sm:rounded-b-[6px] flex items-center justify-center z-20">
                  <div className="w-[3px] sm:w-[4px] h-[3px] sm:h-[4px] rounded-full bg-[#1a1a1a] ring-1 ring-[#333]"></div>
                </div>

                {/* Video Content - fills the screen */}
                <video
                  src="https://res.cloudinary.com/rohanphulkar/video/upload/v1768918507/profile-scoring.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  unselectable="on"
                  className="w-full h-auto object-cover pointer-events-none"
                />
              </div>
            </div>

            {/* Laptop Base - thin strip */}
            <div className="relative h-[6px] sm:h-[8px] bg-gradient-to-b from-[#c8c9cb] via-[#d8d9db] to-[#e8e9eb] rounded-b-[6px] sm:rounded-b-[8px] shadow-lg">
              {/* Center notch/indent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] sm:w-[60px] h-[2px] sm:h-[3px] bg-gradient-to-b from-[#b0b1b3] to-[#c0c1c3] rounded-b-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");
  const [dragStart, setDragStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const slides = [
    {
      component: <AIProfileScorerSlide />,
      bg: "bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#004182] dark:from-[#004182] dark:via-[#003366] dark:to-[#002244]",
    },
    { component: <CareerAssessmentSlide />, bg: "bg-primary dark:bg-primary" },
    {
      component: <InterviewPreparationSlide />,
      bg: "bg-gradient-to-br from-orange-400 to-orange-400 dark:from-orange-600 dark:to-orange-700",
    },
    {
      component: <JobSearchSlide />,
      bg: "bg-gradient-to-br from-rose-400 to-rose-400 dark:from-rose-600 dark:to-rose-700",
    },
  ];

  const nextSlide = useCallback(() => {
    setDirection("next");
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection("prev");
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > activeSlide ? "next" : "prev");
      setActiveSlide(index);
    },
    [activeSlide],
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    setIsDragging(false);
  };

  const handleDragStart = (e) => {
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setDragStart(clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleDragMove = (e) => {
    if (!dragStart) return;
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
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
      className={`relative mx-auto w-full overflow-hidden transition-all duration-700 ease-in-out ${slides[activeSlide].bg} ${isDragging ? "cursor-grabbing" : "cursor-grab"} min-h-[90dvh] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[580px]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className="relative mx-auto w-full max-w-[95%] h-full px-4 sm:px-6 lg:px-8 select-none min-h-[90dvh] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[580px] flex flex-col justify-center py-8 sm:py-10 md:py-12 lg:py-14">
        {/* Slides Container */}
        <div className="relative flex-1 min-h-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === activeSlide
                  ? "opacity-100 translate-x-0 z-10"
                  : index < activeSlide
                    ? "opacity-0 -translate-x-full z-0"
                    : "opacity-0 translate-x-full z-0"
              }`}
            >
              {slide.component}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-1 sm:-left-6 md:-left-8 lg:-left-10 top-1/2 -translate-y-1/2 z-20 p-2 text-white/80 hover:text-white rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-0 hover:bg-white/10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-1 sm:-right-6 md:-right-8 lg:-right-10 top-1/2 -translate-y-1/2 z-20 p-2 text-white/80 hover:text-white rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-0 hover:bg-white/10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === activeSlide
                  ? "bg-white w-8 sm:w-10 h-2 sm:h-2.5"
                  : "bg-white/40 hover:bg-white/60 w-2 sm:w-2.5 h-2 sm:h-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
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
