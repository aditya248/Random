/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var sprialOrder = [];
    //Pointers
    var left = 0;
    var right = matrix[0].length;
    var top = 0;
    var bottom = matrix.length; //rows

    while (left < right && top < bottom) {
        for (let i = left; i < right; i++) {
            sprialOrder.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i < bottom; i++) {
            sprialOrder.push(matrix[i][right - 1]);
        }
        right--;

        if (!(left < right && top < bottom)) {
            break;
        }

        for (let i = right - 1; i > left - 1; i--) {
            sprialOrder.push(matrix[bottom - 1][i]);
        }
        bottom--;

        for (let i = bottom - 1; i > top - 1; i--) {
            sprialOrder.push(matrix[i][left]);
        }
        left++;
    }

    return sprialOrder;
};