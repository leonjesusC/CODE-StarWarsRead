import React, { useContext, useEffect, useState } from "react";
import "../../styles/informative.css";
import { Context } from "../store/appContext"

import {InformativeComp} from "../component/informativeComp";


export const Informative = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		renderInfo();
	}, [store.selectedReadObj]);

	const renderInfo = () => {
		let factList = []
		for(const propurty in store.selectedReadObj) {
			
			factList.push(<InformativeComp key={propurty} factName={propurty} factContent={store.selectedReadObj[propurty]}/>)
		}
		return factList
	}

	let propiedades = renderInfo()

	return (
		<div className="container-fluid">
			<div className="row gap-4">
					<div className="col-lg-6">
						<img id = "theImage" src="https://media.gettyimages.com/photos/danny-devito-attends-the-dumbo-european-premiere-at-the-curzon-on-picture-id1137400905?k=20&m=1137400905&s=612x612&w=0&h=5KtwKAQkXOTkIC8i0HB8aJoY1jJlPZzYBLfVJ8-z7HM="></img>

					</div>
					<div className="col-lg-5 justify-content-center">
						<h1 className="d-flex justify-content-center">{store.selectedReadObj.name}</h1>
						<p className="text-justify-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
					<hr className="bg-danger border-2 border-top border-danger">
					</hr>
			</div>
			<div className="row gap-2 d-flex justify-content-evenly">
				{propiedades}
			</div>
		</div>
		
	);
};
