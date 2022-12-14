import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error: ''// need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={s.inputClass} placeholder={'name and surname'}/>

            {/*<button className={s.button} onClick={addUser}>add</button>*/}
            <SuperButton className={s.default} onClick={addUser}>
                add
            </SuperButton>
            <span className={s.counting}>{totalUsers}</span>
            <span className={s.red}>{error}</span>
        </div>
    )
}

export default Greeting
