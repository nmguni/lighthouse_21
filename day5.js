
const chooseStations = (stations) => {

    // loop thrugh stations 1 - 3
    for (let i = 0; i < stations.length; i++) {
        // loop inside array of each station 
        for (let j = 0; j < stations[i].length; j++) {
            let result = ''
            if (stations[i][j] === 'school' || stations[i][j] == 'community centre') {
                result.push(stations[i][0])
                console.log(result)
            }

        }


    }

}




//    takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

// array within an array ( double loop) name[0] capacity[1] value type[2]


const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];

// output 

['Bright Lights Elementary', 'Moose Mountain Community Centre']

  // 1. capacity > 20 
  // 2. index[2] = 'school' || 'community center'

  // first loop will loop through stations second loop will loop thru index 
