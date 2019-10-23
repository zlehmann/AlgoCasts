// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanA = stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
  const cleanB = stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')

  if (cleanA === cleanB) {
    return true
  } else {
    return false
  }
}

module.exports = anagrams;
//   const charMap = {}
//
//   for (let chr of str.replace(/[^\w]/g, "").toLowerCase()) {
//       charMap[chr] = charMap[chr] + 1 || 1
//   }
//
//   return charMap
// }
//
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//
//   if(Object.keys(stringA).length == Object.keys(stringB).length) {
//     for (let key in aCharMap) {
//       if (aCharMap[key] !== bCharMap[key]) {
//         return false
//       } else {
//         return true
//       }
//     }
//   } else {
//     return false
//   }
