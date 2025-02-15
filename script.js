const reasonsList = [
    "YOU'RE MY POOKIE BEAR",
    "you're my vaava",
    "My Only ONE!"
    "My man in the dreams"
    "the one who is in my maula mere maula imagination", 
    "I love the way you look at me.",
    "My MAHARAJA",
    "You’re the most beautiful person I’ve ever met.",
    "My Favorite Place Is Inside Your Hug.",
    "You make me laugh like no one else.",
    "Your smile brightens my day.",
    "In a world of boys, he's a gentleman.",
    "You always know how to make me feel special.",
    "You support me in everything I do.",
    "Your kindness inspires me.",
    "You have the most beautiful eyes.",
    "You make me feel loved and appreciated.",
    "You’re my best friend and my soulmate.",
    "You’re always there for me when I need you.",
    "My lana del rey's muse"
    "You make even the ordinary moments extraordinary.",
    "You’re incredibly thoughtful and caring.",
    "You challenge me to be a better person.",
    "You’re my safe place.",
    "You make me feel understood.",
    "You’re my favorite person to talk to.",
    "You’re my rock.",
    "You make me feel like I’m home.",
    "You’re my everything.",
    "You’re my sunshine on a cloudy day.",
    "you're my kalipans kanthari",
    "You’re the reason I believe in love.",
  ];
  
  function generateReasons() {
    const numberInput = document.getElementById("number").value;
    const reasonsContainer = document.getElementById("reasons-container");
    reasonsContainer.innerHTML = ""; // Clear previous reasons
  
    if (numberInput < 1 || numberInput > 100) {
      alert("Please enter a number between 1 and 100.");
      return;
    }
  
    const shuffledReasons = reasonsList.sort(() => 0.5 - Math.random()); // Shuffle the array
    const selectedReasons = shuffledReasons.slice(0, numberInput); // Select the first N reasons
  
    selectedReasons.forEach((reason) => {
      const reasonElement = document.createElement("div");
      reasonElement.classList.add("reason");
      reasonElement.textContent = reason;
      reasonsContainer.appendChild(reasonElement);
    });
  }