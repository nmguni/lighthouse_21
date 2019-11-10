// const trash = "recycling";
// checking trash for bins
const bins = {
    waste: 4,
    recycling: 2,
    compost: 5
};

const trash = "recycling";

// for (const prop in bins) {
//   console.log(prop[trash]);
// }

const smartGarbage = (trash, bins) => {
    // get properties of bin
    let bin = Object.keys(bins);
    // iterate over props & log
    bin.forEach(function (el) {
        // checking if trash is  a prop
        if (el == trash) {
            // if ture search obj for trsah
            let ans = (bins[trash] += 1);

            //  incres obj num by 1

            // return obj
            console.log(bins)
        }
    });
};

//---------------------
const smartGarbage = (trash, bins) => {
    let result = bins;
    if (trash == "waste") {
        result.waste++;
    } else if (trash === "recycling") {
        result.recycling++;
    } else if (trash === "compost") {
        result.compost++;
    }
    return result;
};



//--------------------------
const trash = "waste";

  // for (const prop in bins) {
  //   console.log(prop[trash]);
  // }

  // const smartGarbage = (trash, bins) => {
  //   // new push bins to new bins obj
  //   const result = ["hello"];
  //   // get properties of bin
  //   let bin = Object.keys(bins);
  //   // iterate over props & log
  //   bin.forEach(function(el) {
  //     // checking if trash is  a prop
  //     if (el == trash) {
  //       // if ture search obj for trsah
  //       bins[trash] += 1;
  //     }
  //     result.push(bins);
  //   });
  // };

  // smartGarbage(trash, bins);