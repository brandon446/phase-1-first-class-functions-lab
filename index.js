const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(){
    return drivers.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


const createFareMultiplier =(x) =>{
    return(fare)=>{
        return fare * x;
    }

}


function  fareDoubler(x){
    return x*2;
}

function fareTripler(x){
    return x*3;

}

const selectDifferentDrivers =(drivers, selectDrivers) => {
    if(selectDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }else if (selectDrivers ===returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}