var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

var isCool = people.filter(function (person) {
	return (person.coolnessScore > 20)
}).map(function(person){
	return person.name
}).sort()

var unCool = people.filter(function (person) {
	return (person.coolnessScore < 20)
}).map(function(person){
	return person.name
}).sort()

console.log("The cool people are " + isCool)
console.log("The uncool people are " + unCool)

// Example results:
//
// Bob is cool
// Isolde is cool
