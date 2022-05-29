const BmiCalculator = require('../BmiCalculator.js');

test('should calculate bmi for underweight', () => {
	const weight = 48;
	const height = 1.65;
	const calculator = new BmiCalculator();

	expect(calculator.calculate(weight, height)).toEqual(17.63);
});

test('should calculate bmi for healthy weight', () => {
	const weight = 65;
	const height = 1.65;
	const calculator = new BmiCalculator();

	expect(calculator.calculate(weight, height)).toEqual(23.88);
});

test('should throw zero division error', () => {
	const weight = 68;
	const height = 0;  // Should cause trouble
	const calculator = new BmiCalculator();

	expect(() => calculator.calculate(weight, height)).toThrow(Error);
	expect(() => calculator.calculate(weight, height)).toThrow('ZeroDivisionError');
});

test('should classify as underweight', () => {
	const calculator = new BmiCalculator();	
	expect(calculator.classify(18.4)).toBe('underweight');
});

test('should classify as healthy weight', () => {
	const calculator = new BmiCalculator();
	expect(calculator.classify(18.5)).toBe('healthy weight');
	expect(calculator.classify(24.9)).toBe('healthy weight');
});

test('should classify as overweight', () => {
	const calculator = new BmiCalculator();
	expect(calculator.classify(25)).toBe('overweight');
	expect(calculator.classify(29.9)).toBe('overweight');
});

test('should classify as obesity', () => {
	const calculator = new BmiCalculator();
	expect(calculator.classify(30)).toBe('obesity');
	expect(calculator.classify(40)).toBe('obesity');
	expect(calculator.classify(50)).toBe('obesity');
});
