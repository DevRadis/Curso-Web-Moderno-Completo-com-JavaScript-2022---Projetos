// depois da troca... a = 94 e b = 7

let a = 7;
let b = 94;
let c = a;

console.log(a);
console.log(b);

a = b;
b = c;

console.log(a);
console.log(b);

// Outro modo de resolver é usando [] que seria assim: 

[a, b] = [b, a] 

console.log(a); // aqui ficou invertido, como no inicio pois eu já havia trocado os valores anteriormente,
console.log(b); // então o valor voltou ao original.
