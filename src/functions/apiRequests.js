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

export { searchRequest, getTimelineRequest, getUserProfileRequest };
