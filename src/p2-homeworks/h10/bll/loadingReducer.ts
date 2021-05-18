export enum AppEvents {
    SET_LOADING= 'SET_LOADING'
}

export type LoadingStateType = {
    loading:boolean
}
const initState:LoadingStateType = {
    loading:false
};


export type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case AppEvents.SET_LOADING:
            return {...state,loading:action.predicate}
        default: return state;
    }
};

export const loadingAC = (predicate:boolean) => {
    return {
        type : AppEvents.SET_LOADING,
        predicate
    }
}; // fix any