import React, { useEffect, useState } from 'react';
import { staticData, clientsImage } from './StaticData';
import Stat from './Stat';
import Clients from './Clients';

const StatsContainer = () => {
    

    return (
        <div className="statics">
            <h2 className="statics__title">
                What We Have Achieved So Far
            </h2>
            <p className="statics__text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <div className="counter">
                {staticData.map((item) => (
                    <Stat
                        count={item.count}
                        title={item.title}
                    />
                ))}
            </div>
            <Clients />
        </div>
    )
}

export default StatsContainer
