import React from 'react';

const Avatar = () => {
  return (
    <div className="avatar-container">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="avatar-svg"
      >
        {/* Background Circle */}
        <circle cx="60" cy="60" r="60" fill="url(#avatarGradient)" />
        
        {/* Curly Hair */}
        <g className="curly-hair">
          {/* Main hair base */}
          <ellipse cx="60" cy="45" rx="35" ry="30" fill="#8B4513" />
          
          {/* Curly hair strands */}
          <ellipse cx="45" cy="40" rx="8" ry="12" fill="#A0522D" transform="rotate(-20 45 40)" />
          <ellipse cx="75" cy="40" rx="8" ry="12" fill="#A0522D" transform="rotate(20 75 40)" />
          <ellipse cx="35" cy="50" rx="6" ry="10" fill="#8B4513" transform="rotate(-30 35 50)" />
          <ellipse cx="85" cy="50" rx="6" ry="10" fill="#8B4513" transform="rotate(30 85 50)" />
          <ellipse cx="50" cy="35" rx="7" ry="11" fill="#A0522D" transform="rotate(-15 50 35)" />
          <ellipse cx="70" cy="35" rx="7" ry="11" fill="#A0522D" transform="rotate(15 70 35)" />
          <ellipse cx="40" cy="45" rx="5" ry="9" fill="#8B4513" transform="rotate(-25 40 45)" />
          <ellipse cx="80" cy="45" rx="5" ry="9" fill="#8B4513" transform="rotate(25 80 45)" />
        </g>
        
        {/* Face */}
        <ellipse cx="60" cy="65" rx="25" ry="30" fill="#FDBCB4" />
        
        {/* Chubby cheeks */}
        <ellipse cx="45" cy="70" rx="8" ry="12" fill="#F4A6A6" />
        <ellipse cx="75" cy="70" rx="8" ry="12" fill="#F4A6A6" />
        
        {/* Eyes */}
        <ellipse cx="52" cy="60" rx="3" ry="4" fill="#2D3748" />
        <ellipse cx="68" cy="60" rx="3" ry="4" fill="#2D3748" />
        
        {/* Eye highlights */}
        <ellipse cx="53" cy="58" rx="1" ry="1.5" fill="#FFFFFF" />
        <ellipse cx="69" cy="58" rx="1" ry="1.5" fill="#FFFFFF" />
        
        {/* Eyebrows */}
        <path d="M47 55 Q52 52 57 55" stroke="#8B4513" strokeWidth="2" fill="none" />
        <path d="M63 55 Q68 52 73 55" stroke="#8B4513" strokeWidth="2" fill="none" />
        
        {/* Nose */}
        <ellipse cx="60" cy="70" rx="2" ry="3" fill="#E2A8A8" />
        
        {/* Smile */}
        <path d="M50 80 Q60 90 70 80" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Body/Neck */}
        <ellipse cx="60" cy="95" rx="20" ry="15" fill="#FDBCB4" />
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Avatar;

