import React, { useState, useEffect } from 'react';
import '/Users/Cleilton/react-website-yt-1/client/src/componets/Sugestoes.css';
import Axios from 'axios';


function Sugestoes() {

    const [nome, setNome] = useState("");
    const [review, setReview] = useState("");
    const [reviewsList, setReviewsList] = useState([]);

    const [newReview, setNewReview] = useState("");

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((response)=>{
            setReviewsList(response.data);
        });
    }, [])
    

    const submitReview = () =>{

        Axios.post("http://localhost:3001/api/insert", {nome:nome, review:review});

                setReviewsList([...reviewsList, {nome:nome, review:review},]);                  
    };

    const deleteReview = (movie) =>{
        Axios.delete(`http://localhost:3001/api/delete/${movie}`);
    }
    
    const updateReview = (movie) =>{
        Axios.put("http://localhost:3001/api/update",{
            nome:movie, review:newReview,
        });
        setNewReview("")
    };

    return (
        <div>
            <div className="form">
                <label>Nome</label>
                    <input name="nome" type="text" onChange={(e) =>{
                        setNome(e.target.value)
                    }}/>
                    <label>Sugestão de cursos</label>
                    <input name="review" type="text" onChange={(e) =>{
                        setReview(e.target.value)
                    }}/>
                    <button onClick={submitReview}>Enviar</button>

                    {reviewsList.map((val) => {
                        return (
                        <div className="card">
                           <h1>{val.nome} </h1>
                           <p>{val.review}</p>

                           <button className='botao' onClick={()=>{deleteReview(val.nome)}}>Deletar</button>
                           <input type="text" id="updateInput" onChange={(e)=> setNewReview(e.target.value)} />
                           <button className='botao' onClick={()=> {updateReview(val.nome)}}>Editar</button>
                        </div>
                        );
                    })}
            </div>
        </div>
    )
}

export default Sugestoes;