import { INCREMENT } from '../constants'

function counterReducer(count = 0, action) {
    return action.type == INCREMENT ? count + 1 : count
}

export default counterReducer