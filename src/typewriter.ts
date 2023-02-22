import { useEffect } from "react"

var Typewriter = function (this:any,period:number,textToShow:string):void {
    let isShow = true;
    useEffect(() => {
        /*
        setInterval(() => {
            // implement the typewriter function
            var sentences = document.getElementsByTagName(textToShow)
            console.log("ping", sentences)
            if(isShow){
                for(var i in sentences){
                    
                }
            }
          }, period * 1000 / 2)
        */
    }, []);
}


export {Typewriter}