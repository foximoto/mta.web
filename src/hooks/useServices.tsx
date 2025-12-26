import {
  boardOfDirectorsQuery,
  communityWallQuery,
  crewQuery,
  eventsDetailsQuery,
  getBlogListQuery,
  getCalendarQuery,
  getEventsQuery,
  getMemberAchievementListQuery,
  getPartnersQuery,
  hallOfFameListQuery,
  membersList,
  membersQuery,
  rideDetailsQuery,
  rideListQuery,
  singleBlogQuery,
} from "@/query/service";
import axios from "axios";
import { HYGRAPH_ENDPOINT } from "../../env";

export const useServices = () => {
  const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || "";
  const getHallOfFameList = async () => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${hallOfFameListQuery}`
    );
    return response.data?.data?.hallOfFames;
  };

  const getRideList = async () => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${rideListQuery}`
    );
    return response.data;
  };

  const getRideDetails = async (slug: string) => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${rideDetailsQuery(slug)}`
    );
    return response.data;
  };

  const getMemberDetails = async (memberName: string) => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${membersList(memberName)}`
    );
    return response.data;
  };

  const getBoardOfDirectorsList = async () => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${boardOfDirectorsQuery}`
    );
    return response?.data?.data?.membersList;
  };

  const getMembersList = async () => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${membersQuery}`
    );
    return response?.data?.data?.membersList;
  };

  const getCrewList = async () => {
    const response = await axios.get(`${HYGRAPH_ENDPOINT}?query=${crewQuery}`);
    return response?.data?.data?.membersList;
  };

  const getCalendarDates = async (startDate: string, endDate: string) => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${getCalendarQuery(startDate, endDate)}`
    );
    return response.data?.data?.calendars;
  };

  const getEventsList = async () => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${getEventsQuery()}`
    );
    return response?.data?.data?.eventsList;
  };

  const getBlogList = async () => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${getBlogListQuery()}`
    );
    return response?.data?.data?.blogsList;
  };

  const getPartnersList = async () => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${getPartnersQuery()}`
    );
    return response?.data?.data?.partners;
  };

  const getSingleBlog = async (slug: string) => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${singleBlogQuery(slug)}`
    );
    return response.data;
  };

  const getSingleCommunityWallPost = async (slug: string) => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${communityWallQuery(slug)}`
    );
    return response.data?.data;
  };

  const getSingleEvent = async (slug: string) => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${eventsDetailsQuery(slug)}`
    );
    return response.data?.data;
  };

  const getAchievementForUser = async (username: string) => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${getMemberAchievementListQuery(username)}`
    );
    return response.data?.data;
  };

  return {
    getHallOfFameList,
    getRideList,
    getRideDetails,
    getBoardOfDirectorsList,
    getMembersList,
    getCalendarDates,
    getEventsList,
    getMemberDetails,
    getCrewList,
    getBlogList,
    getSingleBlog,
    getPartnersList,
    getSingleCommunityWallPost,
    getSingleEvent,
    getAchievementForUser,
  };
};
