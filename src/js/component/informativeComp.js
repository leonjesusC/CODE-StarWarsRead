import React, { Component, useContext, useEffect, useState  } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext"
import { Informative } from "../views/informative";


export const InformativeComp = props => {
    
    const { store, actions} = useContext(Context);

    

    return (
        <div className ="col-lg-1 ">
            <p className="factText d-flex justify-content-center text-wrap"> <b>{props.factName}</b></p>
            <p className="factText d-flex justify-content-center text-wrap"> {props.factContent}</p>
        </div>
		
	);
}

InformativeComp.propTypes = {
    factName: PropTypes.string,
    factContent: PropTypes.string
};