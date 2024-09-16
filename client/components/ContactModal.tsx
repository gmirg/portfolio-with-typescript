import React from 'react';
import Contact from './Contact';
import styles from '../app/styles/ContactModal.module.css'

interface ContactModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={closeModal}>Close</button>
        <Contact />
      </div>
    </div>
  );
};

export default ContactModal;