import React from "react";

const date = new Date(1974,1,5);
const actualYear = date.getFullYear();

function Footer() {
    return(
        <p>Copyright© MarceluS 1lveira {actualYear}</p>
    )
}

export default Footer;