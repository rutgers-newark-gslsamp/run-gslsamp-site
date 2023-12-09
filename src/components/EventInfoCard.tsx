interface EventInfoProps {
    title: string;
    time: string;
    date: string;
    room: string;
    location: string;
}

const EventInfoCard: React.FC<EventInfoProps> = ({ title, time, date, room, location }) => {
    return (
        <div className="flex items-center m-2 md:m-4 p-2 bg-neutral-300 h-100 border-0 shadow rounded-lg">
            {/**<img class="card-img-top" src="media/photos/research.jpg" width="300px" height="200px" alt="Research Conference Photo">-*/}
            <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p>
                    <span className="font-medium">{time} | {date}</span><br/> 
                    {room}<br/>
                    {location}
                </p>
            </div>
            {/*<div className="card-footer">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCKgqYLB5U3uixbzyC1ljbrw7XIyHIrZV8szsDfQTqA6Nbpg/viewform" class="btn btn-primary">RSVP!</a>
                </div>*/}
        </div>
    )
}

export default EventInfoCard;