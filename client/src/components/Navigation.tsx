// SEJIN Navigation Component
// Design: Steel Blue primary, transparent-to-solid on scroll, clean horizontal layout

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Droplets } from "lucide-react";
import { waterProcesses } from "@/lib/waterProcessData";

const navLinks = [
  {
    label: "측정 기술",
    href: "/technology/ph-conductivity",
    dropdown: [
      { label: "pH / 전도도", href: "/technology/ph-conductivity" },
      { label: "TOC 분석기", href: "/technology/toc" },
      { label: "비저항 / 순도", href: "/technology/resistivity" },
      { label: "탁도 / SS", href: "/technology/turbidity" },
      { label: "DO / 영양염류", href: "/technology/do-nutrients" },
      { label: "COD / BOD", href: "/technology/cod-bod" },
      { label: "잔류염소", href: "/technology/chlorine" },
    ],
  },
  {
    label: "수처리 공정",
    href: "/process/ultrapure",
    dropdown: waterProcesses.map((p) => ({
      label: p.name,
      href: `/process/${p.id}`,
    })),
  },
  { label: "회사 소개", href: "/about" },
  { label: "문의하기", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isHome = location === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
              style={{ background: "oklch(0.35 0.12 240)" }}
            >
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-xl tracking-tight"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: scrolled || !isHome ? "oklch(0.18 0.04 240)" : "white",
                }}
              >
                SEJIN
              </span>
              <span
                className="text-[10px] tracking-widest font-medium"
                style={{
                  color: scrolled || !isHome ? "oklch(0.55 0.14 185)" : "oklch(0.85 0.05 185)",
                }}
              >
                수처리 분석기술
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    scrolled || !isHome
                      ? "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </Link>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="ml-3 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "oklch(0.55 0.14 185)" }}
            >
              기술 문의
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === link.label ? null : link.label)
                  }
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-3 px-4 py-3 rounded-lg text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
              style={{ background: "oklch(0.35 0.12 240)" }}
            >
              기술 문의
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
