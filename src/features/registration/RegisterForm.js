import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./RegisterForm.module.scss";
import { submitForm } from "./RegisterSlice";

export function RegisterForm() {
	const [formData, setFormData] = useState({
		email: "",
		name: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);
	const dispatch = useDispatch();

	const checkInputs = () => {
		if (formData.email && formData.name) {
			return true;
		} else {
			return false;
		}
	};

	const register = () => {
		dispatch(submitForm(formData));
		setFormSubmitted(true);
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				checkInputs() ? register() : alert('you haven"t filled all the fields');
			}}
		>
			{formSubmitted ? (
				<p>
					Поздравляю, <b>{formData.name}</b>, Вы были успешно зарегистрированы!
				</p>
			) : (
				<>
					<input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
					<input type="text" placeholder="Имя" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
					<button type="submit" className="registration">
						Зарегистрироваться
					</button>
				</>
			)}
		</form>
	);
}
