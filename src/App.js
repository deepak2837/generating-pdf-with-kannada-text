import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import font from "./NotoSansKannada-VariableFont_wdth,wght.ttf";

function App() {
  useEffect(() => {
    const generatePDF = async () => {
      const doc = new jsPDF();

      // Load the font asynchronously
      await doc.addFont(font, "NotoSansKannada", "normal");

      doc.setFont("NotoSansKannada");
      doc.setFontSize(16);
      doc.text("ಹಲೋ, ವಿಶ್ವ!", 10, 20);

      doc.setFont("Helvetica");
      doc.setFontSize(12);
      doc.text("Hello, World!", 10, 30);

      doc.save("template.pdf");
    };

    generatePDF();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Generate PDF with Kannada and English Text</h1>
      </header>
    </div>
  );
}

export default App;
