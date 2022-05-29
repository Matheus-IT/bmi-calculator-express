class BmiCalculator {
	calculate(weight, height) {
		if (height === 0) {
			throw new Error('ZeroDivisionError');
		}
		const result = weight / Math.pow(height, 2);
		return Number(result.toFixed(2));
	}

	classify(bmi) {
		if (bmi < 18.5) {
			return 'underweight';
		}
		if (bmi >= 18.5 && bmi < 25) {
			return 'healthy weight';
		}
		if (bmi >= 25 && bmi < 30) {
			return 'overweight';
		}
		return 'obesity';
	}
}
module.exports = BmiCalculator;