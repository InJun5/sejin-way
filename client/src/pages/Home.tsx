// SEJIN Home Page
// Design: Nordic Minimalism + Scientific Visualization
// Hero: Dark overlay on water treatment facility image, asymmetric layout
// Sections: Process overview, Technology highlights, About preview, CTA

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, CheckCircle2, Beaker, Cpu, Microscope, Waves } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { waterProcesses, technologies } from "@/lib/waterProcessData";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566838050/i6kdvYxv3vGHnpnoCFHQKT/hero-water-treatment_d7e00f83.jpg";
const ABSTRACT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566838050/i6kdvYxv3vGHnpnoCFHQKT/water-flow-abstract_1a6c47da.jpg";
const LAB_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566838050/i6kdvYxv3vGHnpnoCFHQKT/lab-analysis_dec24e4f.jpg";
const ANALYZER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566838050/i6kdvYxv3vGHnpnoCFHQKT/analyzer-closeup_9b17e323.jpg";

const processIcons: Record<string, string> = {
  ultrapure: "💎",
  pure: "💧",
  wastewater: "🏭",
  sewage: "🌿",
  reuse: "♻️",
};

const stats = [
  { value: "5+", label: "수처리 공정 분야" },
  { value: "7+", label: "측정 기술 솔루션" },
  { value: "OEM", label: "맞춤형 제조 경험" },
  { value: "24/7", label: "연속 모니터링" },
];

