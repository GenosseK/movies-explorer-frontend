export const validateName = (name) => {
    if (name.length < 2 || name.length > 30) {
      return 'Имя должно быть не короче 2 и не длиннее 30 символов';
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(email)) {
      return 'Пожалуйста, введите действительный адрес электронной почты';
    }
    return '';
  };
  
  export const validatePassword = (password) => {
    if (password.length < 6 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      return 'Пароль должен быть не короче 6 символов и содержать хотя бы одну заглавную букву и одну цифру';
    }
    return '';
  };
  
  