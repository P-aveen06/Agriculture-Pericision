import React from "react";
import { Button } from 'primereact/button';
//  import { HashLink } from "react-router-hash-link";
const Navbar=()=>{
    return(
        <div>
            <Button label="Temperature" className="p-button-text" />
            <Button label="Humidity" className="p-button-text" />
            <Button label="Proximity" className="p-button-text" />
        </div>
    )
}
export default Navbar;