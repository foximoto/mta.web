import LoginForm from "@/components/LoginForm";
import PageHeader from "@/components/PageHeader";
import RiderInfo from "@/components/RiderInfo";
import UserSettings from "@/components/UserSettings";
import { supabaseClient } from "@/config/supabase";
import { accountTabItems } from "@/constants/tabItem";
import Meta from "@/meta/meta";
import { useEffect, useState } from "react";

const Account = () => {
  const [userData, setUserData] = useState();
  const [selectedTab, setSelectedTab] = useState("Rider Info");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await supabaseClient.auth.getUser();
    data?.user && setUserData(data?.user as any);
    const { data: profileData } = await supabaseClient
      .from("members")
      .select("*")
      .eq("auth_id", data?.user?.id)
      .single();

    console.log({ profileData });
    if (profileData) {
      setShowOptions(true);
    }
  };

  return (
    <div>
      <Meta title="About us" favicon="/favicon.ico" />
      <PageHeader description="" headingFirst="Your" headingSecond="Account" />
      {!userData ? (
        <LoginForm />
      ) : (
        <div>
          <div role="tablist" className="tabs tabs-box rounded-none">
            {accountTabItems.map((item) => (
              <a
                key={item}
                role="tab"
                className={`tab ${selectedTab === item ? "tab-active" : ""}`}
                onClick={() => {
                  setSelectedTab(item);
                }}
              >
                {item}
              </a>
            ))}
          </div>
          {selectedTab === "Settings" && <UserSettings />}
          {showOptions && <>{selectedTab === "Rider Info" && <RiderInfo />}</>}
        </div>
      )}
    </div>
  );
};

export default Account;
