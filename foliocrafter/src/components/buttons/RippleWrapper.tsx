import React, { MouseEvent, useRef } from 'react';
import { Global, css } from '@emotion/react';
import { Box } from '@mui/material';

// Global ripple CSS (from CodePen example)
const rippleGlobalStyles = css`
  .ripple {
    position: relative;
    overflow: hidden;
  }
  .ripple span {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-animation 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
    pointer-events: none;
  }
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

interface RippleWrapperProps {
  children: React.ReactNode;
}

/**
 * RippleWrapper
 * Wraps any content to add a custom ripple effect on click.
 * Usage:
 *   <RippleWrapper>
 *     <Button>Click me</Button>
 *   </RippleWrapper>
 */
const RippleWrapper: React.FC<RippleWrapperProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    container.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());

    // If the wrapped element has its own onClick, it will still fire
    e.stopPropagation();
  };

  return (
    <>
      <Global styles={rippleGlobalStyles} />
      <Box
        ref={containerRef}
        className="ripple"
        onClick={handleClick}
        sx={{ display: 'inline-block', position: 'relative', overflow: 'hidden' }}
      >
        {children}
      </Box>
    </>
  );
};

export default RippleWrapper;
