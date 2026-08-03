const quizQuestions = [
  {
    question: "Your group project is stuck and no one’s making a move. What’s your first step?",
    background: "linear-gradient(135deg, rgba(179, 32, 42, 0.2), rgba(220, 80, 90, 0.15)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect x=%2220%22 y=%2220%22 width=%22160%22 height=%22160%22 fill=%22%23fff6f6%22 rx=%228%22/><text x=%22100%22 y=%22110%22 text-anchor=%22middle%22 font-size=%2240%22>🏫</text></svg>')",
    options: [
      { text: "I suggest everyone shares what they know about the topic first", type: "L" },
      { text: "I start working on a part to get the ball rolling", type: "V" },
      { text: "I check with each person to see what they're feeling about it", type: "C" },
      { text: "I come up with a plan to help divide the work so everyone knows their role", type: "LD" },
    ],
  },
  {
    question: "It’s Saturday morning, you wake up to no plans, no deadlines. What’s your go-to?",
    background: "linear-gradient(135deg, rgba(179, 32, 42, 0.2), rgba(220, 80, 90, 0.15)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect width=%22200%22 height=%22200%22 fill=%22%23ffd4d4%22/><text x=%22100%22 y=%22110%22 text-anchor=%22middle%22 font-size=%2240%22>🏠</text></svg>')",
    options: [
      { text: "I pick up a skill I've been meaning to try", type: "V" },
      { text: "I watch a documentary, read, or explore something I've been curious about", type: "L" },
      { text: "I start planning for something I'm excited about", type: "LD" },
      { text: "I hangout or catch up with friends I haven't seen in a while", type: "C" },
    ],
  },
  {
    question: "You walk into a party and realize you don’t know anyone. What’s your move?",
    background: "linear-gradient(135deg, rgba(179, 32, 42, 0.2), rgba(220, 80, 90, 0.15)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><circle cx=%22100%22 cy=%22100%22 r=%2280%22 fill=%22%23fff6f6%22/><text x=%22100%22 y=%22120%22 text-anchor=%22middle%22 font-size=%2240%22>🎉</text></svg>')",
    options: [
      { text: "I introduce myself to people and try to get to know them", type: "C" },
      { text: "I pick up a game and tryto get everyone involved", type: "LD" },
      { text: "I find a quietly observe the vibe before deciding how to engage", type: "L" },
      { text: "I try to ask if there is any help needed setting up", type: "V" },
    ],
  },
  {
    question: "Your friend texts that they’re having a rough day. How do you show up for them?",
    background: "linear-gradient(135deg, rgba(179, 32, 42, 0.2), rgba(220, 80, 90, 0.15)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><path d=%22M50 80 Q100 40 150 80%22 stroke=%22%23b3202a%22 stroke-width=%228%22 fill=%22none%22/><circle cx=%2270%22 cy=%2260%22 r=%226%22 fill=%22%23401111%22/><circle cx=%22130%22 cy=%2260%22 r=%226%22 fill=%22%23401111%22/></svg>')",
    options: [
      { text: "I listen carefully and try to understand what they're going through", type: "L" },
      { text: "I rally mutual friends so they feel surrounded by support", type: "C" },
      { text: "I help them think through their options and figure out next steps", type: "LD" },
      { text: "I show up bringing food or helping them sort things out", type: "V" },
    ],
  },
  {
    question: "You just discovered a cause or issue you really care about. What's your first move?",
    background: "linear-gradient(135deg, rgba(179, 32, 42, 0.2), rgba(220, 80, 90, 0.15)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><text x=%22100%22 y=%22110%22 text-anchor=%22middle%22 font-size=%2260%22>💡</text></svg>')",
    options: [
      { text: "I look for concrete next steps so I can do somethingabout it right away", type: "V" },
      { text: "I start thinking about how I could organise something around it", type: "LD" },
      { text: "I share it with my friends and get them talking about it too", type: "C" },
      { text: "I read articles, watch videos, and try to understand it further", type: "L" },
    ],
  },
  {
    question: "You just won a competition as a team. What are you most proud of?",
    background: "linear-gradient(135deg, rgba(179, 32, 42, 0.2), rgba(220, 80, 90, 0.15)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><text x=%22100%22 y=%22110%22 text-anchor=%22middle%22 font-size=%2260%22>🏆</text></svg>')",
    options: [
      { text: "That I grew and learned a lot through the process", type: "L" },
      { text: "That I put in the work and delivered when it counted", type: "V" },
      { text: "That the team stayed close and supported each other throughout", type: "C" },
      { text: "That I helped keep everyone focused and moving in the right direction", type: "LD" },
    ],
  },
  {
    question: "A classmate who's new to school looks like they don't know anyone. What do you do?",
    background: "linear-gradient(135deg, rgba(179, 32, 42, 0.2), rgba(220, 80, 90, 0.15)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect x=%2220%22 y=%2220%22 width=%22160%22 height=%22160%22 fill=%22%23fff6f6%22 rx=%228%22/><circle cx=%22100%22 cy=%2260%22 r=%2216%22 fill=%22%23b3202a%22/><text x=%22100%22 y=%22130%22 text-anchor=%22middle%22 font-size=%2220%22>👋</text></svg>')",
    options: [
      { text: "I introduce them to my friend group so they feel included", type: "C" },
      { text: "I smile and break the ice to get to know them a little", type: "L" },
      { text: "I show them around or explain how things work", type: "V" },
      { text: "I make sure they're fully settled in and have people to count on", type: "LD" },
    ],
  },
  {
    question: "If you could be remembered for one thing by the people around you, what would it be?",
    background: "linear-gradient(135deg, rgba(179, 32, 42, 0.2), rgba(220, 80, 90, 0.15)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><text x=%22100%22 y=%22110%22 text-anchor=%22middle%22 font-size=%2260%22>⭐</text></svg>')",
    options: [
      { text: "That I made people feel seen, welcome, and connected", type: "C" },
      { text: "That I was always curious, thoughtful, and open-minded", type: "L" },
      { text: "That I inspired others and helped make things happen", type: "LD" },
      { text: "That I was reliable, hardworking, and always came through", type: "V" },
    ],
  },
];

