export type rideListType = {
  data: {
    ridesList: {
      rideName: string;
      rideLogo: {
        url: string;
      };
      slug: string;
      order: number;
      type: string;
    }[];
  };
};

export type rideDetailsType = {
  rideName: string;
  rideLogo: {
    url: string;
  };
  slug: string;
  details: string;
  registrationOpen: boolean;
  completedRiders: {
    name: string;
    year: string;
    location: string;
    motorcycle: string;
  }[];
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
  eventName: string;
  date: string;
  coverImage: {
    url: string;
  };
  description: string;
  slug: string;
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
