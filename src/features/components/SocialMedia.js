import styles from "./SocialMedia.module.scss";

function SocialMedia(props) {
    return (
        <a href={props.link.url} className={styles.a}>
            <img src={props.link.src} alt={props.link.name} />
        </a>
    );
};
export default SocialMedia;