var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 100] = "Left";
    Direction[Direction["Right"] = 101] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("Moving ".concat(Direction[direction].toLowerCase()));
}
move(Direction.Left);
move(Direction.Down);
move(Direction.Up);
move(Direction.Right);
console.log(Direction.Down);
console.log(Direction.Right);
console.log(Direction);
