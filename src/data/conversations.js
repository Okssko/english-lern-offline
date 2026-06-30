// Guided conversation practice — no AI needed.
// Each topic has a series of prompts with example answers the learner can
// reveal and compare to their own attempt ("Show me a good answer").
// Organised by CEFR level so content always matches the learner's current level.

export const CONVERSATIONS = {
  A1: [
    {
      topic: 'Introducing yourself',
      turns: [
        { prompt: 'Say hello and tell me your name.', example: 'Hello! My name is Maria. Nice to meet you!' },
        { prompt: 'Where are you from?', example: 'I am from Brazil. I live in São Paulo.' },
        { prompt: 'How old are you?', example: 'I am 51 years old.' },
        { prompt: 'What do you do? (job)', example: 'I am a teacher. I work at a school.' },
        { prompt: 'Do you have a family?', example: 'Yes, I have a husband and two children.' },
      ],
    },
    {
      topic: 'At the café',
      turns: [
        { prompt: 'Greet the waiter and ask for the menu.', example: 'Good morning! Can I have the menu, please?' },
        { prompt: 'Order a drink.', example: 'I would like a coffee with milk, please.' },
        { prompt: 'Ask for the price.', example: 'How much is the coffee?' },
        { prompt: 'Say thank you and goodbye.', example: 'Thank you very much. Goodbye!' },
      ],
    },
  ],
  A2: [
    {
      topic: 'Talking about your daily routine',
      turns: [
        { prompt: 'What time do you wake up every day?', example: 'I usually wake up at seven o\'clock in the morning.' },
        { prompt: 'What do you do after breakfast?', example: 'After breakfast, I go to work by bus. It takes about 30 minutes.' },
        { prompt: 'What do you do in the evenings?', example: 'In the evenings, I cook dinner and watch TV. Sometimes I read a book.' },
        { prompt: 'What did you do last weekend?', example: 'Last weekend I visited my sister and we went to the market together.' },
        { prompt: 'What are your plans for next week?', example: 'Next week I am going to start an English course. I am very excited!' },
      ],
    },
    {
      topic: 'Shopping',
      turns: [
        { prompt: 'You want to buy a jacket. Ask a shop assistant for help.', example: 'Excuse me, can you help me? I am looking for a jacket.' },
        { prompt: 'The assistant asks your size. Tell them.', example: 'I am a medium, I think. Can I try it on?' },
        { prompt: 'You like it but it is expensive. What do you say?', example: 'It is very nice, but it is a bit expensive. Do you have anything cheaper?' },
        { prompt: 'Decide to buy it and ask how to pay.', example: 'OK, I will take it. Can I pay by card?' },
      ],
    },
  ],
  B1: [
    {
      topic: 'Talking about learning English',
      turns: [
        { prompt: 'Why are you learning English? Give two reasons.', example: 'I am learning English because I want to travel and meet people from different countries. I also think it is important for my career.' },
        { prompt: 'What do you find most difficult about English?', example: 'I find grammar quite difficult, especially the perfect tenses. Pronunciation is also a challenge for me.' },
        { prompt: 'What do you do to practise English outside of lessons?', example: 'I watch English films with subtitles and I try to read short articles online. I also have a vocabulary notebook.' },
        { prompt: 'Describe your progress so far.', example: 'I think my reading has improved a lot. I feel more confident reading emails in English. But I still need to practise speaking more.' },
        { prompt: 'What are your goals for the next six months?', example: 'In the next six months, I want to be able to have a simple conversation with a native speaker without feeling too nervous.' },
      ],
    },
    {
      topic: 'Travel and holidays',
      turns: [
        { prompt: 'Describe a place you have visited and loved.', example: 'I have visited Lisbon in Portugal and I loved it. The city is very beautiful, with old buildings and lovely views from the hills.' },
        { prompt: 'Compare travelling by plane and by train.', example: 'Travelling by plane is faster, but the train is more comfortable and you can see the landscape. I prefer the train for short distances.' },
        { prompt: 'Talk about a travel problem you have had.', example: 'Once my luggage was lost at the airport. It was very stressful because I had to wait two days for it to arrive.' },
        { prompt: 'What kind of holiday do you prefer — city or nature?', example: 'I prefer city holidays because I enjoy visiting museums and trying local food. But sometimes a quiet holiday in the mountains is perfect for relaxing.' },
      ],
    },
  ],
  B2: [
    {
      topic: 'Work and career',
      turns: [
        { prompt: 'Describe your ideal working environment.', example: 'My ideal working environment is one where I can collaborate with colleagues, but also have quiet time to focus. I work best when I have clear goals and some flexibility in how I achieve them.' },
        { prompt: 'Talk about a professional challenge you overcame.', example: 'A few years ago, I had to lead a project with a very tight deadline. I felt overwhelmed at first, but I organised the work carefully and delegated tasks to the team. We finished on time and the result was excellent.' },
        { prompt: 'What skills do you think are most important in the modern workplace?', example: 'I believe communication and adaptability are the most important skills today. Technology changes quickly, so the ability to learn new tools and work well with diverse teams is essential.' },
        { prompt: 'How do you feel about working remotely?', example: 'I think remote work has real advantages — less commuting time and more autonomy. However, I miss the social side of the office and find it harder to separate work from personal life at home.' },
        { prompt: 'Where would you like to be in your career in five years?', example: 'In five years, I would like to have gained more international experience and possibly be managing a small team. I am also considering doing a professional qualification to strengthen my expertise.' },
      ],
    },
    {
      topic: 'Technology and society',
      turns: [
        { prompt: 'How has technology changed your daily life?', example: 'Technology has made many things much easier — I can shop, bank, and communicate from my phone. However, I sometimes feel that it also makes me less patient and more distracted.' },
        { prompt: 'Do you think social media is mostly positive or negative? Give reasons.', example: 'I think social media is a double-edged sword. It helps people stay connected and share information quickly. On the other hand, it can spread misinformation and create pressure to present an unrealistic version of yourself.' },
        { prompt: 'How do you feel about AI becoming part of everyday life?', example: 'I find it both exciting and a little worrying. AI can help with many tasks and improve healthcare, for example. But I think we need careful regulation to make sure it is used responsibly.' },
      ],
    },
  ],
  C1: [
    {
      topic: 'Culture and identity',
      turns: [
        { prompt: 'To what extent does language shape our identity?', example: 'I think language is deeply connected to identity — the words we use reflect our values, sense of humour, and way of seeing the world. When we learn a new language, we gain access to a different cultural perspective, which can enrich but also sometimes challenge our sense of self.' },
        { prompt: 'Discuss the tension between preserving cultural traditions and embracing change.', example: 'This is a complex issue. Traditions give communities a sense of continuity and shared meaning, which is valuable. However, rigid adherence to tradition can also perpetuate inequality or prevent necessary social progress. The key, I think, is to critically evaluate which traditions deserve to be preserved and why.' },
        { prompt: 'How does travel change a person\'s worldview?', example: 'Travel forces you to confront assumptions you didn\'t know you had. Seeing how differently people organise their lives — different priorities, social norms, and attitudes to time or family — can be profoundly humbling. It tends to make people more tolerant and curious.' },
      ],
    },
    {
      topic: 'Education and learning',
      turns: [
        { prompt: 'What are the limitations of formal education?', example: 'Formal education tends to prioritise measurable outcomes like grades and qualifications, which can come at the expense of creativity, critical thinking, and intrinsic motivation. It also tends to be fairly uniform, which doesn\'t always serve students with different learning styles or abilities.' },
        { prompt: 'Is it ever too late to learn something new? Discuss.', example: 'Absolutely not — the brain retains neuroplasticity throughout life, though the mechanisms for learning do shift. Adults bring advantages that children lack: a richer framework of prior knowledge, stronger motivation, and greater metacognitive awareness. The challenge is overcoming the fear of failure that often intensifies with age.' },
        { prompt: 'What role should technology play in education?', example: 'Technology is a powerful tool but a poor substitute for human interaction in learning. It can personalise content, provide access to resources globally, and offer immediate feedback. But developing critical thinking, empathy, and collaborative skills still benefits enormously from a teacher who can read the room and respond to nuance.' },
      ],
    },
  ],
  C2: [
    {
      topic: 'Language and thought',
      turns: [
        { prompt: 'Does the language we speak determine how we think? (Sapir-Whorf hypothesis)', example: 'The strong version of the Sapir-Whorf hypothesis — that language determines thought — has largely been discredited, but the weaker version, that language influences thought, has more empirical support. Studies on colour perception, spatial reasoning, and number cognition suggest that linguistic categories can prime certain cognitive habits, without fully constraining what we are able to think.' },
        { prompt: 'Discuss the ethics of linguistic imperialism — the dominance of English globally.', example: 'The global spread of English creates a kind of asymmetry: native speakers benefit from a structural advantage in education, diplomacy, and commerce, while non-native speakers must invest enormous resources to participate on nominally equal terms. This is compounded by the erosion of minority languages. Yet the solution is not straightforward — a genuinely neutral lingua franca has never existed, and dismantling English dominance without replacing it with something workable seems more idealistic than achievable.' },
        { prompt: 'What is lost and what is gained when a language dies?', example: 'When a language dies, a unique cognitive architecture disappears — its metaphors, its categorisations of experience, its oral literature. This is an irreversible epistemic loss. What may be gained, pragmatically, is greater communicative reach and reduced friction between communities. But I am deeply sceptical that this trade-off is ever made freely, since language shift is almost always driven by economic or political coercion rather than genuine choice.' },
      ],
    },
  ],
}
