

export class Person {
    // public name: string;
    // public adress: string;

    constructor( public name: string, public adress: string) {
        this.name = 'Jinx';
        this.adress = 'Piltover';
    }
}

const katarina = new Person( 'Katarina', 'Noxus' );

console.log( katarina );
