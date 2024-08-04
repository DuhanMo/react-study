import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Nav } from "react-bootstrap";

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
    let [tab, setTab] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 2000);
        // cleanUp function start
        return () => {
            clearTimeout(timer);
        }
        // cleanUp function end
    }, []); // [] 내부에 담긴 변수나 state가 변할때만 useEffect 실행
    useEffect(() => {
        if (isNaN(input) == true) {
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

            <input onChange={(e) => { setInput(e.target.value) }}></input>
            {
                onlyNumberAlert == true ? <div>숫자만 입력하세요</div> : null
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
            <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
                <Nav.Link eventKey="link0" onClick={() => setTab(0)}>버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link1" onClick={() => setTab(1)}>버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link2" onClick={() => setTab(2)}>버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
            <TabContent tab={tab}/>
        </div>
    );
}
export default Detail;

// function TabContent(props) {
//     return [<div>내용0</div> ,<div>내용1</div> ,<div>내용2</div>][props.tab]
// }

function TabContent({tab}) {
    return [<div>내용0</div> ,<div>내용1</div> ,<div>내용2</div>][tab]
}