
//Check empty
String.prototype.isEmpty = String.prototype.isEmpty || function() {
    return this.length === 0;
}


//Check null or empty 
String.prototype.isNullOrEmpty = String.prototype.isEmpty || function() {
    return !this;
}


//Check empty after trim
String.prototype.isEmptyAfterTrim = String.prototype.isEmptyAfterTrim || function() {
    return this.trim().length === 0;
}





