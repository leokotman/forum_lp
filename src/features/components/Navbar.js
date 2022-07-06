// import "./styles/theme.scss";

function Navbar(props) {
    return (
        <nav className={props.className}>
            {props.children}
        </nav>
    );
};
export default Navbar;