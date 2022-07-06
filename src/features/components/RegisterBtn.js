import "./RegisterBtn.scss";

function RegisterBtn(props) {
    return (
        <button onClick={() => props.openRegistry(true)} className="registration">Регистрация</button>
    );
};
export default RegisterBtn;