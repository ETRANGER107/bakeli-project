import React, { Component } from "react";
import TutorialDataServiceB from "../../../services/service1";

import Tutorial from "./DetailArchive";

export default class ArchiveApp extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    TutorialDataServiceB.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    TutorialDataServiceB.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      tutorials.push({
        key: key,
        noms: data.noms,
        prenoms: data.prenoms,
        telephone: data.telephone,
        gmail: data.gmail,
        passe: data.passe,
        published: data.published,
      });
    });

    this.setState({
      tutorials: tutorials,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    TutorialDataServiceB.deleteAll()
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
        <div className="card-header bg-dark">
          <h4 className="text-light">Apprenants archivés</h4>
        </div>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.noms}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger text-dark"
            onClick={this.removeAllTutorials}
          >
            Enlever tout
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <Tutorial
              tutorial={currentTutorial}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Cliquez sur un apprenant pour voir ses détails</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}