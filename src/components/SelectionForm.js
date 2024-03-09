import React from "react";
import SelectionButton from "./SelectionButton";

const SelectionForm = () => {
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get the selected option
        const selectedOption = event.target.options.value;

        // Redirect to the selected option's page
        if (selectedOption === "add") {
        window.location.href = "/addEvent"; // Navigate to /option1 route
        } else if (selectedOption === "edit") {
        window.location.href = "/editEvent"; // Navigate to /option2 route
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} id="myForm">
                <select id="options" name="options">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <br />
                {/* Text on the right */}
                <span>and then click submit.</span>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default SelectionForm;