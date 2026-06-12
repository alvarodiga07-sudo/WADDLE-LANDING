import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Sphere, Graticule, Marker } from 'react-simple-maps';
import { N2A, DEMO_COUNTRIES, ACTIVITY_POINTS } from '../data/mapData';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// ¿Está el punto en el hemisferio visible del globo?
function isVisible(lon, lat, rotX, rotY) {
  const r = (d) => (d * Math.PI) / 180;
  const f1 = r(lat), l1 = r(lon), f0 = r(rotY), l0 = r(rotX);
  return Math.sin(f0) * Math.sin(f1) + Math.cos(f0) * Math.cos(f1) * Math.cos(l1 - l0) > 0.02;
}

export default function LandingGlobe({ size = 480, onCountrySelect, highlightSet }) {
  const demoCodes = useMemo(() => new Set(DEMO_COUNTRIES.map((d) => d.code)), []);
  const visitedCodes = highlightSet || demoCodes;

  const INIT = [-10, 22];
  const [rotation, setRotation] = useState(INIT);
  const rotRef = useRef([...INIT]);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0.18, y: 0 });
  const rafRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  // Rotación automática suave (se frena al arrastrar)
  useEffect(() => {
    let alive = true;
    function tick() {
      if (!alive) return;
      if (!isDragging.current) {
        velocity.current.x *= 0.985;
        velocity.current.y *= 0.9;
        if (Math.abs(velocity.current.x) < 0.18) velocity.current.x = 0.18;
        const targetLat = 22;
        const returnY = (targetLat - rotRef.current[1]) * 0.02;
        rotRef.current = [
          rotRef.current[0] - velocity.current.x,
          rotRef.current[1] + velocity.current.y + returnY,
        ];
        setRotation([...rotRef.current]);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => { alive = false; cancelAnimationFrame(rafRef.current); };
  }, []);

  const onDown = useCallback((x, y) => {
    isDragging.current = true;
    lastPos.current = { x, y };
    velocity.current = { x: 0, y: 0 };
  }, []);
  const onMove = useCallback((x, y) => {
    if (!isDragging.current) return;
    const dx = x - lastPos.current.x, dy = y - lastPos.current.y;
    velocity.current = { x: dx * 0.22, y: dy * 0.22 };
    rotRef.current = [
      rotRef.current[0] - dx * 0.3,
      Math.max(-65, Math.min(65, rotRef.current[1] + dy * 0.3)),
    ];
    setRotation([...rotRef.current]);
    lastPos.current = { x, y };
  }, []);
  const onUp = useCallback(() => { isDragging.current = false; }, []);

  const scale = (size / 2) * 0.92;

  return (
    <div
      style={{ width: size, height: size, userSelect: 'none', touchAction: 'none' }}
      className="relative"
      onMouseDown={(e) => onDown(e.clientX, e.clientY)}
      onMouseMove={(e) => onMove(e.clientX, e.clientY)}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={(e) => onDown(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => onMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={onUp}
    >
      {/* Halo / glow detrás del globo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(234,179,8,0.25), transparent 65%)',
          filter: 'blur(30px)',
          transform: 'scale(1.15)',
        }}
      />

      <div
        style={{
          width: size, height: size, borderRadius: '50%', overflow: 'hidden',
          boxShadow: '0 30px 80px -20px rgba(15,17,23,0.45), inset 0 0 60px rgba(15,17,23,0.15)',
          cursor: isDragging.current ? 'grabbing' : 'grab',
          position: 'relative',
        }}
      >
        <ComposableMap
          projection="geoOrthographic"
          projectionConfig={{ scale, rotate: [-rotation[0], -rotation[1], 0] }}
          width={size}
          height={size}
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <radialGradient id="oceanGrad" cx="40%" cy="35%" r="75%">
              <stop offset="0%" stopColor="#1a2942" />
              <stop offset="60%" stopColor="#0f1d33" />
              <stop offset="100%" stopColor="#0a1525" />
            </radialGradient>
          </defs>

          <Sphere id="ocean" fill="url(#oceanGrad)" stroke="#1f3a5c" strokeWidth={0.6} />
          <Graticule stroke="#2a4a6a" strokeWidth={0.2} step={[20, 20]} strokeOpacity={0.25} />

          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const alpha2 = N2A[String(geo.id || '').padStart(3, '0')];
                const lit = alpha2 ? visitedCodes.has(alpha2) : false;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={lit ? '#eab308' : '#2c3e54'}
                    stroke={lit ? '#fde047' : '#1a2840'}
                    strokeWidth={lit ? 0.5 : 0.3}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: lit ? '#f0c030' : '#34495f' },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Puntos de actividad (usuarios) — pulsantes */}
          {ACTIVITY_POINTS.map(([lon, lat], i) =>
            isVisible(lon, lat, rotation[0], rotation[1]) ? (
              <Marker key={`act-${i}`} coordinates={[lon, lat]}>
                <circle r={1.5} fill="#fde047" opacity={0.9}>
                  <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                </circle>
              </Marker>
            ) : null
          )}

          {/* Países demo — markers grandes clicables */}
          {DEMO_COUNTRIES.map((d) =>
            isVisible(d.lon, d.lat, rotation[0], rotation[1]) ? (
              <Marker
                key={d.code}
                coordinates={[d.lon, d.lat]}
                onClick={() => onCountrySelect && onCountrySelect(d.demo)}
                onMouseEnter={() => setHovered(d.demo)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Anillo pulsante */}
                <circle r={4} fill="none" stroke="#fde047" strokeWidth={1.2} opacity={0.7}>
                  <animate attributeName="r" values="3;9;3" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <circle r={3} fill="#fff" stroke="#eab308" strokeWidth={1.5} />
                <circle r={1.3} fill="#eab308" />
                {/* Etiqueta al pasar el ratón */}
                {hovered === d.demo && (
                  <g style={{ pointerEvents: 'none' }}>
                    <rect x={-d.name.length * 3.4 - 8} y={-26} width={d.name.length * 6.8 + 16} height={17} rx={8} fill="#0f1117" />
                    <text textAnchor="middle" y={-14} style={{ fontSize: 10, fontWeight: 700, fill: '#fff', fontFamily: 'Inter' }}>
                      {d.name}
                    </text>
                  </g>
                )}
              </Marker>
            ) : null
          )}
        </ComposableMap>
      </div>

      {/* Pista visual */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] text-ink/40 font-medium whitespace-nowrap flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Arrastra el globo · Toca un punto dorado
      </div>
    </div>
  );
}
