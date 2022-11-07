import {AppStoreType} from "./store";

const LOADING_ACTIVE = 'LOADING_ACTIVE';
const LOADING_STOP = 'LOADING_STOP';

export type initStateType = {
    isLoading: boolean
}

export const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case LOADING_ACTIVE:
            return {isLoading: true}
        case LOADING_STOP:
            return {isLoading: false}
        default:
            return state
    }
}

type loadingACType = ReturnType<typeof loadingActiveAC>| ReturnType<typeof loadingStopAC>

export const loadingActiveAC = () => ({
    type: LOADING_ACTIVE
})
export const loadingStopAC = () => ({
    type: LOADING_STOP
}) // fix any