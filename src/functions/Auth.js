import API from "@/functions/apis";

const login = (params) => {
  API.post("/auth/login", params)
    .then(({ data }) => {
      const { token } = data.data;
      localStorage.setItem("authorization", token);
    })
    .catch((e) => {
      console.log(e);
    });
};

const getMe = () => {
  API.get("/auth/me")
    .then(({ data }) => {
      localStorage.setItem("userData", data);
    })
    .catch(() => {
      localStorage.removeItem("authorization");
    });
};

export { login, getMe };
