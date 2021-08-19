import { login } from "../functions/Auth.js";
import React from "react";
const auth = {
  user: null,
  login,
};

export default React.createContext(auth);
