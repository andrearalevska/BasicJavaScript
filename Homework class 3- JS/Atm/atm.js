let balance = 69000;
let amount = prompt ("Please enter the amount you want to withdraw:");

function withdraw (accmoney, withdrawal) {
    if (withdrawal > accmoney) {
        return alert ( "Not enough money on the account.");
         
    }
    else if (withdrawal <= accmoney) {
        let sub = accmoney - withdrawal;
        return alert ( `You have withdrawn ${withdrawal}, your current balance is ${sub}`);
         
    }
    
}

withdraw (balance, amount);
