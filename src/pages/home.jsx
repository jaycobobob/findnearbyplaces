import React, { useState, useEffect } from "react";
import components from "../components/_components";

const homePage = (props) => {
    return (
        <div>
            <components.navbar />
            <components.search />
        </div>
    );
};

export default homePage;
