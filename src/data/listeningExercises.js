// Listening simulation exercises — no audio needed.
// The learner reads a transcript (simulating "listening"), then answers
// comprehension questions. At higher levels, a dictation mode shows
// the text word-by-word for the learner to type what they "hear".

export const LISTENING = {
  A1: [
    {
      title: 'At the hotel',
      transcript: 'Receptionist: Good afternoon! Welcome to The Grand Hotel. Can I help you?\nGuest: Yes, hello. My name is Anna Brown. I have a reservation.\nReceptionist: Of course. Can I see your passport, please?\nGuest: Yes, here you are.\nReceptionist: Thank you. Your room is number 204, on the second floor. Breakfast is from seven to ten in the morning.\nGuest: Thank you very much!',
      questions: [
        { q: 'What is the guest\'s name?', options: ['Anna Brown', 'Anna Green', 'Anna Black', 'Mary Brown'], correct: 0 },
        { q: 'What room does she have?', options: ['204', '240', '402', '104'], correct: 0 },
        { q: 'What time does breakfast start?', options: ['7:00', '8:00', '9:00', '10:00'], correct: 0 },
      ],
    },
  ],
  A2: [
    {
      title: 'A phone call to the doctor',
      transcript: 'Receptionist: Good morning, Elmwood Medical Centre. How can I help?\nPatient: Good morning. I\'d like to make an appointment to see Dr Harris, please.\nReceptionist: Of course. Is it urgent?\nPatient: Not really. I have a sore throat and a slight headache.\nReceptionist: I can offer you Tuesday at 3 p.m. or Thursday at 10 a.m.\nPatient: Thursday at 10 is perfect, thank you.\nReceptionist: Your name, please?\nPatient: James Carter.\nReceptionist: Great. See you on Thursday, Mr Carter.',
      questions: [
        { q: 'Which doctor does the patient want to see?', options: ['Dr Harris', 'Dr Carter', 'Dr Hall', 'Dr Mills'], correct: 0 },
        { q: 'What are the patient\'s symptoms?', options: ['Sore throat and headache', 'Fever and cough', 'Back pain', 'Stomach ache'], correct: 0 },
        { q: 'When is the appointment?', options: ['Thursday at 10 a.m.', 'Tuesday at 3 p.m.', 'Thursday at 3 p.m.', 'Tuesday at 10 a.m.'], correct: 0 },
      ],
    },
  ],
  B1: [
    {
      title: 'A radio interview about language learning',
      transcript: 'Host: Welcome back. Today I\'m speaking with Carla Mendes, a language coach. Carla, what\'s the biggest mistake people make when learning a new language?\nCarla: Great question. I think the biggest mistake is waiting until you feel ready to speak. Most learners spend months studying grammar but avoid actually talking to people. That\'s the wrong approach.\nHost: So what should people do instead?\nCarla: Start speaking from day one, even if you make mistakes. Mistakes are how you learn. Find a language partner, use apps, or just talk to yourself in the mirror. And listen as much as possible — podcasts, films, music — everything helps.\nHost: How long does it really take to reach a comfortable level?\nCarla: For most European languages, around 600 hours of real practice for an English speaker. But consistency matters more than the total hours. Thirty minutes every day beats a four-hour session once a week.',
      questions: [
        { q: 'According to Carla, what is the biggest mistake learners make?', options: ['Waiting too long before speaking', 'Studying too much grammar', 'Using apps too often', 'Not watching films'], correct: 0 },
        { q: 'What does Carla recommend from day one?', options: ['Speaking, even imperfectly', 'Memorising vocabulary lists', 'Reading grammar books', 'Writing a diary'], correct: 0 },
        { q: 'About how many hours does Carla say are needed for a comfortable level?', options: ['600 hours', '300 hours', '1000 hours', '100 hours'], correct: 0 },
        { q: 'What does Carla say about consistency?', options: ['Daily short practice beats weekly long sessions', 'Weekend study is most effective', 'Hours matter more than frequency', 'You need a teacher to be consistent'], correct: 0 },
      ],
    },
  ],
  B2: [
    {
      title: 'A podcast discussion on remote work',
      transcript: 'Host: The pandemic permanently reshaped how we work, and the debate over remote versus office work continues. My guest today, organisational psychologist Dr Yemi Adeyemi, has studied hybrid working patterns across 40 companies. Dr Adeyemi, what does the data actually say?\nDr Adeyemi: Well, the headline finding is that productivity is far more nuanced than either side admits. For deep, focused work — coding, writing, analysis — remote workers consistently outperform office workers, mainly because they have fewer interruptions. But for creative collaboration, mentoring junior staff, and building the kind of informal trust that holds teams together, in-person time is still really hard to replicate digitally.\nHost: So what does the ideal model look like?\nDr Adeyemi: The data points to two to three days in the office, intentionally scheduled around collaborative tasks. Not as a rule imposed top-down, but agreed at team level. The companies that let managers and their direct reports co-design the schedule see both higher productivity and higher wellbeing scores.',
      questions: [
        { q: 'What is Dr Adeyemi\'s area of expertise?', options: ['Organisational psychology', 'Computer science', 'Economics', 'Human resources management'], correct: 0 },
        { q: 'For which type of work do remote workers perform best?', options: ['Deep, focused work', 'Creative collaboration', 'Mentoring junior staff', 'Building team trust'], correct: 0 },
        { q: 'How many days in-office does the data suggest?', options: ['2–3 days', '4–5 days', '1 day', '5 days'], correct: 0 },
        { q: 'What does Dr Adeyemi say about scheduling?', options: ['Teams should co-design schedules with managers', 'It should be decided by senior leadership', 'Remote work should be the default', 'Everyone should choose freely'], correct: 0 },
      ],
    },
  ],
  C1: [
    {
      title: 'A lecture excerpt on cognitive linguistics',
      transcript: 'So if we accept that metaphor is not merely decorative — not just a flourish that poets use — but is in fact fundamental to how we structure abstract thought, then we need to rethink quite a lot of what we assumed about language and reason. Lakoff and Johnson\'s central claim in Metaphors We Live By is that concepts like time, argument, and love are not directly apprehensible; we understand them through the lens of more concrete domains of experience. We talk about time as a resource — we spend it, we save it, we waste it — and this isn\'t arbitrary. It reflects a genuine cognitive mapping. The danger, of course, is that these mappings can constrain as much as they enable. If we habitually frame an argument as a battle — positions to defend, points to score, opponents to defeat — we may systematically overlook the possibility of collaborative inquiry. Language, in this view, is not just a mirror of thought. It is partly constitutive of it.',
      questions: [
        { q: 'According to the lecture, what is Lakoff and Johnson\'s central claim?', options: ['Abstract concepts are understood through concrete metaphors', 'Metaphor is mainly a literary device', 'Language mirrors thought directly', 'Reason is independent of language'], correct: 0 },
        { q: 'Which example of a conceptual metaphor is given?', options: ['Time as a resource', 'Love as a journey', 'Life as a stage', 'Mind as a computer'], correct: 0 },
        { q: 'What risk does the lecturer identify with cognitive metaphors?', options: ['They can constrain our thinking', 'They are too abstract to understand', 'They only work in English', 'They slow down communication'], correct: 0 },
      ],
    },
  ],
  C2: [
    {
      title: 'A debate excerpt on linguistic relativity',
      transcript: 'Chair: The motion before us is that linguistic determinism — the idea that language sets the outer boundaries of thought — is not merely philosophically untenable but actively harmful as a research agenda. Speaking for the motion: Professor Diana Lund.\nProf Lund: Thank you. The strong Whorfian hypothesis has been refuted so many times that continuing to rehabilitate it under softer formulations begins to look less like science and more like motivated reasoning. Yes, language influences attention and habituation — nobody disputes that. But the leap from "language primes certain cognitive habits" to "language determines the conceptual categories available to a thinker" is empirically unsupported and philosophically confused. Non-verbal cognition — in pre-linguistic infants, in great apes, in deaf individuals before exposure to sign language — consistently demonstrates concept formation that is not mediated by language. The research agenda built on strong relativity wastes resources and misleads policy on language education and preservation.',
      questions: [
        { q: 'What is the motion being debated?', options: ['Linguistic determinism is untenable and harmful as a research agenda', 'Language shapes thought in important ways', 'Whorfian theory has been misunderstood', 'Language education should be reformed'], correct: 0 },
        { q: 'What does Prof Lund concede?', options: ['Language influences attention and habituation', 'Language fully determines thought', 'The strong hypothesis is correct', 'Non-verbal cognition does not exist'], correct: 0 },
        { q: 'Which groups does she cite as evidence for non-verbal concept formation?', options: ['Pre-linguistic infants, great apes, deaf individuals', 'Polyglots, children, and elderly speakers', 'Bilinguals, immigrants, and language teachers', 'Poets, scientists, and philosophers'], correct: 0 },
      ],
    },
  ],
}
