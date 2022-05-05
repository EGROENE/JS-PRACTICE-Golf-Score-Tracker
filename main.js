// Score for the round must start at 0:
let totalScore = 0;

// Function to report score for hole played and update the total current score for the round:
const HOLE_SCORE = (par, strokes) => {
  let holeScore = Math.abs(par - strokes);
  if (strokes === 1) {
    totalScore -= holeScore;
    console.log(`Hole-in-one! Total score for the round is ${totalScore}.`);
  } else if (par > strokes && holeScore === 3) {
    totalScore -= holeScore;
    console.log(`Albatross! Total score for the round is ${totalScore}.`);
  } else if (par > strokes && holeScore === 2) {
    totalScore -= holeScore;
    console.log(`Eagle! Total score for the round is ${totalScore}.`);
  } else if (par > strokes && holeScore === 1) {
    totalScore -= holeScore;
    console.log(`Birdie! Total score for the round is ${totalScore}.`);
  } else if (holeScore === 0) {
    totalScore += 0;
    console.log(`Par. Total score for the round is ${totalScore}.`);
  } else if (strokes > par && holeScore === 1) {
    totalScore += holeScore;
    console.log(`Bogey. Total score for the round is ${totalScore}.`);
  } else if (strokes > par && holeScore === 2) {
    totalScore += holeScore;
    console.log(`Double Bogey. Total score for the round is ${totalScore}.`);
  } else if (strokes > par && holeScore === 3) {
    totalScore += holeScore;
    console.log(`Triple Bogey. Total score for the round is ${totalScore}.`);
  } else if (strokes > par && holeScore >= 4) {
    totalScore += holeScore;
    console.log(`You gotta work on your game. Total score for the round is ${totalScore}.`);
  }
};

// CALL FUNCTION UPON COMPLETION OF EACH HOLE
// Results for first nine holes:
HOLE_SCORE(5, 1); // Hole 1
HOLE_SCORE(3, 4); // Hole 2
HOLE_SCORE(4, 3); // Hole 3
HOLE_SCORE(3, 5); // Hole 4
HOLE_SCORE(4, 2); // Hole 5
HOLE_SCORE(3, 7); // Hole 6
HOLE_SCORE(4, 4); // Hole 7
HOLE_SCORE(5, 7); // Hole 8
HOLE_SCORE(3, 2); // Hole 9