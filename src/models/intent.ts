export interface IntentType {
  id: string;
  title: string;
  expressions: Array<string>;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

// get the intents from localStorage or db
var intents = [
  {
    id: "1",
    title: "Ask for money",
    expressions: ["How much?", "Give me money"],
    answer: "No money dude",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    title: "How are you doing",
    expressions: ["How much?", "Give me money"],
    answer: "No money dude",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const getIntents = () => intents;

export const addIntent = (intent: IntentType) => {
  intents = [...intents, intent];

  // save to db or localStorage
};

export const removeIntent = (intent: IntentType) => {
  intents = intents.filter(i => i.id !== intent.id);

  // remove from db or localStorage
};

export const removeIntentById = (intentId: string) => {
  intents = intents.filter(i => i.id !== intentId);
};

export const editIntent = (intent: IntentType) => {
  intents = intents.map(i => {
    if (i.id === intent.id) return intent;
    return i;
  });

  // save to db or local storage
};

export const getIntentById = (id: string): IntentType | null => {
  const matched = intents.filter(i => i.id === id);
  if (!matched || matched.length === 0) return null;
  return matched[0];
};
