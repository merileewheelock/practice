/**
Vanity Number Search
Given a collection of phone numbers and a vanity phrase (e.g. “CODE”), how can we find all the phone numbers that contain the vanity number? Vanity phrases involve using the T9 keypad map to translate letters into corresponding numbers. The phrase can be at any position in the number.

Example
Phone Numbers Inventory:
+14157088956
+15109926333
+17474824380
+1415123456
+919810155555

TWLO matches +14157086956 (+1415708-TWLO)
CODE matches +15109926333 (+151099-CODE-3)
HTCH matches +17474824380 (+1747-HTCH-380)

**T9 reference image: https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/220px-Telephone-keypad2.svg.png
**/

function checkT9(arr, str){
	const T9 = {
		'1': '',
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz',
		'0': ''
	}
	for (let i = 0; i < arr.length; i++){
		let currentWord = arr[i]
		console.log(arr[i])
		for (let j = 0; j < arr[i].length; j++){
			let currentValue = arr[i][j]
			// console.log(T9[currentValue])
			let buildWord = '';
			console.log(T9[currentValue].includes(str.charAt(j)))
			if (T9[currentValue].includes(str.charAt(j)) == true){
				
			}
		}
	}
}
console.log(checkT9(['123'], "a"));