const resultProfiles = {
  L: {
    title: "The Learner",
    summary:
      "You lead with curiosity. You like understanding the why behind things, thinking carefully, and learning before leaping.",
    mascot: "assets/mascot/learner.png",
  },
  V: {
    title: "The Volunteer",
    summary:
      "You are action-oriented and dependable. When something needs doing, you show up, pitch in, and make yourself useful.",
    mascot: "assets/mascot/volunteer.png",
  },
  C: {
    title: "The Connector",
    summary:
      "You bring people together. You notice how others are feeling, create belonging, and help people feel seen and included.",
    mascot: "assets/mascot/connector.png",
  },
  LD: {
    title: "The Leader",
    summary:
      "You naturally move things forward. You think ahead, organise well, and help people rally around a shared direction.",
    mascot: "assets/mascot/leader.png",
  },
};

const typeOrder = ["L", "V", "C", "LD"];
const typeLabels = {
  L: "Learner",
  V: "Volunteer",
  C: "Connector",
  LD: "Leader",
};

const state = {
  currentIndex: 0,
  answers: Array(quizQuestions.length).fill(null),
};

// Page elements
const landingPage = document.getElementById("landing-page");
const introPage = document.getElementById("intro-page");
const quizPage = document.getElementById("quiz-page");
const startButton = document.getElementById("start-button");
const introStartButton = document.getElementById("intro-start-button");

const questionTitle = document.getElementById("question-title");
const stepLabel = document.getElementById("step-label");
const scorePill = document.getElementById("score-pill");
const progressFill = document.getElementById("progress-fill");
const optionsForm = document.getElementById("options-form");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const quizCard = document.getElementById("quiz-card");
const resultCard = document.getElementById("result-card");
const resultTitle = document.getElementById("result-title");
const resultSummary = document.getElementById("result-summary");
const mascotImage = document.getElementById("mascot-image");
const questionBackground = document.getElementById("question-background");
const logoImage = document.getElementById("logo-image");
const redBoxImage = document.getElementById("red-box-image");
const restartButton = document.getElementById("restart-button");

function showPage(pageToShow) {
  landingPage.classList.toggle("hidden", pageToShow !== "landing");
  introPage.classList.toggle("hidden", pageToShow !== "intro");
  quizPage.classList.toggle("hidden", pageToShow !== "quiz");
}

function goToIntro() {
  showPage("intro");
}

function goToQuiz() {
  showPage("quiz");
  renderQuestion();
}

function getCounts() {
  return state.answers.reduce(
    (counts, answer) => {
      if (answer) {
        counts[answer] += 1;
      }
      return counts;
    },
    { L: 0, V: 0, C: 0, LD: 0 },
  );
}

function getSelectedAnswer() {
  return state.answers[state.currentIndex];
}

function renderQuestion() {
  const currentQuestion = quizQuestions[state.currentIndex];
  const progressPercent = ((state.currentIndex + 1) / quizQuestions.length) * 100;

  questionTitle.textContent = currentQuestion.question;
  stepLabel.style.display = "none";
  scorePill.style.display = "none";
  progressFill.style.width = `${progressPercent}%`;
  backButton.disabled = state.currentIndex === 0;
  nextButton.textContent = state.currentIndex === quizQuestions.length - 1 ? "See Result" : "Next";
  nextButton.disabled = !getSelectedAnswer();

  // Set question background
  if (currentQuestion.background) {
    questionBackground.style.background = currentQuestion.background;
  }

  optionsForm.innerHTML = currentQuestion.options
    .map((option, index) => {
      const isSelected = getSelectedAnswer() === option.type;
      return `
        <button
          type="button"
          class="option-button ${isSelected ? "selected" : ""}"
          data-type="${option.type}"
          data-index="${index}"
          aria-pressed="${isSelected}"
        >
          <span class="option-label">${option.text}</span>
        </button>
      `;
    })
    .join("");

  optionsForm.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.answers[state.currentIndex] = button.dataset.type;
      renderQuestion();
    });
  });
}

