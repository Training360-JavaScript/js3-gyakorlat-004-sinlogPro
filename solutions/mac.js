const checkMac = (macAddress) => {
    const pattern = /^([0-9|A-F]{2}[ -:]){5}[0-9|A-F]{2}$/i;
    return pattern.test(macAddress);
}


export default checkMac;