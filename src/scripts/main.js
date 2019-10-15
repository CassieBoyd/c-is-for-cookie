const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let i = 0; i < cookies.length; i++) {
    const currentCookie = cookies[i]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Original code caused infinite loop because y was not inremented causing it to always 
// be less than cookies.length. I renamed all the variables to i and got rid of the let
// statement outside of the for loop object.

// Running the original code will overtax the server due to the infinite loop.
// Even if the code is fixed, the server will still break until the cache is cleared,
// at least on a Mac. Right click the refresh button while Dev Tools are open and click
// "Empty Cache and Hard Reload". This should reset everything so the new code can run.

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; y < cookies.length; x++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }