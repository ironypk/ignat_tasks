import {PeopleType} from '../HW8';



export type ActionTypes = ReturnType<typeof sortName> | ReturnType<typeof checkAge>

export const homeWorkReducer = (state: PeopleType[], action: ActionTypes): PeopleType[] => {
    switch (action.type) {
        case "sort": {
            const sort = (a:PeopleType,b:PeopleType):number => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if(action.payload === 'up'){
                    return nameA < nameB ? -1 : 1
                } else if (action.payload === 'down'){
                    return nameA < nameB ? 1 : -1
                }
                return 0
            }
            return [...state.sort(sort)]
        }
        case "check": {
            return state.filter((el:any) => el.age >= action.payload)
        }
        default: return state
    }
};


export const sortName = (payload:'up' | 'down') => {
    return {
        type:"sort",
        payload
    } as const
}

export const checkAge = (payload:number) => {
    return {
        type:"check",
        payload
    } as const
}

