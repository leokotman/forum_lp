import styles from "./MainHeader.module.scss";
import { RegisterForm } from "../registration/RegisterForm.js";
import RegisterBtn from "../components/RegisterBtn";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { useState } from "react";

function MainHeader() {
	const [registryOpen, setRegistryOpen] = useState(false);

	const checkRegistryOpen = () => {
		if (registryOpen) {
			return <RegisterForm />;
		} else {
			return <RegisterBtn openRegistry={setRegistryOpen} />;
		}
	};

	return (
		<header id="main_header">
			<div className={styles.container + " container horizontal"}>
				<Logo />
				<Navbar className="horizontal uppercase gapM">
					<span className="nav_link">О мероприятии</span>
					<span className="nav_link">Спикеры</span>
				</Navbar>
				{checkRegistryOpen()}
			</div>
		</header>
	);
}

export default MainHeader;
