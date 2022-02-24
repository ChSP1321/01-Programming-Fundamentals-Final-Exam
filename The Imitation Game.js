function solve(input){

    let encryptedMessage = input.shift();
    let commandline = input.shift();
    let myMessege = "";

    while(commandline != 'Decode'){
        let [command, firstArg, secondArg] = commandline.split('|');
        if(command === 'Move'){
          myMessege = encryptedMessage.substring(0, firstArg);
          encryptedMessage = encryptedMessage.substring(firstArg).concat(myMessege);
        }else if(command === 'Insert'){
           encryptedMessage = encryptedMessage.substring(0, firstArg) + secondArg + encryptedMessage.substring(firstArg, encryptedMessage.length);
        }else if(command === 'ChangeAll'){
            encryptedMessage = encryptedMessage.split(firstArg).join(secondArg);
        }
        
        commandline = input.shift();
    }
   console.log(`The decrypted message is: ${encryptedMessage}`); 
}

solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]);
