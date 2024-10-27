import React, {useRef, useEffect} from "react";

interface VideoModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ src, isOpen, onClose }) => {
  if (!isOpen) return null;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.load();
    }
  }, [isOpen, src]); 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <button onClick={onClose} className="text-red-500 float-right">
          Close
        </button>
        <video
          ref={videoRef}
          controls
          className="w-full h-auto mt-4"
          onCanPlay={() => videoRef.current?.play()}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
