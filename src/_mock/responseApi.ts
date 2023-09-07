export const MOCK_RESPONSE_API = [
  {
    id: "q1",
    title: "How can you accumulate and use membership points with vani?",
    type: 1, // single choice
    answers: [
      {
        id: "a1-1",
        content: "Hand over membership card",
        isCorrect: false,
      },
      {
        id: "a1-2",
        content: "Tell your Phone number",
        isCorrect: false,
      },
      {
        id: "a1-3",
        content: "Show Vani Barcode on the Home screen",
        isCorrect: true,
      },
    ],
    hint: "To earn/use membership points with vani benefits, scan the Vani Barcode",
  },
  {
    id: "q2",
    type: 1,
    title:
      "What is an additional reward when you earn membership points with vani?",
    answers: [
      {
        id: "a2-1",
        content: "Vani Point",
        isCorrect: false,
      },
      {
        id: "a2-2",
        content: "Vani Coin",
        isCorrect: true,
      },
      {
        id: "a2-3",
        content: "Vani Money",
        isCorrect: false,
      },
    ],
    hint: "Earn/use membership points with vani. Open Ice Cream. Get Vani Coins",
  },
  {
    id: "q3",
    title: "There is another way to get Vani Coin. What is it?",
    type: 1,
    answers: [
      {
        id: "a3-1",
        content: "Leave a 1:1 inquiry",
        isCorrect: false,
      },
      {
        id: "a3-2",
        content: "Run the vani app every day",
        isCorrect: false,
      },
      {
        id: "a3-3",
        content: "Play Shake",
        isCorrect: true,
      },
    ],
    hint: "You can get additional Vani Coins when you play Shake once a day",
  },
  {
    id: "q4",
    title: "How can you use Vani Coin? Please choose 2 answers.",
    type: 2,
    answers: [
      {
        id: "a4-1",
        content: "Exchange to Voucher",
        isCorrect: true,
      },
      {
        id: "a4-2",
        content: "Buy a product at stores",
        isCorrect: false,
      },
      {
        id: "a4-3",
        content: "Exchange to membership points",
        isCorrect: true,
      },
    ],
    hint: "Your Vani Coins can be exchanged for other membership points or Vouchers",
  },
];
