const currentDate = new Date();
// console.log(currentDate);
console.log(currentDate.toLocaleString());

// Computer count date from Jan 1st 1970 00:00:00. It is called EPOCH.
// Time is counted in milliseconds
const timeSinceEpoch = Date.now();
console.log(timeSinceEpoch);
// 1,678,976,168,707
//  Milliseconds = seconds * 10^3
// 1meter = 100cm, 1cm -> 10mm
// 1 meter -> 100 * 10 -> 1000mm
// 1mm -> 0.0001m

// 1 hour -> 60 minutes
// 1 minute -> 60 seconds
// milliseconds -> sec x 10^3
// microseconds -> sec x 10^6
// nanoseconds -> sec x 10^9

