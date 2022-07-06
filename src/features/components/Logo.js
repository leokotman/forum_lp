import styles from "./Logo.module.scss";
import logo from "../../assets/images/icons/logo.png";

function Logo() {
	return (
		<div className={styles.logo}>
			<a href="/">
				<img src={logo} alt="main logo" />
			</a>
			<div>
				<h2 className={styles.h2}>Security</h2>
				<h5 className={styles.h5}>Forum</h5>
			</div>
		</div>
	);
}
export default Logo;
