import { Users } from "../models/Users";
import { projectClient } from "./project-client";
import { BadCredentialsError } from "../errors/BadCredentialsError";
import { InternalServerError } from "../errors/InternalServerError";

export async function liqAndWinLogin(
  username: string,
  password: string
): Promise<Users> {
  let credentials = {
    username,
    password
  };
  try {
    let response = await projectClient.post("/users/login", credentials);
    console.log(response);
    if (response.status === 404) {
      throw new BadCredentialsError();
    }
    return response.data;
  } catch (e) {
    if (e.status === 500) {
      throw e;
    } else {
      throw new InternalServerError();
    }
  }
}
