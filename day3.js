
// Remember, the possible candidates are: Tim, Sally, and Beth (in that order)
const castVote = (name, votes) => {

    if (name === "Tim") {
        votes[0]++;
    } else if (name === "Sally") {
        votes[1]++;
    } else if (name === "Beth") {
        votes[2]++;
    }
    return votes;
};




// input 
const name = 'Sally';
const votes = [
    0, // Tim
    2, // Sally
    1 // Beth
]

//output

[
    0,
    3,
    1
]

//   We'll need to start with an if statement to determine who the vote is for. Once we know that we can use the increment operator (++) to increase votes[0] for Tim, votes[1] for Sally or votes[2] for Beth.

// For instance, if name === 'Tim', then we want to increment votes[0]++.
