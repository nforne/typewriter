const typewriter = string => {
  let input = string + '\n';
  let t = 0;
  for (const char of input) {
    setTimeout(() => process.stdout.write(char), t);
    t += 50; 
  }
}

// example
const string = "hello there from lighthouse labs";
typewriter(string);



/*
const print = text => {
  console.log(text);
};

const text = "4311o th3r3 w0r1d".split(' ')

let t = 1000;
sentence.forEach(elm => {
  setTimeout(() => process.stdout.write(elm), t);
  t += 200;
})
*/