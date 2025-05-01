// src/components/Modal.tsx
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function Modal({ isOpen, onClose, title, content }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
