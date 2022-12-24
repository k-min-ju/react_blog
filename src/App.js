import './App.css';
import {useState} from 'react';

export default function App() {
    let [posts, postsChg] = useState(['코트', '바지', '티셔츠']);
    let [clothes, clothesChg] = useState(['남자 코트 추천', '남자 바지 추천', '남자 티셔츠 추천']);
    let [like, setLike] = useState(0);
    let [like2, setLike2] = useState(0);
    let [like3, setLike3] = useState(0);
    let [modal, setModal] = useState(false);

    [1,2,3].map(function(item) {

    });

    function btnChg() {
        let newArray = [...clothes];
        newArray[0] = "여자 코트 추천";
        clothesChg(newArray);
    }

    function btnSort() {
        let newArray = [...clothes];
        newArray.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
        clothesChg(newArray);
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
                            <h3>{item} <span onClick={ () => {setLike(like+=1)} }>👍</span> {like} </h3>
                            <p onClick={ () => {modal == true ? setModal(false) : setModal(true)} }>12월 18일 발행</p>
                            <hr/>
                        </div>
                    )
                })
            }
            {
                modal == true ? <Modal/> : null
            }

        </div>
    );

    function Modal() {
        return (
            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        )
    }
}