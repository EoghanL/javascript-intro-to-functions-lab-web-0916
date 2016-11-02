function shout(arg){
  return arg.toUpperCase()
}
function whisper(arg){
  return arg.toLowerCase()
}
function logShout(arg){
  console.log(arg.toUpperCase())
}
function logWhisper(arg){
  console.log(arg.toLowerCase())
}
function sayHiToGrandma(arg){
  switch(true){
    case arg.toUpperCase() === arg:
      return "YES INDEED!"
    case arg.toLowerCase() === arg:
      return "I can't hear you!"
    case arg === "I love you, Grandma.":
      return "I love you, too."
    default:
      return "I don't get what you're saying, dear."
  }
}
