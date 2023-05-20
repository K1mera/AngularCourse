


export function whatsMyType<T>( argument: T ): T {
    
    return argument;
}

const amIaString = whatsMyType( 'yes' );
const amIaNumber = whatsMyType( 1 );


console.log( amIaString );
console.log( amIaNumber );
