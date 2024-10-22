enum Direction {
    Up=10, 
    Down , 
    Left=100 , 
    Right
}

function move(direction){
    console.log(`Moving ${Direction[direction].toLowerCase()}`);
}
move(Direction.Left);
move(Direction.Down);
move(Direction.Up);
move(Direction.Right);

console.log(Direction.Down);
console.log(Direction.Right);
console.log(Direction);
