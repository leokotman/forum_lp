import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import styles from "./MainFooter.module.scss";

function MainFooter(props) {
	return (
		<footer id="main_footer" className={styles.footer}>
			<div className={styles.gradient}></div>
			<div className={styles.footer_content + " container horizontal gapS"}>
				<Logo />
				<Navbar className="vertical gapS">
					<span className="nav_link">Политика конфиденциальности</span>
					<span className="nav_link">Публичная оферта</span>
					<a href="tel:+79121234567" className="nav_link">
						+7 912 123-45-67
					</a>
					<a href="mailto:about@microsoftforum.com" target="_blank" className="nav_link" rel="noreferrer">
						about@microsoftforum.com
					</a>
				</Navbar>
				<Navbar className="vertical uppercase gapS">
					<a href="#forum_heading">
						<span className="nav_link">О мероприятии</span>
					</a>
					<span className="nav_link">Темы</span>
					<span className="nav_link">Расписание</span>
					<a href="#speakers">
						<span className="nav_link">Спикеры</span>
					</a>
					<span className="nav_link">Контакты</span>
				</Navbar>
				<Navbar className={styles.links + " horizontal"}>
					{props.socialLinks.map((link, i) => {
						return <SocialMedia link={link} key={i} />;
					})}
				</Navbar>
			</div>
		</footer>
	);
}
export default MainFooter;
