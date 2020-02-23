export const formController = {
  selected,
  onChangeValue,
  getColorForVariance
};

function selected(id, stations) {
  for (var idx in stations) {
    var station = stations[idx];
    if (station.id === parseInt(id)) {
      return station;
    }
  }
}

function onChangeValue(station, value, stations) {
  const newStations = Object.keys(stations).map(i =>
    stations[i].id === station.id
      ? Object.assign(stations[i], { value: value })
      : stations[i]
  );
  return { stations: newStations };
}

function getColorForVariance(value) {
  return value >= 0 ? "green" : "red";
}
