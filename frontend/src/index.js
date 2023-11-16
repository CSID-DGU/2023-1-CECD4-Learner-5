import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start/StartPage";
import SelectModePage from "./pages/SelectMode/SelectModePage";
import PainterModePage from "./pages/Explain/PainterMode/PainterModePage";
import TextModePage from "./pages/Explain/TextMode/TextModePage";
import RadioModePage from "./pages/Explain/RadioMode/RadioModePage";
import QuestionPage from "./pages/Question/QuestionPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/select" element={<SelectModePage />} />
        <Route path="/explain/painter/:type" element={<PainterModePage />} />
        <Route path="/explain/text/:type" element={<TextModePage />} />
        <Route path="/explain/radio/:type" element={<RadioModePage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// type - "explain" : 기본 해설, "question" : 추가질문에 대한 답변

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
