// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.

  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// Accepted assignments by due date to get points.

const deadLine = new Date("2024-02-27");
const accAssignment = AssignmentGroup.assignments.filter((d) => {
  const lastDate = new Date(d.due_at);
  return lastDate < deadLine;
});

// Sum of all points based on due date

let sumPoints = 0;

accAssignment.forEach((p) => {
  sumPoints += p.points_possible;
  return sumPoints;
});
console.log(`All points that due date is passed : ${sumPoints}`);

// Find the 125-ID & 132-ID total scores (Due date Not considered)

sumScores125 = 0;
sumScores132 = 0;
const onTimeScores = accAssignment.map((i) => i.id); // Check Scores Based On The Due Dates Acceptance.
// console.log(`This is the due date list :${onTimeScores}`);  This is Assignment's ID Array that due.

LearnerSubmissions.forEach((l) => {
  let acceptScore = false;
  for (i = 0; i < onTimeScores.length; i++) {
    if (l.assignment_id === onTimeScores[i]) {
      acceptScore = true;
      break;
    }
  }

  if (l.learner_id === 125 && acceptScore) {
    sumScores125 += l.submission.score;
  } else if (l.learner_id === 132 && acceptScore) {
    sumScores132 += l.submission.score;
  }
});
console.log(
  `ID-125 Scores : ${sumScores125}/${sumPoints}, ID-132 Scores: ${sumScores132}/${sumPoints}`
);


const avg125 = sumScores125 / sumPoints;
const avg132 = sumScores132 / sumPoints;
console.log(`The average of ID-125 : ${avg125}%, The average of ID-132 : ${avg132}%`);















console.log(result);

















// for (let assignment of AssignmentGroup.assignments){
//   console.log(assignment.points_possible)                          // ALl Points Possible
// }

// LearnerSubmissions.filter((item) => {
//   return item.score
// })
// console.log(LearnerSubmissions)
