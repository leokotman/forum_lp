import React, { useEffect, useState } from "react";
import "./App.scss";
import MainHeader from "./features/header/MainHeader";
import RegisterBtn from "./features/components/RegisterBtn.js";
import MainFooter from "./features/footer/MainFooter";

import vkImg from "./images/icons/1.svg";
import facebookImg from "./images/icons/2.svg";
import instaImg from "./images/icons/3.svg";
import telegramImg from "./images/icons/4.png";
import axios from "axios";
import Speakers from "./features/speakers/Speakers";

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
	const [speakers, setSpeakers] = useState([]);
	const url = "https://pro.alphadevteam.com/api/tz/speakers";

	useEffect(() => {
		getAllSpeakers();
	}, []);

	const getAllSpeakers = async () => {
		await axios.get(url, {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		})
		.then((res) => {
			const allSpeakers = res.data.response;
			setSpeakers(allSpeakers);
			console.log(allSpeakers);
		})
		.catch(err => console.log(err));
	}

	return (
		<div className="App">
			<MainHeader />
			<section className="main_info">
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
			<Speakers speakers={speakers}/>
			<MainFooter socialLinks={socialLinks} />
		</div>
	);
}

export default App;
