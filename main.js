// Score for the round must start at 0:
let totalScore = 0;

// Function to report score for hole played and update the total current score for the round:
const SCORE = (hole, par, strokes) => {
  let holeScore = Math.abs(par - strokes);
  if (strokes === 1) {
    totalScore -= holeScore;
    console.log(`Hole ${hole}: Hole-in-one! Your total score for the round is ${totalScore}.`);
  } else if (par > strokes && holeScore === 3) {
    totalScore -= holeScore;
    console.log(`Hole ${hole}: Albatross! Total score for the round is ${totalScore}.`);
  } else if (par > strokes && holeScore === 2) {
    totalScore -= holeScore;
    console.log(`Hole ${hole}: Eagle! Total score for the round is ${totalScore}.`);
  } else if (par > strokes && holeScore === 1) {
    totalScore -= holeScore;
    console.log(`Hole ${hole}: Birdie! Total score for the round is ${totalScore}.`);
  } else if (holeScore === 0) {
    totalScore += 0;
    console.log(`Hole ${hole}: Par. Total score for the round is ${totalScore}.`);
  } else if (strokes > par && holeScore === 1) {
    totalScore += holeScore;
    console.log(`Hole ${hole}: Bogey. Total score for the round is ${totalScore}.`);
  } else if (strokes > par && holeScore === 2) {
    totalScore += holeScore;
    console.log(`Hole ${hole}: Double Bogey. Total score for the round is ${totalScore}.`);
  } else if (strokes > par && holeScore === 3) {
    totalScore += holeScore;
    console.log(`Hole ${hole}: Triple Bogey. Total score for the round is ${totalScore}.`);
  } else if (strokes > par && holeScore >= 4) {
    totalScore += holeScore;
    console.log(`Hole ${hole}: You gotta work on your game. Total score for the round is ${totalScore}.`);
  }
}

// CALL FUNCTION UPON COMPLETION OF EACH HOLE
// Results for first nine holes:
SCORE(1, 5, 1);
SCORE(2, 4, 6);
SCORE(3, 3, 3);
SCORE(4, 4, 4);
SCORE(5, 5, 4);
SCORE(6, 3, 2);
SCORE(7, 4, 3);
SCORE(8, 4, 4);
SCORE(9, 5, 8);