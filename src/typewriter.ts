
var typewriter = function (this:any,period:number,textToShow:JSX.Element):void {
    typewriter.prototype.show = function():void{
        this.textToShow.style.display = "block";
    }
}


export {typewriter}