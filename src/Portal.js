import {Router, Route, Routes, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React, { useEffect } from "react";
import { girisPortal } from "./Functions";

import Sidebar from "./components/Sidebar";

function Portal() {


    return (

    <> 
    <div class='portal'>
                <Sidebar/>
                <div class='portal_content'>
                <h1>Welcome</h1>
                <h1>to the</h1>
                <h1>Erasmus Portal</h1>
                </div>
         


<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    </> 

    );
}

export default Portal;