const NeonFilters = () => (
  <svg width="0" height="0">
    <filter id="bloom">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" result="blur" /> {/* Reduced blur to sharpen */}
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="bevel">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1.1" result="blur"/> {/* Reduced blur for sharper edges */}
      <feOffset in="blur" dx="3" dy="3" result="offsetBlur" /> {/* Adjusted offset for better definition */}
      <feSpecularLighting
        in="blur"
        surfaceScale="5"
        specularConstant="0.8"
        specularExponent="20"
        lightingColor="#FF00FF"
        result="specOut"
      >
        <fePointLight x="-5000" y="-10000" z="20000" />
      </feSpecularLighting>
      <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
      <feComposite
        in="SourceGraphic"
        in2="specOut"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
      />
    </filter>
  </svg>
);
  
  export default NeonFilters;