const products = [50, 20, 60, 15, 30];  

const sortByPrice = (arr) => {  
    return arr.sort((a, b) => a - b); 
}

console.log(sortByPrice(products));  

module.exports = { sortByPrice };  

//Sorting with arr.sort(): This is the primary operation affecting the time complexity. The sorting operation uses an algorithm 
//(usually Timsort in modern JavaScript engines), which has a time complexity of O(n log n).

//Array Access and Assignment: Simple array operations like initialization (e.g., const products = [...]) are O(1)

//Comparison Function: The comparison function used in arr.sort() is a simple operation with O(1) complexity, but the sorting algorithm itself dominates the complexity.

//Exporting the Function: The export operation does not affect the overall complexity and is O(1)

//Console Log: Logging the sorted array does not affect the time complexity significantly and is also O(1)