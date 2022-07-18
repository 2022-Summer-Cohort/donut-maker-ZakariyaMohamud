class DonutMaker{
    constructor( autoClickers,donutCount,donutMultiplier){
    
        this.autoClickers =autoClickers;
        this.donutCount =donutCount;
        this.donutMultiplier =donutMultiplier;
        this.autoClickersCost = 100;
        this.donutMultiplierCost=10;

}

bakeDonut(){
    this.donutCount+= Math.pow(1.2, this.donutMultiplier);

}

buyAutoClicker(){
    if(this.donutCount>=this.autoClickersCost){
        this.autoClickers++;
        this.donutCount-=this.autoClickersCost;
       this.autoClickersCost*=1.1;
    
    }
    else {
        alert("Your broke! Wait until you have more donuts. ")
    }
}
buyDonutMultiplier(){
    if(this.donutCount>=this.donutMultiplierCost){
        this.donutMultiplier++;
        this.donutCount-=this.donutMultiplierCost;
        this.donutMultiplierCost*=1.1;

        
    }
    else {
        alert("Your broke! Wait until you have more donuts. ")
    }
}
restart(){
        this.donutCount=0;
        this.autoClickers =0;
        this.donutMultiplier =0;
        this.autoClickersCost = 10;
        this.donutMultiplierCost=10;


}





}
export default DonutMaker;