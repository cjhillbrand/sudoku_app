import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


/*---------Types and ActionCreators--------*/
const { Types, Creators } = createActions({
    updateSquare: ['col', 'row', 'value'],
    updateModalVisibility: ['pos'],
    updateDropZoneValues: ['values']
})

export const GlobalTypes = Types
export default Creators

/*---------------Selectors--------------*/
export const selectGridVisible = (state) => state.gridVisible
export const selectData = (state) => state.data
export const selectDropZoneValues = (state) => state.dropZoneValues

/*---------------InitialState---------------*/
export const INITIAL_STATE = Immutable({
    gridVisible: 0,
    data: [null][null],
    dropZoneValues: null
})

/*-------------------Reducers-------------------*/
export function updateSquare(state, {col, row, value}) {
    state.data[col][row] = value
    return state
}
export const updateModalVisibility = (state, {pos}) => state.merge({ gridVisible: pos })
export const updateDropZoneValues = (state, {values}) => state.merge({ dropZoneValues: values})

/*--------------------Hook em up--------------------*/
export const reducer = createReducer(INITIAL_STATE, {
    [Types.UPDATE_SQUARE]: updateSquare,
    [Types.UPDATE_MODAL_VISIBILITY]: updateModalVisibility,
    [Types.UPDATE_DROP_ZONE_VALUES]: updateDropZoneValues
})
