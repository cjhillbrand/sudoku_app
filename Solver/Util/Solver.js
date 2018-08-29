import { store } from '../App'

export class Solver {
    constructor() {
        var { data, gridSets } = store.getState()
        this.data = new Array(9)
        this.gridSets = new Array(9)
        for (var i = 0; i < 9; i++) {
            this.data[i] = data[i]
            this.gridSets[i] = gridSets[i]
        }
        console.log(this.gridSets)
    }
    solve() {
        this.explore(0,0)
    }

    explore(col, row) {
        console.log('Exploring col: ' + col + 'Exploring row: ' + row)
        if (col == 9) {
            console.log(this.data)
        } else {
            if (this.data[col][row] != undefined && row == 8) {
                this.explore(col + 1, 0)
            } else if (this.data[col][row] != undefined) {
                explore(col, row + 1)
            } else {
                for (var i = 1; i <= 9; i++) {
                    if(this.isSafe(col, row, i)){
                        this.data[col][row] = i
                        this.gridSets[this.findGrid(col,row)].concat(i)
                        if (row == 8) {
                            this.explore(col + 1, 0)
                        } else {
                            this.explore(col, row + 1)
                        }
                        this.data[col][row] = undefined
                        this.remove(this.findGrid(col,row), i)
                    }
                }
            }
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
