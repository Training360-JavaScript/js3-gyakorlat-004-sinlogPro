const checkIP = (ipAddress) => {
    // Az IP-cím mintája az itt felsoroltak közül az elsőből átalakítva.
    // https://www.regular-expressions.info/ip.html
    
    const pattern = /^((25[0-5]|2[0-4][0-9]|1[0-9]{1,2}|[1-9]?[0-9]).){3}(25[0-5]|2[0-4][0-9]|1[0-9]{1,2}|[1-9]?[0-9])$/;
    return ipAddress.match(pattern) ? true : false;
};

export default checkIP;