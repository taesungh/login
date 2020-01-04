import settings from "./themes/settings";
import { sponsorApplicationDisplayFields as sponsorApplicationDisplayFieldsObj, applicationReviewDisplayFields as applicationReviewDisplayFieldsObj } from "../backend/constants";

export var GROUPS = {
  'admin': 'Administrator',
  'reviewer': 'Reviewer',
  'sponsor': 'Sponsor',
  'judge': 'Judge'
};

export var STATUS = {
  INCOMPLETE: "incomplete",
  SUBMITTED: "submitted",
  WAITLISTED: "waitlisted",
  REJECTED: "rejected",
  ADMITTED: "admitted",
  ADMISSION_CONFIRMED: "admission_confirmed",
  ADMISSION_DECLINED: "admission_declined"
}

export var TYPE = {
  IN_STATE: "is",
  OUT_OF_STATE: "oos",
  STANFORD: "stanford"
}

export var DEADLINES = settings.deadlines;

export var TRANSPORTATION_STATUS = {
  UNAVAILABLE: "unavailable",
  AVAILABLE: "available",
  SUBMITTED: "submitted",
  REJECTED: "rejected",
  APPROVED: "approved",
  PAID: "paid"
};

export var TRANSPORTATION_TYPES = {
  BUS: "bus",
  FLIGHT: "flight",
  OTHER: "other"
};

export var TRANSPORTATION_BUS_ROUTES = {
  TEST: "test",
  TEST_NO_COORDINATOR: "test_no_coordinator",
  USC: "usc",
  UCLA: "ucla",
  SANDIEGO: "sandiego",
  UCI: "uci",
  POMONA: "pomona",
  BERKELEY: "berkeley"
};

export var TRANSPORTATION_DEADLINES = {
  [TRANSPORTATION_TYPES.FLIGHT]: 'December 9th at 11:59pm PST',
  [TRANSPORTATION_TYPES.BUS]: 'January 10th at 11:59pm PST',
  [TRANSPORTATION_TYPES.OTHER]: 'February 19th at 11:59pm PST'
};


export type IBusRoute = {
  day?: string,
  time?: string,
  stop?: string,
  location?: string,
  hack?: boolean
};