function calculateResult() {
  const counts = getCounts();
  const sortedTypes = [...typeOrder].sort((left, right) => {
    const scoreDifference = counts[right] - counts[left];
    if (scoreDifference !== 0) {
      return scoreDifference;
    }
    return typeOrder.indexOf(left) - typeOrder.indexOf(right);
  });

  const highestScore = counts[sortedTypes[0]];
  const topTypes = sortedTypes.filter((type) => counts[type] === highestScore);

  return {
    topTypes,
    counts,
  };
}

function renderResult() {
  const { topTypes, counts } = calculateResult();
  const profile = resultProfiles[topTypes[0]];

  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  if (topTypes.length === 1) {
    resultTitle.textContent = profile.title;
    resultSummary.textContent = profile.summary;
    mascotImage.src = profile.mascot;
  } else if (topTypes.length === typeOrder.length) {
    const tiedLabels = topTypes.map((type) => resultProfiles[type].title).join(", ");
    resultTitle.textContent = `A balanced mix of ${tiedLabels}`;
    resultSummary.textContent =
      "You showed an even mix of strengths, so your result reflects more than one youth type. That balance can be a strength on its own.";
    mascotImage.src = "assets/mascot/mascot.svg";
  } else {
    resultTitle.textContent = profile.title;
    resultSummary.textContent = profile.summary;
    mascotImage.src = profile.mascot;
  }
}

function goToNext() {
  if (!getSelectedAnswer()) {
    return;
  }

  if (state.currentIndex === quizQuestions.length - 1) {
    renderResult();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function goBack() {
  if (state.currentIndex === 0) {
    return;
  }

  state.currentIndex -= 1;
  renderQuestion();
}

function restartQuiz() {
  state.currentIndex = 0;
  state.answers = Array(quizQuestions.length).fill(null);
  resultCard.classList.add("hidden");
  quizCard.classList.remove("hidden");
  showPage("landing");
}

function hideMissingImage(imageElement) {
  if (!imageElement) {
    return;
  }

  imageElement.addEventListener("error", () => {
    imageElement.closest("div")?.classList.add("hidden");
  });
}

// Event listeners
startButton.addEventListener("click", goToIntro);
introStartButton.addEventListener("click", goToQuiz);
backButton.addEventListener("click", goBack);
nextButton.addEventListener("click", goToNext);
restartButton.addEventListener("click", restartQuiz);

const screenshotButton = document.getElementById("screenshot-button");
const shareButton = document.getElementById("share-button");

if (screenshotButton) {
  screenshotButton.addEventListener("click", async () => {
    let exportCard;

    try {
      exportCard = document.createElement("section");
      exportCard.className = "result-export-card";
      exportCard.innerHTML = `
        <p class="eyebrow">Your Result</p>
        <div class="result-mascot" aria-hidden="true">
          <img src="${mascotImage.src}" alt="Mascot Image" />
        </div>
        <h2>${resultTitle.textContent}</h2>
        <p class="result-summary">${resultSummary.textContent}</p>
      `;

      exportCard.style.position = "fixed";
      exportCard.style.left = "-9999px";
      exportCard.style.top = "0";
      exportCard.style.zIndex = "-1";

      document.body.appendChild(exportCard);

      const canvas = await html2canvas(exportCard, {
        backgroundColor: "#ffffff",
        scale: 2,
        logging: false
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `my-youth-type-${new Date().getTime()}.png`;
      link.click();
    } catch (error) {
      console.error("Screenshot failed:", error);
      alert("Failed to create screenshot. Please try again.");
    } finally {
      if (exportCard?.parentNode) {
        exportCard.parentNode.removeChild(exportCard);
      }
    }
  });
}

if (shareButton) {
  shareButton.addEventListener("click", async () => {
    const resultType = resultTitle.textContent;
    const shareText = `I'm "${resultType}" on the Youth Type Quiz! 🎯 Discover what kind of youth you are by taking the quiz.`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Youth Type Quiz Result",
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Share failed:", error);
        }
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareText + "\n" + window.location.href);
        alert("Result copied to clipboard!");
      } catch (error) {
        console.error("Clipboard copy failed:", error);
        alert("Failed to copy. Please try again.");
      }
    }
  });
}
optionsForm.addEventListener("click", (event) => {
  const button = event.target.closest(".option-button");
  if (!button) {
    return;
  }

  state.answers[state.currentIndex] = button.dataset.type;
  renderQuestion();
});

hideMissingImage(logoImage);
hideMissingImage(redBoxImage);
hideMissingImage(mascotImage);

// Start on landing page
showPage("landing");
