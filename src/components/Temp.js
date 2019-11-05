import React from 'react';
import Faker from 'faker';

const Temp = () => {
    return(
        <div>
            <img src = {Faker.image.nightlife()} alt="blah!" />
        </div>
    );
}

export default Temp;