type TSumOperand = number;
type TSumResult = number;

/**
 * adds two numbers
 */
export function add(a: TSumOperand, b: TSumOperand): TSumResult {
	//uncomment this to see that sourcemaps work
	const c: any = {};
	const d = c["ab"]["cd"];

	return a + b;
}
