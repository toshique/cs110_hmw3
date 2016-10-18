
const a = [1,2,3,4,5,6,7];
	const reverse = function(arr){
		if (arr===0){ 
			return "";
		}
		if (arr<=a.length){
			console.log(a[arr-1]);
			return reverse(arr-1);
		}
		
	};
const reversedArray = reverse(7);
console.log(reversedArray)

