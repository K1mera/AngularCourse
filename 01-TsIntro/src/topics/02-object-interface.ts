

const skills: string[] = ['bash', 'counter', 'healing'];

skills 
interface Character {
    name: String;
    hp: number;
    skills: String[];
    hometown?: String;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counter']
}


strider.hometown = 'Rivendell'

console.table(strider);




export { };