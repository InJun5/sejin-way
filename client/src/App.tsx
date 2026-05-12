import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProcessPage from "./pages/ProcessPage";
import TechnologyPage from "./pages/TechnologyPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import ScrollToTop from "./components/ScrollToTop";

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";

{/*function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/process/:processId" component={ProcessPage} />
      <Route path="/technology/:techId" component={TechnologyPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}*/}


// function Router() {
//   return (
//     <>
//       {/* 2. Switch 밖에 배치하여 모든 경로 변경을 감지하게 합니다 */}
//       <ScrollToTop />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/process/:processId" component={ProcessPage} />
//         <Route path="/technology/:techId" component={TechnologyPage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//         <Route path="/404" component={NotFound} />
//         <Route component={NotFound} />
//       </Switch>
//     </>
//   );
// }

function RouterContent() { // 함수 이름을 Router 대신 RouterContent로 변경 (중복 방지)
  const [location] = useLocation(); // 현재 경로 감시

  useEffect(() => {
    // 1. 우리가 이름 붙인 영역을 찾습니다.
    const scrollRoot = document.getElementById("scroll-root");

    if (scrollRoot) {
      scrollRoot.scrollTo(0, 0); // 본문 영역 스크롤 초기화
    }

    // 2. 혹시 모르니 브라우저 기본 스크롤도 같이 초기화
    window.scrollTo(0, 0);

    console.log("🛠️ 페이지 이동 감지: 스크롤을 최상단으로 이동했습니다.");
  }, [location]); // 페이지 경로(location)가 바뀔 때마다 실행

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/process/:processId" component={ProcessPage} />
        <Route path="/technology/:techId" component={TechnologyPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// function App() {
//   return (
//     <ErrorBoundary>
//       <ThemeProvider defaultTheme="light">
//         <TooltipProvider>
//           <Toaster />
//           {/* 전체 앱을 감싸는 BrowserRouter가 이 상위 어딘가(보통 index.tsx)에 있어야 합니다 */}
//           <Router />
//         </TooltipProvider>
//       </ThemeProvider>
//     </ErrorBoundary>
//   );
// }

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <RouterContent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
