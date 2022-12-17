import React from "react";
interface MemeProps {
    stateHandler: Function,
    name: string,
    url: string,
    topMemeText:string,
    bottomMemeText:string
}
export default function Meme(props: MemeProps) {
    return (
        <section id="meme-box">
            <div className="container-fluid">
                <div className="row">
                    
                </div>
                <div className="row d-flex justify-content-center">
                    <button className="btn btn-lg w-75 text-light" name="memeButton" onClick={(event) => { props.stateHandler(event) }} >Get A New Meme Image</button>
                </div>
                <div className="row">
                    <img src={props.url} alt="meme"></img>
                </div>
                <div className="row">

                </div>
            </div>
        </section>
    );
}