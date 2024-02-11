import { Dispatch } from "redux";
import { liqAndWinCreateUser } from "../remote/createUser-liqAndWin";

export const createUserTypes = {
  CREATE_USER_SUCCESSFUL: "LIQANDWIN_CREATE_USER_SUCCESSFUL",
  INVALID_CREDENTIALS: "USER_INVALID_CREDENTIALS",
  INTERNAL_SERVER: "USER_INTERNAL_SERVER_ERROR"
};

export const CreateUserActionMapper = (
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string
) => async (dispatch: Dispatch) => {
  try {
    let newUser = await liqAndWinCreateUser(
      username,
      password,
      firstName,
      lastName,
      email
    );
    dispatch({
      type: createUserTypes.CREATE_USER_SUCCESSFUL,
      payload: {
        newUser
      }
    });
  } catch (e) {
    if (e.status === 400) {
      dispatch({
        type: createUserTypes.INVALID_CREDENTIALS
      });
    } else {
      dispatch({
        type: createUserTypes.INTERNAL_SERVER
      });
    }
  }
};
