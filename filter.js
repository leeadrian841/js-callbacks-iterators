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

var coolPeople = people.filter(function (person) {
	return (person.coolnessScore > 20)
})

var uncoolPeople = people.filter(function (person) {
	return (person.coolnessScore < 20)
})

coolPeople.forEach(function (person) {
	console.log(person.name + " is cool")
})
uncoolPeople.forEach(function (person) {
	console.log(person.name + " is not cool")
})

// Example results:
//
// Bob is cool
// Isolde is cool
