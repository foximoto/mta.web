import {
  boardOfDirectorsQuery,
  getCalendarQuery,
  getEventsQuery,
  hallOfFameListQuery,
  membersQuery,
  rideDetailsQuery,
  rideListQuery,
} from "@/query/service";
import { HYGRAPH_ENDPOINT } from "../../env";
import axios from "axios";

export const useServices = () => {
  const getHallOfFameList = async () => {
    const response = await axios.get(
      `${HYGRAPH_ENDPOINT}?query=${hallOfFameListQuery}`
    );
    return response.data;
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

  return {
    getHallOfFameList,
    getRideList,
    getRideDetails,
    getBoardOfDirectorsList,
    getMembersList,
    getCalendarDates,
    getEventsList,
  };
};
