import React, { useRef, useEffect } from "react";

interface PdfModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src: string;
}

const PdfModal: React.FC<PdfModalProps> = ({ src, isOpen, onClose }) => {
  if (!isOpen) return null;

  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      if (iframeRef.current) {
        iframeRef.current.src = url;
      }

      return () => {
        URL.revokeObjectURL(url);
      };
    };

    fetchPdf();
  }, [src]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <button onClick={onClose} className="text-red-500 float-right">
          Close
        </button>
        {src ? <iframe ref={iframeRef} className="w-full h-96 mt-4" title="PDF Preview"></iframe> : null}
      </div>
    </div>
  );
};

export default PdfModal;
