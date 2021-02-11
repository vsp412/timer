
const readline = require('readline'); 
// const w = () => {

  

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  // rl.question('Provide input: ', (a1) => {
  //   if(a1 === 'b') {
  //     console.log('bleep');
  //   } 
  //   rl.question('Provide input: ', (a1) => {
  //     if([1,2,3,4,5,6,7,8,9].includes(a1)) {
  //       console.log(`Setting timer for ${a1} seconds`);
  //       setTimeout(() => {
  //         process.stdout.write(`bleeped at ${a1} second`);
  //         }, a1 * 1000);
       
  //     }
  //   });
  // });       
  
       
  
     const w = () => { rl.question('provide input: ', (a) => {
          if (a === 'b') { 
            console.log('bleep');

            
          } else if (a == 9 || a == 8 || a == 7 || a == 6 || a == 5 || a == 4 || a == 3 || a == 2 || a == 1){
            console.log(`will bloop after ${a} secs`);
            setTimeout(() => {
              process.stdout.write(`bleeped at ${a} second`);
            }, a * 1000);
          } else if ( a === 'j'){
            return rl.close();
          } else {
            console.log(a)
          }
          //console.log(a)
          w();
          
      });
    }
    w(); 

    // const recursiveAsyncReadLine = () => {
    //   rl.question('provide input: ',(a) => {
    //     if (a === 'c') {//we need some base case, for recursion
          
    //       return rl.close();
    //     } else {
    //       console.log(a);
    //     } 
        
    //     recursiveAsyncReadLine(); //Calling this function again to ask new question
    //   });
    // };
    
    // recursiveAsyncReadLine(); //we have to actually start our recursion someh
    
 
  // let i = true;

  // while(i) {
  //   rl.question('provide input: ', (a) => {
  //     console.log(a);
  //   });
  // }   
  
     

   // rl.question('Provide input: ', (a1) => {
    //   if([1,2,3,4,5,6,7,8,9].includes(a1)) {
    //     console.log(`Setting timer for ${a1} seconds`);
    //     setTimeout(() => {
    //       process.stdout.write(`bleeped at ${a1} second`);
    //     }, a1 * 1000);
    //   }
    //   rl.question('Provide input: ', (a1) => {

    //     if (a1 === '\u0003') {
    //       console.log("hatt gandu")
    //       rl.close();
    //     }

    //   });
    // });

  //r;
     
// let d = process.argv
// let rw = d.slice(2);
// let r = rw.filter(a => (!isNaN(a) && a>=0));

// const s = (r) => {
//  for (let i = 0; i< r.length; i++) { 

//   setTimeout(() => {
//     process.stdout.write('po');
//   }, r[i] * 1000);
    
//  }
//  setTimeout(() => {
//   process.stdout.write('\n');
// }, Math.max(...r) * 1000);
 
// }

// s(r);

