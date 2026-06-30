// Reading passages per level, with key words glossed for tap-to-define,
// and comprehension prompts to send to the AI tutor.
export const READING = {
  A1: {
    title: 'My morning',
    text: 'I wake up at seven o\u2019clock. I drink coffee and eat breakfast. Then I walk to work. I like my job. In the evening, I cook dinner and read a book.',
    glossary: { 'wake up': 'To stop sleeping.', breakfast: 'The first meal of the day.', dinner: 'The evening meal.' },
  },
  A2: {
    title: 'A trip to the market',
    text: 'Every Saturday, my family visits the local market. We buy fresh fruit, vegetables, and bread. My favourite part is talking to the sellers, who are always friendly. We usually spend about an hour walking around before going home for lunch.',
    glossary: { local: 'Belonging to a particular area.', favourite: 'Liked the most.', sellers: 'People who sell things.' },
  },
  B1: {
    title: 'The art of learning languages',
    text: 'Learning a new language is one of the most rewarding experiences a person can have. It opens doors to new cultures, friendships, and opportunities. Research shows that people who speak more than one language tend to be better at multitasking and problem solving. The key is consistency \u2014 studying a little every day is far more effective than long but infrequent sessions.',
    glossary: {
      rewarding: 'Giving you a good feeling because you are doing something useful.',
      cultures: 'The customs and traditions of a group of people.',
      opportunities: 'Chances to do something you want.',
      multitasking: 'Doing several things at the same time.',
      consistency: 'Doing something the same way regularly.',
      infrequent: 'Not happening often.',
    },
  },
  B2: {
    title: 'Why we forget what we learn',
    text: 'Cognitive scientists have long studied the so-called "forgetting curve", which shows that we lose a significant portion of new information within days unless we revisit it. This is why spaced repetition, reviewing material at gradually increasing intervals, is widely regarded as one of the most effective strategies for long-term retention, particularly when learning vocabulary in a foreign language.',
    glossary: {
      cognitive: 'Related to thinking and understanding.',
      'significant portion': 'A large or important part.',
      'spaced repetition': 'Reviewing information at increasing time gaps.',
      retention: 'The ability to keep information in your memory.',
    },
  },
  C1: {
    title: 'The myth of the natural linguist',
    text: 'It is a common misconception that some people are simply "naturally gifted" at languages while others are not. In reality, longitudinal studies suggest that perceived talent is more closely correlated with sustained exposure, deliberate practice, and tolerance for ambiguity than with any innate aptitude. Those who progress fastest are typically those most willing to make mistakes publicly and learn from the resulting feedback.',
    glossary: {
      misconception: 'A belief that is not correct.',
      longitudinal: 'Studied over a long period of time.',
      correlated: 'Connected or related to.',
      aptitude: 'A natural ability to do something.',
    },
  },
  C2: {
    title: 'Language as a living system',
    text: 'Linguists increasingly conceptualise language not as a static rulebook to be memorised, but as a dynamic, self-organising system that evolves through use. Idioms ossify into convention, syntax bends under the pressure of colloquial speech, and meaning is perpetually renegotiated between speaker and listener. To master a language at the highest level, then, is to internalise not a fixed set of rules but an intuition for its constant flux.',
    glossary: {
      conceptualise: 'To form an idea of something.',
      'self-organising': 'Developing structure without external control.',
      ossify: 'To become fixed and no longer able to change.',
      renegotiated: 'Discussed and agreed upon again.',
    },
  },
}
