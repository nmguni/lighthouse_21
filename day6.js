const interviews = [
    'smart city',
    'rebuild the lighthouse',
    'arts funding',
    'transportation',
    'arts funding',
    'rebuild the lighthouse',
    'sports funding',
    'tax cuts',
    'smart city',
    'arts funding',
    'smart city'
]


// const termTopics = (interviews) => {
//   const count = interviews.reduce((acc, cv) => {
//     return {...acc, [cv]: acc[cv] ? acc[cv]+1 : 1}
//   }, {})
//   return [count['smart city'], count['arts funding'], count['transportation']];
// }

const termTopics = interviews => {
    let finalTermResult = [];
    // filter out key phrases
    const smartCty = interviews.filter(smart => smart == "smart city");
    const artsFunding = interviews.filter(arts => arts == "arts funding");
    const transportation = interviews.filter(
        transport => transport == "transportation"
    );
    // push filter keys.length to array empty array
    finalTermResult.push(
        smartCty.length,
        artsFunding.length,
        transportation.length
    );
    // return final result
    return finalTermResult;
};