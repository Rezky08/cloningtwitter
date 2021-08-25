import API from "@/functions/apis";

const login = async (params) => {
  return API.post("/auth/login", params)
    .then(({ data }) => {
      const { token } = data.data;
      localStorage.setItem("authorization", token);
      console.log(localStorage.getItem("authorization"));
      return token;
    })
    .catch((e) => {
      console.log(e);
    });
};

const getMe = async () => {
  return API.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authorization")}`,
    },
  })
    .then(({ data }) => {
      localStorage.setItem("user", JSON.stringify(data?.data));
      return data;
    })
    .catch(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("authorization");
    });
};

export { login, getMe };
