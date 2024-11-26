import styles from './toggleSwitch.module.scss'

export const ToggleSwitch = ({ isCardView, onToggle }) => (
	<div className={styles.toggleContainer}>
		<label className={styles.switch}>
			<input type='checkbox' checked={isCardView} onChange={onToggle} />
			<span className={styles.slider}></span>
		</label>
	</div>
)
