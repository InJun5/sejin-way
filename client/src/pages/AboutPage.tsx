// SEJIN About Page
// Company introduction, team structure, business model, product portfolio
import { Link } from "wouter";
import { ChevronRight, CheckCircle2, ArrowRight, Beaker, Cpu, Users, TrendingUp, Zap, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LAB_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566838050/i6kdvYxv3vGHnpnoCFHQKT/lab-analysis_dec24e4f.jpg";
const ANALYZER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566838050/i6kdvYxv3vGHnpnoCFHQKT/analyzer-closeup_9b17e323.jpg";
const ABSTRACT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566838050/i6kdvYxv3vGHnpnoCFHQKT/water-flow-abstract_1a6c47da.jpg";

const strengths = [
  {
    icon: Beaker,
    title: "Design",
    description: "제품 설계부터 3D 모델링까지 완벽한 설계 역량을 보유하고 있습니다.",
  },
  {
    icon: Cpu,
    title: "Software",
    description: "Java, Python, Android 등 다양한 플랫폼의 소프트웨어 개발 능력을 갖추고 있습니다.",
  },
  {
    icon: Users,
    title: "Hardware",
    description: "분석기, 센서, TMS 등 최첨단 하드웨어 기술을 개발·제조합니다.",
  },
  {
    icon: TrendingUp,
    title: "All-in-One Solution",
    description: "설계부터 소프트웨어, 하드웨어까지 통합 솔루션을 제공합니다.",
  },
];

const teamStats = [
  { number: "4+1", label: "엔지니어 + 매니지먼트", skills: "화학공학, 전기공학, 컴퓨터공학" },
  { number: "6", label: "파트너사", skills: "OEM 개발 및 제조" },
  { number: "40", label: "개발팀", skills: "자동화, 분석기, 센서, IoT" },
];

const timeline = [
  { year: "2019.04", event: "Shema", phase: "Consulting" },
  { year: "2020.03", event: "SEJIN TECH", phase: "Consulting" },
  { year: "2021.08", event: "Production TOC", phase: "R&D" },
  { year: "2023.04", event: "SEJIN", phase: "R&D" },
  { year: "2023.05", event: "R&D 강화", phase: "R&D" },
  { year: "2024.06", event: "Export", phase: "OEM" },
];

const products = [
  { name: "Toxicity Analyzer", category: "분석기", tech: "Photo Multiplier" },
  { name: "FID Analyzer", category: "분석기", tech: "Flame Ionization" },
  { name: "Vision Analyzer", category: "분석기", tech: "이미지 분석" },
  { name: "CO2 Analyzer", category: "분석기", tech: "NDIR" },
  { name: "IoT Gateway", category: "소프트웨어", tech: "IoT 통신" },
  { name: "TMS Software", category: "소프트웨어", tech: "데이터 관리" },
  { name: "Android App", category: "소프트웨어", tech: "모바일 제어" },
  { name: "Sensor Suite", category: "하드웨어", tech: "다중 센서" },
];

const businessAreas = [
  {
    title: "Consulting",
    subtitle: "Schema Solution",
    desc: "기술 컨설팅 및 솔루션 설계",
    color: "oklch(0.94 0.03 185)",
    textColor: "oklch(0.35 0.12 185)",
  },
  {
    title: "R&D",
    subtitle: "SEJIN Tech, TOC",
    desc: "자체 분석기 개발 및 생산",
    color: "oklch(0.88 0.01 240)",
    textColor: "oklch(0.35 0.12 240)",
  },
  {
    title: "OEM",
    subtitle: "K-WATER, Water/Gas, IoT",
    desc: "파트너사 맞춤형 제조",
    color: "oklch(0.97 0.008 240)",
    textColor: "oklch(0.35 0.12 240)",
  },
];

export default function AboutPage() {
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
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "oklch(0.52 0.04 240)" }}>
            <Link href="/" className="hover:text-blue-700 transition-colors">
              홈
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "oklch(0.35 0.12 240)" }}>회사 소개</span>
          </div>
          <div className="max-w-2xl">
            <p className="sejin-section-label mb-3">About SEJIN</p>
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.15 0.04 240)" }}
            >
              수처리 분석기술의 선도자
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 240)" }}>
              SEJIN은 Design, Software, Hardware를 통합한 수처리 분석 솔루션을 제공합니다. 기술 컨설팅, 자체 제품 개발, OEM 제조를 통해 수처리 산업의 모든 요구를 충족시킵니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="sejin-section-label mb-3">Capabilities</p>
            <h2 className="sejin-heading-lg">SEJIN의 핵심 역량</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border transition-all hover:shadow-lg"
                style={{ background: "white", borderColor: "oklch(0.88 0.01 240)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.94 0.03 185)" }}
                >
                  <strength.icon className="w-6 h-6" style={{ color: "oklch(0.35 0.12 185)" }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "oklch(0.22 0.05 240)" }}>
                  {strength.title}
                </h3>
                <p className="text-sm" style={{ color: "oklch(0.52 0.04 240)" }}>
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 border-t" style={{ borderColor: "oklch(0.88 0.01 240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="sejin-section-label mb-3">Team</p>
            <h2 className="sejin-heading-lg mb-4">SEJIN의 팀 구성</h2>
            <p className="sejin-body max-w-2xl">
              SEJIN은 화학공학, 전기공학, 컴퓨터공학 분야의 전문가들로 구성된 통합 엔지니어링 팀입니다. 설계부터 개발, 제조까지 모든 단계에서 최고의 품질을 추구합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border text-center transition-all hover:shadow-lg"
                style={{ background: "white", borderColor: "oklch(0.88 0.01 240)" }}
              >
                <div
                  className="text-5xl font-bold mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.35 0.12 240)" }}
                >
                  {stat.number}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "oklch(0.22 0.05 240)" }}>
                  {stat.label}
                </h3>
                <p className="text-sm" style={{ color: "oklch(0.52 0.04 240)" }}>
                  {stat.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20" style={{ background: "oklch(0.97 0.008 240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="sejin-section-label mb-3">History</p>
            <h2 className="sejin-heading-lg">SEJIN의 성장 여정</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute top-8 left-0 right-0 h-1"
              style={{ background: "oklch(0.88 0.01 240)" }}
            />
            {/* Timeline items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
              {timeline.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="w-6 h-6 rounded-full mx-auto mb-4 border-4 border-white"
                    style={{ background: "oklch(0.35 0.12 240)" }}
                  />
                  <p className="text-xs font-bold mb-1" style={{ color: "oklch(0.35 0.12 240)" }}>
                    {item.year}
                  </p>
                  <p className="text-sm font-semibold mb-1" style={{ color: "oklch(0.22 0.05 240)" }}>
                    {item.event}
                  </p>
                  <p className="text-xs" style={{ color: "oklch(0.55 0.14 185)" }}>
                    {item.phase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="sejin-section-label mb-3">Business</p>
            <h2 className="sejin-heading-lg mb-4">3가지 핵심 사업 영역</h2>
            <p className="sejin-body max-w-2xl">
              SEJIN은 기술 컨설팅, 연구개발, OEM 제조를 통해 수처리 분석 솔루션의 전체 가치사슬을 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessAreas.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border text-center transition-all hover:shadow-lg"
                style={{ background: item.color, borderColor: "oklch(0.88 0.01 240)" }}
              >
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif", color: item.textColor }}
                >
                  {item.title}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: item.textColor }}>
                  {item.subtitle}
                </p>
                <p style={{ color: "oklch(0.52 0.04 240)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20" style={{ background: "oklch(0.97 0.008 240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="sejin-section-label mb-3">Portfolio</p>
            <h2 className="sejin-heading-lg mb-4">개발 제품 및 기술</h2>
            <p className="sejin-body max-w-2xl">
              SEJIN은 분석기, 센서, 소프트웨어, IoT 솔루션 등 다양한 제품을 개발하여 수처리 산업의 모든 요구를 충족합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border transition-all hover:shadow-lg"
                style={{ background: "white", borderColor: "oklch(0.88 0.01 240)" }}
              >
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background:
                      product.category === "분석기"
                        ? "oklch(0.94 0.03 185 / 0.5)"
                        : product.category === "소프트웨어"
                          ? "oklch(0.94 0.03 240 / 0.5)"
                          : "oklch(0.94 0.03 30 / 0.5)",
                    color:
                      product.category === "분석기"
                        ? "oklch(0.35 0.12 185)"
                        : product.category === "소프트웨어"
                          ? "oklch(0.35 0.12 240)"
                          : "oklch(0.35 0.12 30)",
                  }}
                >
                  {product.category}
                </div>
                <h4 className="font-bold mb-2" style={{ color: "oklch(0.22 0.05 240)" }}>
                  {product.name}
                </h4>
                <p className="text-sm" style={{ color: "oklch(0.52 0.04 240)" }}>
                  {product.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="sejin-heading-lg mb-6">SEJIN과 함께하세요</h2>
          <p className="sejin-body mb-8 max-w-2xl mx-auto">
            수처리 분석 기술에 대한 문의, 기술 컨설팅, OEM 제조 등 모든 요청을 환영합니다.
          </p>
          <Link
            href="/contact"
            className="sejin-btn-primary"
          >
            <Zap className="w-4 h-4" />
            문의하기
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
