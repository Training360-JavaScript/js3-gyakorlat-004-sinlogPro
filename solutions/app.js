import checkIP from "./ip.js";
import checkVisa from "./visa.js";
import checkMac from "./mac.js";

const checker = {
    rules: {
        checkIP,
        checkVisa,
        checkMac
    },
    validate(str, mode) {
        switch (mode) {
            case 'ip':
                return this.rules.checkIP(str);
                break;
            case 'visa':
                return this.rules.checkVisa(str);
                break;
            case 'mac':
                return this.rules.checkMac(str);
                break;
            default:
                return 'Nincs mode megadva: ip|visa|mac.'
                break;
        }
    }

};


export default checker;