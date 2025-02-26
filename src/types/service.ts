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
