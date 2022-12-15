function typeofparm (parm) {
    let type = typeof(parm);
    return type;
}

console.log (typeofparm (5));
console.log (typeofparm ("Text"));
console.log (typeofparm (false));
console.log (typeofparm (undefined));
console.log (typeofparm (null));

