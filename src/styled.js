import styled from 'styled-components';
import laughImage from './img/laugh.jpg';

export const Background = styled.div `
    & {z-index: 1
    }

    &:before {
    min-height: 600px;
    background-color:red;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${laughImage});
    background-repeat: no-repeat;
    background-color: white;
    background-attachment: fixed;
    background-position: center bottom;
    opacity: 0.4;
    filter: alpha(opacity=40);

    }
`

export const JokeContainer = styled.div `
    background-color: white;
    border-radius:15px;
    padding: 0px 80px;
    -webkit-box-shadow: 3px 29px 35px 10px rgba(0,0,0,0.15); 
      box-shadow: 3px 29px 35px 10px rgba(0,0,0,0.15);
    width: 500px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color:rgb(59, 59, 59);

`

export const CenterJokes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 550px;
`

export const Button = styled.button`
    background-color: #00c3ff;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }
`

export const Weather = styled.div`
    margin-top:20px;
    margin-left:20px;
    color:rgb(59, 59, 59);
`