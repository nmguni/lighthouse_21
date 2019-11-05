
const registerToVote = (name, unregisteredVoters) => {
    // Code here!
    let updatedList = []

    for (let i = 0; i < unregisteredVoters.length; i++) {

        if (name != unregisteredVoters[i]) {
            updatedList.push(unregisteredVoters[i])

        }
    }
    return updatedList
    // Remember to return a value!
}
