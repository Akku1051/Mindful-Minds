function breath() {
window.location = "breath.html";
console.log("Breathing page opened");
}

function nature() {
    window.location = "nature.html"
    console.log("Nature page opened")
}

function back() {
    window.location = "index.html";
    console.log("returned to home page");
}

function generate() {
    const nature_idea = [
      "Go for a walk",
      "Eat breakfast, lunch, or dinner outside",
      "Ride a bike",
      "Play a sport",
      "Have a picnic",
      "Do some gardening",
      "Go hiking",
      "Go to the beach",
      "Watch wildlife",
      "Bird watching",
      "Go paddle boating"
    ];
  
    const randomIndex = Math.floor(Math.random() * 11); 
    document.getElementById("nature_ideas").innerHTML = nature_idea[randomIndex];
  }
  
  function meditate() {
    window.location = "meditation.html";
    console.log("Meditation page opened");
  }

  function start() {
    window.location = "meditation(2).html"
    console.log("Meditation started")
  }

  function emotion() {
    window.location = "emotion.html";
    console.log("Emotional support page opened");
  }