export var TRANSPORTATION_BUS_ROUTE_DETAILS: { [x: string]: { coordinator: { name: string, email: string }, route: IBusRoute[] } } = {
  [TRANSPORTATION_BUS_ROUTES.USC]: {
    coordinator: null,
    route: [
      {
        day: 'Friday, February 14th',
        time: '8:30am',
        stop: 'Check in at 37th & McClintock',
        location: 'Los Angeles'
      },
      {
        day: 'Friday, February 14th',
        time: '4:30pm',
        stop: 'Panama St. & Via Ortega',
        location: 'Stanford'
      },
      {
        hack: true
      },
      {
        day: 'Sunday, February 16th',
        time: '3:30pm',
        stop: 'Check in at Panama St. & Via Ortega',
        location: 'Stanford'
      },
      {
        day: 'Sunday, February 16th',
        time: '10:30pm',
        stop: '37th & McClintock',
        location: 'Los Angeles'
      }
    ]
  },
  [TRANSPORTATION_BUS_ROUTES.TEST]: {
    coordinator: { 'name': 'TreeHacks', 'email': 'hello@treehacks.com' },
    route: [
      {
        day: 'Friday, February 14th',
        time: '8:00am',
        stop: 'Check in at 37th & McClintock',
        location: 'Middle of Nowhere'
      },
      {
        day: 'Friday, February 14th',
        time: '4:30pm',
        stop: 'Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        hack: true
      },

      {
        day: 'Sunday, February 16th',
        time: '3:30pm',
        stop: 'Check in at Panama St. & Via Ortega',
        location: 'Stanford'
      },
      {
        day: 'Sunday, February 16th',
        time: '11:00pm',
        stop: '37th & McClintock',
        location: 'Middle of Somewhere'
      }
    ]
  },
  [TRANSPORTATION_BUS_ROUTES.TEST_NO_COORDINATOR]: {
    coordinator: null,
    route: [
      {
        day: 'Friday, February 14th',
        time: '8:00am',
        stop: 'Check in at 37th & McClintock',
        location: 'Middle of Nowhere'
      },
      {
        day: 'Friday, February 14th',
        time: '4:30pm',
        stop: 'Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        hack: true
      },

      {
        day: 'Sunday, February 16th',
        time: '3:30pm',
        stop: 'Check in at Panama St. & Via Ortega',
        location: 'Stanford'
      },
      {
        day: 'Sunday, February 16th',
        time: '11:00pm',
        stop: '37th & McClintock',
        location: 'Middle of Somewhere'
      }
    ]
  },
  [TRANSPORTATION_BUS_ROUTES.UCLA]: {
    coordinator: null,
    route: [
      {
        day: 'Friday, February 14th',
        time: '9:00am',
        stop: 'Check in at 10 Charles E. Young N',
        location: 'Los Angeles'
      },

      {
        day: 'Friday, February 14th',
        time: '4:30pm',
        stop: 'Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        hack: true
      },

      {
        day: 'Sunday, February 16th',
        time: '3:30pm',
        stop: 'Check in at Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        day: 'Sunday, February 16th',
        time: '10:30pm',
        stop: '10 Charles E. Young N',
        location: 'Los Angeles'
      }
    ]
  },
  [TRANSPORTATION_BUS_ROUTES.SANDIEGO]: {
    coordinator: null,
    route: [
      {
        day: 'Friday, February 15th',
        time: '7:30am',
        stop: 'Check in at UCSD (location added later)',
        location: 'Los Angeles'
      },

      {
        day: 'Friday, February 15th',
        time: '6:00pm',
        stop: 'Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        hack: true
      },

      {
        day: 'Sunday, February 17th',
        time: '3:30pm',
        stop: 'Check in at Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        day: 'Sunday, February 17th',
        time: '11:45pm',
        stop: 'UCSD',
        location: 'San Diego'
      }
    ]
  },
  [TRANSPORTATION_BUS_ROUTES.UCI]: {
    coordinator: { 'name': 'Tara Porter', 'email': 'tporter@caltech.edu' },
    route: [
      {
        day: 'Friday, Februrary 15th',
        time: '7:30am',
        stop: 'Check-in in front of Avery House (293 S Holliston Ave, Pasadena, CA)',
        location: 'Pasadena'
      },

      {
        day: 'Friday, Feburary 15th',
        time: '4:30pm',
        stop: 'Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        hack: true
      },

      {
        day: 'Sunday, Februrary 17th',
        time: '3:30pm',
        stop: 'Check in at Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        day: 'Sunday, Februrary 17th',
        time: '11:00pm',
        stop: 'In front of Avery House (293 S Holliston Ave, Pasadena, CA)',
        location: 'Pasadena'
      }
    ]
  },
  [TRANSPORTATION_BUS_ROUTES.POMONA]: {
    coordinator: { 'name': 'Meera Rachamallu', 'email': 'mrachamallu@g.ucla.edu' },
    route: [
      {
        day: 'Friday, Februrary 15th',
        time: '10:45am',
        stop: 'Check in at Harvey Mudd (location added later)',
        location: 'Claremont'
      },

      {
        day: 'Friday, Feburary 15th',
        time: '6:00pm',
        stop: 'Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        hack: true
      },

      {
        day: 'Sunday, Februrary 17th',
        time: '3:30pm',
        stop: 'Check in at Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        day: 'Sunday, Februrary 17th',
        time: '10:00pm',
        stop: 'Harvey Mudd',
        location: 'Claremont'
      }
    ]
  },
  [TRANSPORTATION_BUS_ROUTES.BERKELEY]: {
    coordinator: null,
    route: [
      {
        day: 'Friday, Februrary 14th',
        time: '2:30pm',
        stop: 'Check in at West Circle / University Drive',
        location: 'Berkeley'
      },

      {
        day: 'Friday, Feburary 14th',
        time: '4:30pm',
        stop: 'Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        hack: true
      },

      {
        day: 'Sunday, Februrary 16th',
        time: '3:30pm',
        stop: 'Check in at Panama St. & Via Ortega',
        location: 'Stanford'
      },

      {
        day: 'Sunday, Februrary 16th',
        time: '5:30pm',
        stop: 'West Circle / University Drive',
        location: 'Berkeley'
      }
    ]
  }
};

export const HACKATHON_YEAR = settings.hackathon_year;
export const HACKATHON_DATE_RANGE = settings.hackathon_date_range;
export const LOCATIONS = settings.locations;
export const applicationReviewDisplayFields = applicationReviewDisplayFieldsObj;
export const sponsorApplicationDisplayFields = sponsorApplicationDisplayFieldsObj;
export const applicationDisplayFields = [
  "section1",
  "first_name",
  "last_name",
  "phone",
  "dob",
  "university",
  "graduation_year",
  "level_of_study",
  "major",
  "skill_level",
  "hackathon_experience",
  "resume",
  "section2",
  "q1",
  "q2",
  "q3",
  "q4",
  "section3",
  "q5",
  // "volunteer",
  "q_team_matching_1",
  "q_team_matching_2",
  "section4",
  "gender",
  "race",
  "accept_terms",
  "accept_share"
];
export const applicationDisplayFieldsStanford = [
  "section1",
  "first_name",
  "last_name",
  "phone",
  "dob",
  "university",
  "graduation_year",
  "level_of_study",
  "major",
  "skill_level",
  "hackathon_experience",
  "resume",
  // "section2",
  // "q1",
  // "q2",
  // "q3",
  // "q4",
  "section3",
  "q_team_matching_1",
  "q_team_matching_2",
  "q5",
  "volunteer",
  "section4",
  "gender",
  "race",
  "accept_terms",
  "accept_share"
];

export const VERTICALS = ["health", "safety", "awareness"];

export const FLOORS = [0, 1, 2, 3];

export const logo = settings.logo;
export const favicon = settings.favicon;
export const dashboardBackground = settings.dashboard_background;