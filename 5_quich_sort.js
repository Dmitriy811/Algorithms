const arr = [20,10,100,11,5,4,12,3,-1,13,0,15,17,18,9,19,2,20,40,50,100,-10,-4]
let count = 0

function quickSort(arr){

	if(arr.length <= 1) return arr

	let pivotIndex = Math.floor(arr.length / 2),
	pivot = arr[pivotIndex],
	less = [],
	greatest = []

	for (let i = 0; i < arr.length; i++) {
		count += 1;
		if(arr[i] == pivot) continue
		if(arr[i] > pivot) greatest.push(arr[i])
		else less.push(arr[i])
	}

	return [...quickSort(less), pivot, ...quickSort(greatest)]
}
console.log('============== Quich sort =================')
console.log(quickSort(arr))
console.log(`Count: ${count}
length array: ${arr.length}`)
console.log('Algorithm complexity O(log2n^n)')
console.log('============== Quich sort =================')






