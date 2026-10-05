import React, { useState, useRef, useEffect } from 'react';

export default function Hero({ onExploreCatalog, onRequestQuote }) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState('00:00 / 00:10');

  const videoRef = useRef(null);

  const chapters = [
    {
      id: '01',
      title: 'Conching',
      subtitle: 'Kettle Caramel & Cocoa',
      image: '/romeo choco cone.png',
      video: '/chocolate_factory.mp4',
      badge: 'Live Atelier Factory Stream • Master Chocolate Conching',
      temp: '48°C Pure Conching',
      fps: '4K ULTRA HD • 60 FPS',
      desc: 'Slow conching of cocoa butter & organic jaggery caramel in copper kettles.',
      narration: 'Welcome to Mr. Sweet Confectionery Atelier. Live factory conching of cocoa butter and caramel in progress.'
    }
  ];

  const currentChapter = chapters[activeChapter];

  // Sync Video Play/Pause & Voice Narration
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Force muted play if browser blocks
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          });
        }
        speakNarration();
      } else {
        videoRef.current.pause();
        stopNarration();
      }
    }
  }, [isPlaying, activeChapter, isMuted]);

  // Voice Narration Function using SpeechSynthesis API
  const speakNarration = () => {
    if ('speechSynthesis' in window && !isMuted) {
      window.speechSynthesis.cancel(); // Clear previous speech
      const utterance = new SpeechSynthesisUtterance(currentChapter.narration);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopNarration = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleMuteToggle = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
    if (nextMuted) {
      stopNarration();
    } else if (isPlaying) {
      speakNarration();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime || 0;
      const duration = videoRef.current.duration || 10;
      const pct = Math.round((current / duration) * 100);
      setProgress(pct);

      const formatSec = (s) => `00:${Math.floor(s).toString().padStart(2, '0')}`;
      setCurrentTimeStr(`${formatSec(current)} / ${formatSec(duration)}`);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      videoRef.current.currentTime = pct * (videoRef.current.duration || 10);
    }
  };

  return (
    <section id="atelier-hero" className="w-full relative overflow-hidden bg-black">
      <div 
        onClick={() => setIsPlaying(!isPlaying)}
        title={isPlaying ? "Click background to pause video" : "Click background to play video"}
        className="w-full min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-84px)] md:min-h-screen relative flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 py-16 cursor-pointer group"
      >
        {/* Real Factory Chocolate Background HTML5 Video Stream */}
        <video
          ref={videoRef}
          src={currentChapter.video}
          poster={currentChapter.image}
          autoPlay
          loop
          playsInline
          muted
          onTimeUpdate={handleTimeUpdate}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isPlaying ? 'scale-105 filter brightness-90' : 'scale-100 filter brightness-75'
          }`}
        />

        {/* Seamless Full-Screen Dark Overlay - Soft Contrast under Text, Edge-to-Edge Clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none" />

        {/* Content Container - Pure Floating Text, No Box */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center pointer-events-auto px-4">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] max-w-4xl mb-4 sm:mb-6 [text-shadow:_0_4px_20px_rgba(0,0,0,0.95),_0_2px_4px_rgba(0,0,0,0.9)]">
            The Modern Craft of{' '}
            <span className="font-serif italic text-[#D4AF37] font-normal drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
              Irresistible
            </span>{' '}
            Confections.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-white max-w-2xl font-medium leading-relaxed [text-shadow:_0_3px_12px_rgba(0,0,0,0.95),_0_1px_3px_rgba(0,0,0,0.9)]">
            From our signature crispy Romeo Choco Cones and slow-churned Swiss cream wafers to royal chocolate gold coins, watch our confectionery craft unfold live.
          </p>
        </div>
      </div>
    </section>
  );
}
