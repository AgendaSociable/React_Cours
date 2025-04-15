export const initialState = {
    lettres: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_LETTRE":

            const lettres = [...state.lettres, action.payload]
            return {...state, lettres : lettres};

        case "SHUFFLE":
            const shuffleLettres = [...state.lettres].sort(() => Math.random()-0.5)
            return {...state, lettres : shuffleLettres};


        default:
            return state;

    }
}