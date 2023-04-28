

function addNumbers(a: number, b: number) {
    return a + b;
};

const result: number = addNumbers(1, 2);

console.log({ result });

const addNumberArrow = (a: number, b: number) => { return a + b }

function multiply(fNumber: number, base: number = 2) {
    return (fNumber) * base;
}
addNumberArrow(2, 3)
const multiplyR: number = multiply(2);

console.log(multiplyR);
interface Character {
    name: String;
    hp: number;
    showHp: () => void;
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Health points: ${this.hp}`);

    }
}

const healChr = (chr: Character, per: number) => {
    chr.hp += per;
}
healChr(strider, 2);

export { }