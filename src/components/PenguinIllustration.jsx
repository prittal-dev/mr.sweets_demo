import React from 'react';

export default function PenguinIllustration({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 850 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[720px] drop-shadow-sm"
      >
        <defs>
          {/* Water reflection filter */}
          <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#377A88" />
            <stop offset="60%" stopColor="#488D9C" />
            <stop offset="100%" stopColor="#5CA5B4" />
          </linearGradient>

          {/* Ice rim gradient */}
          <linearGradient id="iceRimGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="85%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E6F6F6" />
          </linearGradient>

          {/* Mint Sign Gradient */}
          <linearGradient id="signGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8AD6CC" />
            <stop offset="100%" stopColor="#79C5BB" />
          </linearGradient>

          {/* Drop shadow for signboard */}
          <filter id="signShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#1B4249" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* ================= ICE HOLE & POND ================= */}
        <g id="ice-hole-group">
          {/* White Ice Shelf Outline (Snow edge around the fishing hole) */}
          <path
            d="M 390 470 C 390 440 460 420 590 420 C 690 420 740 442 740 468 C 740 494 670 515 560 515 C 450 515 390 495 390 470 Z"
            fill="url(#iceRimGradient)"
          />

          {/* Ice Fishing Hole Water Oval */}
          <ellipse cx="575" cy="470" rx="145" ry="32" fill="url(#waterGradient)" />

          {/* Inner Water Edge Depth & Ripples */}
          <path
            d="M 445 464 C 500 452 640 452 705 464 C 655 456 505 456 445 464 Z"
            fill="#2A626F"
            opacity="0.65"
          />
          <ellipse cx="585" cy="480" rx="95" ry="14" fill="#67B1BF" opacity="0.45" />
          <ellipse cx="550" cy="488" rx="55" ry="7" fill="#80C6D3" opacity="0.35" />
        </g>

        {/* ================= PENGUIN ================= */}
        <g id="penguin-group">
          {/* Soft shadow under penguin feet */}
          <ellipse cx="270" cy="495" rx="70" ry="10" fill="#B3DEDC" opacity="0.7" />

          {/* Left Foot */}
          <g>
            <path
              d="M 220 488 C 215 478 238 468 255 472 C 268 475 272 488 268 496 C 260 503 240 505 230 501 C 223 498 221 493 220 488 Z"
              fill="#FFA41B"
            />
            {/* Toe lines */}
            <path d="M 235 498 Q 235 503 234 505" stroke="#E68A00" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 248 500 Q 248 505 247 507" stroke="#E68A00" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 260 495 Q 262 501 262 503" stroke="#E68A00" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Right Foot */}
          <g>
            <path
              d="M 275 491 C 270 481 292 471 310 474 C 324 477 328 490 324 498 C 316 505 295 507 285 503 C 278 500 276 496 275 491 Z"
              fill="#FFA41B"
            />
            {/* Toe lines */}
            <path d="M 290 500 Q 290 505 289 507" stroke="#E68A00" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 304 502 Q 304 507 303 509" stroke="#E68A00" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 316 498 Q 318 503 318 505" stroke="#E68A00" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Penguin Outer Charcoal Body */}
          <path
            d="M 195 470 C 165 460 152 360 158 290 C 164 200 205 160 270 160 C 335 160 372 200 378 290 C 384 360 372 460 340 470 C 310 480 225 480 195 470 Z"
            fill="#323C4D"
          />

          {/* White Belly & Face Mask */}
          <path
            d="M 212 458 C 190 445 182 365 186 300 C 190 230 222 188 270 188 C 316 188 348 230 352 300 C 356 365 348 445 326 458 C 300 470 238 470 212 458 Z"
            fill="#FFFFFF"
          />

          {/* Penguin Eyes */}
          <ellipse cx="248" cy="245" rx="5.5" ry="7.5" fill="#202837" />
          <ellipse cx="292" cy="245" rx="5.5" ry="7.5" fill="#202837" />
          {/* Glistening Eye Highlights */}
          <circle cx="246" cy="242" r="2.2" fill="#FFFFFF" />
          <circle cx="290" cy="242" r="2.2" fill="#FFFFFF" />

          {/* Cute Orange Beak */}
          <path
            d="M 255 260 C 255 254 285 254 285 260 C 285 278 272 292 270 292 C 268 292 255 278 255 260 Z"
            fill="#FFA41B"
          />
          <path
            d="M 262 260 C 265 263 275 263 278 260 C 275 275 270 286 270 286 C 270 286 265 275 262 260 Z"
            fill="#E68A00"
            opacity="0.3"
          />

          {/* Left Wing (Resting comfortably at body side) */}
          <path
            d="M 164 285 C 150 300 142 340 146 370 C 148 378 158 382 164 374 C 174 358 180 320 180 295 Z"
            fill="#323C4D"
          />

          {/* Right Wing (Extended to hold fishing pole firmly) */}
          <path
            d="M 358 292 C 378 296 405 312 418 328 C 424 338 418 350 405 350 C 386 350 365 330 350 310 Z"
            fill="#323C4D"
          />
        </g>

        {/* ================= FISHING ROD & LINE ================= */}
        <g id="fishing-rod-group">
          {/* Orange Rod: starts below penguin flipper and angles up towards top right */}
          <line
            x1="365"
            y1="380"
            x2="528"
            y2="135"
            stroke="#FF7B38"
            strokeWidth="7.5"
            strokeLinecap="round"
          />

          {/* Fishing Line: hangs vertically down from the rod tip to the signboard */}
          <line
            x1="528"
            y1="135"
            x2="532"
            y2="310"
            stroke="#323C4D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* ================= ERROR 404 SIGNBOARD ================= */}
        <g
          id="error-sign-group"
          transform="rotate(-6 530 380)"
          filter="url(#signShadow)"
        >
          {/* Hanging Loop / Ring at top of sign */}
          <ellipse cx="532" cy="308" rx="5" ry="4" fill="none" stroke="#323C4D" strokeWidth="2.5" />
          <line x1="532" y1="312" x2="532" y2="322" stroke="#323C4D" strokeWidth="2.5" />

          {/* Mint-Teal Signboard Body */}
          <rect
            x="442"
            y="322"
            width="180"
            height="115"
            rx="18"
            fill="url(#signGradient)"
            stroke="#68B8AD"
            strokeWidth="3.5"
          />

          {/* Signboard Text: Exact Font and Style as Image */}
          {/* "ERROR" */}
          <text
            x="532"
            y="370"
            textAnchor="middle"
            fill="#1E3E43"
            fontFamily="'Outfit', -apple-system, sans-serif"
            fontWeight="900"
            fontSize="28"
            letterSpacing="2.5"
          >
            ERROR
          </text>

          {/* "404" */}
          <text
            x="532"
            y="416"
            textAnchor="middle"
            fill="#1E3E43"
            fontFamily="'Outfit', -apple-system, sans-serif"
            fontWeight="900"
            fontSize="38"
            letterSpacing="3"
          >
            404
          </text>
        </g>
      </svg>
    </div>
  );
}
