import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import "./MainFooter.module.scss";

function MainFooter(props) {
	return (
		<footer id="main_footer">
			<div className="container horizontal">
				<Logo />
				<Navbar className="vertical gapS">
					<span>Политика конфиденциальности</span>
					<span>Публичная оферта</span>
					<span>Телефон</span>
				</Navbar>
				<Navbar className="vertical uppercase gapS">
					<span>О мероприятии</span>
					<span>Темы</span>
					<span>Расписание</span>
					<span>Спикеры</span>
					<span>Контакты</span>
				</Navbar>
				<Navbar className="horizontal">
					{props.socialLinks.map((link, i) => {
						return <SocialMedia link={link} key={i} />;
					})}
				</Navbar>
			</div>
		</footer>
	);
}
export default MainFooter;
