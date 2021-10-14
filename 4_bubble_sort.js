const arr = [20,10,100,11,5,4,12,3,-1,13,0,15,17,18,9,19,2,20,40,50,100,-10,-4]
let count = 0

function bubbleSort(arr){
	for (let i = 0; i < arr.length; i++) {
		
		for (let j = 0; j < arr.length; j++) {
			let tmp
			
			if(arr[j]> arr[j+1]){
				tmp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = tmp
			}
			
			count += 1
		}
	}
	return arr
}

console.log(bubbleSort(arr))
console.log(`Count: ${count}
length array: ${arr.length}`)


// ! the most famous and least effective 
// ! Algorithm complexity O(n^2) without k