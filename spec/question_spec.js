// import question to test
var quiz = require("../index");

describe("A program to quiz you on your classmates", () => {

	it("can tell you if you were right", () => {
		expect(quiz.normalize("Joe siler")).tobe(true);
		expect(quiz.normalize("Cordell McCurry")).tobe(false);
		expect(quiz.normalize("Scott Layne")).tobe(false);
	});
})