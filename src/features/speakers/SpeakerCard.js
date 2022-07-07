import styles from "./SpeakerCard.module.scss";

function SpeakerCard(props) {
    return (
        <article className={styles.card}>
            <img alt="speaker" src={props.photo} className={styles.photo} width="300"/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href="#main_info">Подробнее</a>
        </article>
    );
};
export default SpeakerCard;