// Write a function to calculate the Semester GPA of a student offering 8 courses.
/*
  C.Name => Unit, Score
  Course1 => 3, 73
  Course2 => 5, 68
  Course3 => 2, 57
  Course4 => 3, 88
  Course5 => 3, 53
  Course6 => 2, 70
  Course7 => 0, 48
  Course8 => 4, 92

  Total units = 22.
*/

// Points based on score
/*
70 - 100 => 5 points
60 - 69 => 4 points
50 - 59 => 3 points
45 - 49 => 2 points
40 - 44 => 1 point
0 - 39 => 0 point
*/

// Grade-Point1 = 5 points * 3 units = 15
// GP2 = 4 points * 5 units = 20

// GPA = Total points / Total Units


const courses = [[3, 73], [5, 68], [2, 57], [3, 88], [3, 53], [2, 70], [0, 48], [4, 92]];

// const =  [     15        20       6        15        9       10       0        20
function getPoint(score) {
  if (score >= 70 && score <= 100) {
    return 5;
  } else if (score >= 60 && score <= 69) {
    return 4;
  } else if (score >= 50 && score <= 59) {
    return 3;
  } else if (score >= 45 && score <= 49) {
    return 2;
  } else if (score >= 40 && score <= 44) {
    return 1;
  } else {
    return 0;
  }
}

function calculateCoursePoint(arr) {
  const unit = arr[0];
  const score = arr[1];
  const point = getPoint(score);
  return unit * point;
}

function calculateGPA(courseList) {
  const coursesPoints = courseList.map(course => calculateCoursePoint(course));
  let totalPoints = 0;
  coursesPoints.forEach(point => {
    totalPoints += point;
  })
  let totalUnits = 0;

  courseList.forEach(course => {
    totalUnits += course[0];
  });

  const gpa = totalPoints / totalUnits;
  return gpa;
}

console.log(calculateGPA(courses));
