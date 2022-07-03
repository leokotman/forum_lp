import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./RegisterForm.module.scss";
import { selectForm, submitForm } from "./RegisterSlice";

export function RegisterForm() {
	const [formData, setFormData] = useState({
		email: "",
		name: "",
	});
	const savedForm = useSelector(selectForm);
    const dispatch = useDispatch();

	return (
		<form onSubmit={(e) => {
			e.preventDefault();
			dispatch(submitForm(formData)); savedForm()
			}}>
			<input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
			<input type="text" placeholder="Имя" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
			<button type="submit">Зарегистрироваться</button>
		</form>
	);
}
