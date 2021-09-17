import API from "@/functions/apis";

const login = async (params) => {
  return API.post("/auth/login", params)
    .then(({ data }) => {
      const { token } = data.data;
      sessionStorage.setItem("authorization", token);
      API.defaults.headers["Authorization"] = `Bearer ${sessionStorage.getItem(
        "authorization"
      )}`;
      return token;
    })
    .catch((e) => {
      console.log(e);
    });
};

const getMe = async () => {
  return API.get("/auth/me")
    .then(({ data }) => {
      localStorage.setItem("user", JSON.stringify(data?.data));
      return data;
    })
    .catch(() => {
      localStorage.removeItem("user");
      sessionStorage.removeItem("authorization");
    });
};

export { login, getMe };
