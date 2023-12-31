import { Document, pdfjs, Page } from "react-pdf";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function ResumePage() {
  return (
    <div className="resume ">
      <Document
        className="w-full mt-8"
        file={{
          url: "/files/resume.pdf",
        }}
        loading={<h2>Loading...</h2>}
      >
        <Page
          className=" flex justify-center items-center"
          height={window.outerHeight / 1.5}
          width={window.outerWidth / 1.5}
          canvasBackground={"#fff"}
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
