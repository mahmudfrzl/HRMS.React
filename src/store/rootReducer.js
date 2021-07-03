import { combineReducers } from "redux";
import advertisementReducer from "./reducers/advertisementsReducer";

const rootReducer = combineReducers({
    favoriteAdvertisement: advertisementReducer
})

export default rootReducer;