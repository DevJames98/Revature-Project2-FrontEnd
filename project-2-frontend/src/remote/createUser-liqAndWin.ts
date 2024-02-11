import { Users } from "../models/Users";
import { BadCredentialsError } from "../errors/BadCredentialsError";
import { InternalServerError } from "../errors/InternalServerError";
import { projectClient } from "./project-client";

//this function is used inside your mapper
export async function liqAndWinCreateUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string
): Promise<Users> {
  let credentials = {
    username,
    password,
    firstName,
    lastName,
    email
  };
  try {
    let response = await projectClient.post("/users", credentials);
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
