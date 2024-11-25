import backImg from '../../../assets/mainBackground.png'
import backImgWebp from '../../../assets/mainBackground.webp';
import styles from './mainPages.module.scss'
import { text } from './text'
export const MainPages = () => {
	return (
		<div className={styles.containerPage}>
			<p className={styles.textLittle}>
				Игра замечательная и очень добрая к новичкам... Пока те находятся в
				меню.
			</p>
			<div className={styles.textTopCont}>
				<p className={styles.textTop}>{text.header}</p>
			</div>
			<picture>
				<source srcSet={backImgWebp} type="image/webp" />
				<source srcSet={backImg} type="image/png" />
				<img 
					src={backImg} 
					alt="Фон страницы" 
					className={styles.backgroundImg} 
					loading="lazy" 
				/>
			</picture>
		</div>
	)
}
