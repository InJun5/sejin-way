import { useEffect } from "react";
import { useLocation } from "wouter"; // wouter로 변경

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    console.log(" 페이지 이동 감지:", location);

    // 1. 콘솔에서 찾은 '진짜 범인' 요소 타격
    const scrollTarget = document.getElementById("manus-previewer-root");

    if (scrollTarget) {
      scrollTarget.scrollTo(0, 0);

      // 혹시 내부 자식 div가 스크롤을 가지고 있을 경우를 대비해 한 번 더!
      const nestedDiv = scrollTarget.querySelector('div');
      if (nestedDiv) {
        nestedDiv.scrollTo(0, 0);
      }
    }

    // 2. 기본 브라우저 스크롤도 같이 시도
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);

  }, [location]); // 경로가 바뀔 때마다 실행

  return null;
}