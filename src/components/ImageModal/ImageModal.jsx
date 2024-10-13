import css from '../ImageModal/ImageModal.module.css';
import Modal from 'react-modal';
import { SlLike } from "react-icons/sl";

export default function ImageModal({ isOpen, onRequestClose, img, alt, likes, links }) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Item Details"
    >
      <img
        className={css.modalImg}
        src={img}
        alt={alt}
      />
      <div className={css.modal__el}>
        <div className={css.modal__descEl}>
          <p className={css.modal__likes}>
            <SlLike
              className={css.modal__icon}
              size={24}
              aria-label="Likes"
            />
            {likes}
          </p>
	    <a href={links?.download || '#'}
		  target="_blank"
		  rel="noopener noreferrer"
		  className={css.modal__link}>
            Download
          </a>   
        </div>  
      </div>  
    </Modal>
  );
};
