// SEJIN Technology Page
// Detailed view of each measurement technology
// Shows principle, applications, parameters, features

import { useParams, Link } from "wouter";
import { ChevronRight, CheckCircle2, Zap, Target, BookOpen, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getTechnologyById, technologies, getProcessById } from "@/lib/waterProcessData";

const ANALYZER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566838050/i6kdvYxv3vGHnpnoCFHQKT/analyzer-closeup_9b17e323.jpg";

export default function TechnologyPage() {
  const params = useParams<{ techId: string }>();
  const tech = getTechnologyById(params.techId || "ph-conductivity");

  if (!tech) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">기술 정보를 찾을 수 없습니다</h2>
          <Link href="/" className="text-blue-600 hover:underline">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  const relatedProcesses = tech.processIds
    .map((id) => getProcessById(id))
    .filter(Boolean);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.99 0.002 240)" }}>
      <Navigation />

      {/* Hero */}
      <section
        className="pt-24 pb-12"
        style={{
          background: "linear-gradient(135deg, oklch(0.35 0.12 240 / 0.08) 0%, oklch(0.97 0.008 240) 100%)",
          borderBottom: "3px solid oklch(0.35 0.12 240 / 0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "oklch(0.52 0.04 240)" }}>
            <Link href="/" className="hover:text-blue-700 transition-colors">홈</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>측정 기술</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "oklch(0.35 0.12 240)" }}>{tech.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                style={{ background: "oklch(0.94 0.03 185)", color: "oklch(0.35 0.12 185)" }}
              >
                {tech.category}
              </span>
              <h1
                className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.15 0.04 240)" }}
              >
                {tech.name}
              </h1>
              <p
                className="text-xl font-medium mb-6"
                style={{ color: "oklch(0.35 0.12 240)" }}
              >
                {tech.nameEn}
              </p>
              <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 240)" }}>
                {tech.description}
              </p>

              {/* Quick specs */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)" }}
                >
                  <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "oklch(0.55 0.14 185)" }}>
                    측정 범위
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "oklch(0.22 0.05 240)" }}>
                    {tech.range}
                  </p>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)" }}
                >
                  <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "oklch(0.55 0.14 185)" }}>
                    정확도
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "oklch(0.22 0.05 240)" }}>
                    {tech.accuracy}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ANALYZER_IMAGE}
                  alt={tech.name}
                  className="w-full object-cover"
                  style={{ height: "320px" }}
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 p-4 rounded-xl shadow-lg"
                style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)" }}
              >
                <p className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: "oklch(0.55 0.14 185)" }}>
                  적용 공정
                </p>
                <p className="text-2xl font-bold" style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.35 0.12 240)" }}>
                  {tech.processIds.length}개 공정
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Measurement Principle */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.94 0.03 185)" }}
                  >
                    <BookOpen className="w-5 h-5" style={{ color: "oklch(0.35 0.12 185)" }} />
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                  >
                    측정 원리
                  </h2>
                </div>
                <div
                  className="p-6 rounded-2xl"
                  style={{ background: "oklch(0.97 0.008 240)", border: "1px solid oklch(0.88 0.01 240)" }}
                >
                  <p className="text-base leading-relaxed" style={{ color: "oklch(0.35 0.06 240)" }}>
                    {tech.principle}
                  </p>
                </div>
              </div>

              {/* Parameters */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.94 0.03 185)" }}
                  >
                    <Target className="w-5 h-5" style={{ color: "oklch(0.35 0.12 185)" }} />
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                  >
                    측정 파라미터
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tech.parameters.map((param) => (
                    <div
                      key={param}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: "oklch(0.55 0.14 185)" }}
                      />
                      <span className="text-sm font-medium" style={{ color: "oklch(0.25 0.05 240)" }}>
                        {param}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.94 0.03 185)" }}
                  >
                    <Zap className="w-5 h-5" style={{ color: "oklch(0.35 0.12 185)" }} />
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                  >
                    주요 특징
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tech.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)" }}
                    >
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: "oklch(0.55 0.14 185)" }}
                      />
                      <span className="text-sm" style={{ color: "oklch(0.35 0.06 240)" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2
                  className="text-xl font-bold mb-5"
                  style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                >
                  적용 분야
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tech.applications.map((app) => (
                    <span
                      key={app}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{ background: "oklch(0.35 0.12 240 / 0.08)", color: "oklch(0.35 0.12 240)" }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* Related Processes */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)" }}
              >
                <h3
                  className="font-bold text-base mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                >
                  적용 수처리 공정
                </h3>
                <div className="space-y-2">
                  {relatedProcesses.map((process) => {
                    if (!process) return null;
                    return (
                      <Link
                        key={process.id}
                        href={`/process/${process.id}`}
                        className="flex items-center justify-between p-3 rounded-xl transition-all hover:shadow-sm group"
                        style={{ background: `${process.color}10`, border: `1px solid ${process.color}20` }}
                      >
                        <span className="text-sm font-medium" style={{ color: process.color }}>
                          {process.name}
                        </span>
                        <ChevronRight
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          style={{ color: process.color }}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Other Technologies */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)" }}
              >
                <h3
                  className="font-bold text-base mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                >
                  다른 측정 기술
                </h3>
                <div className="space-y-2">
                  {technologies
                    .filter((t) => t.id !== tech.id)
                    .slice(0, 5)
                    .map((t) => (
                      <Link
                        key={t.id}
                        href={`/technology/${t.id}`}
                        className="flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-slate-50 group"
                      >
                        <span className="text-sm" style={{ color: "oklch(0.42 0.04 240)" }}>
                          {t.name}
                        </span>
                        <ChevronRight
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                          style={{ color: "oklch(0.55 0.14 185)" }}
                        />
                      </Link>
                    ))}
                </div>
              </div>

              {/* CTA Card */}
              <div
                className="p-6 rounded-2xl text-white"
                style={{ background: "oklch(0.35 0.12 240)" }}
              >
                <h3
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  도입 문의
                </h3>
                <p className="text-sm text-white/75 mb-4">
                  {tech.name} 도입에 관한 기술 문의 및 견적을 요청하세요.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  문의하기 <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
