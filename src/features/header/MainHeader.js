import styles from "./MainHeader.module.scss";
import { RegisterForm } from "../registration/RegisterForm.js";
import RegisterBtn from "../components/RegisterBtn";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Modal from "./Modal";

function MainHeader() {
	const [registryOpen, setRegistryOpen] = useState(false);

	return (
		<header id="main_header">
			<div className={styles.container + " container horizontal"}>
				<Logo />
				<Navbar className="horizontal uppercase gapM">
					<a href="#forum_heading"><span className="nav_link">О мероприятии</span></a>
					<a href="#speakers"><span className="nav_link">Спикеры</span></a>
				</Navbar>
				<RegisterBtn openRegistry={setRegistryOpen} />
				<Modal show={registryOpen} handleClose={() => setRegistryOpen(false)}>
					<RegisterForm />
				</Modal>
			</div>
		</header>
	);
}

export default MainHeader;
