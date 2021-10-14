const arr = Array.apply(null, {length: 100}).map((e,i) => i);

let count = 0;

function linearSearch(arr, elem){
	count++
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] === elem) return i
	}
	return -1, count
}


console.log(linearSearch(arr, 100), count)



// ! Algorithm execution time O(n) -> linear time 

// * + works with unsorted sampling data 
// * + simplicity 

// * - opening hours leaves much to be desired 

