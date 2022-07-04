import SpeakerCard from "./SpeakerCard.js";
import styles from "./Speakers.module.scss";

function Speakers(props) {
    console.log('speakers in Speakers layout get', props.speakers);
	return (
		<section className={styles.layout + ' container'}>
            <h2>Спикеры нашего форума</h2>
			{props.speakers.map((speaker, i) => {
				return (
                <SpeakerCard name={speaker.name} description={speaker.description} time={speaker.performance_time} photo={speaker.photo_url} key={i} classname={styles.speaker_card} />
                );
			})}
		</section>
	);
}

export default Speakers;
