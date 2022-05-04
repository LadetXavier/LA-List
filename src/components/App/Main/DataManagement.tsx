const localData = window.localStorage;

export const addNewChar = () => {

}
export const testData = () => {
    const test = localData.getItem("account");    
}

export const Account = (characters,globalTasks) => {

    const addChar = (char) => {
        //newAccount.character.push(char);
        console.log(char);
    }


    let newAccount = {
        'character': characters,
        'globalTask': globalTasks,
        addChar,
    }

    return(newAccount);
}

export const getAccount= () => {
    let parsedAccount = JSON.parse(localData.getItem('account'));
    return Account(parsedAccount.characters,parsedAccount.globalTasks)
}

const createNewCharacter = () => {
    let newCharacter = {
        'DailyTask': [],
        'WeeklyTask': []
    }
}
