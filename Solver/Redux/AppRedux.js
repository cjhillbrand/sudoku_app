import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


/*---------Types and ActionCreators--------*/
const { Types, Creators } = createActions({
    updateSquare: ['col', 'row', 'value'],
    updateModalVisibility: ['pos'],
    updateDropZoneValues: ['values'],
    updateGridSets: ['newGridSet'],
    resetTable: null
})

export const GlobalTypes = Types
export default Creators

/*---------------Selectors--------------*/
export const selectGridVisible = (state) => state.gridVisible
export const selectData = (state) => state.data
export const selectDropZoneValues = (state) => state.dropZoneValues
export const selectGridSets = (state) => state.gridSets

/*---------------InitialState---------------*/
var init = new Array(9)
var initGrid = new Array(9)

for (var i = 0; i < 9; i++) {
    init[i] = new Array(9)
    initGrid[i] = new Array()
}
export const INITIAL_STATE = Immutable({
    gridVisible: 0,
    data: init,
    dropZoneValues: null,
    gridSets: initGrid
})

/*-------------------Reducers-------------------*/
export function updateSquare(state, {col, row, value}) {
    var temp = new Array(9)
    for (var i = 0; i < 9; i++) {
        temp[i] = new Array(9)
    }
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (i == col && j == row) {
                temp[i][j] = value
            } else {
                temp[i][j] = state.data[i][j]
            }
        }
    }
    return state.merge({ data: temp })
}

export const resetTable = (state) => state.merge({ data: init, gridSets: initGrid })
export const updateModalVisibility = (state, {pos}) => state.merge({ gridVisible: pos })
export const updateDropZoneValues = (state, {values}) => state.merge({ dropZoneValues: values})
export function updateGridSets(state, {newGridSet}) {
    var result = new Array()
    for (var i = 0; i < 9; i++) {
        result.push(Array.from(newGridSet[i]))
    }
    return state.merge({ gridSets: result})
}
/*--------------------Hook em up--------------------*/
export const reducer = createReducer(INITIAL_STATE, {
    [Types.UPDATE_SQUARE]: updateSquare,
    [Types.UPDATE_MODAL_VISIBILITY]: updateModalVisibility,
    [Types.UPDATE_DROP_ZONE_VALUES]: updateDropZoneValues,
    [Types.UPDATE_GRID_SETS]: updateGridSets,
    [Types.RESET_TABLE]: resetTable
})
