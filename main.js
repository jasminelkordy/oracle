let response = [
  "Yes.",
  "No.",
  "Maybe.",
  "Definitely.",
  "You got the gift. But it looks like you're waiting for something.",
  "It's really up to you. You just have to make up your own damn mind.",
  "You've already made the choice. You're just here to understand why you've made it.",
  "I would not do that if I were you.",
  "This will not end well.",
  "Be careful what you wish for.",
  "It's just like being in love. No one can tell you you're in love, you just know it.",
  "The choice is yours.",
  "Everything that has a beginning, has an end.",
  "You already know what I'm going to tell you.",
  "I can only tell you what I know. It's you that has to act upon it.",
  "Is it a coincidence or meant to be? You may never find out.",
  "You should go for it.",
  "Just do it.",
  "I encourage you to do it but refuse to take any responsibility for the consequences.",
  "The answer is yes.",
  "There is no such thing as right or wrong. It's just a matter of personal preference.",
  "Nah.",
  "Are you sure you want me to make such an important decision for you?",
  "You can run away from your problems but you can't hide.",
  "It's the perfect day for that.",
  "Nope.",
  "Perhaps not today.",
  "I haven't thought about it.",
  "I never understood why people keep asking me about that.",
  "That's a tricky situation.",
  "The cosmic climate tells me it's the perfect time for that.",
  "Looks like the stars are aligned and you will be successful in whatever you choose to do.",
  "I'm a firm believer in taking risks.",
  "There's always tomorrow.",
  "Maybe, maybe not. Who knows.",
  "Something tells me that's a bad idea.",
  "In situations like yours, the only right thing to do is to listen to your heart.",
  "Think about this in a rational way.",
  "A long walk might help you see more clearly.",
  "The future is undefined.",
  "I'd definitely say yes. But what do I know, I'm just a randomised algorithm.",
  "I wouldn't want to be in your situation right now.",
  "Just go to sleep. The answer will come to you.",
  "You already know what to do, don't you.",
  "I'd like to say yes but have to go with no this time.",
  "I prefer not to go there.",
  "I'm afraid that's not a good idea.",
  "All you need to do is close your eyes and count to twenty. The answer will come to you.",
  "I feel like I need to know more to be able to give you an answer to that.",
  "You know as well as I do that it's a bad idea.",
  "In the end life is about embracing the moment. I hope that answers your question.",
  "Only you can make changes to the path you're on.",
  "If you were waiting for a sign, this is it.",
  "Roses are red, violets are blue. No one can predict your future better than you.",
  "Excellent idea.",
  "I really don't feel like I should make that decision for you.",
  "One word: Destiny.",
  "I might appear trivial, but the answer to that is most certainly yes.",
  "Yes, no, yes, no.. yes.",
  "Hmm let me think. I'd say no.",
  "I never say never but this time it seems like an accurate thing to say.",
  "Give it some time and the answers will come to you.",
  "Is that a trick question?",
  "What would you say to your ten-year-old self?",
  "Personally, I prefer to be sorry than safe.",
  "Do you like to live dangerously?",
  "Someone just asked me that a while ago. I told them to take a cold shower.",
  "Definitely. I know this because I spend most of my time thinking about things like that.",
  "I get my kicks from answering questions like yours.",
  "Whatever you do, don't overthink it.",
];

start();

function start() {
  console.log("Start");
}

let responseButton = document.querySelector("#responseButton");
responseButton.addEventListener("click", function (event) {
  console.log("works");
  generateResponse();
});

function generateResponse() {
  let userInput = document.getElementById("question");
  let randomResponse = response[Math.floor(Math.random() * response.length)];
  console.log(randomResponse);

  if (userInput.value.length == 0) {
    document.getElementById("responseField").innerHTML =
      "Type your question above to get a response.";
  } else {
    document.getElementById("responseField").innerHTML = randomResponse;
  }
}
