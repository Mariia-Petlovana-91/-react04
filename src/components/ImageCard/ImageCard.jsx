import css from '../ImageCard/ImageCard.module.css';

export default function ImageCard({ img, description}) {
	return (
		<>
			<img className={css.img} src={img} alt={description} />
		</>
	)
}