// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
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
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.



    course = [{          
         name : CourseInfo.name,
         id : CourseInfo.id
    }]
    console.log(course)                                                 // Course Name & Course ID

    for (const l in LearnerSubmissions){
        console.log(`ID : ${LearnerSubmissions[l].learner_id}`)                  // Learners ID
    }




  

    const result = [
        {
          id: 125,
          avg: 0.985, // (47 + 150) / (50 + 150)
          1: 0.94, // 47 / 50
          2: 1.0 // 150 / 150
        },
        {
          id: 132,
          avg: 0.82, // (39 + 125) / (50 + 150)
          1: 0.78, // 39 / 50
          2: 0.833 // late: (140 - 15) / 150
        }
      ];
    
      return result;
    }
    
    const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
    
    console.log(result);


    

    // function pointsAvg(points_possible, score){
        // newAssign = AssignmentGroup.map((item) =>{
        //     return assignments.points_possible
        // })
        // console.log(newAssign)
    // }
    
    // sumPoints = 0;
    // const allPoints = AssignmentGroup.assignments.map(item =>{
    // sumPoints +=item.points_possible 
    // return sumPoints
         
    // })
    // console.log(allPoints)                                              // ALl Points Possible

    const now = new Date();
    const validAssignments = AssignmentGroup.assignments.filter(a => new Date(a.due_at) < now);




    let sumPoints = 0;
    AssignmentGroup.assignments.forEach(item => {
    sumPoints += item.points_possible;
    });
    console.log(sumPoints);                                                //All Points Possible 



   

    // const allScores = LearnerSubmissions.map(item => {
    //     return item.submission.score;
    //   });
    // console.log(allScores)                                                // All Scores


    // sumPoints = 0;
    // sumScores = 0;
    // for (let i = 0; i < allPoints.length; i++){
    //     sumPoints += allPoints[i]
    // }
    // for (let j = 0; j < allScores.length; j++){
    //     sumScores += allScores[j]
    // }
    // console.log(sumPoints)
    // console.log(sumScores)

LearnerSubmissions.forEach(item =>{
    console.log(`ID: ${item.learner_id}, Score: ${item.submission.score}`)     // Scores For Each Learner 
})


let totalScore125 = 0;

LearnerSubmissions.forEach(item => {
  if (item.learner_id === 125) {
    totalScore125 += item.submission.score;
  }
});

console.log(`Total score for learner 125: ${totalScore125}`);            // Total Score for learner 125

let totalScore132 = 0;

LearnerSubmissions.forEach(item => {
    if(item.learner_id === 132) {
        totalScore132 += item.submission.score
    }
})
console.log(`Total score for learner 132: ${totalScore132}`)             // Total Score for leaner 132


average125 = totalScore125 / sumPoints 
let roundedAverage125 = Math.round(average125 * 100) / 100;             // AVG Learner ID 125  : 0.85
console.log(roundedAverage125)                                              

average132 = totalScore132 / sumPoints 
let roundedAverage132 = Math.round(average132 * 100) / 100;             // AVG Learner ID 132 : 0.26
console.log(roundedAverage132)


