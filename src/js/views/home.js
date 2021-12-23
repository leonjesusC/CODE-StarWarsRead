import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"

import {InfoCardComp} from "../component/infoCard";


export const Home = () => {

	const { store, actions} = useContext(Context);

	return (
		<>
		<div className="mt-5">
			<div className="container-fluid">
				<h2>Characters</h2>
				<div id="prueba" className="row flex-nowrap">
					{store.characters.length > 0 ? store.characters.map((elementoActual, indice) => {
						return <InfoCardComp key={elementoActual.uid} theName={elementoActual.name} theURL={elementoActual.url} theObject={elementoActual}/>
					}):<div>Cargando</div>}
					
				</div>
			</div>
		</div>

		
		<div className="mt-5">
			<div className="container-fluid">
				<h2>Planets</h2>
				<div id="prueba" className="row flex-nowrap">
					{store.planets.length > 0 ? store.planets.map((elementoActual, indice) => {
						return <InfoCardComp key={elementoActual.uid} theName={elementoActual.name} theURL={elementoActual.url} theObject={elementoActual}/>
					}):<div>Cargando</div>}
					
				</div>
			</div>
		</div>

		<div className="mt-5">
			<div className="container-fluid">
				<h2>Starships</h2>
				<div id="prueba" className="row flex-nowrap">
					{store.starships.length > 0 ? store.starships.map((elementoActual, indice) => {
						return <InfoCardComp key={elementoActual.uid} theName={elementoActual.name} theURL={elementoActual.url} theObject={elementoActual}/>
					}):<div>Cargando</div>}
					
				</div>
			</div>
		</div>

		</>
		
	)
	
};
