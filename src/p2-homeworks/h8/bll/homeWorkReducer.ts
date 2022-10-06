import {UserType} from "../HW8";


type SortType = {
    type:'sort'
    payload: 'up' | 'down'
}
type CheckType = {
    type:'check'
    payload: 18
}

export const homeWorkReducer = (state: UserType[], action:SortType | CheckType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return state.sort((a, b) => a.name.localeCompare(b.name))

        }
        case 'check': {
            // need to fix
            return state.filter(u => u.age >= 18)
        }
        default:
            return state
    }
}