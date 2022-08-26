import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (affairId: number) => void
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            {props.affair.name}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
