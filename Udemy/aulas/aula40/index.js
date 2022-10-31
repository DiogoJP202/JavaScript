function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3(){
    yield 0;
    yield 2;
    yield 3;
}
function* geradora4(){
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g3 = geradora3();
const g4 = geradora4();

console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);

function* geradora5(){
    yield () => {
        console.log('Vim do y1')
    }
    yield () => {
        console.log('Vim do y2')
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();