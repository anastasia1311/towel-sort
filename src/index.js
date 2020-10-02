

module.exports = function towelSort (matrix) {
  var i = 0;
  
   if( (matrix||[]).length ===0) return [];
  else if(matrix.length === 0){
        return [];
      }
      else{ 
       for(var i = 1; i < matrix.length; i++){
         if(i%2 !=0){
        matrix[i].reverse();
         }
     }return matrix.flat(Infinity);
    
      }
}
