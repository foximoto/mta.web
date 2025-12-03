import { supabase } from "@/config/supabase";
import partnerSlice from "@/store/partner.slice";
import { useDispatch } from "react-redux";

const useFetchContent = () => {
  const dispatch = useDispatch();
  const fetchPartners = async () => {
    const { data } = await supabase.from("partners").select("*").limit(100);

    console.log(data);

    if (data) {
      dispatch(partnerSlice.actions.setPartnerList(data));
    }
  };

  return {
    fetchPartners,
  };
};

export default useFetchContent;
