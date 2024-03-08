import React, {useState} from 'react'

import CircleIcon from './Assets/circle.png';
import CrossIcon from './Assets/cross.png';

import './styles/tictactoe.css';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);


    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 == 0) {
            e.target.innerHTML = `<img src = '${CrossIcon}'>`;
            data[num] = 'x';
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src = '${CircleIcon}'>`;
            data[num] = 'o';
            setCount(++count);
        }
        checkWin();
    };

    const checkWin =() => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
            won(data);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
            won(data);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
            won(data);
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
            won(data); 
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
            won(data);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
            won(data);
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
            won(data);
        } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
            won(data);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
            won(data);
        }
    }

    const won = (winner) => {
        setLock(true);
    }

    return (
        <div class="container">
            <h1 class="title">
                Tic Tac Toe Game in React
            </h1>
            <div class="board">
                <div class="row1">
                    <div class="boxes" onClick={(e) => toggle(e, 0)}></div>
                    <div class="boxes"  onClick={(e) => toggle(e, 1)}></div>
                    <div class="boxes"  onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div class="row2">
                    <div class="boxes"  onClick={(e) => toggle(e, 3)}></div>
                    <div class="boxes"  onClick={(e) => toggle(e, 4)}></div>
                    <div class="boxes" onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div class="row3">
                    <div class="boxes" onClick={(e) => toggle(e, 6)}></div>
                    <div class="boxes" onClick={(e) => toggle(e, 7)}></div>
                    <div class="boxes" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button class="reset">Reset</button>
        </div>
    );
}

export default TicTacToe;