import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


/*---------Types and ActionCreators--------*/
const { Types, Creators } = createActions({
    updateSquare: ['col', 'row', 'value'],
    updateModalVisibility: ['pos']
})

export const GlobalTypes = Types
export default Creators

/*---------------Selectors--------------*/
export const selectGridVisible = (state) => state.gridVisible
export const selectData = (state) => state.data

/*---------------InitialState---------------*/
export const INITIAL_STATE = Immutable({
    gridVisible: 0,
    data: [null][null]
})

/*-------------------Reducers-------------------*/
export function updateSquare(state, {col, row, value}) {
    state.data[col][row] = value
    return state
}

export const updateModalVisibility = (state, {pos}) => state.merge({ gridVisible: pos})

/*--------------------Hook em up--------------------*/
export const reducer = createReducer(INITIAL_STATE, {
    [Types.UPDATE_SQUARE]: updateSquare,
    [Types.UPDATE_MODAL_VISIBILITY]: updateModalVisibility
})
