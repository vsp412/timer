
// const stdin = process.stdin;
// // don't worry about these next two lines of setup work.
// stdin.setRawMode(true);
// stdin.setEncoding('utf8');

// ////////////
// // Event Handling for User Input
// ////////////

// // on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {

//   if (key === '\u0003') {
//     process.stdout.write('\n');
//     process.exit();
//   }
//   process.stdout.write('.');

// });

// console.log('after callback');


let d = process.argv
let rw = d.slice(2);
let r = rw.filter(a => (!isNaN(a) && a>=0));

const s = (r) => {
 for (let i = 0; i< r.length; i++) { 

  setTimeout(() => {
    process.stdout.write('\x07');
  }, r[i] * 1000);
    
 }
 setTimeout(() => {
  process.stdout.write('\n');
}, Math.max(...r) * 1000);
 
}

s(r);