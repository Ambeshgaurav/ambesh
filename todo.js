let mytodo={
    day:'monday',
    meeting :0,
    meetdone:0,
}
let addmeeting=function(todo,meet=0){
    todo.meeting=todo.meeting+meet
}
let donemeeting=function(todo,meet=0){
    todo.meetdone=todo.meetdone-meet
}
let reset=function(todo){
    todo.meeting=0
    todo.meetdone=0
}
let getsummary=function(todo){
    let meetleft=todo.meeting+todo.meetdone
    return `total meeting left is ${meetleft}`
}
addmeeting(mytodo,5)
addmeeting(mytodo,6)
donemeeting(mytodo,4)
//console.log(reset(mytodo))
console.log(getsummary(mytodo));


