import "./Logo.scss";
import logo from "../../assets/images/icons/logo.png";

function Logo() {
	return (
		<div>
			<a href="/">
				<img src={logo} alt="main logo" />
			</a>
			<div>
				<h2>Security</h2>
				<h5>Forum</h5>
			</div>
		</div>
	);
}
export default Logo;
