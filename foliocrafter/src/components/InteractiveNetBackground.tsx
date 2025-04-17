import { useEffect, useRef, useState } from 'react';
import { useColorScheme } from '@mui/material/styles';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';

function NetBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const { mode } = useColorScheme(); 


  useEffect(() => {
    if (vantaEffect) {
      console.log('Vanta destroy');
      vantaEffect.destroy();
    }

    var netColor;

    if(mode === 'dark') {
      netColor = 0xFF0000;
    } else if (mode === 'light') {
      netColor = 0x00FF00;
    }
    
    if (vantaRef.current) {
      const newEffect = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundAlpha: 0.0,
        color: netColor, // Light green for dark mode, rich purple for light
        points: 10,
        maxDistance: 20,
        spacing: 15,
      });

      setVantaEffect(newEffect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [mode]);  // Use the `mode` directly from `useColorScheme`

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    />
  );
}

export default NetBackground;
