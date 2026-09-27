"use client";

import { Icons } from "./Icons";
import { backboneNodes } from "../lib/site";
import { useLanguage } from "../lib/LanguageContext";

const nodeIcons = [Icons.Erp, Icons.Automation, Icons.VoiceAi, Icons.Rag, Icons.Agentic];
const positions = [140, 320, 500, 680, 860];

// The one signature, orchestrated moment on the page: a signal line
// draws itself left to right, each tool node lighting up as the line
// reaches it, then a quiet pulse keeps traveling the line afterward.
export default function BackboneArt() {
  const { t } = useLanguage();

  return (
    <svg
      className="backbone-art"
      viewBox="0 0 1000 220"
      role="img"
      aria-label="Diagram: ERP, automation, voice AI, RAG and agentic AI all connecting through one backbone into your business"
    >
      <line x1="40" y1="110" x2="920" y2="110" className="bb-grid" />

      <path d="M40 110 H920" className="bb-spine" />
      <circle r="5" className="bb-pulse">
        <animateMotion dur="4.5s" begin="1.6s" repeatCount="indefinite" path="M40 110 H920" />
      </circle>

      {positions.map((x, i) => {
        const Icon = nodeIcons[i];
        const node = t.backbone.nodes[i];
        return (
          <g key={i} transform={`translate(${x},110)`}>
            <g className="bb-node" style={{ "--bb-d": `${0.15 + i * 0.22}s` }}>
              <circle r="30" className="bb-node-ring" />
              <g transform="translate(-11,-11)" className="bb-node-icon">
                <Icon />
              </g>
              <text y="56" textAnchor="middle" className="bb-node-label">
                {node.title}
              </text>
            </g>
          </g>
        );
      })}

      <g className="bb-end" transform="translate(940,110)">
        <circle r="26" className="bb-end-ring" />
        <text y="5" textAnchor="middle" className="bb-end-mark">R</text>
        <text y="46" textAnchor="middle" className="bb-end-label">
          {t.backbone.end}
        </text>
      </g>
    </svg>
  );
}
