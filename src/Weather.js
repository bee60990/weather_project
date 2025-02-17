import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="CustomerInput">
        <form action="" method="get" class="form-example">
          <label for="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Please enter a city"
            required
          />
          <div class="form-example">
            <input type="Submit" value="Search" class="btn btn-info" />
          </div>
        </form>
      </div>

      <div className="row">
        <h1>New York</h1>
        <div className="col-6">
          <ul>
            <li>Sunday: 13:24</li>
            <li>Clear Sky</li>
            <li>icon</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Temperature</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
