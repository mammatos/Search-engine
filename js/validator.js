const regExNip = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const regExNipPl = /^pl[0-9]{10}$/i;
const regExNipRegon = /^[0-9]{9,10}$/;
const regExKrs = /^krs[0-9]{10}$/i;

export const isNumberValid = (el) => {
    // if(regExNip.test(el)) {
    //     return true;
    // } else if (regExNipPl.test(el)) {
    //     return true;
    // } else if (regExNipRegon.test(el)) {
    //     return true;
    // } else if (regExKrs.test(el)) {
    //     return true;
    // } else {
    //     return false;
    // }

    return regExNip.test(el) || regExNipPl.test(el) || regExNipRegon.test(el) || regExKrs.test(el);
}

export const getErrorMessage = (valueInput) => {
    if (valueInput.length === 0) {
        return "Nie wpisano numeru.";
    } else if (valueInput.length < 9) {
        return "Wpisany numer jest za krótki.";
    } else if (valueInput.length > 15) {
        return "Wpisany numer jest zbyt długi.";
    } else {
        return "Podany numer jest błędny.";
    }
};
