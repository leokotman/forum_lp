import styles from "./Logo.module.scss";
import logo from "../../assets/images/icons/logo.png";

function Logo() {
	return (
		<div className={styles.logo}>
			<a href="/">
				<img src={logo} alt="main logo" width="48"/>
			</a>
			<div>
				<span className={styles.span_l}>Security</span>
				<span className={styles.span_sm}>Forum</span>
			</div>
		</div>
	);
}
export default Logo;
