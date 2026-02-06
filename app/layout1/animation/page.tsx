
"use client";

import React, { useRef } from 'react';

const CarXBestSupreme = () => {
  const containerRef = useRef<any>(null);

  const handleMouseMove = (e:any) => {
    if (containerRef.current) {
    //@ts-ignore
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };
 
  const LogoText = ({ fillColor, xColor }:any) => (
    <text 
      x="50%" 
      y="50%" 
      dominantBaseline="middle" 
      textAnchor="middle" 
      style={{ 
        fontFamily: '"Arial Black", sans-serif', 
        fontSize: '280px', 
        fontWeight: '900',
        letterSpacing: '-12px', 
        textTransform: 'uppercase',
        transform: 'scaleY(2.2)', 
        transformOrigin: 'center',
        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.5))'
      }}
    >
      <tspan fill={fillColor}>CAR</tspan>
      <tspan fill={xColor}>X</tspan>
      <tspan fill={fillColor}>BEST</tspan>
    </text>
  );

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className='w-[100%]'
      style={{
        position: 'relative',
        backgroundColor: '#020202', 
        width: '100%',
        minHeight: '40vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        //@ts-ignore
        '--mouse-x': '-5000px',
        '--mouse-y': '-5000px',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />

      <div style={{ position: 'relative', width: '100%', transform: 'scale(1.1)' }}>
        
        <svg viewBox="0 0 1800 600" style={{ width: '100%' }}>
          <LogoText fillColor="#0a0a0a" xColor="#1a0000" />
        </svg>

        <svg 
          viewBox="0 0 1800 600" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            pointerEvents: 'none',
            WebkitMaskImage: `radial-gradient(
              circle 800px at var(--mouse-x) var(--mouse-y), 
              black 0%, 
              rgba(0,0,0,0.6) 30%, 
              rgba(0,0,0,0.2) 60%, 
              transparent 90%
            )`,
            maskImage: `radial-gradient(
              circle 800px at var(--mouse-x) var(--mouse-y), 
              black 0%, 
              rgba(0,0,0,0.6) 30%, 
              rgba(0,0,0,0.2) 60%, 
              transparent 90%
            )`,
            
            transition: 'mask-image 0.2s ease-out, -webkit-mask-image 0.2s ease-out'
          }}
        >
          <LogoText fillColor="#888" xColor="#ff0000" />
        </svg>
      </div>
    </div>
  );
};

export default CarXBestSupreme;