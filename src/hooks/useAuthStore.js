import { useDispatch, useSelector } from "react-redux";

import { onUpdateFavorites } from "../store/videoSlice";

import { onChecking, onClearErrorMessage, onSetErrorMessage, onSetMessage, onClearMessage, onLogin, onLogout } from "../store/authSlice";
import backendApi from "../api/backendApi";


export const useAuthStore = () => {

  const dispatch = useDispatch();

  const { status, errorMessage, msg, user } = useSelector(state => state.auth);

  const startLogin = async ({ userName, password }) => {
    dispatch(onChecking());
    startCleaningMessages();
    try {

      //Validaciones
      if (userName.trim() === '' || password.trim() === '') {
        dispatch(onSetErrorMessage('Verifique la información ingresada'))
        dispatch(onLogout())
        return
      }
      const { data } = await backendApi.post('/auth', { userName, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin(data.user));
      dispatch(onUpdateFavorites(data.user.favorites));

    } catch (error) {
      dispatch(onSetErrorMessage(error.response.data.msg))
      dispatch(onLogout())
    }

  }


  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
    navigate('login');
  }

  const startUserRegister = async ({ fullName, userName, email, password, confirmPassword }) => {
    dispatch(onChecking());
    startCleaningMessages();

    try {

      //Validaciones
      if (userName.trim() === '' || fullName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        dispatch(onSetErrorMessage('Todos los campos son obligatorios'))
        dispatch(onLogout())
        return
      }
      if (password !== confirmPassword) {
        dispatch(onSetErrorMessage('Las contraseñas no coinciden'))
        dispatch(onLogout())
        return
      }

      const { data } = await backendApi.post(`/user/`, {
        fullName,
        userName,
        email,
        password
      })
      dispatch(onSetMessage('Registro Exitoso'))
    } catch (error) {
      dispatch(onSetErrorMessage(error.response.data.msg))
      dispatch(onLogout())
    }
  }


  const startCleaningMessages = () => {
    dispatch(onClearErrorMessage());
    dispatch(onClearMessage());
  }

  return {
    status,
    user,
    errorMessage,
    msg,

    startLogin,
    startLogout,
    startUserRegister,
    startCleaningMessages

  }

}