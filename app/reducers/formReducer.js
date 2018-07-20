import {
    combineForms
} from 'react-redux-form';

const initialLoginState = {
    username: '',
    password: ''
};

export const FormReducer = combineForms({
    login: initialLoginState
}, 'form') 