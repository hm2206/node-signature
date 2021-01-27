

const getPositions = ({ width = 0, height = 0 }) => {

    let positions = [];
    let is_vertical = height > width ? true : false;
    let current_width = 150;
    let current_height = 70;
    // definir columna y fila
    let column = parseInt(width / current_width);
    let row = parseInt(is_vertical ? (height / current_height) - 1 : (height / current_height));
    let marg_left = parseFloat((width - (column * current_width)) / column);
    marg_left = marg_left - (marg_left / (column + 1));
    let marg_bottom = ((height - (row * current_height)) / row);
    marg_bottom = marg_bottom - (marg_bottom / (row + 1));
    // inicializar
    let current_y = marg_bottom;
    let count_position = parseInt(column * row);
    let current_size = count_position;
    // agregar posiciones
    for(let i = (row - 1); i >= 0; i--) {
        let current_x = marg_left;
        for(let j = 0; j < column; j++) {
            positions.push({
                row: i,
                column: j,
                value: current_size - (column - j)
            });
            // next currentX
            current_x += (current_width + marg_left);
        }
        // next currentY
        current_y += (current_height + marg_bottom);
        current_size -= column;
    }
    // response 
    return { width, height, column, row, count_position, positions };
}


// exportar modulos
module.exports = { getPositions }