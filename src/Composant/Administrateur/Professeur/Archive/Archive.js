import React, { Component } from "react";
import TutorialDataServiceD from "../../../services/professeur.service2";

import Tutorial from "./Archive2";

class ArchiveProfesseur extends Component {
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
    TutorialDataServiceD.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    TutorialDataServiceD.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let tutorials = [];

    items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        tutorials.push({
          key: key,
          title: data.title,
          date: data.date,
          time: data.time,
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
    TutorialDataServiceD.deleteAll()
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
          <h4 class="text-light">Professeurs archivés</h4>
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
                  {tutorial.title}
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
              <p>Cliquez sur un proffeseur pour voir ses détails
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ArchiveProfesseur;
