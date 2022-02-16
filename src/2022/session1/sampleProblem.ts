export {};

declare var require: any;
declare var process: any;

const readline = require("readline");
const rl = readline.createInterface({input: process.stdin});

function processCases(): void {
  let kidCount: null | number = null;
  let caseCount: null | number = null;
  let candies: number[] = [];
  let caseNumber = 1;
  
  rl.on('line', (line: string) => {
    if (caseCount === null) {
      caseCount = Number(line);
    } else if (kidCount === null) {
      const counts = line.split(" ").map((count: string) => Number(count));
      kidCount = counts[1];
    } else {
      candies = line.split(" ").map((count: string) => Number(count));
      processCase();
      kidCount = null;
      if (caseNumber > caseCount) {
        rl.close();
      }
    }
    
  });

  function processCase(): void {
    const candyCount = candies.reduce((prev, curr) => prev + curr, 0);
    console.log(`Case #${caseNumber++}: ${candyCount % (kidCount || 0)}`);
  }
}

processCases();