const services = [
  {
    icon: Beaker,
    title: "수질 측정 기술",
    desc: "pH, 전도도, TOC, 탁도, DO 등 수처리 전 공정에 필요한 분석기술을 제공합니다.",
  },
  {
    icon: Cpu,
    title: "OEM 분석기 제조",
    desc: "고객사 요구에 맞는 맞춤형 수질 분석기를 설계하고 제조합니다.",
  },
  {
    icon: Microscope,
    title: "기술 컨설팅",
    desc: "수처리 공정 분석 및 최적 측정 솔루션 선정을 위한 전문 기술 컨설팅을 제공합니다.",
  },
  {
    icon: Waves,
    title: "공정 솔루션",
    desc: "초순수부터 재이용수까지 공정별 맞춤 수질 모니터링 시스템을 구축합니다.",
  },
];

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollFadeIn();
  return (
    <div
      ref={ref}
      className="fade-in-up"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [activeProcess, setActiveProcess] = useState(waterProcesses[0]);

  return (
    <div id="screoll-root" className="min-h-screen" style={{ background: "oklch(0.99 0.002 240)" }}>
      <Navigation />

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="수처리 시설"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, oklch(0.13 0.04 240 / 0.92) 0%, oklch(0.13 0.04 240 / 0.75) 50%, oklch(0.13 0.04 240 / 0.4) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "oklch(0.55 0.14 185 / 0.2)", color: "oklch(0.85 0.1 185)", border: "1px solid oklch(0.55 0.14 185 / 0.3)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.75 0.15 185)" }} />
              수처리 분석기술 전문 기업
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              정밀한 수질 측정,
              <br />
              <span style={{ color: "oklch(0.75 0.15 185)" }}>신뢰할 수 있는</span>
              <br />
              수처리 기술
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              세진(SEJIN)은 초순수부터 재이용수까지 수처리 전 공정에 걸친 수질측정 분석기술과 솔루션을 제공합니다. OEM 제조 경험을 바탕으로 최적의 분석 시스템을 구축합니다.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/process/ultrapure"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "oklch(0.55 0.14 185)" }}
              >
                공정별 솔루션 보기 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 border-2 hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.4)" }}
              >
                기술 문의하기
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.75 0.15 185)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="text-center mb-14">
              <p className="sejin-section-label mb-3">SEJIN 서비스</p>
              <h2 className="sejin-heading-lg">
                수처리 분석기술의 모든 것
              </h2>
              <p className="sejin-body mt-4 max-w-2xl mx-auto">
                수처리 공정 전반에 걸친 수질 측정 기술부터 맞춤형 분석기 제조, 기술 컨설팅까지 종합적인 솔루션을 제공합니다.
              </p>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <FadeSection key={service.title} delay={i * 100}>
                <div className="sejin-card p-6 h-full group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ background: "oklch(0.94 0.03 185)" }}
                  >
                    <service.icon className="w-6 h-6" style={{ color: "oklch(0.35 0.12 185)" }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "oklch(0.52 0.04 240)" }}>
                    {service.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Selection Section ── */}
      <section className="py-24" style={{ background: "oklch(0.96 0.01 240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="mb-12">
              <p className="sejin-section-label mb-3">수처리 공정별 솔루션</p>
              <h2 className="sejin-heading-lg max-w-2xl">
                공정을 선택하여 최적의 분석기술을 확인하세요
              </h2>
              <p className="sejin-body mt-4 max-w-2xl">
                각 수처리 공정의 특성에 맞는 수질 측정 포인트와 분석 기술을 인터랙티브 다이어그램으로 확인할 수 있습니다.
              </p>
            </div>
          </FadeSection>

          {/* Process Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {waterProcesses.map((process) => (
              <button
                key={process.id}
                onClick={() => setActiveProcess(process)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeProcess.id === process.id
                    ? "text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
                style={
                  activeProcess.id === process.id
                    ? { background: process.color }
                    : {}
                }
              >
                <span>{processIcons[process.id]}</span>
                {process.name}
              </button>
            ))}
          </div>

          {/* Process Description */}
          <div
            className="rounded-2xl p-6 mb-6 border"
            style={{
              background: `linear-gradient(135deg, ${activeProcess.color}15, ${activeProcess.color}05)`,
              borderColor: `${activeProcess.color}30`,
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif", color: activeProcess.color }}
                >
                  {activeProcess.name} ({activeProcess.nameEn})
                </h3>
                <p className="text-sm leading-relaxed max-w-3xl" style={{ color: "oklch(0.42 0.04 240)" }}>
                  {activeProcess.description}
                </p>
              </div>
              <Link
                href={`/process/${activeProcess.id}`}
                className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: activeProcess.color }}
              >
                전체 보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mini Process Flow Preview */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ background: "white", borderColor: "oklch(0.88 0.01 240)" }}
          >
            <div className="p-5 border-b" style={{ borderColor: "oklch(0.92 0.008 240)" }}>
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "oklch(0.55 0.14 185)" }}>
                공정 흐름도 미리보기
              </p>
            </div>
            <div className="overflow-x-auto p-4">
              <svg viewBox="0 0 100 60" style={{ minWidth: "600px", height: "160px" }} preserveAspectRatio="xMidYMid meet">
                {/* Flow lines */}
                {activeProcess.steps.map((step, i) => {
                  if (i === activeProcess.steps.length - 1) return null;
                  const nextStep = activeProcess.steps[i + 1];
                  const x1 = step.x + step.width;
                  const y1 = step.y + step.height / 2 - 20;
                  const x2 = nextStep.x;
                  const y2 = nextStep.y + nextStep.height / 2 - 20;
                  return (
                    <line
                      key={`fl-${i}`}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={activeProcess.color}
                      strokeWidth="0.8"
                      strokeDasharray="2 1"
                      opacity="0.5"
                    />
                  );
                })}
                {/* Steps */}
                {activeProcess.steps.map((step) => (
                  <g key={step.id}>
                    <rect
                      x={step.x} y={step.y - 20}
                      width={step.width} height={step.height}
                      rx="1.5"
                      fill={step.color}
                      opacity="0.85"
                    />
                    <text x={step.x + step.width / 2} y={step.y - 20 + step.height / 2 - 2}
                      textAnchor="middle" fill="white" fontSize="2.5" fontWeight="600">
                      {step.icon}
                    </text>
                    <text x={step.x + step.width / 2} y={step.y - 20 + step.height / 2 + 5}
                      textAnchor="middle" fill="white" fontSize="2.2" fontWeight="600"
                      fontFamily="'Noto Sans KR', sans-serif">
                      {step.name}
                    </text>
                  </g>
                ))}
                {/* Measurement points */}
                {activeProcess.measurementPoints.map((point) => (
                  <circle
                    key={point.id}
                    cx={point.x} cy={point.y - 20}
                    r="2.5"
                    fill="oklch(0.55 0.14 185)"
                    stroke="white"
                    strokeWidth="0.7"
                  />
                ))}
              </svg>
            </div>
            <div className="px-5 pb-5">
              <Link
                href={`/process/${activeProcess.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: activeProcess.color }}
              >
                인터랙티브 다이어그램 보기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology Highlights ── */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="sejin-section-label mb-3">측정 기술</p>
                <h2 className="sejin-heading-lg">핵심 분석 기술</h2>
              </div>
              <Link
                href="/technology/ph-conductivity"
                className="hidden md:flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-70"
                style={{ color: "oklch(0.35 0.12 240)" }}
              >
                전체 기술 보기 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.slice(0, 6).map((tech, i) => (
              <FadeSection key={tech.id} delay={i * 80}>
                <Link href={`/technology/${tech.id}`} className="block group">
                  <div className="sejin-card p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "oklch(0.94 0.03 185)", color: "oklch(0.35 0.12 185)" }}
                      >
                        {tech.category}
                      </span>
                      <ChevronRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        style={{ color: "oklch(0.55 0.14 185)" }}
                      />
                    </div>
                    <h3
                      className="font-bold text-base mb-2 group-hover:text-blue-700 transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                    >
                      {tech.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.52 0.04 240)" }}>
                      {tech.description.slice(0, 90)}...
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.parameters.slice(0, 3).map((param) => (
                        <span
                          key={param}
                          className="text-xs px-2 py-0.5 rounded"
                          style={{ background: "oklch(0.95 0.01 240)", color: "oklch(0.42 0.04 240)" }}
                        >
                          {param.split(" ")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / CTA Section ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABSTRACT_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "oklch(0.13 0.04 240 / 0.88)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeSection>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "oklch(0.75 0.15 185)" }}>
                  세진(SEJIN) 소개
                </p>
                <h2
                  className="text-4xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  측정 기술로 시작하는
                  <br />
                  수처리 혁신
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  세진은 수처리 분야의 OEM 분석기 제조 경험을 바탕으로, 이제 자체 브랜드의 수질 분석기 개발에 나서고 있습니다. 초순수, 순수, 폐수, 하수, 재이용수 등 모든 수처리 공정에 최적화된 측정 솔루션을 제공합니다.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "수처리 전 공정 분석기술 보유",
                    "OEM 제조 경험 기반 기술 신뢰성",
                    "맞춤형 기술 컨설팅 서비스",
                    "자체 분석기 개발 진행 중",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.75 0.15 185)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: "oklch(0.55 0.14 185)" }}
                  >
                    회사 소개 <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white/80 border border-white/20 transition-all hover:bg-white/10"
                  >
                    문의하기
                  </Link>
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="rounded-2xl overflow-hidden aspect-square"
                  style={{ background: "oklch(0.18 0.04 240)" }}
                >
                  <img src={LAB_IMAGE} alt="수질 분석 실험실" className="w-full h-full object-cover opacity-80" />
                </div>
                <div
                  className="rounded-2xl overflow-hidden aspect-square mt-8"
                  style={{ background: "oklch(0.18 0.04 240)" }}
                >
                  <img src={ANALYZER_IMAGE} alt="수질 분석기" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeSection>
            <p className="sejin-section-label mb-4">기술 문의</p>
            <h2 className="sejin-heading-lg mb-6">
              수처리 분석기술 도입을 검토 중이신가요?
            </h2>
            <p className="sejin-body mb-10 max-w-xl mx-auto">
              공정별 최적 측정 솔루션 선정부터 시스템 구축까지, 세진의 전문 엔지니어가 함께합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
                style={{ background: "oklch(0.35 0.12 240)", boxShadow: "0 8px 24px oklch(0.35 0.12 240 / 0.3)" }}
              >
                기술 문의하기 <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/process/ultrapure"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-80 border-2"
                style={{ borderColor: "oklch(0.35 0.12 240)", color: "oklch(0.35 0.12 240)" }}
              >
                공정 솔루션 보기
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
