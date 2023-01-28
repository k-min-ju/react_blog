import './App.css';
import React, {useState} from 'react';

export default function App(props) {
    let [clothes, setClothes] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학']);
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [modalClothes, setModalClothes] = useState(0);
    let [input, setInput] = useState('');

    function btnChg() {
        let newArray = [...clothes];
        newArray[0] = "여자 코트 추천";
        setClothes(newArray);
    }

    function btnSort() {
        let newArray = [...clothes];
        newArray.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
        setClothes(newArray);
    }

    return (
        <div className="App">

            <div className="black-nav">
                <div>개발 blog</div>
            </div>

            <button onClick={ btnChg }>변경버튼</button>
            <button onClick={ btnSort }>정렬버튼</button>

            {
                clothes.map(function(item, idx) {
                    return (
                        <div className="list" key={idx}>
                            <h3 onClick={ () => {
                                // modal == true ? setModal(false) : setModal(true)
                                setModal(true);
                                setModalClothes(idx);
                            } }>{item}
                                <span onClick={(e) => {
                                    console.log(like)
                                    e.stopPropagation();
                                    let likeCnt = [...like];
                                    likeCnt[idx]++;
                                    setLike(likeCnt);
                                }}>👍</span>
                                {like[idx]}
                            </h3>
                            <p>12월 18일 발행</p>
                            <button onClick={() => {
                                setClothes(clothes.filter((value, index) => index != idx));
                                setLike(like.filter((value, index) => index != idx));
                            }}>삭제</button>
                            <hr/>
                        </div>
                    )
                })
            }
            {
                modal == true ? <Modal color={'gray'} clothes={clothes} modalClothes={modalClothes} setClothes={setClothes}/> : null
            }

            <input onChange={ (e) => {
                setInput(e.target.value);
            }} value={input}/>
            <button onClick={() => {
                let clothesCopy = [input, ...clothes];
                setClothes(clothesCopy);
                let likeCopy = [0, ...like];
                setLike(likeCopy);
                setInput('');
            }}>입력</button>
        </div>

    );

    function Modal(props) {
        return (
            <div className="modal" style={{background: props.color}}>
                <h4>{props.clothes[modalClothes]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={ () => {
                    let clothAry = [...clothes];
                    clothAry[0] = "여자 코트 추천";
                    props.setClothes(clothAry);
                } }>글수정</button>
            </div>
        )
    }
/*
    class Modal2 extends React.Component {
        constructor() {
            super();
        }
        render() {
            return (
              <div>안녕222222</div>
            );
        }
    }
*/

}