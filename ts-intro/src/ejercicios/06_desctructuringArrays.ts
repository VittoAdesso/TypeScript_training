const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [ p1, p2, p3 ] = dbz; 

// the position is vital , i dont have to use the same name  see
console.log('Position 1:', p1 );
console.log('Position 2:', p2);
console.log('Position 3:',p3);

// calling with position into array
const dbz1: string[] = ['Goku', 'Vegeta', 'Trunks']

console.log('Position 1:', dbz1[0] );
console.log('Position 2:', dbz1[1]);
console.log('Position 3:',dbz1[2]);

// If i only need one type of the array
const dbz2: string[] = ['Goku', 'Vegeta', 'Trunks']
const [ , , ok ] = dbz2; 
const [ , ok1 ,  ] = dbz2; 
const [ ok3,  ,  ] = dbz2; 

console.log('Position 3:', p3);