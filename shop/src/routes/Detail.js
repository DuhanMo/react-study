import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBox = styled.div`
    padding: 20px;
    background-color: yellow;
`

function Detail(props) {
    let { id } = useParams();
    let shoes = props.shoesList.find((shoes) => shoes.id == id)
    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState("");
    let [onlyNumberAlert, setOnlyNumberAlert] = useState(false);
    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 2000);
        // cleanUp function start
        return () => {
            clearTimeout(timer);
        }
        // cleanUp function end
    }, []); // [] 내부에 담긴 변수나 state가 변할때만 useEffect 실행
    useEffect(() => {
        if(isNaN(input) == true) {
            setOnlyNumberAlert(true);
        } else {
            setOnlyNumberAlert(false);
        }
    }, [input]);
    return (
        <div className="container">
            {
                alert == true ? <div className="alert alert-warning">
                    2초 이내 구매시 공짜
                </div> : null
            }

            <input onChange={(e)=>{setInput(e.target.value)}}></input>
            { 
            onlyNumberAlert==true ? <div>숫자만 입력하세요</div> : null 
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${shoes.id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>{shoes.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}
export default Detail;