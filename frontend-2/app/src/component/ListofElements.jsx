import React from 'react';
import Person from "./Person";

function ListofElements() {
    const person = [
        {
            id: 1,
            name: "Roy",
            age:22,
        },
        {
            id: 2,
            name: "Carlma",
            age: 21
        }
    ]
    const nameList = person.map(x => <Person key={x.id} x={x}/>)
    return (
        <div>
            {nameList}
        </div>
    );
}

export default ListofElements;