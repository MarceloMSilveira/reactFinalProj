import React from "react";

const date = new Date();
const actualYear = date.getFullYear();

function Footer() {
    return(
        <p>Copyright© MarceluS 1lveira {actualYear}</p>
    )
}

export default Footer;