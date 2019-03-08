type TSth = {
	a: number;
	b: string;
};
export function sum(a: number, b: number): number {
	const c: any = {};
	const d = c["ab"]["cd"];
	return a + b;
}

sum(3, 4);
