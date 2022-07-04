import React from "react";
import "./App.scss";
import MainHeader from "./features/header/MainHeader";
import RegisterBtn from "./features/components/RegisterBtn.js";
import SpeakerCard from "./features/speakers/SpeakerCard";
import MainFooter from "./features/footer/MainFooter";

import vkImg from "./images/icons/1.svg";
import facebookImg from "./images/icons/2.svg";
import instaImg from "./images/icons/3.svg";
import telegramImg from "./images/icons/4.png";

function App() {
	const socialLinks = [
		{
			name: "vk",
			src: vkImg,
			url: "https://www.vk.com",
		},
		{
			name: "facebook",
			src: facebookImg,
			url: "https://www.facebook.com",
		},
		{
			name: "instagram",
			src: instaImg,
			url: "https://www.instagram.com",
		},
		{
			name: "telegram",
			src: telegramImg,
			url: "https://www.telegram.org",
		},
	];

	return (
		<div className="App">
			<MainHeader />
			<section>
				<div className="container">
					<h1>Форум Microsoft</h1>
					<h1>«Finance industry trust in AI and IT-Security»</h1>
					<p>
						Масштабная кибератака и устаревшее оборудование может привести к потере клиентов, ухудшить отношения с партнёрами и учредителями, а невыполнение требований законодательства
						может привести к существенным штрафам и даже к блокировке ресурсов
					</p>
					<p>Узнайте как этого избежать, регистрируйтесь на наш форум</p>
					<RegisterBtn />
				</div>
			</section>
			<section>
				<div className="container">
					<SpeakerCard />
					<SpeakerCard />
					<SpeakerCard />
				</div>
			</section>
			<MainFooter socialLinks={socialLinks} />
		</div>
	);
}

export default App;
