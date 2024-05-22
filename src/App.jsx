import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const IFRAME_SRC = "https://infobae.com";

function App() {
  return (
    <main>
      <iframe src={IFRAME_SRC} title="Vite Logo" scrolling="no" />
      // El ejemplo de abajo es el que te da PowerBi Embebed. No funciona porque
      // no es publico el reporte. No es publico porque no tenemos cuenta PRO.
      {/* <iframe
        title="Analitica-test2"
        width="1140"
        height="541.25"
        src="https://app.powerbi.com/reportEmbed?reportId=cb616fe7-6148-4114-9d93-2641a8c87d58&autoAuth=true&ctid=344979d0-d31d-4c57-8ba0-491aff4acaed"
        frameborder="0"
        allowFullScreen="true"
      ></iframe> */}
    </main>
  );
}

export default App;
