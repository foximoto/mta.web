import { hallOfFameListQuery, rideListQuery } from "@/query/service";
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

  return {
    getHallOfFameList,
    getRideList,
  };
};
