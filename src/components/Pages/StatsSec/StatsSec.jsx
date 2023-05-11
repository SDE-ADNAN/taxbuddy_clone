import "./StatsSec.scss"
import people from "../../../medias/people_alt.svg"

const statsData = [
    {
        title: "Users",
        img: people,
        est: "8 Lakh+",
        desc: "Sit back and relax. Leave the stress of tax filing to us. Let our experts help you save maximum time & taxes."
    },
    {
        title: "Users",
        img: people,
        est: "8 Lakh+",
        desc: "Sit back and relax. Leave the stress of tax filing to us. Let our experts help you save maximum time & taxes."
    },
    {
        title: "Users",
        img: people,
        est: "8 Lakh+",
        desc: "Sit back and relax. Leave the stress of tax filing to us. Let our experts help you save maximum time & taxes."
    },
]

const StatItem = (props) => {
    return (
        <div className="stat_item">
            <div className="title">{props.item.title}</div>
            <div className="est"><img src={props.item.img}></img>{props.item.est}</div>
            <div className="desc">{props.item.desc}</div>
        </div>
    )
}

const StatsSec = (props) => {
    return (
        <div className="stats_main">
            <div className="stats_content">
                {statsData.map((item , index)=> <StatItem  item={item} key={index}/>)}
            </div>
        </div>
    )
}

export default StatsSec;