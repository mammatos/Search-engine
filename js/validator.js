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