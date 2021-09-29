import styled from "styled-components";

export const Container = styled.div` 

    background: #34495e;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
    width: 500px;
    font-family: sans-serif;
    padding: 10px;
    border-radius: 8px;

    section {
        background: #dff9fb;
        width: 50%;
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 4px 4px rgba(0,0,0,0.5);

    }
    div {
        display: flex;
        width: 65%;
        align-items: center;
    }
    input {
        background: #dff9fb;
        margin:10px;
        width: 75%;
        height: 35px;
        outline: none;
        border: none;
        border-radius: 8px;
        box-shadow: 0 4px 4px rgba(0,0,0,0.5);
        padding-left: 10px;
    }
    input:hover{
        transform: translateY(-3px);
        width: 78%;
        border: 2px solid  #2ecc71;
    }
    button {
        height: 40px;
        border-radius: 100%;
        border: none;
        transform: translateY(-3px);
        background: #2ecc71;
        font-weight: bold;
        color: #2c3e50;
        cursor: pointer;
        box-shadow: 0 4px 4px rgba(0,0,0,0.5);
    }

    button:active{
        transform: translateY(2px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
        
    }



`
