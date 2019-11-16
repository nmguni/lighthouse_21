const lightsOn = function (lights) {
    lights.forEach(light => light.on = true);
    return lights;
};

const lightsOff = function (lights) {
    lights.forEach(light => light.on = false);
    return lights;
};

const toggleLights = function (lights, lightsAreOn) {
    lightsAreOn ? lights.forEach(light => light.on = false) : lights.forEach(light => light.on = true);
    return lights;
};



const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
// output 
[-1, 4]

north = 1
east = 1
south = -1
west = -1

1 + 1 + 1 + 1
