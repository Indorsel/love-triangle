/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length; 
  let count = 0;  
  for (let i = 0; i<length; i++) { 
      let firstLover = preferences[i] - 1;
      if (firstLover == i) {
        continue
      };
      let secondLover = preferences[firstLover] - 1;
      if (firstLover == secondLover) {
        continue
      };
      let thirdLover = preferences[secondLover] - 1;
      if (thirdLover == secondLover) {
        continue
      };
      if (thirdLover == i) {
          count++;
      }
   }
   return count / 3;
};
