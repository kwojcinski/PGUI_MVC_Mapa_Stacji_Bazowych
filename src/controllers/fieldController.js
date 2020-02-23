export const fieldController = {
  isReadonly,
  getColorForVariance
};

function isReadonly(props) {
  var readOnly = "editable" in props ? false : true;
  return readOnly;
}

function getColorForVariance(props) {
  return props.colorForVariance ? props.colorForVariance() : "black";
}
