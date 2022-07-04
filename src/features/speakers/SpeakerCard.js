import styles from "./SpeakerCard.module.scss";

function SpeakerCard(props) {
    return (
        <article className={styles.card}>
            <img alt="speaker" src={props.photo} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href="/">Подробнее</a>
        </article>
    );
};
export default SpeakerCard;