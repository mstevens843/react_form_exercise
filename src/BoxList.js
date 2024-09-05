import React, { useState } from 'react'; 
import Box from './Box';
import NewBoxForm from './NewBoxForm'; 

function BoxList() {
    const [boxes, setBoxes] = useState([]); 

    // Add a new box
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox]);
    };

    // remove a specific box
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map((box, index) => (
                    <Box
                    key={index}
                    id={box.id}
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={removeBox}
                />
                ))}
            </div>
        </div>
    );

}

export default BoxList; 