import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
	const res = selectExpenseTotal([]);
	expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
	const result = selectExpenseTotal([expenses[0]]);
	expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
	const result = selectExpenseTotal(expenses);
	expect(result).toBe(114195);
});