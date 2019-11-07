
// const voterTurnout = (voter_signatures, voter_ids) => {
//   // check if # items are ==
//   if (voter_signatures.length == voter_ids.length) {
//     // check if items are identical w/ loop
//     for (let i = 0; i < voter_signatures.length; i++) {
//       console.log(voter_signatures[i]);
//     }
//     for (let j = 0; j < voter_ids.length; j++) {
//       console.log(voter_ids[j]);
//     }
//   } if() {
//     return false;
//   } else {
//     return false
//   }
// };

// const voterTurnout = (voter_signatures, voter_ids) => {
//   if (voter_signatures.length == voter_ids.length) {
//     for (let i = 0; i < voter_signatures.length; i++) {
//       for (let j = 0; i < voter_ids.length; j++) {
//         if (voter_signatures[i] == voter_ids[j]) {
//           return "All clear, we can count the votes!";
//         } else {
//           return "FRAUD!";
//         }
//       }
//     }
//   } else {
//     return false;
//   }
// };

// const voterTurnout = (voter_signatures, voter_ids) => {
//   // Check if the arrays are the same length
//   if (voter_signatures.length !== voter_ids.length) return false;

//   for (var i = 0; voter_signatures.length < i; i++) {
//     if (voter_signatures[i] !== voter_ids[i]) return "FRAUD";
//   }

//   // Otherwise, return true
//   return "All clear, we can count the votes!";
// };

// ------------------------

const voterTurnout = (voter_signatures, voter_ids) => {
    // Check if the arrays are the same length
    if (voter_signatures.length !== voter_ids.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < voter_signatures.length; i++) {
        if (voter_signatures[i] !== voter_ids[i]) return "FRAUD!";
    }

    // Otherwise, return true
    return "All clear, we can count the votes!";
};


https://gomakethings.com/how-to-check-if-two-arrays-are-equal-with-vanilla-js/