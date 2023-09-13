import CountUp from "react-countup"

const Stats = () => {
    return (
        <div className="stats">
            <div><span className="c-purple">Clients</span> <CountUp end={100} duration={5} />+ Satisfied</div>
            <div><span className="c-purple">Projects</span> <CountUp end={400} duration={5} />+ Delivered</div> 
            <div><span className="c-purple">Reviews</span> <CountUp end={100} duration={5} />+</div>
        </div>
    )
}

export default Stats