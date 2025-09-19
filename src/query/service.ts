export const hallOfFameListQuery = encodeURIComponent(`
  query {
    hallOfFames {
      id
      title
      coverImage {
        id
        url
      }
      description
    }
  }
`);

export const rideListQuery = encodeURIComponent(`
  query {
    ridesList(first:1000){
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
    userName,
    ridePatches(first:1000) {
      url
    },
    polarstepUrl
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
      registrationOpen,
      completedRiders
    }
  }
  `);
};

export const singleBlogQuery = (slug: string) => {
  return encodeURIComponent(`
    query {
blogs(where:{slug:"${slug}"}){
  blogName,
  content,
  coverImage{
    url
  }
    author
}
}
  `);
};

export const boardOfDirectorsQuery = encodeURIComponent(`
  query {
    membersList(where:{memberType:coreTeam}){
  name,
  userName,
  order,
  profileImage{
    url
  }
  designation,
 ridePatches(first:1000) {
      url
    }
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
  designation,
 ridePatches(first:1000) {
      url
    }
}
}
`);

export const crewQuery = encodeURIComponent(`
  query {
    membersList(where:{memberType:crew}){
  name,
  userName,
  profileImage{
    url
  }
  designation,
  ridePatches(first:1000) {
      url
    }
}
}
`);

export const membersQuery = encodeURIComponent(`
  query {
    membersList(first: 1000,where:{memberType:member}){
  name,
  userName,
  profileImage{
    url
  }
  designation,
  ridePatches(first:1000) {
      url
    }
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

export const getBlogListQuery = () => {
  return encodeURIComponent(`
   query{
  blogsList{
    blogName,
    coverImage{
      url
    }
    author,
    slug
  }
}
  `);
};

export const getPartnersQuery = () => {
  return encodeURIComponent(`
   query{
   partners{
  logo{
    url
  }
}
}
  `);
};
