
document.getElementById('generate').addEventListener('click', () => {
  
  let hasLength = prompt('you must select a length between 8 and 128 characters')
  if (hasLength < 8) {
    hasLength = prompt('you must select a length between 8 and 128 characters')
  }
    else if (hasLength > 128) {
      hasLength = prompt('you must select a length between 8 and 128 characters')
    }
  let hasLowercase = confirm('Do you want lowercase letters in your password?')
  let hasUppercase = confirm('Do you want uppercase letters in your password?')
  let hasNumbers = confirm('Do you want numbers in your password?')
  let hasSymbols = confirm('Do you want symbols in your password?')

  let charSet = ''
  let lowercase = 'abcdefghijklmnopqurstuvwxyz'
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '123456789'
  let symbols = '!@#$%^&*('
  let generatedUsername = ''

  if (hasLowercase) {
    charSet += lowercase
  }
  if (hasUppercase) {
    charSet += uppercase
  }
  if (hasNumbers) {
    charSet += numbers
  }
  if (hasSymbols) {
    charSet += symbols
  }

  for (let i=0; i < hasLength; i++) {
    generatedUsername += charSet[Math.floor(Math.random() * charSet.length)]
  }
  document.getElementById('password').innerHTML = generatedUsername
  }) 
