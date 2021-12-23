import { Link } from "react-router-dom";
import React, { Component, useContext, useEffect, useState  } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext"
import {ItemListComp} from "./itemListComp";
import "../../styles/navbarList.css";

export const Navbar = () => {
	const { store, actions} = useContext(Context);

	const handleBackHome = () => {
		actions.resetSelected()
	}


	return (
		<nav className="navbar navbar-light bg-light mb-3 sticky-top">
			<Link to="/">
				<img src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png" width="80px" height="50px" onClick={handleBackHome}></img>
			</Link>
			<div className="ml-auto">
				<div className="btn-group" role="group">
					<button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					To Read Later <span className="badge bg-secondary">{store.toReadList.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
					{store.toReadList.map((elementoActual, indice) => {
							return <ItemListComp key={elementoActual.uid} theName={elementoActual.name} theURL={elementoActual.url} theIndex={indice}/>
						}
						)
						}

					</ul>
				</div>
			</div>
		</nav>
	);
};


