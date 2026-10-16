const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const puzzle1Screen = document.getElementById("puzzle1Screen");
const puzzle2Screen = document.getElementById("puzzle2Screen");
const puzzle3Screen = document.getElementById("puzzle3Screen");
const puzzle4Screen = document.getElementById("puzzle4Screen");
const puzzle5Screen = document.getElementById("puzzle5Screen");
const puzzle6Screen = document.getElementById("puzzle6Screen");
const finalScreen = document.getElementById("finalScreen");
const playAgainButton = document.getElementById("playAgainButton");
const progressContainer = document.getElementById("progressContainer");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const puzzle1Answer = document.getElementById("puzzle1Answer");
const checkAnswerButton = document.getElementById("checkAnswerButton");
const puzzle1Message = document.getElementById("puzzle1Message");

const photoChoices = document.querySelectorAll(".photoChoice");
const photoMessage = document.getElementById("photoMessage");
const photoQuestion = document.getElementById("photoQuestion");

const puzzle2Answer = document.getElementById("puzzle2Answer");
const checkPuzzle2Button = document.getElementById("checkPuzzle2Button");
const puzzle2Message = document.getElementById("puzzle2Message");

const puzzle3Answer = document.getElementById("puzzle3Answer");
const checkPuzzle3Button = document.getElementById("checkPuzzle3Button");
const puzzle3Message = document.getElementById("puzzle3Message");
const timelineChoices = document.querySelectorAll(".timelineChoice");
const timelineProgress = document.getElementById("timelineProgress");
const timelineMessage = document.getElementById("timelineMessage");
const puzzle5Answer = document.getElementById("puzzle5Answer");
const checkPuzzle5Button = document.getElementById("checkPuzzle5Button");
const puzzle5Message = document.getElementById("puzzle5Message");
const puzzle6Answer = document.getElementById("puzzle6Answer");
const checkPuzzle6Button = document.getElementById("checkPuzzle6Button");
const puzzle6Message = document.getElementById("puzzle6Message");

const hint1Button = document.getElementById("hint1Button");
const hint2Button = document.getElementById("hint2Button");
const hint1 = document.getElementById("hint1");
const hint2 = document.getElementById("hint2");

let nextTimelineOrder = 1;
startButton.addEventListener("click", function() {
    welcomeScreen.hidden = true;
    puzzle1Screen.hidden = false;
    updateProgress(1);
});

checkAnswerButton.addEventListener("click", function() {
    const answer = puzzle1Answer.value.trim();

    if (answer === "1014") {
        puzzle1Screen.hidden = true;
        puzzle2Screen.hidden = false;
        updateProgress(2);
    } else {
        puzzle1Message.textContent = "BSFR LOCK IN!!!!";
    }
});

photoChoices.forEach(function(photo) {
    photo.addEventListener("click", function() {
        if (photo.dataset.correct === "true") {
            photoMessage.textContent = "GREAT JOB! WHAT A FUN TIME WE HAD :)";
            photoQuestion.hidden = false;
        } else {
            photoMessage.textContent = "Well well well look who needs to take another benchmark test LOL";
        }
    });
});

checkPuzzle2Button.addEventListener("click", function() {
    const answer = puzzle2Answer.value
        .trim()
        .toLowerCase()
        .replace(/[’']/g, "");

    if (answer === "lovers point") {
        puzzle2Screen.hidden = true;
        puzzle3Screen.hidden = false;
        updateProgress(3);
    } else {
        puzzle2Message.textContent = "You literally planned this for your classtrip!!! C'mon now!";
    }
});

checkPuzzle3Button.addEventListener("click", function() {
    const answer = puzzle3Answer.value.trim().toLowerCase();

   if (answer === "agree or nah") {
    puzzle3Screen.hidden = true;
    puzzle4Screen.hidden = false;
    updateProgress(4);
    timelineProgress.textContent = "Choose memory 1 of 8.";
} else {
        puzzle3Message.textContent = "Uh oh...you're also in your rebuilding era huh";
    }
});
timelineChoices.forEach(function(choice) {
    choice.addEventListener("click", function() {
        const chosenOrder = Number(choice.dataset.order);

        if (chosenOrder === nextTimelineOrder) {
            choice.disabled = true;
            choice.classList.add("selectedTimeline");

            if (nextTimelineOrder === 8) {
    puzzle4Screen.hidden = true;
    puzzle5Screen.hidden = false;
    updateProgress(5);
    
} else {
                nextTimelineOrder++;
                timelineProgress.textContent = "Choose memory " + nextTimelineOrder + " of 8.";
                timelineMessage.textContent = "";
            }
        } else {
            nextTimelineOrder = 1;

            timelineChoices.forEach(function(timelineChoice) {
                timelineChoice.disabled = false;
                timelineChoice.classList.remove("selectedTimeline");
            });

            timelineProgress.textContent = "Might need to revist the timeline out here!!";
            timelineMessage.textContent = "Who's memory is better again heh";
        }
    });
});
checkPuzzle5Button.addEventListener("click", function() {
    const answer = puzzle5Answer.value.trim();

    if (answer === "2911") {
    puzzle5Screen.hidden = true;
    puzzle6Screen.hidden = false;
    updateProgress(6);
    puzzle6Message.textContent = "One last puzzle…";
}
    else {
        puzzle5Message.textContent = "WRONGGGGGGGGG...a little lockdown defense out here";
    }
});
hint1Button.addEventListener("click", function() {
    hint1.hidden = false;
    hint1Button.hidden = true;
    hint2Button.hidden = false;
});

hint2Button.addEventListener("click", function() {
    hint2.hidden = false;
    hint2Button.hidden = true;
});

checkPuzzle6Button.addEventListener("click", function() {
    const answer = puzzle6Answer.value.trim().toLowerCase();

    const acceptedAnswers = [
        "bicycle cards",
        "bicycle deck",
        "deck of cards",
        "bicycle card deck",
        "cards"
    ];

   if (acceptedAnswers.includes(answer)) {
    puzzle6Screen.hidden = true;
    finalScreen.hidden = false;
    progressText.textContent = "You Escaped!";
progressFill.style.width = "100%";
    launchConfetti();
    } else {
        puzzle6Message.textContent = "Not the answer I'm looking for...USE HINT";
    }
});
function launchConfetti() {
    const colors = ["#ff4f9a", "#ffd166", "#7dd3fc", "#a7f3d0", "#c4b5fd"];

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement("div");

        piece.className = "confetti";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 0.8 + "s";

        document.body.appendChild(piece);

        setTimeout(function() {
            piece.remove();
        }, 4500);
    }
}
function updateProgress(puzzleNumber) {
    progressContainer.hidden = false;
    progressText.textContent = "Puzzle " + puzzleNumber + " of 6";
    progressFill.style.width = (puzzleNumber / 6) * 100 + "%";
}
playAgainButton.addEventListener("click", function() {
    window.location.reload();
});
function pressEnterToCheck(input, button) {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            button.click();
        }
    });
}

pressEnterToCheck(puzzle1Answer, checkAnswerButton);
pressEnterToCheck(puzzle2Answer, checkPuzzle2Button);
pressEnterToCheck(puzzle3Answer, checkPuzzle3Button);
pressEnterToCheck(puzzle5Answer, checkPuzzle5Button);
pressEnterToCheck(puzzle6Answer, checkPuzzle6Button);