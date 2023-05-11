import React from "react";
import "./Money_Saved.scss";
import rupee from "../../../medias/rupee2.svg";
import P1 from "../../../medias/person1.svg";
import P2 from "../../../medias/person2.svg";
import P3 from "../../../medias/person3.svg";
import Button from "../Button/Button";

const data = [
    { title: "Complete Tax Lifecycle Support", img: P1 },
    { title: "1 - 1 Connection through Live Chat", img: P2 },
    { title: "Maximum Tax Saving Guarantee", img: P3 },
]

const DataItem = (props)=>{
    return(
        <div className="item">
            <img src={props.item.img}></img>
            <div className="text_content">
                <div className="head">{props.item.title}</div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                </div>
            </div>
        </div>
    )
}
const Money_Saved = (props) => {
    return (
        <div className="ms_container">
            <div className="bg_container">
                <div className="left">
                    <div className="image">
                        <img src={rupee}></img>
                    </div>
                </div>
                <div className="right" />
            </div>
            <div className="ms_content_container">
                <div className="ms_content">
                    <div className="left">
                        <div className="container">
                            <div className="title">Crores saved in taxes.</div>
                            <div className="desc">
                                We are India's most trusted tax filing platform. Our team goes
                                through in-depth training to help you plan and minimise your tax
                                liability.
                            </div>
                            <Button className="button" name={"Start Filing"} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="container">
                            {data.map((item,index)=>
                                <DataItem item={item} key={index}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Money_Saved;
