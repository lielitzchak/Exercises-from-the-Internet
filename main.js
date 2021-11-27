// function getMiddle(s) {
//   for (var i = 0; i < s.length; i++) {
//     if (s % 2 == 1) {
//       console.log(i);
//     } else if (s % 2 == 0) {
//       console.log(i);
//     }
//   }
// }
// getMiddle("liel");

// function minAndMax() {}



// השלם את הפתרון כך שיחזיר אמת אם הארגומנט (מחרוזת)
//  הראשון שהועבר בסופו של הארגומנט השני (גם מחרוזת).
let str = "el";
const arr = ["belar","liel","mosh", "daniel", "omer","benel"];

function solution(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      console.log(arr[i]);
    }
  }
}

solution(str, arr);

// Array.prototype.includes()