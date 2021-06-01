import React from 'react';
import profile from '../img/profile.png';
import qd from '../img/qd.jpg';
import uxx from '../img/uxx.jpeg';
import market from '../img/market.png';
import devweb from '../img/devweb.png';
import "./index.css"

const Card = () => {
    return(
        <div className="cours mb-2">
                <div className="row">
                    <div className="col">
                        <p>Cours à venir</p>
                        <div className="card text-black bg-warning mb-2 d-flex flex-row align-items-center cardA">
                            <div className="col-md-2">
                                <img className="card-img-top rounded-circle img-card" src={qd} alt="Card image cap cinema" />
                            </div>
                            <div className="card-body col-md-10 d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title my-0 text-primary">Cinema 4d</h5>
                                    <p className="card-text my-0">Friday,june 08, 2020</p>
                                    <p className="card-text my-0">32 lesson</p>
                                </div>
                                <div>
                                    <a href="#" class="card-link">details</a>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card text-white bg-secondary mb-2 d-flex flex-row align-items-center cardA">
                            <div className="col-md-2">
                                <img className="card-img-top rounded-circle img-card" src={devweb} alt="Card image cap profile" />
                            </div>
                            <div className="card-body col-md-10 d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title my-0">Web developer</h5>
                                    <p className="card-text my-0">Monday,march 24, 2020</p>
                                    <p className="card-text my-0">10 lesson</p>
                                </div>
                                <div>
                                    <p>details</p>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="card text-white bg-info mb-2 d-flex flex-row align-items-center cardA">
                            <div className="col-md-2">
                                <img className="card-img-top rounded-circle img-card" src={market} alt="Card image cap marketing" />
                            </div>
                            <div className="card-body col-md-10 d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title my-0">Marketing digital</h5>
                                    <p className="card-text my-0">Tuesday,december 2, 2019</p>
                                    <p className="card-text my-0">40 lesson</p>
                                </div>
                                <div>
                                    <p>details</p>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card text-black bg-success mb-2 d-flex flex-row align-items-center cardA">
                            <div className="col-md-2">
                                <img className="card-img-top rounded-circle img-card" src={uxx} alt="Card image cap ux" />
                            </div>
                            <div className="card-body col-md-10 d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title text-light my-0">Ux design</h5>
                                    <p className="card-text my-0">Monday,march 24, 2020</p>
                                    <p className="card-text my-0">10 lesson</p>
                                </div>
                                <div>
                                    <p>details</p>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Card;