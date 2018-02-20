/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length; 
  let count = 0;  
  for (let i = 0; i<length; i++) { 
      let firstAngle = preferences[i] - 1;
      if (firstAngle == i) {
        continue
      };
      let secondAngle = preferences[firstAngle] - 1;
      if (firstAngle == secondAngle) {
        continue
      };
      let thirdAngle = preferences[secondAngle] - 1;
      if (thirdAngle == secondAngle) {
        continue
      };
      if (thirdAngle == i) {
          count++;
      }
   }
   return count / 3;
};
