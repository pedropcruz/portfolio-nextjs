interface IChatbotOptions {
  value: number
  label: string
  trigger: string
}

interface IChatBotMessages {
  id: string
  message: string
  trigger?: string
  options?: IChatbotOptions[]
  end?: boolean
}

export default [
  {
    id: "0",
    message:
      "Hello there! I'm Pedro's Assistant, nice to meet you! Pedro is away for now, but I think I can take care of what you need, real user! :)",
    trigger: "1",
  },
  {
    id: "1",
    message: " How can I help you?",
    options: [
      {
        value: 0,
        label: "Who is Pedro exactly?",
        trigger: "2",
      },
      {
        value: 1,
        label: "I need his CV please",
        trigger: "3",
      },
      {
        value: 2,
        label: "Mentoring?",
        trigger: "4",
      },
      {
        value: 3,
        label: "I want to see Pedro's projects",
        trigger: "5",
      },
      {
        value: 4,
        label: "How can I contact Pedro?",
        trigger: "6",
      },
    ],
  },
  {
    id: "2",
    message:
      "Pedro Cruz is the father of two beautiful daughters and a dog called Marley. He loves his life and always tends to be non-routine and always manages to add new things to his life. He loves learning from others, in a spirit of community. He also likes to share what he knows, make mistakes and learn from his mistakes",
  },
  {
    id: "3",
    message:
      "Pedro is a frontend developer who wants to grow a little every day, fail, learn, fail again and learn again. Pedro doesn't know everything. He invests his time in learning. What he doesn't know, he seeks out, admits he doesn't know without fear, and goes in search of a solution. That's Pedro. Is there anything else I can do for you?",
    options: [
      {
        value: 0,
        label: "I need his CV please",
        trigger: "3",
      },
      {
        value: 1,
        label: "Mentoring?",
        trigger: "4",
      },
      {
        value: 2,
        label: "I want to see Pedro's projects",
        trigger: "5",
      },
      {
        value: 3,
        label: "How can I contact Pedro?",
        trigger: "6",
      },
    ],
  },
  {
    id: "4",
    message:
      "Of course, here's Pedro's CV! If you see any inconsistencies, please contact him at me@pedropcruz.pt. Thank you! Is there anything else I can do for you?",
    options: [
      {
        value: 0,
        label: "Mentoring?",
        trigger: "4",
      },
      {
        value: 1,
        label: "I want to see Pedro's projects",
        trigger: "5",
      },
      {
        value: 2,
        label: "How can I contact Pedro?",
        trigger: "6",
      },
    ],
  },
  {
    id: "5",
    message:
      "Yes, Pedro has done this in the past and although he has no experience of \"mentoring\" online, he doesn't mind helping. Don't be shy, send an e-mail without any problem! Pedro is always ready to help anyone who wants to be helped! Is there anything else I can help you with?",
    options: [
      {
        value: 0,
        label: "Mentoring?",
        trigger: "4",
      },
      {
        value: 1,
        label: "I want to see Pedro's projects",
        trigger: "5",
      },
      {
        value: 2,
        label: "How can I contact Pedro?",
        trigger: "6",
      },
    ],
  },
] as IChatBotMessages[]
