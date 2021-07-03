export const ADD_TO_FAVORITE_ADVERTISEMENTS = "ADD_TO_FAVORITE_ADVERTISEMENTS"
export const REMOVE_FROM_FAVORITE_ADVERTISEMENTS = "REMOVE_FROM_FAVORITE_ADVERTISEMENTS"
export function addtoFavoriteAdvertisements(jobadvertisement){
    return {
        type :ADD_TO_FAVORITE_ADVERTISEMENTS,
        payload: jobadvertisement
    }
}

export function removeFromFavoriteAdvertisemts(jobadvertisement){
    return {
        type :REMOVE_FROM_FAVORITE_ADVERTISEMENTS,
        payload: jobadvertisement
    }
}