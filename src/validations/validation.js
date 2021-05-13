export function email(value) {
   const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
   return emailReg.test(value);
}

export function password(value) {
    const pswCheck = new RegExp("^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
    return pswCheck.test(value);
}