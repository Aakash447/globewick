import { SIDEMENU_TOGGLE } from '../types';

const initialState={
    toggleSidemenu:false
}

const AdminReducer = (state=initialState,action) => {
    switch(action.type){
        case SIDEMENU_TOGGLE:
            return{
                toggleSidemenu:!state.toggleSidemenu
            }
        default: return state
    }
}

export default AdminReducer