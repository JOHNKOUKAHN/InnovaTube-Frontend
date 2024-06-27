import { useDispatch, useSelector } from "react-redux";



import innovaTubeApi from "../api/InnovaTubeApi";
import { onChecking, onLogin, onLogout } from "../store/authSlice";

export const useAuthStore = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(state => state.auth);

  const startLogin = async ({ userName, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await innovaTubeApi.post('/auth', { userName, password });
      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin(data.user));

    } catch (error) {
      console.log(error);
    }

  }


  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
    navigate('login');
  }

  const startUserRegister = async ({ fullName, userName, email, password }) => {
    try {
      const { data } = await innovaTubeApi.post(`/user/`, {
        fullName,
        userName,
        email,
        password
      })

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }




  return {
    status,

    startLogin,
    startLogout,
    startUserRegister

  }

}