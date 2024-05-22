import SelectionButton from "../../../src/components/SelectionButton";
import Header from "../../../src/components/Header";
import "../../styles/cms-globals.css";


export default function Selection(){
    return(
        <>
            <Header pageTitle="Select a Page to Modify" back={true} />
            <main className="container-center">
                <div className="container">
                    <div className="center-divs">
                        <div className="top-div">
                            <SelectionButton label={"Events & Opportunities"} page="/content-management/events-and-opportunities"/>
                        </div>

                        <div className="top-div">
                            <SelectionButton label={"Change Application Link"} page="/content-management/change-link"/>
                        </div>

                        <div>
                            <SelectionButton label={"Change Hero Image"} page="/content-management/change-hero"/>
                        </div>

                        <div className="pt-[1.1rem] break-words">
                            <SelectionButton label={"Change About Us Carousel"} page="/content-management/change-about-carousel"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
        
    );
}