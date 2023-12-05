export const readCookieByKey = (key) => {
    var keyEQ = key + '=';
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length;i++){
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1, c.length);
        if (c.indexOf(keyEQ) == 0) {
            return decodeURIComponent(c.substring(keyEQ.length, c.length));
        }
    }

    return null;
}

export const deleteUserCookie = () => {
    document.cookie = 'id=; max-age=0';
    document.cookie = 'name=; max-age=0;';
    document.cookie = 'lastname=; max-age=0;';
    document.cookie = 'ci=; max-age=0;';
    document.cookie = 'country=; max-age=0;';
    document.cookie = 'email=; max-age=0;';
}