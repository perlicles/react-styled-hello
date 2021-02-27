import React from 'react';

function Hello() {
    const sayHello = () => {
        alert("Oi!");
    };

    return (
        <div>
            <button onClick={sayHello}>Clique para dizer Oi!</button>
        </div>
    )
}

export default Hello;