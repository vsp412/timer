
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