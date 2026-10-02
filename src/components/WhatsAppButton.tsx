'use client';

import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl =
    'https://wa.me/16477200421?text=Hello%20David%2C%20I%20have%20an%20inquiry%20regarding%20The%20New%20York%20Auto%20Experience.';

  return (
    <aside
      aria-label="Contact on WhatsApp"
      className="whatsapp-floating-wrapper"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9990,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style jsx>{`
        .whatsapp-floating-wrapper {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9990;
          display: flex;
          alignItems: center;
          gap: 12px;
        }

        .whatsapp-btn {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 4px 12px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-decoration: none;
          position: relative;
        }

        .whatsapp-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 32px rgba(37, 211, 102, 0.55), 0 6px 16px rgba(0, 0, 0, 0.35);
        }

        .whatsapp-btn:active {
          transform: scale(0.96);
        }

        .whatsapp-tooltip {
          background: rgba(15, 23, 42, 0.92);
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          white-space: nowrap;
          pointer-events: none;
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
          transition: opacity 0.2s ease, transform 0.2s ease;
          opacity: 0;
          transform: translateX(6px);
        }

        .whatsapp-floating-wrapper:hover .whatsapp-tooltip,
        .whatsapp-floating-wrapper:focus-within .whatsapp-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 640px) {
          .whatsapp-floating-wrapper {
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-btn {
            width: 52px;
            height: 52px;
          }
          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>

      {/* Tooltip */}
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>

      {/* Circular Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp with David Senator (+1 647 720 0421)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12C2 13.82 2.487 15.527 3.336 16.994L2.062 21.649C1.986 21.927 2.067 22.224 2.274 22.424C2.481 22.624 2.781 22.693 3.056 22.603L7.842 21.037C9.13 21.658 10.537 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17.29 15.656C17.073 16.271 16.21 16.784 15.548 16.927C15.097 17.024 14.512 17.098 12.532 16.277C10.001 15.228 8.368 12.667 8.242 12.501C8.119 12.335 7.227 11.15 7.227 9.923C7.227 8.696 7.854 8.099 8.106 7.84C8.358 7.581 8.653 7.521 8.857 7.521C9.061 7.521 9.266 7.522 9.444 7.531C9.633 7.541 9.873 7.464 10.098 8.005C10.334 8.571 10.906 9.972 10.977 10.117C11.049 10.262 11.121 10.457 11.025 10.65C10.929 10.843 10.845 10.941 10.701 11.11C10.557 11.279 10.401 11.472 10.281 11.593C10.148 11.725 10.005 11.87 10.161 12.135C10.317 12.401 10.854 13.277 11.647 13.984C12.67 14.896 13.504 15.187 13.769 15.297C14.034 15.406 14.19 15.382 14.346 15.201C14.502 15.02 15.018 14.417 15.211 14.152C15.403 13.887 15.596 13.923 15.86 14.02C16.125 14.116 17.532 14.811 17.82 14.956C18.109 15.1 18.3 15.172 18.372 15.293C18.444 15.414 18.444 16.041 17.29 15.656Z"
            fill="#FFFFFF"
          />
        </svg>
      </a>
    </aside>
  );
}
