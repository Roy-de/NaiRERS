import React from 'react';

const Person = ({x}) => {
    return (
        <div>
            <h2>
                My name is {x.name} and I am {x.age} years old</h2>
        </div>
    );
};

export default Person;