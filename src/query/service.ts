export const hallOfFameListQuery = encodeURIComponent(`
  query {
    hallOfFames {
      id
      title
      coverImage {
        id
        url
      }
    }
  }
`);

export const rideListQuery = encodeURIComponent(`
  query {
    ridesList{
      rideName,
      rideLogo{
        url
      },
      slug,
      order
  }
}
`);

export const rideDetailsQuery = (slug: string) => {
  return encodeURIComponent(`
    query {
       rides(where:{slug:"${slug}"}){
      rideName,
      rideLogo{
        url
      },
      slug,
      details,
      registrationOpen
    }
  }
  `);
};
