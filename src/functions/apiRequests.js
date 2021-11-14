import API from "@/functions/apis";
import { unauthorizedException } from "./Auth";

const searchRequest = async (q) =>
  API.get("/search", {
    params: {
      q,
    },
  })
    .then(({ data }) => {
      return data?.data;
    })
    .catch(unauthorizedException);

const getTimelineRequest = async (username) =>
  API.get(`/timeline${username ? "/" + username : ""}`)
    .then(({ data }) => {
      return data?.data;
    })
    .catch(unauthorizedException);

const getUserProfileRequest = async (username) =>
  API.get(`/user/${username}`)
    .then(({ data }) => {
      return data?.data;
    })
    .catch(unauthorizedException);

const updateUserProfileRequest = async (data) => {
  /**
   * allow field
   * { name, description, location,link }
   */
  const allowField = ["name", "description", "location", "link"];
  let fields = Object.entries(data).filter(([k, o]) => allowField.includes(k));
  fields = Object.fromEntries(fields);
  return API.put(`/user/profile`, fields)
    .then(({ data }) => {
      return data?.data;
    })
    .catch(unauthorizedException);
};
// API.put(`/user/profile`)
//   .then(({ data }) => {
//     return data?.data;
//   })
//   .catch(unauthorizedException);

export {
  searchRequest,
  getTimelineRequest,
  getUserProfileRequest,
  updateUserProfileRequest,
};
