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
                            <SelectionButton label={"Student Resources"} page="/content-management/student-resources"/>
                        </div>

                        <div>
                            <SelectionButton label={"Events & Opportunities"} page="/content-management/events-and-opportunities"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
        
    );
}