import React from "react";
import { Field } from "./Field";
import { stationController } from "../controllers";

export function Station(props) {
  const station = props.station;
  if (station === undefined) {
    return <div>Wybierz stację.</div>;
  }

  const variance = stationController.getVariance(
    station.value,
    station.expected
  );
  return (
    <div>
      <form>
        <ul>
          <Field label="Identyfikator" value={station.name} />
          <Field label="Data" value={station.date} />
          <Field label="Oczekiwana" value={station.expected} />
          <Field
            label="Wartość"
            onChangeValue={e => {
              props.onChangeValue(station, e);
            }}
            value={station.value}
            editable
          />
          <Field
            id="input-expected"
            label="Różnica"
            value={variance}
            colorForVariance={props.colorForVariance}
          />
        </ul>
      </form>
    </div>
  );
}
