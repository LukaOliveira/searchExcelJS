function encrypt(str){
    var key = 146;
    var pos = 0;
    let ostr = '';
    while (pos < str.length) {
        ostr = ostr + String.fromCharCode(str.charCodeAt(pos) ^ key);
        pos ++;
    }
    return ostr;
}

function decrypt(str){
    var key = 146;
    var pos = 0;
    ostr = '';
    while (pos < str.length) {
        ostr = ostr + String.fromCharCode(key ^ str.charCodeAt(pos));
        pos ++;
    }
    return ostr;

}