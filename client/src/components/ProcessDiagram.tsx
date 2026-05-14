// SEJIN Process Diagram Component
// Interactive SVG-based water treatment process flow with clickable measurement points
// Design: Steel Blue flow lines, Aqua Green measurement points, clean white background

import { useState } from "react";
import { Link } from "wouter";
import { X, ChevronRight, Beaker, Zap, Activity } from "lucide-react";
import type { WaterProcess, MeasurementPoint } from "@/lib/waterProcessData";
import { getTechnologyById } from "@/lib/waterProcessData";

interface ProcessDiagramProps {
  process: WaterProcess;
}

export default function ProcessDiagram({ process }: ProcessDiagramProps) {
  const [activePoint, setActivePoint] = useState<MeasurementPoint | null>(null);

  const activeTech = activePoint ? getTechnologyById(activePoint.techId) : null;

  return (
    <div className="relative">
      {/* Process Flow Diagram */}
      <div
        className="relative rounded-2xl overflow-hidden border"
        style={{
          background: "oklch(0.97 0.008 240)",
          borderColor: "oklch(0.88 0.01 240)",
          minHeight: "320px",
        }}
      >
        {/* Title */}
        <div className="px-6 pt-5 pb-3">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "oklch(0.55 0.14 185)" }}>
            수처리 공정 흐름도
          </p>
          <h3 className="text-lg font-bold mt-1" style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}>
            {process.name} ({process.nameEn}) — 측정 포인트
          </h3>
          <p className="text-xs mt-1" style={{ color: "oklch(0.52 0.04 240)" }}>
            ● 측정 포인트를 클릭하면 해당 분석 기술 정보를 확인할 수 있습니다
          </p>
        </div>

        {/* SVG Diagram */}
        <div className="relative overflow-x-auto">
          <svg
            viewBox="20 20 60 60"
            className="w-full"
            style={{ minWidth: "1000px", height: "400px" }}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background grid lines */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="oklch(0.88 0.01 240)" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" opacity="0.5" />

            {/* Flow arrows between steps */}
            {process.steps.map((step, i) => {
              if (i === process.steps.length - 1) return null;
              const nextStep = process.steps[i + 1];
              const x1 = step.x + step.width;
              const y1 = step.y + step.height / 2;
              const x2 = nextStep.x;
              const y2 = nextStep.y + nextStep.height / 2;
              return (
                <g key={`arrow-${i}`}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="oklch(0.55 0.14 185)"
                    strokeWidth="0.8"
                    strokeDasharray="2 1"
                    className="flow-line-animated"
                    opacity="0.7"
                  />
                  <polygon
                    points={`${x2},${y2} ${x2 - 2},${y2 - 1} ${x2 - 2},${y2 + 1}`}
                    fill="oklch(0.55 0.14 185)"
                    opacity="0.7"
                  />
                </g>
              );
            })}

            {/* Process Steps */}
            {process.steps.map((step) => (
              <g key={step.id}>
                <rect
                  x={step.x}
                  y={step.y}
                  width={step.width}
                  height={step.height}
                  rx="1.5"
                  fill={step.color}
                  opacity="0.9"
                />
                <text
                  x={step.x + step.width / 2}
                  y={step.y + step.height / 2 - 3}
                  textAnchor="middle"
                  fill="white"
                  fontSize="2.5"
                  fontWeight="600"
                  fontFamily="'Outfit', sans-serif"
                >
                  {step.icon}
                </text>
                <text
                  x={step.x + step.width / 2}
                  y={step.y + step.height / 2 + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="2.2"
                  fontWeight="600"
                  fontFamily="'Noto Sans KR', sans-serif"
                >
                  {step.name}
                </text>
                <text
                  x={step.x + step.width / 2}
                  y={step.y + step.height / 2 + 9}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.7)"
                  fontSize="1.8"
                  fontFamily="'Outfit', sans-serif"
                >
                  {step.nameEn}
                </text>
              </g>
            ))}

            {/* Measurement Points */}
            {process.measurementPoints.map((point) => {
              const isActive = activePoint?.id === point.id;
              return (
                <g
                  key={point.id}
                  onClick={() => setActivePoint(isActive ? null : point)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Pulse ring */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="3.5"
                    fill={isActive ? "oklch(0.35 0.12 240)" : "oklch(0.55 0.14 185)"}
                    opacity="0.2"
                  >
                    <animate
                      attributeName="r"
                      values="3.5;6;3.5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.2;0;0.2"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Main dot */}
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="2.8"
                    fill={isActive ? "oklch(0.35 0.12 240)" : "oklch(0.55 0.14 185)"}
                    stroke="white"
                    strokeWidth="0.8"
                  />
                  {/* Plus icon */}
                  <text
                    x={point.x}
                    y={point.y + 1}
                    textAnchor="middle"
                    fill="white"
                    fontSize="3.5"
                    fontWeight="bold"
                  >
                    +
                  </text>
                  {/* Label */}
                  <text
                    x={point.x}
                    y={point.y - 5}
                    textAnchor="middle"
                    fill={isActive ? "oklch(0.35 0.12 240)" : "oklch(0.35 0.08 240)"}
                    fontSize="2"
                    fontWeight={isActive ? "700" : "500"}
                    fontFamily="'Noto Sans KR', sans-serif"
                  >
                    {point.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Info Panel - appears when measurement point is clicked */}
      {activePoint && activeTech && (
        <div
          className="mt-4 rounded-2xl border overflow-hidden"
          style={{
            borderColor: "oklch(0.75 0.1 185)",
            background: "white",
          }}
        >
          {/* Panel Header */}
          <div
            className="px-6 py-4 flex items-start justify-between"
            style={{ background: "oklch(0.35 0.12 240)" }}
          >
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-1">
                측정 포인트 — {activePoint.label}
              </p>
              <h4 className="text-lg font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {activeTech.name}
              </h4>
              <p className="text-sm text-white/70 mt-0.5">{activeTech.nameEn}</p>
            </div>
            <button
              onClick={() => setActivePoint(null)}
              className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors mt-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Panel Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Measured Parameters */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4" style={{ color: "oklch(0.55 0.14 185)" }} />
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "oklch(0.52 0.04 240)" }}>
                    측정 파라미터
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activePoint.parameters.map((param) => (
                    <span
                      key={param}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "oklch(0.94 0.03 185)",
                        color: "oklch(0.35 0.12 185)",
                      }}
                    >
                      {param}
                    </span>
                  ))}
                </div>
              </div>

              {/* Measurement Range */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Beaker className="w-4 h-4" style={{ color: "oklch(0.55 0.14 185)" }} />
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "oklch(0.52 0.04 240)" }}>
                    측정 범위
                  </span>
                </div>
                <p className="text-sm font-medium" style={{ color: "oklch(0.25 0.05 240)" }}>
                  {activeTech.range}
                </p>
                <p className="text-xs mt-1.5" style={{ color: "oklch(0.52 0.04 240)" }}>
                  정확도: {activeTech.accuracy}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4" style={{ color: "oklch(0.55 0.14 185)" }} />
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "oklch(0.52 0.04 240)" }}>
                    주요 특징
                  </span>
                </div>
                <ul className="space-y-1">
                  {activeTech.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5 text-xs" style={{ color: "oklch(0.42 0.04 240)" }}>
                      <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "oklch(0.55 0.14 185)" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-5 pt-5 flex items-center justify-between" style={{ borderTop: "1px solid oklch(0.92 0.008 240)" }}>
              <p className="text-sm" style={{ color: "oklch(0.52 0.04 240)" }}>
                {activeTech.description.slice(0, 80)}...
              </p>
              <Link
                href={`/technology/${activeTech.id}`}
                className="flex-shrink-0 ml-4 flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "oklch(0.35 0.12 240)" }}
              >
                자세히 보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
