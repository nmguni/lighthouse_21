const samples = [
    "clean",
    "clean",
    "dirty",
    "clean",
    "dirty",
    "clean",
    "clean",
    "dirty",
    "clean",
    "dirty"
];

const threshold = 0.3;

const checkAir = function (samples, threshold) {
    let cleanCount = [];
    let dirtyCount = [];
    let results = samples.filter(x => {
        if (x == "clean") {
            cleanCount.push(x);
        } else if (x == "dirty") {
            dirtyCount.push(x);
        }
    });
    // find %
    let percentage = dirtyCount.length / cleanCount.length;
    // check if % is < or > then threshold
    if (percentage > threshold) {
        return "Polluted";
    } else if (percentage < threshold) {
        return "Clean";
    }
};

checkAir(samples, threshold);

// failed test
//   Failed: If the ratio of dirty samples is below the threshold, return "Clean"


const checkAir = (samples, threshold) => {
    if ((samples.filter(sample => sample == 'dirty').length / samples.length) < threshold) {
        return 'Clean'
    } else return 'Polluted'
}