import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import components from "./_components";

const Search = (props) => {
    let [showAdvanced, setShowAdvanced] = useState(false);
    let [searchTerm, setSearchTerm] = useState("");
    let [category, setCategory] = useState("");
    let [sortByRating, setSortByRating] = useState(false);
    let [searchDone, setSearchDone] = useState(true);
    let [searchResults, setSearchResults] = useState([]);

    useEffect(async () => {
        if (!searchDone) {
            setSearchDone(true);

            let res = await api.search(searchTerm, category, sortByRating);
            console.log(res);

            // if we retrieved successfully
            if (res.done) {
                setSearchResults(res.result);
            }
        }
        console.log(searchResults);
    }, [searchDone, searchResults]);

    return (
        <div>
            <div className="container align-items-center text-center p-5">
                <div className="container bg-danger px-5 py-3" style={{ borderRadius: ".25rem" }}>
                    <div>
                        <input
                            className="form-control text-center"
                            type="search"
                            placeholder="Enter the name of a business"
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                        />
                        {showAdvanced && (
                            <>
                                <div className="d-flex py-4">
                                    <label className="h4 text-light pr-2" htmlFor="searchCategory">
                                        Category:
                                    </label>
                                    <input
                                        className="form-control"
                                        type="search"
                                        id="searchCategory"
                                        onChange={(e) => {
                                            setCategory(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <label
                                        className="h4 text-light m-0 p-0 pr-2 "
                                        htmlFor="searchCategory"
                                    >
                                        Sort by Rating:
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="searchCategory"
                                        style={{ width: 30, height: 30 }}
                                        onChange={(e) => {
                                            setSortByRating(e.target.checked);
                                        }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="my-2">
                    <Link
                        className="h5 text-danger"
                        to=""
                        onClick={() => {
                            setShowAdvanced(!showAdvanced);
                        }}
                    >
                        {showAdvanced ? "Hide advanced options" : "Show advanced options"}
                    </Link>
                </div>
                <div>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            setSearchDone(false);
                        }}
                    >
                        <p className="h5 m-0">Search</p>
                    </button>
                </div>
            </div>
            <div>
                {searchDone && (
                    <div>
                        {searchResults.map((place, i) => {
                            return (
                                <components.placecard
                                    props={{
                                        ...place,
                                        src: place.file,
                                        reviewCount: "[?]",
                                    }}
                                    key={i}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
