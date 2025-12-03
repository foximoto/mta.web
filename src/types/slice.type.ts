export type partnerSliceType = {
  partnerList:
    | {
        id: number;
        created_at: string;
        name: string;
        logo: string;
        url: string;
      }[]
    | object;
};
