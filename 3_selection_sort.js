const arr = [20,10,100,11,5,4,12,3,-1,13,0,15,17,18,9,19,2,20,40,50,100,-10,-4];
let count = 0;

function sectionSort(array){
	for (let i = 0; i < array.length; i++) {
		let minVal = i;
		for (let j=i+1; j < array.length; j++) {
			count += 1
			if(array[j] < array[minVal]) minVal = j
		}
		let tmp = array[i]
		array[i] = array[minVal]
		array[minVal] = tmp
	}
	return array
}
console.log(sectionSort(arr))

console.log(`Count: ${count}
length array: ${arr.length}`)

// ! Algorithm complexity O((k)n^2)
// ! k ≈ 1/2 (factor is not taken into account)