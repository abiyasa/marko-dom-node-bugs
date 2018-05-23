function styleClasses(styles = []) {
  return styles.map(style => style.toLowerCase());
}

function hasStyles({ styles = [] }) {
  return styles.length > 0;
}

function singleSpanStyles(textSpans = []) {
  return (textSpans[0] || {}).styles || [];
}

function trackingSid({ trackingList = [] }) {
  const eventProperty = ((trackingList[0] || {}).eventProperty || {});
  return eventProperty['sid'];
}

function needsWrapper(textSpan, model) {
  const hasAction = Boolean(model.action);
  const hasSingleSpan = (model.textSpans || []).length === 1;

  return (!hasAction || !hasSingleSpan) && hasStyles(textSpan);
}

module.exports = {
  styleClasses,
  hasStyles,
  singleSpanStyles,
  trackingSid,
  needsWrapper
};
