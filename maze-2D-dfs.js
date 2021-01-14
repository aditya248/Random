var maze = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0]
];
  let source = [4,0];
  let dest = [3,4]
  console.log(shortestPathBFS(maze,source,dest));
 
function shortestPathBFS(maze,start,end){
  let queue = []; // Empty queue
  maze[start[0]][start[1]] = 1; // Save the start point
  queue.push([start]);
 
  while(queue.length > 0){
    var path = queue.shift();
    var pos = path[path.length-1];
    var direction = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ];
   
    for (var i = 0; i < direction.length; i++) {
      // Perform this check first:
      if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
            console.log("here");
        // return the path that led to the find
        return path.concat([end]);
      }
     
      //skip
      if (direction[i][0] < 0 || direction[i][0] >= maze[0].length
          || direction[i][1] < 0 || direction[i][1] >= maze[0].length
          || maze[direction[i][0]][direction[i][1]] !== 0) {
        continue;
      }
     
      maze[direction[i][0]][direction[i][1]] = 1;
     
      queue.push(path.concat([direction[i]]));
    }
  }
 
  return path;
}