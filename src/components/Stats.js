import CountUp from "react-countup"

const Stats = () => {
    return (
        <div className="stats">
            <div><div className="c-purple title">Clients</div> <CountUp end={100} duration={5} suffix="+" />Satisfied</div>
            <div><div className="c-purple title">Projects</div> <CountUp end={400} duration={5} suffix="+" />Delivered</div> 
            <div><div className="c-purple title">Reviews</div> <CountUp end={100} duration={5} suffix="+" /></div>
        </div>
    )
}

export default Stats