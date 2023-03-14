const MALE_NAMES = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let userAkanName = null;
let gender = null;

function getUserInfo(){
    let birthYear = prompt("Enter your birth year:");
    let cc = parseInt(birthYear.slice(0,2));
    let yy = parseInt(birthYear.slice(2,));
    let mm = parseInt(prompt("Enter the month:"));
    let dd = parseInt(prompt("Enter the date:"));
    let gender = prompt("Enter the gender:");
    let indexOfDay = Math.floor((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7)
    return indexOfDay;
}

function calculateDayIndex(cc, yy, mm, dd){
    let indexOfDay = Math.floor((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7)
    return indexOfDay;
    
}

function getAkanName(indexOfDay){
    // let indexOfDay = calculateDayIndex();

    if(gender == "m"){
        userAkanName = MALE_NAMES[indexOfDay];
    } else if (gender == "f"){
        userAkanName = FEMALE_NAMES[indexOfDay];
    } else {
        console.log("Gender not known");
    }
}


function main(){
    let indexOfDay = getUserInfo();
    getAkanName(indexOfDay);
    console.log(userAkanName)
}
