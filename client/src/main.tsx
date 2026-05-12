import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 이건 잘 가져오셨습니다!
import App from "./App";
import "./index.css";

// <App />을 <BrowserRouter>로 감싸주세요!
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);