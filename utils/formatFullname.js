module.exports = (fullName) => {
  if(!fullName) return 'Error';
  if(typeof fullName !== 'string') return 'Error';
  const spaces = fullName.split(' ').length - 1;
  if(spaces > 1 ) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return 'Error';
  return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
};
