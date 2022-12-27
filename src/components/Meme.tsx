import React from "react";
interface MemeProps {
    stateHandler: Function,
    name: string,
    url: string,
    topMemeText: string,
    bottomMemeText: string
}
export default function Meme(props: MemeProps) {
    const [size, setSize] = React.useState({
        currentW: 0,
        currentH: 0
    });
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize({ currentW: window.innerWidth, currentH: window.innerHeight });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return (
        <section id="meme-box">
            <div className={((size.currentW < 500)?"mobile ":"laptop ") + "container-fluid"}>
                <div className="row d-flex justify-content-center">
                    <button className="btn btn-lg w-75 text-light"
                        name="memeButton" onClick={(event) => { props.stateHandler(event) }} >Get A New Meme Image</button>
                </div>
                <div className="row position-relative">
                    <h2 className="top-meme-text position-absolute text-info fw-bold fs-1">{props.topMemeText}</h2>
                    <img src={props.url} className={size.currentW < 500?"w-100 ": "w-75 "} alt="meme"></img>
                    <h2 className="bottom-meme-text position-absolute text-secondary text-info fw-bold fs-1">{props.bottomMemeText}</h2>
                </div>
            </div>
        </section>
    );
}