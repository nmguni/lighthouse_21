// cal arival time for busses distance / speed
// return  obj with disdanes

//  input
const buses = {
    pickadilly: {
        distance: 10,
        speed: 5
    },
    uptown: {
        distance: 13,
        speed: 10
    }
};

// out put

// {
//   pickadilly: 2,
//   uptown: 1.3
// }   

const busTimes = buses => {
    Object.keys(buses).forEach(key => {
        const keys = buses;
        if (key == "pickadilly") {
            const pickadillyArival = buses[key].distance / buses[key].speed;
            return pickadillyArival;
        } else if (key == "uptown") {
            const uptownArival = buses[key].distance / buses[key].speed;
            return uptownArival;
        }
        const arivals = {
            pickadilly: pickadillyArival,
            uptown: uptownArival
        };
        console.log(arivals);
    });


};

busTimes(buses);