import React, { useState } from 'react';
import { ImPlus, ImMinus } from "react-icons/im";
import { question_data, QuestionData } from '../../../static/question_Data';
import "../VBucks.css";

const Questions = () => {
    const [clicked, setClicked] = useState(false);
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }

    return (
        <div className="FAQS_container">
            <div className="container_title">
                <h2>V-BUCKS CARD FAQS</h2>
                <p>V-BUCKS CARDS ARE AVAILABLE AT MAJOR RETAILERS IN THE USA, CANADA, UK, FRANCE, GERMANY, ITALY, SPAIN, PORTUGAL, THE NETHERLANDS, IRELAND, AND AUSTRALIA .</p>
            </div>
            <div className="container_questions">
                {
                    question_data?.map((question, index) =>
                        <div className="question" onClick={() => toggle(index)} key={index}>
                            <div className="icons">
                                <h3> {question.ques} </h3>
                                {
                                    clicked === index ? <ImMinus /> : <ImPlus />
                                }

                            </div>
                            {

                                clicked === index && question.anws && <div className="collection_container">
                                    {
                                        clicked === index && question.anws && QuestionData.map((country, inx) =>
                                            
                                                <ul className='collection_country' key={inx}>
                                                    <li><h3> {country.title} </h3></li>
                                                    <ul> {country.li.map((listItem, inx) =>
                                                        <li key={inx}> {listItem} </li>
                                                    )} </ul>
                                                </ul>
                                        )
                                    }
                                </div>
                            }
                            {
                                clicked === index ? <p> {question.anw} </p> : null
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Questions