interface PdfModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src: string;
}

const PdfModal: React.FC<PdfModalProps> = ({ src, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <button onClick={onClose} className="text-red-500 float-right">
          Close
        </button>
        <iframe src={`https://docs.google.com/viewer?url=${src}&embedded=true`} width="100%" height="600px" title="PDF Viewer" style={{ border: "none" }} />
      </div>
    </div>
  );
};

export default PdfModal;
