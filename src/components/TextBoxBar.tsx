import React from "react"
interface TextBoxBarProps {
    stateHandler:Function;
    topInputText:string;
    bottomInputText:string;
}
export default function TextBoxBar(props: TextBoxBarProps) {

    return (
        <section id="text-box-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                    <input type="text" className="form-control" placeholder="Top Meme Text" name="topInputText" onChange={(event) => {props.stateHandler(event)}} value={props.topInputText} ></input>
                    </div>
                    <div className="col-sm-6">
                    <input type="text" className="form-control" placeholder="Bottom Meme Text" name="bottomInputText" onChange={(event) => {props.stateHandler(event)}}  value={props.bottomInputText} ></input>
                    </div>
                </div>
            </div>
        </section>
    );
}