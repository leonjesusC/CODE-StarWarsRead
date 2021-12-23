import React, { Component, useContext, useEffect, useState  } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext"
import { Informative } from "../views/informative";
import { useHistory } from "react-router-dom";


export const ItemListComp = props => {
    
    const { store, actions} = useContext(Context);

    const history = useHistory()

    const handleButtonPress = (nombre) => {
        const newList = [...store.toReadList];
		
        let result = newList.filter(item => item.name != nombre)

        actions.setFavoriteList(result)
		
	};

    const handleLearnMore = event => {

        const clicked = props.theURL

        actions.setSelectedRead(clicked)

        actions.getSelectedRead(clicked)

        history.push("/informative")
		
	};

    return (
        <>
            <li key = {props.theUrl} className="dropdown-item">
                <button className="d-flex boton" onClick={handleLearnMore}>{props.theName}</button>
                <button
                    className="d-flex justify-content-end deleter basura"
                    onClick={() => {handleButtonPress(props.theName)}}
                    >
                    <i className="fas fa-trash"></i>
                </button>

            </li>

        </>
		
	);
}

ItemListComp.propTypes = {
    theName: PropTypes.string,
    theURL: PropTypes.string,
    theObject: PropTypes.object,
    theIndex: PropTypes.number
};