function getHonours(cgpa) {
  if (cgpa < 0 || cgpa > 5) {
    throw new Error('Invalid CGPA');
  } else if (cgpa >= 1.00 && cgpa <= 1.49) {
    return 'Pass';
  } else if (cgpa >= 1.50 && cgpa <= 2.39) {
    return 'Third class';
  } else if (cgpa >= 2.40 && cgpa <= 3.49) {
    // console.log('Reachable');
    return 'Second class lower division';
    // console.log('Unreachable');
  } if (cgpa >= 3.50 && cgpa < 4.49) {
    return 'Second class upper division';
  } else {
    return 'First class';
  }
}

console.log(getHonours(2.4));
console.log(getHonours(4.2));
console.log(getHonours(4.8));
console.log(getHonours(3.49));

module.exports = getHonours;
