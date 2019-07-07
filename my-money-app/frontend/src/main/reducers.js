import { combineReducers } from 'redux'

//Reducers
import dashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: () => (
        {
            summary: dashboardReducer
        }
    )
})

export default rootReducer