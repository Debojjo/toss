 const score = JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      losses: 0,
    };

    function getIcon(move) {
      if (move === "HEADS") {
        return '<img src="Images/head.png" alt="Heads" class="coin-icon">';
      }
      if (move === "TAILS") {
        return '<img src="Images/tail.png" alt="Tails" class="coin-icon">';
      }
      return "";
    }

    function getScore() {
      document.querySelector(".t-score").innerHTML = `Wins : ${score.wins} - Losses : ${score.losses}`;
    }

    getScore();

    function resetScore() {
      score.wins = 0;
      score.losses = 0;
    }

    function getComputerMove() {
      return Math.random() < 0.5 ? "HEADS" : "TAILS";
    }

    function result(playerMove) {
      const computerMove = getComputerMove();
      let outcome = "";

      if (playerMove === computerMove) {
        outcome = "YOU WIN THE TOSS!";
      } else {
        outcome = "YOUR OPPONENT WINS THE TOSS!";
      }

      if (outcome === "YOU WIN THE TOSS!") score.wins += 1;
      else score.losses += 1;

      localStorage.setItem("score", JSON.stringify(score));
      getScore();

      document.querySelector(".t-move").innerHTML = `
        ${getIcon(playerMove)} is the call. ${getIcon(computerMove)} it is.`;

      document.querySelector(".t-result").innerHTML = `${outcome}`;
    }