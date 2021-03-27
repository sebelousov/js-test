var helloWorld = "Hello, world!";
var n = 3;

alert("Begin...");

function helloManyTimes(a) {
	for (var i = 0; i < a; i++) {
		console.log(helloWorld + " - " + i);
	}
}

helloManyTimes(n);
alert("End...");