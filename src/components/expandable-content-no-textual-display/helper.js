function toggleClass(element, classname) {
  if (element.className.indexOf(classname) !== -1) {
    element.className = element.className.replace(classname, '');
  } else {
    element.className += ' ' + classname;
  }
}

function toggleBooleanAttribute(element, attributeName) {
  const toggleState = element.getAttribute(attributeName);
  if (toggleState === 'true') {
    element.setAttribute(attributeName, 'false');
  } else {
    element.setAttribute(attributeName, 'true');
  }
}

module.exports = {
  toggleClass,
  toggleBooleanAttribute
};
