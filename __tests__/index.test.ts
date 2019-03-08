import {add, addWithError} from "../src";

it("adds two numbers", () => {
	const r = add(3, 3);
	expect(r).toBe(6);

	addWithError(3, 2);
});
