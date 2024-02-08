export default function Title({name}) {
    return (
        <>
            {/*<h1 className="text-[1.5rem] sm:text-[3.2em] m-[3rem] flex font-bold my-7 drop-shadow-xl">{name}</h1>
            <hr />*/}
            <div className="section-header">
                <h1 className="text-4xl uppercase font-extrabold">{name}</h1>
                <hr/>
            </div>
        </>
    )
}