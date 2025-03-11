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

export const boardOfDirectorsQuery = encodeURIComponent(`
  query {
    membersList(where:{memberType:coreTeam}){
  name,
  userName,
  profileImage{
    url
  }
  designation
}
}
`);

export const membersQuery = encodeURIComponent(`
  query {
    membersList(where:{memberType:member}){
  name,
  userName,
  profileImage{
    url
  }
  designation
}
}
`);
