import { useEffect, useState } from "react";
import "./AboutUser.css";
import { validateName, validateEmail } from "../../utils/FormValidation";

function AboutUser({ onSignOut, currentUser, onUpdateUser }) {

    const [isEditing, setIsEditing] = useState(false);

    const [userData, setUserData] = useState({
        name: currentUser.name,
        email: currentUser.email,
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
    });

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        // Check if all inputs are valid
        const isAnyInputInvalid = Object.values(errors).some((error) => error !== "");
        setIsFormValid(!isAnyInputInvalid);
    }, [errors]);

    const handleInputChange = (event) => {
        const input = event.target;
        const name = input.name;
        const value = input.value;


        let error = "";
        if (name === "name") {
            error = validateName(value);
        } else if (name === "email") {
            error = validateEmail(value);
        }

        setUserData({ ...userData, [name]: value });
        setErrors({ ...errors, [name]: error });

        const inputs = document.querySelectorAll(".form__input");
        const isAnyInputInvalid = Array.from(inputs).some(
            (input) => !input.validity.valid
        );
        setIsFormValid(!isAnyInputInvalid);
    };

    const handleEditClick = () => {
        if (isEditing) {

            console.log("Updated User Data:", currentUser);

            if (isFormValid) {

                const updatedUserData = {
                    name: userData.name || currentUser.name,
                    email: userData.email || currentUser.email,
                };
                
                onUpdateUser(updatedUserData);
                setErrors({
                    name: "",
                    email: "",
                });
                setIsEditing(false);
            }

            // Reset the form errors and set isEditing to false

        } else {
            // Enable editing mode
            setIsEditing(true);
        }
    };


    return (
        <section className="profile">
            <form className="profile__form">
                <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
                <div className="profile__inputs">
                    <p className="profile__text">Имя</p>
                    <div className="profile__area">
                        <input
                            className="profile__input profile__input_type_name"
                            defaultValue={currentUser.name}
                            name="name"
                            required
                            onInput={handleInputChange}
                            disabled={!isEditing}
                        />

                    </div>
                    <p className="profile__text">E-mail</p>
                    <div className="profile__area">
                        <input
                            className="profile__input profile__input_type_email"
                            defaultValue={currentUser.email}
                            name="email"
                            required
                            onInput={handleInputChange}
                            disabled={!isEditing}
                        />

                    </div>
                    <span className="profile__error">{errors.name}</span>
                    <span className="profile__error">{errors.email}</span>
                </div>
                <button className="profile__button" type='button' disabled={isEditing ? !isFormValid : false} onClick={handleEditClick}>
                    {isEditing ? "Сохранить" : "Редактировать"}
                </button>
                <button className="profile__link" onClick={onSignOut}>
                    Выйти из аккаунта
                </button>
            </form>
        </section>
    );
}

export default AboutUser;
