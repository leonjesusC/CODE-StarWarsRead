import React, { Component, useContext, useEffect, useState  } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext"
import { useHistory } from "react-router-dom";

export const InfoCardComp = props => {
    
    const { store, actions} = useContext(Context);

    const history = useHistory()

	const handleButtonPress = event => {

    
        let newFavorites = [... store.toReadList];

        if (newFavorites.includes(props.theObject)) {
            
            let result = newFavorites.filter(item => item != props.theObject)

            actions.setFavoriteList(result)

        }

        else {

            newFavorites.push(props.theObject);

            actions.setFavoriteList(newFavorites)
        }


	};

    const handleLearnMore = event => {

        const clicked = props.theURL

        actions.setSelectedRead(clicked)

        actions.getSelectedRead(clicked)

        history.push("/informative")
		
	};





    return (
        <div className="col-3">
            <div className="card">
                <img src="http://fakeimg.pl/200x400" className="card-img-top cardImage" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">
                        {" "}
                        <b>{props.theName}</b>
                    </h5>
                    <p className="card-text"></p>
                    <p className="card-text"></p>
                    <p className="card-text"></p>
                    <div className="row d-flex">
                        <div className="col-10">
                            <button className="btn btn-primary" onClick={handleLearnMore}> 
                                Find Out More!
                            </button>
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                            <button type="button" className="btn btn-warning" data-bs-toggle="button" autoComplete="off" onClick={handleButtonPress}><i className="fas fa-heart"></i></button>
                        </div>				
                    </div>
                </div>
            </div>
        </div>
    )
}

InfoCardComp.propTypes = {
    theName: PropTypes.string,
    theURL: PropTypes.string,
    theObject: PropTypes.object
};
