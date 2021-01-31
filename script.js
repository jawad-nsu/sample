let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3'); 

let currentlyPlaying = true;
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
doorImage1.onclick = () => {
  
  if(currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  } 
}
doorImage2.onclick =() => {
  
  if(currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick =()=> {
  
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}


let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let openDoor1; 
let openDoor2; 
let openDoor3; 

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*3);
  if(choreDoor === 0)
  {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;

  }
  else if(choreDoor === 1){
    openDoor1 = beachDoorPath; 
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
  else{
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  }
}
let startButton = document.getElementById('start');
let numClosedDoors = 3;

let gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else{
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}

let playDoor = (door) =>
{
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door)){
    gameOver();
  }
}
let isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
}

let isClicked = (door) => {
  if(door.src === closedDoorPath)
  {
    return false;
  }
  else{
    return true;
  }
}

startButton.onclick = () =>{
  if(!currentlyPlaying)
  {
    startRound();
  }
  
}
let startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();

}
startRound();