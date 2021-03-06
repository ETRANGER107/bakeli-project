import React, { Component } from "react";
import TutorialDataService from "../../../services/professeur.service";
import TutorialDataServiceD from "../../../services/professeur.service2";

export default class DetailProfesseur extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);


    this.state = {
      currentTutorial: {
        key: null,
        title: "",
        date: "",
        time: "",
        published: false,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tutorial } = nextProps;
    if (prevState.currentTutorial.key !== tutorial.key) {
      return {
        currentTutorial: tutorial,
        message: ""
      };
    }

    return prevState.currentTutorial;
  }

  componentDidMount() {
    this.setState({
      currentTutorial: this.props.tutorial,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title,
        },
      };
    });
  }

  onChangeDate(e) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          date: date,
        },
      };
    });
  }

  onChangeTime(e) {
    const time = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          time: time,
        },
      };
    });
  }

  updatePublished() {
    let data = {
      title: this.state.title,
      date: this.state.date,
      time: this.state.time,
      published: false
    };
    
    var notif = ("Vous avez Archiver");
    TutorialDataServiceD.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        alert(notif);
        this.setState({
          submitted: true,
        });
      TutorialDataService.delete(this.state.currentTutorial.key)
        .then(() => {
        this.props.refreshList();
      })
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTutorial() {
    const data = {
      title: this.state.currentTutorial.title,
      date: this.state.currentTutorial.date,
      time: this.state.currentTutorial.time,
    };

    TutorialDataService.update(this.state.currentTutorial.key, data)
      .then(() => {
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    TutorialDataService.delete(this.state.currentTutorial.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div className="card">
        <div class="card-header bg-dark">
          <h4 class="text-light">D??tails du professeur</h4>
        </div>
        {currentTutorial ? (
          <div className="card-body">
          <div>
            
            <form>
              
              <div className="form-group">
                
                <label htmlFor="title">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">Matiere</label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                  value={currentTutorial.date}
                  onChange={this.onChangeDate}
                />
              </div>

              <div className="form-group">
              <label htmlFor="time">Ecole</label>
              <input
                type="text"
                className="form-control"
                id="time"
                value={currentTutorial.time}
                onChange={this.onChangeTime}
              />
            </div>

              
            </form>

              <button
                className="btn btn-sm btn-primary mr-2 text-dark"
                onClick={() => this.updatePublished(true)}
              >
                Archiver
              </button>
            

            <button
              className="btn btn-sm btn-danger mr-2 text-dark"
              onClick={this.deleteTutorial}
            >
              Effacer
            </button>

            <button
              type="submit"
              className="btn btn-sm btn-success text-dark"
              onClick={this.updateTutorial}
            >
              Mettre ?? jour
            </button>
            <p>{this.state.message}</p>
          </div>
          </div>
        ) : (
          <div>
            <br />
            <p class="text-light">Click on a Tutorial</p>
          </div>
        )}
      </div>
    );
  }
}
