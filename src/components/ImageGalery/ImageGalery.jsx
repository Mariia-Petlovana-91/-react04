import css from '../ImageGalery/ImageGalery.module.css';
import React, { useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import ImageModal from '../ImageModal/ImageModal';

export default function ImageGalery({ array }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	function openModal(ar) {
		setSelectedImage(ar);
		setModalIsOpen(true);
	}

	function closeModal() {
		setModalIsOpen(false);
		setSelectedImage(null);
	}

	function onItemClick(ar) {
		if (selectedImage && selectedImage.id === ar.id) {
			closeModal();
		} else {
			openModal(ar);
		}
	}

	return (
		<ul className={css.list}>
			{Array.isArray(array) && array.map((ar) => (
				<li
					className={css.item}
					key={ar.id}
					onClick={() => onItemClick(ar)}
				>
					<ImageCard 
						urls={ar.urls}
						alt_description={ar.alt_description} 
					/>
				</li>
			))}
			{selectedImage && (
				<ImageModal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					img={selectedImage.urls.regular}
					alt={selectedImage.alt_description}
					likes={selectedImage.likes}
					links={selectedImage.links}
					userFirstName={selectedImage.user.first_name}
					userLastName={selectedImage.user.last_name}
				/>
			)}
		</ul>
	);
}
