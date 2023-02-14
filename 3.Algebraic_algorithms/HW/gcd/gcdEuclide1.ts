//2. Алгоритм Евклида через остаток
const gcd = (a:number, b:number): number => b === 0 ? Math.abs(a) : gcd(b, a % b);

console.log(gcd(123456 , 7890));
