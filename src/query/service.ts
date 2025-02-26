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
      slug
  }
}
`);
