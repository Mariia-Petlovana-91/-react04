import css from '../ImageCard/ImageCard.module.css';

export default function ImageCard({ urls, alt_description, onImgClick, ar}) {
	return (
		<>
			<img className={css.img}
				src={urls.small}
				alt={alt_description}
				ar={ar}
				onClick={() => onImgClick(ar)}

			/>
		</>
	);
}
