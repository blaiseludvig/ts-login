export function isValidUsername(username: string): { isValid: boolean, message: string | null } {

  // reject if username is empty
  if (username.length == 0) 
    return { isValid: false, message: "Válassz egy felhasználnevet!" };

  // reject if username is short than 6 or longer than 30 characters
  if (username.length < 6 || username.length > 30)
    return { isValid: false, message: "Válassz egy 6-30 karakter hosszú felhasználnevet!" };

  // reject if username is a reserved alias
  if ((/abuse|postmaster/gi).test(username))
    return { isValid: false, message: 'A felhasználónév nem lehet "abuse" vagy "postmaster"' };

  // reject if username contains two consecutive dots
  if ((/\.\./gi).test(username))
    return { isValid: false, message: 'A felhasználónévben nem lehet két egymás melletti pont!' };

  // reject if username contains non-alphanumeric characters
  if ((/^(([a-z]|[0-9]|[\.]))*$/gi).test(username) == false)
    return { isValid: false, message: 'A felhasználónév csak latin betűket és számokat tartalmazhat!' };

  // reject if username starts or ends with dot
  if ((/(^\.)|(\.$)/gi).test(username))
    return { isValid: false, message: 'A felhasználónév nem kezdődhet vagy végződhet ponttal!' };


  return { isValid: true, message: null };
  
}