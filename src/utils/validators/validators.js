export const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
}

export const validateTextInput = (value) => {
    let error;
    if (!value) {
      error = 'Обязательное поле';
    } else if (value.length <= 5) {
      error = 'Короткий заголовок';
    }
    return error;
}