// check that each array have the same number of items
// confirm that each of the voter ids matches the corresponding voter signature.

//If the arrays do not contain the same number of items, then we know something is amiss and our function should return false. If they contain the same number of elements, then we should proceed to check if the two arrays are identical. If they are, our function should return "All clear, we can count the votes!", if they are not it should return "FRAUD!".


// 1. check num items & if they are == then move proced to next step 
// if false return false 

// 2. if items == then check if items are identical 
// if false return false

// 3. if identical then true...

// input 


const voterTurnout = (voter_signatures, voter_ids) => {

    if (voter_signatures.length == voter_ids) {
        return true
    } else {
        return false
    }



}