import { combineReducers } from 'redux'

<<<<<<< HEAD
import DashBoardReducer from '../dashboard/dashBoardReducer'

const rootReducer = combineReducers({
    dashboard: DashBoardReducer
=======
//Reducers
import dashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: () => (
        {
            summary: dashboardReducer
        }
    )
>>>>>>> 638f9782fc807b19919ee491a52e0dd868d39e2c
})

export default rootReducer