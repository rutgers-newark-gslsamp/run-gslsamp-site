'use client'

import Header from "../../../src/components/Header";
import "../../styles/cms-globals.css";


export default function StudentResources() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the selected option
    const selectedOption = event.target.options.value;

    // Redirect to the selected option's page
    if (selectedOption === "add") {
    window.location.href = "/content-management/student-resources/add-resource"; // Navigate to /option1 route
    } else if (selectedOption === "edit") {
    window.location.href = "/content-management/student-resources/edit-resource"; // Navigate to /option2 route
    }
  };
  return (
    <>
      <Header pageTitle="Modify: Student Resources" back={true} />
      <main>
        <div className="container-center">
          <div className="container">
            <div className="center-divs">
              <form onSubmit={handleSubmit} id="myForm">
                <div className="top-div">
                  <span>I want to </span>
                  <select className="dropdown-mini" id="options" name="options">
                      <option value="add">add</option>
                      <option value="edit">edit</option>
                  </select>
                  <span> a resource.</span>
                </div>

                <div>
                  <input type="submit" value="Proceed" className="mod-stu-submit"/>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
