let rachaelsPinNumber = (1230);
let rachaelsBalance = (250);

const cashMachine = (pinNumber, rachaelsBalance, cashAmount) => {

    if (pinNumber !== rachaelsPinNumber) {
    console.log("Your pin number is incorrect");

} else if (pinNumber === rachaelsPinNumber && rachaelsBalance >= cashAmount) {
        console.log(`Please take your £${cashAmount}`);

} else if (pinNumber === rachaelsPinNumber && rachaelsBalance < cashAmount) {
            console.log("You have insufficent funds");

} else {
    console.log("Internal error. Please seek assistance.")

}}

cashMachine (1230, 250, 20);
