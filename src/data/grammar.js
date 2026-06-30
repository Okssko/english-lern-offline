// Grammar quizzes per level: a topic, a short rule explanation, and questions.
export const GRAMMAR = {
  A1: {
    topic: 'Present simple',
    rule: 'Use the base verb for I/you/we/they, and add -s for he/she/it. "She works every day."',
    questions: [
      { q: 'He ___ to school every morning.', options: ['go', 'goes', 'going', 'went'], correct: 1 },
      { q: 'They ___ football on Saturdays.', options: ['plays', 'play', 'playing', 'played'], correct: 1 },
      { q: 'I ___ coffee in the morning.', options: ['drinks', 'drink', 'drinking', 'drank'], correct: 1 },
      { q: 'She ___ a doctor.', options: ['is', 'are', 'am', 'be'], correct: 0 },
      { q: '___ you like tea?', options: ['Does', 'Do', 'Is', 'Are'], correct: 1 },
    ],
  },
  A2: {
    topic: 'Past simple',
    rule: 'Use the past form of the verb for completed actions. Regular verbs add -ed: "walked". Irregular verbs change form: "went", "saw".',
    questions: [
      { q: 'She ___ to the cinema last night.', options: ['go', 'goes', 'went', 'going'], correct: 2 },
      { q: 'We ___ a great time at the party.', options: ['have', 'had', 'has', 'having'], correct: 1 },
      { q: 'I ___ my homework yesterday.', options: ['finish', 'finished', 'finishes', 'finishing'], correct: 1 },
      { q: 'Did you ___ the email?', options: ['sent', 'send', 'sends', 'sending'], correct: 1 },
      { q: 'They ___ not come to school.', options: ['did', 'does', 'do', 'done'], correct: 0 },
    ],
  },
  B1: {
    topic: 'Present perfect',
    rule: 'Use have/has + past participle for experiences or actions connected to the present. "I have visited Paris."',
    questions: [
      { q: 'She ___ never eaten sushi before.', options: ['has', 'have', 'had', 'is'], correct: 0 },
      { q: 'We ___ just finished the homework.', options: ['have', 'has', 'are', 'did'], correct: 0 },
      { q: 'He ___ worked here for ten years.', options: ['has', 'have', 'is', 'was'], correct: 0 },
      { q: '___ you ever visited London?', options: ['Have', 'Has', 'Did', 'Were'], correct: 0 },
      { q: 'They ___ already seen that film.', options: ['have', 'has', 'are', 'did'], correct: 0 },
    ],
  },
  B2: {
    topic: 'Conditionals (second & third)',
    rule: 'Second conditional (unreal present): If + past simple, would + base verb. Third conditional (unreal past): If + past perfect, would have + past participle.',
    questions: [
      { q: 'If I ___ more time, I would travel more.', options: ['have', 'had', 'has', 'will have'], correct: 1 },
      { q: 'If she had studied, she ___ passed the exam.', options: ['would', 'would have', 'will', 'has'], correct: 1 },
      { q: 'If we ___ earlier, we would not have missed the train.', options: ['leave', 'left', 'had left', 'leaving'], correct: 2 },
      { q: 'What would you do if you ___ a million pounds?', options: ['won', 'win', 'had won', 'will win'], correct: 0 },
      { q: 'I would have called you if I ___ your number.', options: ['have', 'had', 'had had', 'has'], correct: 2 },
    ],
  },
  C1: {
    topic: 'Inversion & emphasis',
    rule: 'Inversion adds emphasis by reversing subject and auxiliary verb after negative adverbials. "No sooner had I left than it started raining."',
    questions: [
      { q: 'Choose the correct inversion.', options: ['No sooner had I left than it started raining.', 'No sooner I had left than it started raining.', 'No sooner had left I than it started raining.', 'No sooner I left had than it started raining.'], correct: 0 },
      { q: '___ did I realise how difficult the exam would be.', options: ['Little', 'Few', 'Small', 'Some'], correct: 0 },
      { q: 'Not only ___ late, but he also forgot the documents.', options: ['he was', 'was he', 'he is', 'is he'], correct: 1 },
      { q: 'Rarely ___ such dedication in a student.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], correct: 1 },
      { q: 'Under no circumstances ___ to share your password.', options: ['you should', 'should you', 'you should not', 'do you should'], correct: 1 },
    ],
  },
  C2: {
    topic: 'Subjunctive & nuanced modality',
    rule: 'The subjunctive mood expresses wishes, demands, or hypothetical situations: "It is essential that he be informed." Modal nuance distinguishes certainty, obligation, and possibility.',
    questions: [
      { q: 'The committee insists that he ___ present at the meeting.', options: ['is', 'be', 'was', 'will be'], correct: 1 },
      { q: 'It is vital that the report ___ submitted by Friday.', options: ['is', 'be', 'was', 'were'], correct: 1 },
      { q: 'She spoke as though she ___ the answer all along.', options: ['knew', 'had known', 'knows', 'know'], correct: 1 },
      { q: 'I would rather you ___ that to anyone else.', options: ['don\u2019t say', 'didn\u2019t say', 'won\u2019t say', 'haven\u2019t said'], correct: 1 },
      { q: 'Choose the most precise modal: "He ___ have left already; his coat is gone."', options: ['can', 'must', 'should', 'may'], correct: 1 },
    ],
  },
}
