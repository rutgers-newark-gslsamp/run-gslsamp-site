'use client'
import Header from "../../../src/components/Header";
import "../../styles/cms-globals.css";

export default function Change_Hero() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', event.target.image.files[0]);

    const response = await fetch('/api/upload-hero', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data); // Log the response from the server

    // Display an alert based on the response from the server
    if (response.ok) {
      alert('Image successfully uploaded!');
    } else {
      alert('Failed to upload image. Please try again.');
    }
    
    // Clear the form fields after successful submission
    event.target.reset();
  };

  return (
    <>
      <Header pageTitle="Modify: Change Hero Image" back={true} />

      <div className="container-center">
          <form onSubmit={handleSubmit} className="container-form">
          <div className="items">
            <input type="file" name="image" accept="image/*" />

            <div id="stu-btn-container" className="item">
              <button id="stu-btn" className="btn" type="submit">Upload Image</button>
            </div>
          </div>
          </form>
      </div>
      
    </>
  );
}
