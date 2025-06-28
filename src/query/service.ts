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

export const membersList = (memberName: string) => {
  return encodeURIComponent(`
  query{
  members(where:{userName:"${memberName}"}){
    name,
    memberType,
     profileImage{
      url
    },
    bio,
    designation,
    userName
  }
  }
  `);
};

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

export const founderQuery = encodeURIComponent(`
  query {
    membersList(where:{memberType:founder}){
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

export const getCalendarQuery = (startDate: string, endDate: string) => {
  return encodeURIComponent(`
    query {
       calendars(where: { 
    date_gt: "${startDate}", 
    date_lt: "${endDate}" 
  }) {
    date
    rideName
  }
  }
  `);
};

export const getEventsQuery = () => {
  return encodeURIComponent(`
    query {
      eventsList {
        eventName
        date
        coverImage {
          url
        }
        description
      }
    }
  `);
};
