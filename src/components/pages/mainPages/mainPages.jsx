import backImg from '../../../assets/mainBackground.png'
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
			<img src={backImg} alt='' className={styles.backgroundImg} />
		</div>
	)
}
