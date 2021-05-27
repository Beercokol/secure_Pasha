

export const calvInfoLever = (sumValue: number): string => {
    if (sumValue < 10) {
        return "3"
    }
    if (sumValue > 10 && sumValue < 100) {
        return "2"
    }
    else {
        return "1"
    }
}

export const getInfoString = (level: string | number): string => {
    return `Класс защищенности информационной системы -  ${level}`
}


export const calcInfoLevelWithScale = (scale: number, value: string): number => {
    const valueNumber = Number(value);
    let returnLevel : number;
     switch (Number(scale)) {
        case 1 : {
            if (valueNumber === 1 || valueNumber === 2) {
                returnLevel = 1
            } else {
                returnLevel = 2
            }
            break;
        }
        case 2: {
            returnLevel = valueNumber
            break;
        }
        case 3: {
            returnLevel = valueNumber
            break;
        }
         default: returnLevel = 0
    }
    return returnLevel
}