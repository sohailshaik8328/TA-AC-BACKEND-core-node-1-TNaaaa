function areaOfSquare(side) {
    return side * side;
}

function areaOfRectangle(length, breadth) {
    return length * breadth;
}

function areaOfcircle(radius) {
    return (3.14 * (radius ** 2))
}

module.exports = {
    areaOfSquare : areaOfSquare,
    areaOfRectangle : areaOfRectangle,
    areaOfcircle : areaOfcircle,
}