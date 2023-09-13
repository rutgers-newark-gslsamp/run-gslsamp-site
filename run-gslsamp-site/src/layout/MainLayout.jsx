import React from "react";
import Nav from "../components/Nav";

{/**represents the content which is shared on each page
- every page has an identical navbar and footer */}
function MainLayout({children}) {
    return (
        <>
            {/**NAVBAR */}
            <Nav />
            <div>
                {/**content for respective page*/}
                {children}
            </div>

        </>
    )
}

export default MainLayout;