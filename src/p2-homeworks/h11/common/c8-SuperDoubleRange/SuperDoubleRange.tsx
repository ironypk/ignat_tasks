import React from "react";
import {Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event:any,newValue:any) => {
        onChangeRange && onChangeRange(newValue)
    }

    return (
        <>
            <Slider value={value} valueLabelDisplay="auto"
                    aria-labelledby="range-slider" onChange={handleChange}/>
        </>
    );
}

export default SuperDoubleRange;
