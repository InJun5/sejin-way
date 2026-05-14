// SEJIN Footer Component
// Design: Dark navy background, clean grid layout

import { Link } from "wouter";
import { Droplets, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { waterProcesses, technologies } from "@/lib/waterProcessData";

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.13 0.04 240)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center">
                <img
                  src="/__manus__/sejin_logo_text_white.png"
                  alt="세진 수질 로고"
                  className="h-15 w-auto object-contain"
                />
              </div>
              {/* <div>
                <div className="font-bold text-xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  SEJIN
                </div>
                <div className="text-[10px] tracking-widest" style={{ color: "oklch(0.55 0.14 185)" }}>
                  수처리 분석기술
                </div>
              </div> */}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "oklch(0.65 0.03 240)" }}>
              초순수부터 재이용수까지, 수처리 전 공정에 걸친 정밀 수질측정 기술과 솔루션을 제공합니다.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:+82-2-0000-0000"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: "oklch(0.65 0.03 240)" }}
              >
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.14 185)" }} />
                02-0000-0000
              </a>
              <a
                href="mailto:info@sejin-way.com"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: "oklch(0.65 0.03 240)" }}
              >
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.55 0.14 185)" }} />
                info@sejin-water.com
              </a>
              <div
                className="flex items-start gap-2.5 text-sm"
                style={{ color: "oklch(0.65 0.03 240)" }}
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.55 0.14 185)" }} />
                인천광역시 남동구 청능대로484번길 20
              </div>
            </div>
          </div>

          {/* Processes */}
          <div>
            <h4
              className="font-semibold text-sm mb-5 tracking-wider uppercase"
              style={{ color: "oklch(0.55 0.14 185)" }}
            >
              수처리 공정
            </h4>
            <ul className="space-y-2.5">
              {waterProcesses.map((process) => (
                <li key={process.id}>
                  <Link
                    href={`/process/${process.id}`}
                    className="text-sm transition-colors hover:text-white flex items-center gap-1.5"
                    style={{ color: "oklch(0.65 0.03 240)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                    {process.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4
              className="font-semibold text-sm mb-5 tracking-wider uppercase"
              style={{ color: "oklch(0.55 0.14 185)" }}
            >
              측정 기술
            </h4>
            <ul className="space-y-2.5">
              {technologies.map((tech) => (
                <li key={tech.id}>
                  <Link
                    href={`/technology/${tech.id}`}
                    className="text-sm transition-colors hover:text-white flex items-center gap-1.5"
                    style={{ color: "oklch(0.65 0.03 240)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="font-semibold text-sm mb-5 tracking-wider uppercase"
              style={{ color: "oklch(0.55 0.14 185)" }}
            >
              회사 정보
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "회사 소개", href: "/about" },
                { label: "기술 컨설팅", href: "/about#consulting" },
                { label: "OEM 서비스", href: "/about#oem" },
                { label: "문의하기", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white flex items-center gap-1.5"
                    style={{ color: "oklch(0.65 0.03 240)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 p-4 rounded-xl border"
              style={{
                background: "oklch(0.18 0.04 240)",
                borderColor: "oklch(0.25 0.04 240)",
              }}
            >
              <p className="text-xs font-medium mb-2" style={{ color: "oklch(0.55 0.14 185)" }}>
                기술 문의
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "oklch(0.65 0.03 240)" }}>
                수처리 분석기술 도입 및 컨설팅에 대한 문의를 환영합니다.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-80"
                style={{ color: "oklch(0.55 0.14 185)" }}
              >
                문의하기 <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid oklch(0.22 0.04 240)",
            color: "oklch(0.5 0.03 240)",
          }}
        >
          <p>© 2024 SEJIN (세진). All rights reserved.</p>
          <p>수처리 분석기술 전문 기업</p>
        </div>
      </div>
    </footer>
  );
}
