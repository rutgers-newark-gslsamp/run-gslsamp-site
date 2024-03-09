import React from "react";

const SelectionButton = ({label, page="/#"}) => {
    return (
        <a href={page}><button className="selection-button-cms" type="submit">{label}</button></a>
    );
}

export default SelectionButton;