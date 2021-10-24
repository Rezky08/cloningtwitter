import API from "@/functions/apis";

const login = async (params) => {
  return API.post("/auth/login", params)
    .then(({ data }) => {
      const { token } = data.data;
      localStorage.setItem("authorization", token);
      API.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "authorization"
      )}`;
      return token;
    })
    .catch((e) => {
      console.log(e);
    });
};

const unauthorizedException = (e) => {
  const { status } = e.response.data;

  if (!(status === 401 || status === 402)) {
    return Promise.reject(e);
  }

  if (window.location.pathname !== "/login") {
    window.location.href = "/login";
  }
  localStorage.removeItem("user");
  localStorage.removeItem("authorization");
};

const getMe = async () => {
  return API.get("/auth/me")
    .then(({ data }) => {
      localStorage.setItem("user", JSON.stringify(data?.data));
      return data;
    })
    .catch(unauthorizedException);
};

export { login, getMe, unauthorizedException };
