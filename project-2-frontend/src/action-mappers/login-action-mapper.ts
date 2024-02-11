import { Dispatch } from "redux";
import { liqAndWinLogin } from "../remote/login-liqAndWin";

//here we have an action object which has a type and a paylod(optional)
export const loginTypes = {
  SUCESSFUL_LOGIN: "LIQANDWIN_SUCCESSFUL_LOGIN",
  INVALID_CREDENTIALS: "LOGIN_INVALID_CREDENTIALS",
  INTERNAL_SERVER: "LOGIN_INTERNAL_SERVER_ERROR"
};

export const LoginActionMapper = (username: string, password: string) => async (
  dispatch: Dispatch
) => {
  try {
    let returningUser = await liqAndWinLogin(username, password);
    dispatch({
      type: loginTypes.SUCESSFUL_LOGIN,
      payload: {
        returningUser
      }
    });
  } catch (e) {
    if (e.status === 400) {
      dispatch({
        type: loginTypes.INVALID_CREDENTIALS
      });
    } else {
      dispatch({
        type: loginTypes.INTERNAL_SERVER
      });
    }
  }
};
