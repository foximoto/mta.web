import { supabaseClient } from "@/config/supabase";
import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const RiderInfo = () => {
  const [bio, setBio] = useState("");
  const [rideProfile, setRideProfile] = useState<{
    name?: string;
    rider_bio?: string;
    road_name?: string;
    insta_username?: string;
    polarstep_url?: string;
  }>();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await supabaseClient.auth.getUser();
    const { data: profile } = await supabaseClient
      .from("members")
      .select("name,rider_bio,road_name,insta_username,polarstep_url")
      .eq("auth_id", data?.user?.id)
      .single();
    setRideProfile((profile as any) || {});
  };

  const editData = async () => {
    const { data } = await supabaseClient.auth.getUser();

    await supabaseClient
      .from("members")
      .update({
        name: rideProfile?.name,
        rider_bio: rideProfile?.rider_bio,
        road_name: rideProfile?.road_name,
        insta_username: rideProfile?.insta_username,
        polarstep_url: rideProfile?.polarstep_url,
      })
      .eq("auth_id", data?.user?.id)
      .select()
      .then(({ data }) => {
        toast.success("Profile updated successfully");
      });
  };

  return (
    <div className="container mx-auto py-20">
      <div className=" mx-auto space-y-6  border border-gray-200 text-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold ">Rider Profile</h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium ">Name</label>
          <input
            type="text"
            value={rideProfile?.name}
            placeholder="Your full name"
            className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            onChange={(e) => {
              setRideProfile({ ...rideProfile, name: e.target.value });
            }}
          />
        </div>

        {/* Road Name */}
        <div>
          <label className="block text-sm font-medium ">Road Name</label>
          <input
            value={rideProfile?.road_name}
            type="text"
            placeholder="Your road name / rider alias"
            className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            onChange={(e) => {
              setRideProfile({ ...rideProfile, road_name: e.target.value });
            }}
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium ">Bio</label>
          {/* <textarea
            rows={4}
            placeholder="A short description about your riding journey"
            className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
          /> */}
          <MDEditor
            value={rideProfile?.rider_bio}
            onChange={() => {
              setRideProfile({ ...rideProfile, rider_bio: bio });
            }}
          />
          {/* <MDEditor.Markdown source={bio} style={{ whiteSpace: "pre-wrap" }} /> */}
        </div>

        {/* Polarsteps URL */}
        <div>
          <label className="block text-sm font-medium ">Polarsteps URL</label>
          <input
            type="url"
            value={rideProfile?.polarstep_url}
            placeholder="https://www.polarsteps.com/..."
            className="mt-1 w-full border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
            onChange={(e) => {
              setRideProfile({ ...rideProfile, polarstep_url: e.target.value });
            }}
          />
        </div>

        {/* Instagram Username */}
        <div>
          <label className="block text-sm font-medium ">
            Instagram Username
          </label>
          <div className="mt-1 flex  border border-gray-300 focus-within:border-black">
            <span className="flex items-center px-3 text-sm text-gray-500">
              @
            </span>
            <input
              value={rideProfile?.insta_username}
              type="text"
              placeholder="username"
              className="w-full rounded-r-lg px-3 py-2 text-sm focus:outline-none"
              onChange={(e) => {
                setRideProfile({
                  ...rideProfile,
                  insta_username: e.target.value,
                });
              }}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 transition"
          onClick={() => {
            editData();
          }}
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default RiderInfo;
