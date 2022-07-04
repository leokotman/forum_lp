function SocialMedia(props) {
    console.log(props);
    return (
        <a href={props.link.url}>
            <img src={props.link.src} alt={props.link.name}/>
        </a>
    );
};
export default SocialMedia;