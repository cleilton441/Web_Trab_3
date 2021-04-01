import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Os Melhores Cursos Estão Aqui!</h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/HTML.jpg" text="Curso de HTML" label='Web' path='/services'/>
                        <CardItem src="images/htmlcss.jpg" text="Curso de HTML e Css" label='Web' path='/services'/>
                        <CardItem src="images/html-css-javascript.jpg"text="Curso de HTML, Css e Js" label='Web' path='/services'/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/Machine.jpg" text="Curso de Machine Learning" label='Computação' path='/services'/>
                        <CardItem src="images/python.jpg" text="Curso de Python" label='Programação' path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
