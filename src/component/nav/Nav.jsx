import React, { useState } from 'react';
import './nav.css';
import age12 from '../images/12.png';
import age15 from '../images/15.png';
import age19 from '../images/19.png';
import age0 from '../images/all.png';
import anime from 'animejs';


export default function Nav() {

    

    const arr = [
        {id: 1, age: '12', img: age12, poster: '/images/닥터스트레인지.jpg', title: '닥터스트레인지-대혼돈의멀티버스'},
        {id: 2, age: '전체', img: age0, poster: '/images/겨울왕국1.jpg', title: '겨울왕국'},
        {id: 3, age: '12', img: age12, poster: '/images/공기살인.jpg', title: '공기살인'},
        {id: 4, age: '15', img: age15, poster: '/images/귀칼.jpg', title: '극장판 귀멸의 칼날-무한열차편'},
        {id: 5, age: '청불', img: age19, poster: '/images/내부자들.jpg', title: '내부자들'},
        {id: 6, age: '15', img: age15, poster: '/images/모비우스.jpg', title: '모비우스'},
        {id: 7, age: '전체', img: age0, poster: '/images/수퍼 소닉2.jpg', title: '수퍼소닉2'},
        {id: 8, age: '12', img: age12, poster: '/images/신과함께.jpg', title: '신과함께 죄와벌'},
        {id: 9, age: '12', img: age12, poster: '/images/신비한 동물들과 덤블도어의 비밀.jpg', title: '신비한 동물사전'},
        {id: 10, age: '12', img: age12, poster: '/images/심슨 가족 더 무비.jpg', title: '심슨가족더무비'},
        {id: 11, age: '청불', img: age19, poster: '/images/아수라.jpg', title: '아수라'},
        {id: 12, age: '15', img: age15, poster: '/images/앵커.jpg', title: '앵커'},
        {id: 13, age: '15', img: age15, poster: '/images/주술회전.jpg', title: '극장판 주술회전'},
        {id: 14, age: '전체', img: age0, poster: '/images/짱구는 못말려 낙서왕국.jpg', title: '짱구는 못말려 : 낙서왕국'},
        {id: 15, age: '청불', img: age19, poster: '/images/타짜.jpg', title: '타짜'},
        {id: 16, age: '전체', img: age0, poster: '/images/토이스토리.jpg', title: '토이스토리'},
        {id: 17, age: '전체', img: age0, poster: '/images/해리포터 불사조 기사단.jpg', title: '해리포터와 불사조 기시단'},
        {id: 18, age: '전체', img: age0, poster: '/images/해리포터 죽음의 성물.jpg', title: '해리포터와 죽음의 성물2'},
        {id: 19, age: '청불', img: age19, poster: '/images/신세계.jpg', title: '신세계'},
        {id: 20, age: '15', img: age15, poster: '/images/뺑반.jpg', title: '뺑반'}
    ];

    const arr2 = [
        {id: 1, title: '강서구'},
        {id: 2, title: '송파구'},
        {id: 3, title: '강남구'},
        {id: 4, title: '동작구'}
    ];
    const arr3 = [
        {id: 1, title: '풍무'},
        {id: 2, title: '사우'},
        {id: 3, title: '걸포'}
    ];

const List = (props) =>{
    const arr2 = [];
    for(let i of props.arr){
    arr2.push(<div className='bar' id={i.id} style={{backgroundColor: color}} onClick={changeColor} key={i.id}>
        <div className='age'><img src={i.img}></img></div>
        <div className='title'>{i.title}</div>
    </div>);
    }

return(
    <>
    {arr2}
    </>
)
}

const List2 = (props) => {
    const arr2 = [];
    for(let i of props.arr){
        arr2.push( <div className='bar2' key={i.id}>
        <div className='bar2-left'>
            <div><img src={i.poster}></img></div>
        </div>
        <div className='bar2-right'>
            <div className='age2'><img src={i.img}></img></div>
            <div className='title2'>{i.title}</div>
        </div>
    </div>)
    }
    return (
        <>{arr2}</>
    )
}
const List3 = (props) => {
    const arr = [];
    for(let i of props.arr2){
        arr.push(<div key={i.id}>{i.title}</div>)
    }
    return (
        <>{arr}</>
    )
}

const List4 = (props) => {
    const arr = [];
    for(let i of props.arr3){
        arr.push(<div key={i.id}>{i.title}</div>)
    }
    return (
        <>{arr}</>
    )
}

let [mode, setMode] = useState('bar');
let [location, setLocation] = useState('seoul');
let [color, setColor] = useState('white');

const bar = () => {
    setMode('bar');
}

const grid = () => {
    setMode('grid');
}
const seoul = () => {
    setLocation('seoul');
    
}
const gimpo = () => {
    setLocation('gimpo');
}
const changeColor = (e) => {
    console.log('입장');
    console.log(e);
    const a = e.target.id;
    console.log(a);
}

let content = null;
let content2 = null;

if(mode === 'bar'){
    content = <List arr={arr}></List>
}else if(mode === 'grid') content = <List2 arr={arr}></List2>

if(location === 'seoul'){
    content2 = <List3 arr2={arr2}></List3>
}else if(location === 'gimpo') content2 = <List4 arr3={arr3}></List4>



anime({
    targets: '.kwon',

    translateX: {
      value: 250,
      duration: 800
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    scale: {
      value: 2,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay: 250 // All properties except 'scale' inherit 250ms delay
  });


  return (
    <div className='k-container-nav'>
        <div className='k-box1'>
            <div className='k-box1-top'>영화</div>
            <div className='k-box1-middle'>
                <select className="scrollbox">
                    <option value="" selected>인기순</option>
                    <option value="/">예매순</option>
                    <option value="/">평점순</option>
                </select>
                <div className='iconbox'>
                   
                <div><i className="fa-solid fa-bars" onClick={bar}></i></div>
                <div><i className="fa-solid fa-border-all" onClick={grid}></i></div>
            
                </div>
            </div>
            <div className='k-box1-bottom'>
                {content}

            </div>
        </div>
        <div className='k-box2'>
            <div className='k-box2-top'>영화관</div>
            <div className='k-box2-middle'>
                <div className='k-box2-middle-leftbox'>전체</div>
                <div className='k-box2-middle-rightbox'>Special</div>
            </div>
            <div className='k-box2-bottom'>
                <div className='k-box2-bottom-leftbox'>
                    <div className='seoul' onClick={seoul}>서울</div>
                    <div onClick={gimpo}>김포</div>
                </div>
                <div className='k-box2-bottom-rightbox'>
                    {content2}
                </div>
                
            </div>
            {/* <div className='kwon'></div> */}
    
        </div>
    </div>
  )
}
