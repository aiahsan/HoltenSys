
import Cookies from 'js-cookie';
import React from 'react';


function checkLogin()  {
    if (Cookies.get('token')) {
        return true;   
     } else {
        return false;
    }
}

function logout()  {
    Cookies.remove('token');
    Cookies.remove('email');

    return true;
}

export {
    checkLogin,
    logout
}