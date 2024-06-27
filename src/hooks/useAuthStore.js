import { useDispatch, useSelector } from "react-redux";



import innovaTubeApi from "../api/InnovaTubeApi";
import { onChecking } from "../store/authSlice";

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


    } catch (error) {
      console.log(error);
    }

  }



  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  }

  return {
    status,

    startLogin,
    startLogout,

  }

}