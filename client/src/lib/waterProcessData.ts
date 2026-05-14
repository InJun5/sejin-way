// SEJIN Water Analytics - Process and Technology Data
// Defines water treatment processes and measurement technologies

export interface MeasurementPoint {
  id: string;
  label: string;
  x: number; // percentage position
  y: number; // percentage position
  parameters: string[];
  techId: string;
}

export interface ProcessStep {
  id: string;
  name: string;
  nameEn: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  icon: string;
}

export interface WaterProcess {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  color: string;
  bgGradient: string;
  steps: ProcessStep[];
  measurementPoints: MeasurementPoint[];
}

export interface Technology {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  description: string;
  principle: string;
  applications: string[];
  parameters: string[];
  range: string;
  accuracy: string;
  features: string[];
  processIds: string[];
}

// ─── Water Treatment Processes ───────────────────────────────────────────────

export const waterProcesses: WaterProcess[] = [
  {
    id: "ultrapure",
    name: "초순수",
    nameEn: "Ultrapure Water",
    description: "반도체, 제약, 전자산업에서 요구되는 최고 수준의 순수한 물. 저항률 18.2 MΩ·cm 이상의 초고순도 수질을 달성하기 위한 다단계 정제 공정.",
    color: "#0369a1",
    bgGradient: "from-sky-50 to-blue-50",
    steps: [
      { id: "raw-water", name: "원수", nameEn: "Raw Water", x: 2, y: 38, width: 9, height: 24, color: "#64748b", icon: "💧" },
      { id: "pretreatment", name: "전처리", nameEn: "Pre-treatment", x: 14, y: 28, width: 11, height: 44, color: "#0369a1", icon: "🔧" },
      { id: "ro", name: "역삼투", nameEn: "RO", x: 28, y: 28, width: 11, height: 44, color: "#0284c7", icon: "🌊" },
      { id: "cdi", name: "CDI/EDI", nameEn: "CDI/EDI", x: 42, y: 28, width: 11, height: 44, color: "#0369a1", icon: "⚡" },
      { id: "polishing", name: "폴리싱", nameEn: "Polishing", x: 56, y: 28, width: 11, height: 44, color: "#0284c7", icon: "✨" },
      { id: "uv", name: "UV처리", nameEn: "UV Treatment", x: 70, y: 28, width: 11, height: 44, color: "#0369a1", icon: "☀️" },
      { id: "pou", name: "사용점", nameEn: "Point of Use", x: 84, y: 38, width: 11, height: 24, color: "#0ea5e9", icon: "🏭" },
    ],
    measurementPoints: [
      { id: "up-1", label: "원수 수질", x: 11, y: 38, parameters: ["pH", "탁도", "전도도", "TOC"], techId: "ph-conductivity" },
      { id: "up-2", label: "전처리 후", x: 25, y: 28, parameters: ["탁도", "SDI", "잔류염소"], techId: "turbidity" },
      { id: "up-3", label: "RO 투과수", x: 39, y: 28, parameters: ["전도도", "TOC", "pH"], techId: "toc" },
      { id: "up-4", label: "EDI 출구", x: 53, y: 28, parameters: ["비저항", "TOC", "DO"], techId: "resistivity" },
      { id: "up-5", label: "폴리싱 후", x: 67, y: 28, parameters: ["비저항", "TOC", "입자수"], techId: "resistivity" },
      { id: "up-6", label: "사용점", x: 82, y: 28, parameters: ["비저항", "TOC", "DO", "입자수"], techId: "toc" },
    ],
  },
  {
    id: "pure",
    name: "순수",
    nameEn: "Pure Water",
    description: "의약품 제조, 식품 가공, 보일러 용수 등에 사용되는 고순도 처리수. 이온교환수지와 역삼투 공정을 통해 불순물을 제거한 정제수.",
    color: "#1d4ed8",
    bgGradient: "from-blue-50 to-indigo-50",
    steps: [
      { id: "raw-water", name: "원수", nameEn: "Raw Water", x: 2, y: 38, width: 9, height: 24, color: "#64748b", icon: "💧" },
      { id: "filtration", name: "여과", nameEn: "Filtration", x: 14, y: 28, width: 11, height: 44, color: "#1d4ed8", icon: "🔵" },
      { id: "softening", name: "연수화", nameEn: "Softening", x: 28, y: 28, width: 11, height: 44, color: "#2563eb", icon: "💎" },
      { id: "ro", name: "역삼투", nameEn: "RO", x: 42, y: 28, width: 11, height: 44, color: "#1d4ed8", icon: "🌊" },
      { id: "ix", name: "이온교환", nameEn: "Ion Exchange", x: 56, y: 28, width: 11, height: 44, color: "#2563eb", icon: "⚗️" },
      { id: "storage", name: "저장조", nameEn: "Storage Tank", x: 70, y: 28, width: 11, height: 44, color: "#1d4ed8", icon: "🏗️" },
      { id: "distribution", name: "배수", nameEn: "Distribution", x: 84, y: 38, width: 11, height: 24, color: "#3b82f6", icon: "🚰" },
    ],
    measurementPoints: [
      { id: "pw-1", label: "원수 모니터링", x: 11, y: 38, parameters: ["pH", "탁도", "경도", "전도도"], techId: "ph-conductivity" },
      { id: "pw-2", label: "여과 후", x: 25, y: 28, parameters: ["탁도", "SDI"], techId: "turbidity" },
      { id: "pw-3", label: "연수화 후", x: 39, y: 28, parameters: ["경도", "전도도"], techId: "ph-conductivity" },
      { id: "pw-4", label: "RO 투과수", x: 53, y: 28, parameters: ["전도도", "TOC", "pH"], techId: "toc" },
      { id: "pw-5", label: "이온교환 후", x: 67, y: 28, parameters: ["전도도", "비저항", "실리카"], techId: "resistivity" },
      { id: "pw-6", label: "배수 품질", x: 82, y: 28, parameters: ["전도도", "pH", "TOC"], techId: "ph-conductivity" },
    ],
  },
  {
    id: "wastewater",
    name: "폐수",
    nameEn: "Wastewater",
    description: "산업 공정에서 발생하는 폐수의 처리 및 방류 전 수질 모니터링. 유해물질 제거와 방류 기준 준수를 위한 실시간 분석 솔루션.",
    color: "#b45309",
    bgGradient: "from-amber-50 to-orange-50",
    steps: [
      { id: "influent", name: "유입수", nameEn: "Influent", x: 2, y: 38, width: 9, height: 24, color: "#92400e", icon: "🏭" },
      { id: "equalization", name: "균등조", nameEn: "Equalization", x: 14, y: 28, width: 11, height: 44, color: "#b45309", icon: "⚖️" },
      { id: "physical-chem", name: "물리화학", nameEn: "Phys-Chem", x: 28, y: 28, width: 11, height: 44, color: "#d97706", icon: "🧪" },
      { id: "biological", name: "생물처리", nameEn: "Biological", x: 42, y: 28, width: 11, height: 44, color: "#b45309", icon: "🦠" },
      { id: "secondary", name: "2차 침전", nameEn: "Secondary Clarifier", x: 56, y: 28, width: 11, height: 44, color: "#d97706", icon: "🌀" },
      { id: "advanced", name: "고도처리", nameEn: "Advanced Treatment", x: 70, y: 28, width: 11, height: 44, color: "#b45309", icon: "⚗️" },
      { id: "effluent", name: "방류수", nameEn: "Effluent", x: 84, y: 38, width: 11, height: 24, color: "#f59e0b", icon: "🌊" },
    ],
    measurementPoints: [
      { id: "ww-1", label: "유입 모니터링", x: 11, y: 38, parameters: ["pH", "COD", "SS", "중금속"], techId: "cod-bod" },
      { id: "ww-2", label: "균등조", x: 25, y: 28, parameters: ["pH", "ORP", "전도도"], techId: "ph-conductivity" },
      { id: "ww-3", label: "물리화학 후", x: 39, y: 28, parameters: ["탁도", "SS", "pH"], techId: "turbidity" },
      { id: "ww-4", label: "생물처리 중", x: 53, y: 28, parameters: ["DO", "NH4-N", "NO3-N", "pH"], techId: "do-nutrients" },
      { id: "ww-5", label: "2차 침전 후", x: 67, y: 28, parameters: ["SS", "탁도", "BOD"], techId: "turbidity" },
      { id: "ww-6", label: "방류 전 최종", x: 82, y: 28, parameters: ["COD", "BOD", "SS", "pH", "TN", "TP"], techId: "cod-bod" },
    ],
  },
  {
    id: "sewage",
    name: "하수",
    nameEn: "Sewage Treatment",
    description: "생활하수 및 도시하수 처리 공정의 수질 모니터링. 방류 기준 준수와 처리 효율 최적화를 위한 연속 측정 시스템.",
    color: "#065f46",
    bgGradient: "from-emerald-50 to-teal-50",
    steps: [
      { id: "raw-sewage", name: "원하수", nameEn: "Raw Sewage", x: 2, y: 38, width: 9, height: 24, color: "#064e3b", icon: "🏙️" },
      { id: "screening", name: "스크리닝", nameEn: "Screening", x: 14, y: 28, width: 11, height: 44, color: "#065f46", icon: "🔲" },
      { id: "primary", name: "1차 침전", nameEn: "Primary Clarifier", x: 28, y: 28, width: 11, height: 44, color: "#047857", icon: "🌀" },
      { id: "aeration", name: "폭기조", nameEn: "Aeration Tank", x: 42, y: 28, width: 11, height: 44, color: "#065f46", icon: "💨" },
      { id: "secondary-s", name: "2차 침전", nameEn: "Secondary Clarifier", x: 56, y: 28, width: 11, height: 44, color: "#047857", icon: "🌀" },
      { id: "disinfection", name: "소독", nameEn: "Disinfection", x: 70, y: 28, width: 11, height: 44, color: "#065f46", icon: "☢️" },
      { id: "effluent-s", name: "방류수", nameEn: "Effluent", x: 84, y: 38, width: 11, height: 24, color: "#10b981", icon: "🌊" },
    ],
    measurementPoints: [
      { id: "sw-1", label: "원하수 유입", x: 11, y: 38, parameters: ["유량", "COD", "SS", "pH"], techId: "cod-bod" },
      { id: "sw-2", label: "1차 침전 전", x: 25, y: 28, parameters: ["SS", "탁도"], techId: "turbidity" },
      { id: "sw-3", label: "폭기조 내", x: 39, y: 28, parameters: ["DO", "NH4-N", "pH", "MLSS"], techId: "do-nutrients" },
      { id: "sw-4", label: "2차 침전 후", x: 53, y: 28, parameters: ["SS", "탁도", "BOD"], techId: "turbidity" },
      { id: "sw-5", label: "소독 전후", x: 67, y: 28, parameters: ["잔류염소", "대장균", "탁도"], techId: "chlorine" },
      { id: "sw-6", label: "방류 최종", x: 82, y: 28, parameters: ["BOD", "COD", "SS", "TN", "TP", "pH"], techId: "cod-bod" },
    ],
  },
  {
    id: "reuse",
    name: "재이용수",
    nameEn: "Water Reuse",
    description: "처리된 하폐수를 재이용하기 위한 고도처리 공정. 농업용수, 공업용수, 환경용수 등 다양한 재이용 목적에 맞는 수질 확보.",
    color: "#5b21b6",
    bgGradient: "from-violet-50 to-purple-50",
    steps: [
      { id: "treated-water", name: "처리수", nameEn: "Treated Water", x: 2, y: 38, width: 9, height: 24, color: "#4c1d95", icon: "💧" },
      { id: "mf-uf", name: "MF/UF", nameEn: "MF/UF", x: 14, y: 28, width: 11, height: 44, color: "#5b21b6", icon: "🔵" },
      { id: "ro-reuse", name: "역삼투", nameEn: "RO", x: 28, y: 28, width: 11, height: 44, color: "#6d28d9", icon: "🌊" },
      { id: "advanced-ox", name: "고도산화", nameEn: "Advanced Oxidation", x: 42, y: 28, width: 11, height: 44, color: "#5b21b6", icon: "⚡" },
      { id: "disinfect-r", name: "소독", nameEn: "Disinfection", x: 56, y: 28, width: 11, height: 44, color: "#6d28d9", icon: "☢️" },
      { id: "storage-r", name: "저장", nameEn: "Storage", x: 70, y: 28, width: 11, height: 44, color: "#5b21b6", icon: "🏗️" },
      { id: "reuse-point", name: "재이용", nameEn: "Reuse Point", x: 84, y: 38, width: 11, height: 24, color: "#7c3aed", icon: "♻️" },
    ],
    measurementPoints: [
      { id: "ru-1", label: "유입 처리수", x: 11, y: 38, parameters: ["탁도", "COD", "SS", "병원성 지표"], techId: "turbidity" },
      { id: "ru-2", label: "MF/UF 투과수", x: 25, y: 28, parameters: ["탁도", "입자수", "SDI"], techId: "turbidity" },
      { id: "ru-3", label: "RO 투과수", x: 39, y: 28, parameters: ["전도도", "TOC", "pH"], techId: "toc" },
      { id: "ru-4", label: "고도산화 후", x: 53, y: 28, parameters: ["TOC", "오존", "UV투과율"], techId: "toc" },
      { id: "ru-5", label: "소독 후", x: 67, y: 28, parameters: ["잔류염소", "탁도", "pH"], techId: "chlorine" },
      { id: "ru-6", label: "재이용 수질", x: 82, y: 28, parameters: ["pH", "탁도", "전도도", "잔류염소"], techId: "ph-conductivity" },
    ],
  },
];

