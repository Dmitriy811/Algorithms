const arr = Array.apply(null, {length: 100}).map((e,i) => i);

let count = 0;

function binarySerch(arr, elem){

	let startElem = 0,
		endElem = arr.length,
		midlElem,
		position = null;
	while(startElem <= endElem && !position){
		midlElem = Math.floor((endElem+startElem)/2) 
		count++ 
		if(elem != arr[midlElem]){
			if(elem > arr[midlElem]) startElem = midlElem + 1
			else endElem = arr[midlElem] - 1
		} else {
			position = midlElem
			return position
		}
	}
	return position || -1
}
console.log('============== Binary Search No Reqursive =================')
console.log(`ID:    ${binarySerch(arr, 3)}
count: ${count}`)
console.log('============== Binary Search No Reqursive =================')
count = 0;

function reqursiveBinarySerch(arr, elem, start = 0, end = arr.length){
	let middle = Math.floor((start + end) / 2)
	count += 1;
	if(arr[middle] === elem) return middle

	if(middle > elem) return reqursiveBinarySerch(arr, elem, start, middle-1)
	else return reqursiveBinarySerch(arr, elem, middle+1, end)
}
console.log('============== Binary Search Reqursive =================')
console.log(`ID:    ${reqursiveBinarySerch(arr, 3)}
count: ${count}`)
console.log('============== Binary Search Reqursive =================')

// ! Algorithm execution time O(log2(n)) -> logarithmic time 

// * + time working 

// * - works with sorted sampling data 