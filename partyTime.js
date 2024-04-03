function partyTime(input) {
    input = input.join(`, `);
    let idx = input.indexOf(`PARTY`);
    let listOfGuests = input.slice(0, idx - 2).split(`, `);
    let listOfComes = input.slice(idx + 7).split(`, `);
    let finalList = [];
    let notCome = [];

    for (let i = 0; i < listOfGuests.length; i++) {
        let name = listOfGuests[i];
        if (!listOfComes.includes(name)) {
            if (!finalList.includes(name)) {
                finalList.push(name);
            }
        } else {
            let index = listOfComes.indexOf(name);
            listOfComes.splice(index, 1);
        }
    }
let vipList=[];
let regularList=[]
    for(let i=0; i<finalList.length;i++){
        if (finalList[i][0]>=0 && finalList[i][0]<=9){
            vipList.push(finalList[i])
        }else{
            regularList.push(finalList[i])
        }
    }
    

    let counter = finalList.length; // Number of guests who did not come
    console.log(`${counter}`);
    console.log(vipList.join(`\n`));
    console.log(regularList.join(`\n`));
}