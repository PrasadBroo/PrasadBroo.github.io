import { useContext } from "react";
import { Document, pdfjs, Page } from "react-pdf";
import { ThemeContext } from "../contexts/ThemeContext";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function ResumePage() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="resume ">
      <Document
        className="w-full"
        file={{
          url: "/files/resume.pdf",
        }}
        loading={<h2>Loading...</h2>}
      >
        <Page
          className=" flex justify-center items-center"
          height={window.outerHeight / 1.5}
          width={window.outerWidth / 1.5}
          canvasBackground={isDarkMode ? "#171c28" : "#fff"}
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
