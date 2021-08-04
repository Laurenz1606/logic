const or = (a, b) => a || b;
const nor = (a, b) => !(a || b);
const and = (a, b) => a && b;
const nand = (a, b) => !(a && b);
const xor = (a, b) => !!(!!a ^ !!b)
const xnor = (a, b) => !(!!a ^ !!b)
const not = (a) => !a;

const adder = (a, b, ci = false) => {
  const v1 = xor(a, b);
  const v2 = and(v1, ci);
  const v3 = and(a, b);
  const sum = xor(v1, ci);
  const co = or(v2, v3);
  return [sum, co];
};