// ─── Measurement Technologies ─────────────────────────────────────────────────

export const technologies: Technology[] = [
  {
    id: "ph-conductivity",
    name: "pH / 전도도 / 비저항",
    nameEn: "pH / Conductivity / Resistivity",
    category: "기본 수질 파라미터",
    description: "수처리 공정의 가장 기본적인 수질 파라미터인 pH, 전도도, 비저항을 연속적으로 측정합니다. 이온 농도와 산/염기 균형을 실시간으로 모니터링하여 공정 이상을 즉시 감지합니다.",
    principle: "pH는 유리전극법(Glass Electrode Method)을 사용하며, 전도도는 전극간 전기저항 측정 원리를 적용합니다. 비저항은 전도도의 역수로 초순수 품질 평가에 활용됩니다.",
    applications: ["초순수 제조 공정", "순수 제조 공정", "폐수 처리 모니터링", "냉각수 관리", "보일러 급수 관리"],
    parameters: ["pH (0~14)", "전도도 (0.055 μS/cm ~ 200 mS/cm)", "비저항 (0.05 ~ 18.2 MΩ·cm)", "온도 보정"],
    range: "pH: 0~14 / 전도도: 0.055 μS/cm ~ 200 mS/cm",
    accuracy: "pH: ±0.01 / 전도도: ±1%",
    features: ["자동 온도 보정(ATC)", "다중 채널 동시 측정", "4~20mA 아날로그 출력", "Modbus/RS485 통신", "자동 세정 기능"],
    processIds: ["ultrapure", "pure", "wastewater", "sewage", "reuse"],
  },
  {
    id: "toc",
    name: "TOC 분석기",
    nameEn: "TOC Analyzer",
    category: "유기물 측정",
    description: "물속에 존재하는 총 유기탄소(Total Organic Carbon)를 연속적으로 측정합니다. 초순수 품질 관리와 폐수 처리 효율 평가에 필수적인 분석기입니다.",
    principle: "UV 산화법 또는 고온 연소 산화법을 통해 유기물을 CO₂로 산화시킨 후 비분산 적외선 검출기(NDIR)로 측정합니다. 온라인 연속 측정이 가능합니다.",
    applications: ["초순수 공정 품질 관리", "순수 제조 모니터링", "재이용수 처리 효율 평가", "제약용수 품질 관리", "반도체 공정수 모니터링"],
    parameters: ["TOC (ppb ~ ppm 범위)", "TC (총탄소)", "IC (무기탄소)", "NPOC (비퍼지성 유기탄소)"],
    range: "0.1 ppb ~ 50,000 ppm (측정 범위 자동 전환)",
    accuracy: "±2% 또는 ±0.5 ppb (낮은 농도 범위)",
    features: ["UV 산화 방식 (시약 불필요)", "자동 영점/스팬 교정", "초저농도 ppb 수준 측정", "Modbus TCP/IP 통신", "21 CFR Part 11 준수"],
    processIds: ["ultrapure", "pure", "reuse"],
  },
  {
    id: "resistivity",
    name: "비저항 / 순도 분석기",
    nameEn: "Resistivity / Purity Analyzer",
    category: "초순수 품질 측정",
    description: "초순수 및 순수 공정에서 이온성 불순물의 총량을 비저항(Resistivity)으로 측정합니다. 18.2 MΩ·cm의 이론적 최대값에 근접한 초순수 품질을 실시간으로 검증합니다.",
    principle: "교류 전도도 측정 원리를 기반으로 하며, 온도 보정 알고리즘을 적용하여 25°C 기준 비저항 값을 산출합니다. 셀 상수 교정을 통해 높은 정밀도를 유지합니다.",
    applications: ["반도체 초순수 공정", "제약 정제수 품질 관리", "전자산업 세정수 모니터링", "EDI/이온교환 공정 제어"],
    parameters: ["비저항 (0.05 ~ 18.2 MΩ·cm)", "전도도 (0.055 ~ 20,000 μS/cm)", "온도 (0 ~ 100°C)"],
    range: "0.055 μS/cm ~ 18.2 MΩ·cm",
    accuracy: "±0.5% (전체 범위)",
    features: ["18.2 MΩ·cm 측정 가능", "온라인 연속 측정", "소형 인라인 설치", "고순도 재질 (PVDF, 316L SS)", "자동 온도 보정"],
    processIds: ["ultrapure", "pure"],
  },
  {
    id: "turbidity",
    name: "탁도 / SS 분석기",
    nameEn: "Turbidity / SS Analyzer",
    category: "부유물질 측정",
    description: "물속의 부유물질(SS)과 탁도를 광학적 방법으로 연속 측정합니다. 여과 공정 효율 평가, 막 파손 감지, 방류수 수질 모니터링에 활용됩니다.",
    principle: "90° 산란광 측정법(ISO 7027 기준)을 적용하여 입자에 의한 빛의 산란 강도를 측정합니다. 레이저 또는 LED 광원을 사용하며, 자동 세정 기능으로 연속 측정 신뢰성을 확보합니다.",
    applications: ["정수 처리 공정", "폐수 방류 모니터링", "막여과 공정 관리", "하수처리 방류수 관리", "재이용수 품질 확인"],
    parameters: ["탁도 (NTU/FTU)", "부유물질 SS (mg/L)", "MLSS (활성슬러지 농도)"],
    range: "0.001 ~ 4,000 NTU (자동 범위 전환)",
    accuracy: "±2% 또는 ±0.01 NTU",
    features: ["ISO 7027 준수", "자동 초음파 세정", "레이저 광원 (635nm)", "다중 산란각 측정", "방폭 옵션 가능"],
    processIds: ["ultrapure", "pure", "wastewater", "sewage", "reuse"],
  },
  {
    id: "do-nutrients",
    name: "DO / 영양염류 분석기",
    nameEn: "DO / Nutrients Analyzer",
    category: "생물처리 공정 측정",
    description: "생물처리 공정에서 필수적인 용존산소(DO)와 질소·인 계열 영양염류(NH4-N, NO3-N, PO4-P)를 연속 측정합니다. 폭기 제어와 영양염류 제거 공정 최적화에 활용됩니다.",
    principle: "DO는 형광 소광법(Optical DO) 또는 막전극법으로 측정하며, 영양염류는 이온선택성 전극(ISE) 또는 광도계법을 적용합니다. 시약 없이 연속 측정이 가능합니다.",
    applications: ["하수처리 폭기조 제어", "폐수 생물처리 모니터링", "질소·인 제거 공정 관리", "수계 부영양화 모니터링"],
    parameters: ["DO (0~20 mg/L)", "NH4-N (암모니아성 질소)", "NO3-N (질산성 질소)", "PO4-P (인산성 인)", "pH"],
    range: "DO: 0~20 mg/L / NH4-N: 0~100 mg/L / NO3-N: 0~100 mg/L",
    accuracy: "DO: ±0.1 mg/L / 영양염류: ±5%",
    features: ["무시약 광학 DO 측정", "다중 파라미터 동시 측정", "자동 세정 기능", "폭기 제어 연동", "슬러지 내 설치 가능"],
    processIds: ["wastewater", "sewage"],
  },
  {
    id: "cod-bod",
    name: "COD / BOD 분석기",
    nameEn: "COD / BOD Analyzer",
    category: "유기물 부하 측정",
    description: "폐수 및 하수의 유기물 오염 부하를 나타내는 COD(화학적 산소요구량)와 BOD(생물화학적 산소요구량)를 연속 측정합니다. 방류 기준 준수 여부를 실시간으로 확인합니다.",
    principle: "COD는 UV 흡광도법 또는 과망간산칼륨 산화법을 적용하고, BOD는 호흡계측법(Respirometry)을 사용합니다. 온라인 연속 측정으로 즉각적인 공정 대응이 가능합니다.",
    applications: ["산업 폐수 방류 모니터링", "하수처리 방류수 관리", "공정 내 유기물 부하 추적", "환경 규제 준수 모니터링"],
    parameters: ["COD (mg/L O₂)", "BOD₅ (mg/L O₂)", "TOD (총산소요구량)", "UV 흡광도(254nm)"],
    range: "COD: 0~5,000 mg/L / BOD: 0~500 mg/L",
    accuracy: "COD: ±5% / BOD: ±10%",
    features: ["UV 흡광도 상관법 (무시약)", "자동 세정 및 교정", "희석 자동 조절", "방류 기준 초과 알람", "데이터 로깅 및 리포트"],
    processIds: ["wastewater", "sewage"],
  },
  {
    id: "chlorine",
    name: "잔류염소 / 소독 분석기",
    nameEn: "Residual Chlorine Analyzer",
    category: "소독 공정 측정",
    description: "소독 공정에서 사용되는 염소의 잔류 농도를 연속 측정합니다. 정수처리, 하수처리, 재이용수 처리에서 소독 효과를 확인하고 과잉 투입을 방지합니다.",
    principle: "막전극법(Amperometric) 또는 DPD 비색법을 적용하여 유리잔류염소(Free Chlorine)와 총잔류염소(Total Chlorine)를 측정합니다. pH 연동 보정으로 정확도를 높입니다.",
    applications: ["정수처리 소독 공정", "하수처리 방류 전 소독", "재이용수 소독 관리", "수영장 수질 관리", "냉각탑 수처리"],
    parameters: ["유리잔류염소 (mg/L Cl₂)", "총잔류염소 (mg/L Cl₂)", "이산화염소 (ClO₂)", "오존 (O₃)"],
    range: "0~20 mg/L Cl₂ (고농도 옵션: 0~200 mg/L)",
    accuracy: "±2% 또는 ±0.02 mg/L",
    features: ["무시약 막전극법", "pH 자동 보정", "자동 세정 기능", "유리/결합/총염소 구분 측정", "저농도 ppb 수준 측정 가능"],
    processIds: ["sewage", "reuse"],
  },
];

export const getTechnologyById = (id: string): Technology | undefined =>
  technologies.find((t) => t.id === id);

export const getProcessById = (id: string): WaterProcess | undefined =>
  waterProcesses.find((p) => p.id === id);
