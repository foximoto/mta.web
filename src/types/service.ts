export type rideListType = {
  ride_logo: string;
  ride_name: string;
  ride_type: string;
  slug: string;
};

export type rideDetailsType = {
  description: string;
  ride_name: string;
};

export type boardOfDirectorsType = {
  name: string;
  userName: string;
  profileImage: {
    url: string;
  };
  designation: string;
  order: number;
  ridePatches: {
    url: string;
  }[];
};

export type calendarDataType = {
  date: string;
  rideName: string;
};

export type eventsDataType = {
  cover_image: string;
  event_name: string;
  slug: string;
  date: string;
};

export type memberDetailsType = {
  name: string;
  memberType: string;
  profileImage: {
    url: string;
  };
  bio: string;
  designation: string;
  userName: string;
  ridePatches: {
    url: string;
  }[];
  polarstepUrl: string;
};

export type hallOfFamesType = {
  id: string;
  title: string;
  coverImage: {
    id: string;
    url: string;
  };
  description?: string;
  slug?: string;
};
