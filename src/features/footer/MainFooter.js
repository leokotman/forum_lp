import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import styles from "./MainFooter.module.scss";

function MainFooter() {
    return (
        <footer className={styles.main_footer}>
            <Logo />
            <Navbar className="vertical">
                <span>Политика конфиденциальности</span>
                <span>Публичная оферта</span>
                <span>Телефон</span>
            </Navbar>
            <Navbar className="vertical uppercase">
                <span>О мероприятии</span>
                <span>Темы</span>
                <span>Расписание</span>
                <span>Спикеры</span>
                <span>Контакты</span>
            </Navbar>
            <Navbar>
                <SocialMedia />
                <SocialMedia />
                <SocialMedia />
                <SocialMedia />
            </Navbar>
        </footer>
    );
}
export default MainFooter;