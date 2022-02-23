function solve(input){

    let numPieces = Number(input.shift());
    let pieces = {};
    
    for(i = 0; i < numPieces; i++){
        let [piecesThemselves, composer, key] = input.shift().split('|');
        pieces[piecesThemselves] = {composer, key};
    }
    let commandLine = input.shift();
    while(commandLine != 'Stop'){
        let [command, firstArgument, secondArgument, thirdArgument] = commandLine.split('|');
        if(command === "Add"){
            if(pieces.hasOwnProperty(firstArgument)){
                console.log(`${firstArgument} is already in the collection!`);
            }else { 
                pieces[firstArgument] = {};
                pieces[firstArgument].composer = secondArgument;
                pieces[firstArgument].key = thirdArgument;
                console.log(`${firstArgument} by ${secondArgument} in ${thirdArgument} added to the collection!`);
            }
        }else if(command === "Remove"){
            if(pieces.hasOwnProperty(firstArgument)){
                delete pieces[firstArgument];
                console.log(`Successfully removed ${firstArgument}!`);
            }else{
                console.log(`Invalid operation! ${firstArgument} does not exist in the collection.`);
            }
        }else if(command === "ChangeKey"){
            if(pieces.hasOwnProperty(firstArgument)){
                pieces[firstArgument].key = secondArgument;
                console.log(`Changed the key of ${firstArgument} to ${secondArgument}!`);
            }else{
                console.log(`Invalid operation! ${firstArgument} does not exist in the collection.`);
            }
        }

        commandLine = input.shift();
    }

    let piecesEntries = Object.entries(pieces);
    let sortedPieces = piecesEntries.sort();

    for (const kvp of sortedPieces) {
        console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`);
     }
    
}

solve(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);

