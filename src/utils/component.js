/**
 * Ensure user-defined class attribute into array of string
 *
 * @param classes
 */
function userClasses(classes = []) {
  return (Array.isArray(classes) ? classes : classes.split(' ')).filter(nonEmptyClass);
}

function nonEmptyClass(classString) {
  return classString;
}

module.exports = {
  userClasses
};
