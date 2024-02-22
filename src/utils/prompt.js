const JSON_FORMAT = JSON.stringify({
  type: "object",
  properties: {
    itinerary: {
      type: "array",
      items: [
        {
          type: "object",
          properties: {
            day: {
              type: "string",
            },
            activities: {
              type: "array",
              items: [
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
              ],
            },
          },
          required: ["day", "activities"],
        },
        {
          type: "object",
          properties: {
            day: {
              type: "string",
            },
            activities: {
              type: "array",
              items: [
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "null",
                    },
                    duration: {
                      type: "null",
                    },
                    description: {
                      type: "null",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
              ],
            },
          },
          required: ["day", "activities"],
        },
      ],
    },
  },
  required: ["itinerary"],
}); 
const PROMPT_FOR_MANDATE = `You should always check if the place exist in the globe, if not then simply tell no place exist.
User is going to place:PLACE, for number of days:NUMBER_OF_DAYS, for a this type of trip: TRIP_TYPE. Your task is to
create a complete Trip Planner. Lets divide how you will give the trip planner step by step:
You should always check if the place exist in the globe, if not then simply tell no place exist
1.) First check if the place exists where the user is wanting to go, if not then tell the user that this does not present in globe !,
then check where the user is going, for how many days and which type of trip the user is planning.
2.) Take time to think and plan the trip on your own first.
3.) You should provide where the user will go on which day, on a single day time based trip planning, at what time user will visit at
what site seeing area, also add a small comment about that area, where the user will have breakfast, shopping, dinner etc.
4.) Final Output is the json in the mentioned format:FORMAT. No extra text needed.`;

const PROMPT_FOR_ALL = `You should always check if the place exist in the globe, if not then simply tell no place exist.
User is going to place:PLACE, for number of days:NUMBER_OF_DAYS, for a this type of trip: TRIP_TYPE, user is
starting the trip on TRIP_START, also the budget: BUDGET.
Your task is to
create a complete Trip Planner. Lets divide how you will give the trip planner step by step:
You should always check if the place exist in the globe, if not then simply tell no place exist
1.) First check if the place exists where the user is wanting to go, if not then tell the user that this does not present in globe !,
Then check where the user is going, for how many days and which type of trip the user is planning, about trip start and budget. Always be customised and personalised for the user.
2.) Take time to think and plan the trip on your own first.
3.) You should provide where the user will go on which day, on a single day time based trip planning, at what time user will visit at
what site seeing area, also add a small comment about that area, where the user will have breakfast, shopping, dinner etc.
4.) Final Output is the json in the mentioned format:FORMAT. No extra text needed.`;

export const createTripPrompt = ({
  where_to,
  number_of_days,
  itinerary_type,
  trip_start = "",
  travel_preference = "",
  budget = "",
}) => {
  console.log({
    where_to,
    number_of_days,
    itinerary_type,
    trip_start,
    travel_preference,
    budget,
  });
  let prompt =
    "Strictly adhere to the mentioned JSON format" +
    `FORMAT:\`\`\`${JSON_FORMAT}\`\`\` ` +
    `PLACE:\`\`\`${where_to}\`\`\`, NUMBER_OF_DAYS:\`\`\`${number_of_days}\`\`\`,` +
    ` TRIP_TYPE: \`\`\`${itinerary_type}\`\`\``;

  if (trip_start || budget) {
    prompt +=
      ` TRIP_START: \`\`\`${trip_start}\`\`\`,  ` +
      `BUDGET:\`\`\`${budget}\`\`\`` +
      PROMPT_FOR_ALL;
  } else {
    prompt += PROMPT_FOR_MANDATE;
  }

  // prompt = prompt
  //   .replace(/PLACE/g, where_to)
  //   .replace(/NUMBER_OF_DAYS/g, number_of_days)
  //   .replace(/TRIP_TYPE/g, itinerary_type)
  //   .replace(/TRIP_START/g, trip_start)
  //   .replace(/BUDGET/g, budget)
  //   .replace(/TRAVEL_PREFERENCE/g, travel_preference);

  console.log({ prompt });
  return prompt;
};
