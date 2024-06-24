import React, { useMemo, useState } from "react";
import Model from "../Model/Model";
import ListeAjout from "./ListeAjout";
import Pieces from "./Pieces";

const CarteCreerPiece = () => {
    const model = useMemo(() => new Model(), []);
    const [matiere, setMatiere] = useState("");

    const creerPiece = () => {

    }

    return (
        <>
            <div className="card">
                <div className="container p-2">
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Nom</span>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                    Livrables
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                    Intermédiaire
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                    Achat Extérieur
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Prix</span>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Matiere</span>
                                <input type="text" className="form-control" onChange={(event) => {
                                    setMatiere(event.target.value);
                                }} />
                                <select className="form-select form-select input-group"
                                        aria-label="Large select example" disabled={matiere !== ""}>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Responsable de la game</span>
                                <input type="text" className="form-control" onChange={(event) => {
                                    setMatiere(event.target.value);
                                }} />
                                <select className="form-select form-select input-group"
                                        aria-label="Large select example" disabled={matiere !== ""}>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            Sous Piece
                        </div>
                        <div className="col text-center">
                            Opération
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <ListeAjout
                                idModal={2}
                                titre={"Sous piece"}
                                typeObjet={Pieces}
                            />
                        </div>
                        <div className={"col"}>

                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-9"}>

                        </div>
                        <div className={"col"}>
                            <button className={"btn btn-primary"} onClick={creerPiece}>
                                Créer piece ( pour de vrai )
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarteCreerPiece;
