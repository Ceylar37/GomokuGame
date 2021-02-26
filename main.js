let n = 10;
let m = 10;
let turnController = true;

let matrix = [[]];
let dmatrix = []

for (let i = 0; i < n; i++) {
    dmatrix.push([])
    for (let j = 0; j < m; j++) {
        dmatrix[dmatrix.length - 1].push(1);
    }
}

window.matrix = matrix;

let turn = (e) => {

    let isDotValuable = () => {
        let k = 0;
        let isMainDiagonal_lt = () => {
            for (let i = 1; i < 5; i++) {
                    if (dmatrix[e.classList[0] - i]) {
                        if (dmatrix[e.classList[0] - i][e.classList[1].replace(/c/, '') - i] === dmatrix[e.classList[0]][e.classList[1].replace(/c/, '')]) {
                            k++;
                        } else return 0;
                    } else return 0;
            }
            return 0;
        }
        let isMainDiagonal_rb = () => {
            for (let i = 1; i < 5; i++) {
                    if (dmatrix[Number(e.classList[0]) + i]) {
                        if (dmatrix[Number(e.classList[0]) + i][Number(e.classList[1].replace(/c/, '')) + i] === dmatrix[Number(e.classList[0])][Number(e.classList[1].replace(/c/, ''))]) {
                            k++;
                        } else return 0;
                    } else return 0;
            }
            return 0;
        }
        let isVertical_t = () => {
            for (let i = 1; i < 5; i++) {
                if (dmatrix[e.classList[0] - i][Number(e.classList[1].replace(/c/, ''))] === dmatrix[Number(e.classList[0])][Number(e.classList[1].replace(/c/, ''))]) {
                    k++;
                } else return 0;
            }
        }
        let isVertical_b = () => {
            for (let i = 1; i < 5; i++) {
                if (dmatrix[e.classList[0] + i]) {
                    if (dmatrix[Number(e.classList[0]) + i][Number(e.classList[1].replace(/c/, ''))] === dmatrix[Number(e.classList[0])][Number(e.classList[1].replace(/c/, ''))]) {
                        k++;
                    } else return 0;
                }
            }
        }
        let isSideDiagonal_lb = () => {
            for (let i = 1; i < 5; i++) {
                    if (dmatrix[e.classList[0] + i]) {
                        if (dmatrix[Number(e.classList[0]) + i][e.classList[1].replace(/c/, '') - i] === dmatrix[e.classList[0]][e.classList[1].replace(/c/, '')]) {
                            k++;
                        } else return 0;
                    } else return 0;
            }
            return 0;
        }
        let isSideDiagonal_rt = () => {
            for (let i = 1; i < 5; i++) {
                    if (dmatrix[e.classList[0] - i]) {
                        if (dmatrix[e.classList[0] - i][Number(e.classList[1].replace(/c/, '')) + i] === dmatrix[Number(e.classList[0])][Number(e.classList[1].replace(/c/, ''))]) {
                            k++;
                        } else return 0;
                    } else return 0;
            }
            return 0;
        }
        let isHorizontal_l = () => {
            for (let j = 1; j < 5; j++) {
                if (dmatrix[e.classList[0]][Number(e.classList[1].replace(/c/, '')) - j] === dmatrix[e.classList[0]][Number(e.classList[1].replace(/c/, ''))]) {
                    k++;
                } else return 0;
            }
        }
        let isHorizontal_r = () => {
            for (let j = 1; j < 5; j++) {
                if (dmatrix[e.classList[0]][Number(e.classList[1].replace(/c/, '')) + j] === dmatrix[e.classList[0]][Number(e.classList[1].replace(/c/, ''))]) {
                    k++;
                } else return 0;
            }
        }
        isMainDiagonal_lt();console.log(k);
        isMainDiagonal_rb();console.log(k);
        if (k >= 4) return true;
        k = 0;
        isSideDiagonal_lb();console.log(k);
        isSideDiagonal_rt();console.log(k);
        if (k >= 4) return true;
        k = 0;
        isVertical_b();console.log(k);
        isVertical_t();console.log(k);
        if (k >= 4) return true;
        k = 0;
        isHorizontal_l();console.log(k);
        isHorizontal_r();console.log(k);
        if (k >= 4) return true;
        k = 0;
        console.log('   ');
        return false;
    }

    let c = 0;
    let childNodes = document.body.childNodes;
    while (childNodes[c]) {
        if (childNodes[c].id) {
            matrix[matrix.length - 1].push(childNodes[c])
        } else {
            matrix.push([]);
        }
        c++;
    }
    matrix.pop();

    if (turnController) {
        e.style.backgroundColor = 'blue';
    } else {
        e.style.backgroundColor = 'red'
    }
    dmatrix[e.classList[0]][Number(e.classList[1].replace(/c/, ''))] = e.style.backgroundColor;
    e.disabled = true;
    turnController = !(turnController);

    if (isDotValuable()) {
        alert('Победа игрока ' + e.style.backgroundColor);
        location.reload();
    }

    matrix = [[]];
}

window.onload = () => {

    for (let i = 0; i < n; i++) { //генератор поля
        for (let j = 0; j < m; j++) {
            document.write('<button onclick="turn(this)" style="display: inline-block; height: 30px; width: 30px; border: 1px solid black" class="' + i + ' c' + j + '"></button>');
        }
        document.write('<br/>')
    }
}