import React from "react";
import { Station } from "./Station";
import { DataSet } from "../data";
import { formController } from "../controllers";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataSet,
      selected: undefined
    };
  }

  selected = e => {
    const id = e.target.value;
    const stations = this.state.data.stations;

    const selected = formController.selected(id, stations);

    this.setState({ selected: selected });
  };

  onChangeValue = (station, e) => {
    const value = e.target.value;
    const stations = this.state.data.stations;

    const newData = formController.onChangeValue(station, value, stations);

    this.setState({ data: newData });
  };

  updateColor = () => {
    var e = document.getElementById("input-expected");
    if (e) {
      e.style.color = this.getColorForVariance();
    }
  };

  getColorForVariance = () => {
    const value = this.state.selected.value - this.state.selected.expected;
    const color = formController.getColorForVariance(value);
    return color;
  };

  componentDidMount() {
    this.updateColor();
  }

  componentDidUpdate() {
    this.updateColor();
  }

  render() {
    const stations = this.state.data.stations;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <select name="stations" multiple onChange={this.selected}>
                {stations.map((s, i) => (
                  <option key={i} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-4">
              <Station
                onChangeValue={this.onChangeValue}
                station={this.state.selected}
                colorForVariance={this.getColorForVariance}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
