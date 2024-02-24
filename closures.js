function first(one){
return function (two){
    console.log("Hey", one)
    console.log("How are you?", two)

}
}


const func = first("Ganesh")
func("@#$^& you!")