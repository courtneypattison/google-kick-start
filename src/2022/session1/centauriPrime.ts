export {};

declare var require: any;
declare var process: any;

enum Ruler {
  Alice = 'Alice',
  Bob = 'Bob',
  Nobody = 'nobody'
}

const readline = require("readline");
const rl = readline.createInterface({input: process.stdin});

let caseCount = 0;
let caseNumber = 1;

rl.on('line', (line: string) => {
  if (caseCount === 0) {
    caseCount = Number(line);
  } else {
    processCase(caseNumber++, line);
  }
  
  if (caseNumber > caseCount) {
    rl.close();
  }
});

function processCase(caseNumber: number, kingdomName: string): void {
  let endChar = kingdomName[kingdomName.length - 1];
  let ruler = Ruler.Bob;

  if (/[AEIOUaeiou]/.test(endChar)) {
    ruler = Ruler.Alice;
  } else if (/[Yy]/.test(endChar)) {
    ruler = Ruler.Nobody;
  }

  console.log(`Case #${caseNumber}: ${kingdomName} is ruled by ${ruler}.`);
}