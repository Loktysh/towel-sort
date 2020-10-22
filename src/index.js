
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix[0] === undefined) {
    return [];
  }
  else return (matrix.length === 0 || matrix[0][0] === undefined) ? [] : (matrix.map((c, i ,a) => i % 2 === 1 ? c.reverse() : c).toString().split(',').map((a)=>parseInt(a)));
}
