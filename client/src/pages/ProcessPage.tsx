// SEJIN Process Page
// Shows interactive process flow diagram with measurement points
// Each measurement point click reveals technology details

import { useParams, Link } from "wouter";
import { ArrowLeft, ChevronRight, Beaker } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessDiagram from "@/components/ProcessDiagram";
import { getProcessById, waterProcesses, getTechnologyById } from "@/lib/waterProcessData";

const processColors: Record<string, string> = {
  ultrapure: "#0369a1",
  pure: "#1d4ed8",
  wastewater: "#b45309",
  sewage: "#065f46",
  reuse: "#5b21b6",
};

export default function ProcessPage() {
  const params = useParams<{ processId: string }>();
  const process = getProcessById(params.processId || "ultrapure");

  if (!process) {
    return (
      <div id="screoll-root" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">공정을 찾을 수 없습니다</h2>
          <Link href="/" className="text-blue-600 hover:underline">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  const relatedTechs = process.measurementPoints
    .map((mp) => getTechnologyById(mp.techId))
    .filter(Boolean)
    .filter((tech, idx, arr) => arr.findIndex((t) => t?.id === tech?.id) === idx);

  const color = processColors[process.id] || "#0369a1";

  return (
    <div id="screoll-root" className="min-h-screen" style={{ background: "oklch(0.99 0.002 240)" }}>
      <Navigation />

      {/* Hero */}
      <section
        className="pt-24 pb-12"
        style={{
          background: `linear-gradient(135deg, ${color}18 0%, oklch(0.97 0.008 240) 100%)`,
          borderBottom: `3px solid ${color}30`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "oklch(0.52 0.04 240)" }}>
            <Link href="/" className="hover:text-blue-700 transition-colors">홈</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>수처리 공정</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: color }}>{process.name}</span>
          </div>

          <div className="flex items-start justify-between gap-8">
            <div className="max-w-2xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
                style={{ background: `${color}15`, color: color }}
              >
                수처리 공정
              </div>
              <h1
                className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.15 0.04 240)" }}
              >
                {process.name}
                <span className="block text-2xl md:text-3xl font-semibold mt-1" style={{ color: color }}>
                  {process.nameEn}
                </span>
              </h1>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 240)" }}>
                {process.description}
              </p>
            </div>

            {/* Process Navigation */}
            <div className="hidden lg:block flex-shrink-0">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.52 0.04 240)" }}>
                다른 공정 보기
              </p>
              <div className="space-y-2">
                {waterProcesses.map((p) => (
                  <Link
                    key={p.id}
                    href={`/process/${p.id}`}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      p.id === process.id
                        ? "text-white shadow-sm"
                        : "text-slate-600 hover:bg-white hover:shadow-sm"
                    }`}
                    style={p.id === process.id ? { background: color } : {}}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: processColors[p.id] }} />
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Diagram */}
          <div className="mb-12">
            <ProcessDiagram process={process} />
          </div>

          {/* Process Steps */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
            >
              공정 단계
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
              {process.steps.map((step, i) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center p-4 rounded-xl"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}25` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-2"
                    style={{ background: step.color }}
                  >
                    {step.icon}
                  </div>
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mb-2"
                    style={{ background: step.color }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: step.color }}>
                    {step.name}
                  </p>
                  <p className="text-[10px] mt-0.5" style={{ color: "oklch(0.52 0.04 240)" }}>
                    {step.nameEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Measurement Points Summary */}
          <div className="mb-12">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
            >
              측정 포인트 요약
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {process.measurementPoints.map((mp) => {
                const tech = getTechnologyById(mp.techId);
                return (
                  <div
                    key={mp.id}
                    className="p-5 rounded-xl border"
                    style={{ background: "white", borderColor: "oklch(0.88 0.01 240)" }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: "oklch(0.55 0.14 185)" }}
                      >
                        <Beaker className="w-4 h-4" />
                      </div>
                      {tech && (
                        <Link
                          href={`/technology/${tech.id}`}
                          className="text-xs font-semibold transition-colors hover:opacity-70"
                          style={{ color: "oklch(0.35 0.12 240)" }}
                        >
                          기술 보기 →
                        </Link>
                      )}
                    </div>
                    <h4 className="font-semibold text-sm mb-2" style={{ color: "oklch(0.18 0.04 240)" }}>
                      {mp.label}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {mp.parameters.map((param) => (
                        <span
                          key={param}
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: "oklch(0.94 0.03 185)", color: "oklch(0.35 0.12 185)" }}
                        >
                          {param}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related Technologies */}
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
            >
              적용 분석 기술
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedTechs.map((tech) => {
                if (!tech) return null;
                return (
                  <Link key={tech.id} href={`/technology/${tech.id}`} className="block group">
                    <div
                      className="p-6 rounded-xl border transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5"
                      style={{ background: "white", borderColor: "oklch(0.88 0.01 240)" }}
                    >
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "oklch(0.94 0.03 185)", color: "oklch(0.35 0.12 185)" }}
                      >
                        {tech.category}
                      </span>
                      <h3
                        className="font-bold text-base mt-3 mb-2 group-hover:text-blue-700 transition-colors"
                        style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                      >
                        {tech.name}
                      </h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "oklch(0.52 0.04 240)" }}>
                        {tech.description.slice(0, 80)}...
                      </p>
                      <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: "oklch(0.35 0.12 240)" }}>
                        자세히 보기 <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {process.name} 공정에 최적화된 솔루션이 필요하신가요?
          </h2>
          <p className="text-white/80 mb-8">
            세진의 전문 엔지니어가 공정 분석부터 최적 측정 시스템 구축까지 지원합니다.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:opacity-90 bg-white"
            style={{ color: color }}
          >
            기술 문의하기 <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
