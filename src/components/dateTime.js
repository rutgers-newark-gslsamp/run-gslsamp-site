export const dateConvert = (inDate) => {

    const date = new Date(inDate);

    const months = ['January', 'February', 'March',
                    'April', 'May', 'June', 'July', 'August',
                     'September', 'October', 'November', 'December']

    return (months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear())

}

export const timeConvert = (inTime, inDate) => {
    //convert to "hh:mm (am/pm)"
    const date = new Date(inDate+" "+inTime)
    const hours = date.getHours()
    if (hours > 12){
        if (date.getMinutes() == "0"){
            const time = hours - 12 +"PM"
            return(time)
        }else{
            const time = hours - 12 +":"+date.getMinutes()+"PM"
            return(time)
        }
    }
    if (hours < 12) {
        if (date.getMinutes() == "0"){
            const time = hours +"AM"
            return(time)
        }else{
            const time = hours +":"+date.getMinutes()+"AM"
            return(time)
        }

    }
    
}
