import style from "./MainHeader.module.scss";
import { RegisterForm } from "../registration/RegisterForm.js";
import RegisterBtn from "../components/RegisterBtn";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

function MainHeader() {
	return (
		<header className={style.main_header}>
			<div className="container">
				<Logo />
				<Navbar className="horizontal uppercase">
					<span>О мероприятии</span>
					<span>Спикеры</span>
				</Navbar>
				<RegisterBtn />
				<RegisterForm />
			</div>
		</header>
	);
}

export default MainHeader;
