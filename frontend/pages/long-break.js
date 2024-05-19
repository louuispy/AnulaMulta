import { useState, useEffect } from "react";
import Link from "next/link";
import login from "./login"
import styles from "../app/styles/long-break.css"

const linkStyle = {
    marginRight: 15
}

const Menu = () => {
    const [mode, setMode] = useState('work'); 
    const [time, setTime] = useState(15 * 60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        } else if (isActive && time === 0) {
            if (mode === 'work') {
                setMode('rest');
                setTime(15 * 60); 
            } else {
                setMode('work');
                setTime(0* 60); 
            }
        }
        return () => clearInterval(interval);
    }, [isActive, time, mode]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        if (mode === 'work') {
            setTime(15 * 60);
        } else {
            setTime(0 * 60);
        }
        setIsActive(false);
    };

    const addTime = (additionalTime) => {
        setTime(prevTime => prevTime + additionalTime);
    };

     const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    };

    return (
        <div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="/">POMOFOCUS</a>
                    </div>
                    <ul className="menu">
                        <li><a href="/tasks" className="menu-btn">Tasks</a></li>
                        <li><a href="/login" className="menu-btn">Sign In</a></li>
                    </ul>
                    <div className="menu-btn">
                        Menu
                    </div>
                </div>
            </nav>
            <div className="pomodoro-container">
                <h1>POMODORO</h1>
                <div className="timer">{formatTime(time)}</div>
                <div className="controls">
                    <div className="button-container">
                        <div className="button-container">
                          <button className={"btn " + (isActive ? 'pause-btn' : 'start-btn')} onClick={toggleTimer} id="button">
                            {isActive ? 'Pause' : 'Start'}
                            </button>
                    </div>
                    <div>
                        <Link href="/" className="voltar-pomodoro "id="link-voltar-pomodoro">
                            <button id="voltar-pomodoro">Tela Inicial</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Menu;