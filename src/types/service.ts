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
};

export type calendarDataType = {
  date: string;
  rideName: string;
};
