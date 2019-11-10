
const cars = [
    {
        time: 1568329654807,
        speed: 40,
    },
    {
        time: 1568329821632,
        speed: 42,
    },
    {
        time: 1568331115463,
        speed: 35
    }
]


const speed = 38


const carPassing = (cars, speed) => {
    // Code here!
}


// ----------------- 
const carPassing = (cars, speed) => [...cars, { speed, time: Date.now() }];


//-------------------

const speed = 38;

const carPass = (cars, speed) => {
    let newObj = { time: Date.now(), speed: speed };

    let car = cars.push(newObj);
    //
    console.log(car);
};
carPassing(cars, speed);