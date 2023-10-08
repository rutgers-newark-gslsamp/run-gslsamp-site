export default function Subtitle({name, hasLink="", link=null}) {

    const hr = <hr className='h-[.2rem] max-w-[35vw] bg-[#D9D9D9]'/>;
    return (
        <>
            {hasLink ? (
                <>
                    <h1 className="text-[2rem]  flex font-bold mt-3 hover:underline hover:scale-105 transition delay-75 w-1/4">
                        <a href={link} target='_blank'>
                            Weekly Newsletter
                        </a>
                    </h1>
                    {hr}
                </>
            ) : (
                <>
                    <span className='bg-white text-[2rem] flex pt-10 font-bold'>{name}</span>
                    {hr}
                </>
            )}
        </>
    )
}