interface EventInfoProps {
    title: string;
    time: string;
    date: string;
    room: string;
    location: string;
}

const EventInfoCard: React.FC<EventInfoProps> = ({ title, time, date, room, location }) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card h-100 border-0 shadow zoom">
                {/**<img class="card-img-top" src="media/photos/research.jpg" width="300px" height="200px" alt="Research Conference Photo">-*/}
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">
                        <span>{time} | {date}</span><br/> 
                        {room}<br/>
                        {location}
                    </p>
                </div>
                {/*<div className="card-footer">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScCKgqYLB5U3uixbzyC1ljbrw7XIyHIrZV8szsDfQTqA6Nbpg/viewform" class="btn btn-primary">RSVP!</a>
                    </div>*/}
            </div>
        </div>      
    )
}

export default EventInfoCard;