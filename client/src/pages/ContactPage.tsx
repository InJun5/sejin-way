// SEJIN Contact Page
// Contact form and company information

import { useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { waterProcesses } from "@/lib/waterProcessData";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Phone, label: "전화", value: "032-0000-0000", href: "tel:+82-2-0000-0000" },
  { icon: Mail, label: "이메일", value: "info@sejin-way.com", href: "mailto:info@sejin-water.com" },
  { icon: MapPin, label: "주소", value: "인천광역시 남둥구 청능대로484번길 20", href: "#" },
  { icon: Clock, label: "업무 시간", value: "평일 08:30 - 17:30", href: "#" },
];

const inquiryTypes = [
  "수처리 공정 분석기 도입 문의",
  "OEM 분석기 제조 문의",
  "기술 컨설팅 요청",
  "제품 견적 요청",
  "기타 문의",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    process: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. 디버깅용 로그: 버튼을 눌렀을 때 콘솔에 이 문구가 뜨는지 확인하세요!
    console.log("제출 시도 중...", formData);

    const serviceID = 'service_hvnt3iv';
    const templateID = 'template_rq3x4qb';
    const publicKey = 'xEKREiOKp6_kjNxBn';

    const loadingToast = toast.loading("문의를 전송 중입니다...");

    emailjs.send(serviceID, templateID, formData as any, publicKey)
      .then((res) => {
        console.log("전송 성공!", res.status, res.text);
        toast.dismiss(loadingToast);
        toast.success("문의가 성공적으로 접수되었습니다.");
        setSubmitted(true);
      })
      .catch((err) => {
        // 2. 에러가 난다면 여기에 이유가 찍힙니다.
        console.error("전송 에러 발생:", err);
        toast.dismiss(loadingToast);
        toast.error("전송 실패. 콘솔 로그를 확인해주세요.");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div id="screoll-root" className="min-h-screen" style={{ background: "oklch(0.99 0.002 240)" }}>
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
            <Link href="/" className="hover:text-blue-700 transition-colors">홈</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span style={{ color: "oklch(0.35 0.12 240)" }}>문의하기</span>
          </div>
          <div className="max-w-2xl">
            <p className="sejin-section-label mb-3">Contact</p>
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.15 0.04 240)" }}
            >
              기술 문의 및 상담
            </h1>
            <p className="text-base leading-relaxed" style={{ color: "oklch(0.42 0.04 240)" }}>
              수처리 분석기술 도입, OEM 제조, 기술 컨설팅 등 어떤 문의든 환영합니다. 전문 엔지니어가 직접 답변드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2
                  className="text-xl font-bold mb-6"
                  style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                >
                  연락처 정보
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl transition-all hover:shadow-sm group"
                      style={{ background: "white", border: "1px solid oklch(0.88 0.01 240)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.94 0.03 185)" }}
                      >
                        <info.icon className="w-5 h-5" style={{ color: "oklch(0.35 0.12 185)" }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wider uppercase mb-0.5" style={{ color: "oklch(0.55 0.14 185)" }}>
                          {info.label}
                        </p>
                        <p className="text-sm font-medium" style={{ color: "oklch(0.25 0.05 240)" }}>
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Process Quick Links */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: "oklch(0.35 0.12 240)", color: "white" }}
              >
                <h3
                  className="font-bold text-base mb-4"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  관심 있는 공정이 있으신가요?
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  공정별 솔루션 페이지에서 적용 가능한 분석기술을 먼저 확인해보세요.
                </p>
                <div className="space-y-2">
                  {waterProcesses.map((process) => (
                    <Link
                      key={process.id}
                      href={`/process/${process.id}`}
                      className="flex items-center justify-between p-2.5 rounded-lg text-sm text-white/80 hover:bg-white/10 transition-colors"
                    >
                      {process.name}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-20 rounded-2xl border text-center"
                  style={{ background: "white", borderColor: "oklch(0.88 0.01 240)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "oklch(0.94 0.03 185)" }}
                  >
                    <CheckCircle2 className="w-8 h-8" style={{ color: "oklch(0.35 0.12 185)" }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                  >
                    문의가 접수되었습니다
                  </h3>
                  <p className="text-sm mb-8" style={{ color: "oklch(0.52 0.04 240)" }}>
                    빠른 시일 내에 전문 엔지니어가 연락드리겠습니다.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: "oklch(0.35 0.12 240)" }}
                  >
                    새 문의 작성
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-2xl border"
                  style={{ background: "white", borderColor: "oklch(0.88 0.01 240)" }}
                >
                  <h2
                    className="text-xl font-bold mb-6"
                    style={{ fontFamily: "'Outfit', sans-serif", color: "oklch(0.18 0.04 240)" }}
                  >
                    문의 양식
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "oklch(0.52 0.04 240)" }}>
                        성함 <span style={{ color: "oklch(0.55 0.14 185)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="홍길동"
                        className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2"
                        style={{
                          borderColor: "oklch(0.88 0.01 240)",
                          color: "oklch(0.22 0.05 240)",
                          background: "oklch(0.98 0.003 240)",
                        }}
                        required
                      />
                    </div>
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "oklch(0.52 0.04 240)" }}>
                        회사명
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="(주)회사명"
                        className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2"
                        style={{
                          borderColor: "oklch(0.88 0.01 240)",
                          color: "oklch(0.22 0.05 240)",
                          background: "oklch(0.98 0.003 240)",
                        }}
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "oklch(0.52 0.04 240)" }}>
                        이메일 <span style={{ color: "oklch(0.55 0.14 185)" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                        className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2"
                        style={{
                          borderColor: "oklch(0.88 0.01 240)",
                          color: "oklch(0.22 0.05 240)",
                          background: "oklch(0.98 0.003 240)",
                        }}
                        required
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "oklch(0.52 0.04 240)" }}>
                        연락처
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2"
                        style={{
                          borderColor: "oklch(0.88 0.01 240)",
                          color: "oklch(0.22 0.05 240)",
                          background: "oklch(0.98 0.003 240)",
                        }}
                      />
                    </div>
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "oklch(0.52 0.04 240)" }}>
                        문의 유형
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2"
                        style={{
                          borderColor: "oklch(0.88 0.01 240)",
                          color: formData.inquiryType ? "oklch(0.22 0.05 240)" : "oklch(0.65 0.03 240)",
                          background: "oklch(0.98 0.003 240)",
                        }}
                      >
                        <option value="">선택해주세요</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    {/* Process */}
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "oklch(0.52 0.04 240)" }}>
                        관련 공정
                      </label>
                      <select
                        name="process"
                        value={formData.process}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2"
                        style={{
                          borderColor: "oklch(0.88 0.01 240)",
                          color: formData.process ? "oklch(0.22 0.05 240)" : "oklch(0.65 0.03 240)",
                          background: "oklch(0.98 0.003 240)",
                        }}
                      >
                        <option value="">선택해주세요</option>
                        {waterProcesses.map((p) => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                        <option value="multiple">복수 공정</option>
                        <option value="unknown">미정</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: "oklch(0.52 0.04 240)" }}>
                      문의 내용 <span style={{ color: "oklch(0.55 0.14 185)" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="문의하실 내용을 자세히 적어주세요. 공정 현황, 측정이 필요한 파라미터, 설치 환경 등을 포함하면 더 정확한 답변을 드릴 수 있습니다."
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all focus:ring-2 resize-none"
                      style={{
                        borderColor: "oklch(0.88 0.01 240)",
                        color: "oklch(0.22 0.05 240)",
                        background: "oklch(0.98 0.003 240)",
                      }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{
                      background: "oklch(0.35 0.12 240)",
                      boxShadow: "0 4px 16px oklch(0.35 0.12 240 / 0.3)",
                    }}
                  >
                    <Send className="w-4 h-4" />
                    문의 보내기
                  </button>

                  <p className="text-xs text-center mt-4" style={{ color: "oklch(0.65 0.03 240)" }}>
                    * 표시된 항목은 필수 입력 사항입니다. 입력하신 정보는 문의 답변 목적으로만 사용됩니다.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
