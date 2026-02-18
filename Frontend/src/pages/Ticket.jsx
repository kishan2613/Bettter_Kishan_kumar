import { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TicketSVG from "../assets/Ticket.svg";

export default function Ticket({ fullName, numberOfPeople, date, slot, autoDownload = true }) {
  const ticketRef = useRef();

  const handleDownload = async () => {
    const element = ticketRef.current;
    if (!element) return;

    try {
      // Give the browser a moment to paint the SVG
      const canvas = await html2canvas(element, { 
        scale: 3, 
        useCORS: true,
        logging: false,
        allowTaint: true 
      });
      
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = canvas.width;
      const pdfHeight = canvas.height;

      const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
        unit: "px",
        format: [pdfWidth, pdfHeight],
      });

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`ticket-${fullName.replace(/\s+/g, '-')}.pdf`);
    } catch (error) {
      console.error("PDF Generation failed:", error);
    }
  };

  useEffect(() => {
    // We use a small delay (500ms) to ensure SVG and fonts are rendered
    if (autoDownload) {
      const timer = setTimeout(() => {
        handleDownload();
      }, 500); 
      
      return () => clearTimeout(timer);
    }
  }, [autoDownload, fullName]); // Re-run if fullName changes to ensure data is present

  return (
    <div className="flex flex-col items-center">
      <div ref={ticketRef} className="relative ticket-capture relative  inline-block">
        <img src={TicketSVG} alt="Ticket" className="w-full block" />
        
        <div
          className="absolute top-[50%] left-[78%] text-gray-800"
          style={{
            transform: "rotate(-90deg) translate(-50%, -50%)",
            transformOrigin: "left top",
            fontSize: "10px",
            lineHeight: "12px",
            whiteSpace: "nowrap" // Prevents text wrapping issues on canvas
          }}
        >
          <p><span className="font-bold">Name:</span> {fullName}</p>
          <p><span className="font-semibold">Persons:</span> {numberOfPeople}</p>
          <p><span className="font-semibold">Date:</span> {new Date(date).toLocaleDateString()}</p>
          <p><span className="font-semibold">Slot:</span> {slot}</p>
        </div>
      </div>

      {!autoDownload && (
        <button
          onClick={handleDownload}
          className="mt-6 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 rounded-xl shadow hover:scale-105 transition"
        >
          Download Ticket
        </button>
      )}
    </div>
  );
}