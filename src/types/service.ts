export type rideListType = {
  data: {
    ridesList: {
      rideName: string;
      rideLogo: {
        url: string;
      };
      slug: string;
      order: number;
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
};

export type boardOfDirectorsType = {
  name: string;
  userName: string;
  profileImage: {
    url: string;
  };
  designation: string;
  order: number;
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
};

export type hallOfFamesType = {
  id: string;
  title: string;
  coverImage: {
    id: string;
    url: string;
  };
  description?: string;
};
