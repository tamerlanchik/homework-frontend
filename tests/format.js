'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно c неупорядоченными числами в нескольких колонках', function (assert) {
		const input = [ 0, 1, -10000, -100, 2, 10, 100, 1000, 10000 ];

		const expected2 =
			'     0    1\n' +
			'-10000 -100\n' +
			'     2   10\n' +
			'   100 1000\n' +
			' 10000';

		const expected3 =
			'   0    1 -10000\n' +
			'-100    2     10\n' +
			' 100 1000  10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно c одной строкой', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected = '0 1 2 10 100 -100 1000 10000 -10000';

		assert.strictEqual(format(input, input.length), expected);
	});

	QUnit.test('format работает с пустым массивом', function (assert) {
		const input = [];
		const expected = '';
		assert.strictEqual(format(input, 0), expected);
		assert.strictEqual(format(input, 5), expected);
	})

	QUnit.test('format не падает от отрицательного числа колонок', function(assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];
		const expected = '';
		assert.strictEqual(format(input, -3), expected);
	})

	QUnit.test('format работает при числе колонок больше, чем длина массива', function(assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];
		const expected = '0 1 2 10 100 -100 1000 10000 -10000';
		assert.strictEqual(format(input, input.length + 13), expected);
	})
});
