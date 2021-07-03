import {
    ADD_TO_FAVORITE_ADVERTISEMENTS,
    REMOVE_FROM_FAVORITE_ADVERTISEMENTS
} from "../actions/advertisementActions";
import {
    advertisementItems
} from "../initialValues/advertisementItems"
const initialState = {
    advertisementItems: advertisementItems
}

export default function advertisementReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case ADD_TO_FAVORITE_ADVERTISEMENTS:
            let jobadvertisement = state.advertisementItems.find(a => a.jobadvertisement.id === payload.id)
            if (jobadvertisement) {

                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    advertisementItems: [...state.advertisementItems, {
                        jobadvertisement: payload
                    }]
                }
            }

            case REMOVE_FROM_FAVORITE_ADVERTISEMENTS:
                return {
                    ...state,
                    advertisementItems: state.advertisementItems.filter
                    (a => a.jobadvertisement.id !== payload.id)
                }


                default:
                    return state;
    }

}