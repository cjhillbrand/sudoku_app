import { store } from '../App'
import Immutable from 'seamless-immutable'
import Creators, { selectData, selectGridSets } from '../Redux/AppRedux'

export class Solver {
    constructor() {
        let state = store.getState()
        this.data = Immutable.asMutable(selectData(state), {deep:true})
        this.gridSets = Immutable.asMutable(selectGridSets(state), {deep:true})
    }
    solve() {
        this.explore(0,0)
    }

    explore(col, row) {
        var done = false
        if (row == 9) {
            var data = []
            for (var i = 0; i < 9; i++) {
                data[i] = []
                for (var j = 0; j < 9; j++) {
                    data[i][j] = this.data[i][j]
                }
            }
            store.dispatch(Creators.setSolution(data))
            return true
        }
        //Pre-placed number
        if (this.data[col][row] != 0) {
            if (col == 8){
                done = this.explore(0, row + 1)
            } else {
                done = this.explore(col + 1, row)
            }
            if (done) return true
        } else {
            //Unsolved Box
            for (var i = 1; i <= 9; i++) {
                if (done) return true
                if (this.isSafe(col, row, i)) {
                    this.data[col][row] = i //Place value
                    this.gridSets[this.findGrid(col,row)].push(i) //add it to gridSet
                    if (col == 8) {
                        done = this.explore(0,row+1)
                    } else {
                        done = this.explore(col+1,row)
                    }
                    this.data[col][row] = 0
                    this.gridSets[this.findGrid(col,row)].pop()
                    if (done) return true
                }
            }
            return false
        }
    }
    isSafe(col, row, value) {
        if(!this.containsRow(row, value) && !this.containsCol(this.data[col], value) &&
        !this.containsGrid(col, row, value)) {
            return true
        }
        return false
    }

    containsRow(row, value) {
        for (var i = 0; i < 9; i++) {
            if (this.data[i][row] == value) 
               return true
         }
         return false
    }

    containsCol(row, value) {
        for (var i = 0; i < 9; i++) {
            if (row[i] == value)
               return true
         }
         return false
    }

    containsGrid(col, row, value) {
        let grid = this.gridSets[this.findGrid(col, row)]
        for (var i = 0; i < 9; i++) {
            if (grid[i] == value) {
                return true
            }
        }
        return false
    }

    findGrid(col, row) {
        return Math.floor(col/3) + Math.floor(row/3) * 3
    }

    remove(grid, value) {
        for (var i = 0; i < this.gridSets[grid].length; i++) {
            if (this.gridSets[grid][i] == value) {
                this.gridSets[grid][i] == 0
                break
            }
        }
    }
}
