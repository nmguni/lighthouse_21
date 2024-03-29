// ceck case str2 == str2.toLocaleLowerCase
const spots = [
    // COLUMNS ARE X
    //    0    1    2    3    4    5
    ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
    ["s", "M", "s", "S", "R", "M"], // 1
    ["s", "M", "s", "S", "R", "m"], // 2
    ["S", "r", "s", "m", "R", "M"], // 3
    ["S", "r", "s", "m", "R", "M"], // 4
    ["S", "r", "S", "M", "M", "S"] // 5
];

const vehicle = "regular"; // possible options are 'regular', 'small', or 'motorcycle'

// [4, 0] --> output
const whereCanIPark = (spots, vehicle) => {
    for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[y].length; x++) {
            const spot = spots[y][x];

            if (vehicle === "regular") {
                // check for spot case
                if (spot === "R") {
                    return [x, y];
                }
            } else if (vehicle === "small") {
                if (spot === "R" || spot === "S") {
                    return [x, y];
                }
            } else if (vehicle === " motercycle") {
                if (spot === "R" || spot === "S" || "M") {
                    return [x, y];
                }
            }
        }
    }
    // if loop gets here spots not found
    return false;
};
whereCanIPark(spots, vehicle);