import React, { useState, useEffect } from 'react';
import './BackgroundGlow.css';

const BackgroundGlow = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [targetPos, setTargetPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setPosition((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPos]);

  return (
    <div className="bg-glow-wrapper" aria-hidden="true">
      {/* Primary ambient spotlight following mouse */}
      <div
        className="bg-glow-spotlight"
        style={{
          transform: `translate3d(${position.x - 300}px, ${position.y - 300}px, 0)`,
        }}
      />
      {/* Secondary subtle cyan cursor dot */}
      <div
        className="bg-glow-cursor-dot"
        style={{
          transform: `translate3d(${targetPos.x - 15}px, ${targetPos.y - 15}px, 0)`,
        }}
      />
    </div>
  );
};

export default BackgroundGlow;
