import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const placecard = (props) => {
    props = props.props;
    return (
        <div className="container-sm p-2">
            <Link className="text-decoration-none text-danger" to="#">
                <div
                    className="d-inline-flex bg-light p-4 align-items-center"
                    style={{ borderRadius: ".25rem" }}
                >
                    <img
                        src={props.src}
                        alt={props.name}
                        style={{ height: "100%", width: "40%" }}
                    />
                    <div className="pl-5">
                        <div className="d-flex flex-wrap align-items-center">
                            <p className="h2">{props.name}</p>
                            <div className="px-2 h2">|</div>
                            <p className="h4">{props.category}</p>
                        </div>
                        <div className="pr-2 h3">
                            {props.rating == null ? 0 : props.rating.toFixed(1)} Stars
                        </div>
                        <p className="h3">{props.reviewCount} Reviews</p>
                        <p className="h5 text-wrap">{props.address}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default placecard;
