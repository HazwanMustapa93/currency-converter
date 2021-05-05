export function setCookie(name, value, days, domain) {
    let expires = '';
    let domainStr = '';

    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }

    if (domain) {
        domainStr = '; domain=' + domain;
    }

    document.cookie = name + '=' + (value || '')  + expires + '; path=/' + domainStr;
}

export function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');

    for (let c of ca) {
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
    }

    return null;
}

export function setSession(sessionKey, sessionContent) {
    localStorage.setItem(sessionKey, sessionContent);
}

export function getSession(sessionKey) {
    return localStorage.getItem(sessionKey);
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
    return localStorage.getItem(key);
}