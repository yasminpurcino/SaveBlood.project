import React from 'react';
import Logo from './Logo.png'
import {useState} from 'react'
import {createQuiz} from '../Controller/Quiz';


function Quiz() {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [antibiotics, setAntibiotics] = useState('');
    const [cold, setCold] = useState('');
    const [tattoo, setTattoo] = useState('');
    const [pregnant, setPregnant] = useState('');

    const handleSubmit = async (event) => {
        document.getElementById('msg').innerHTML = ' '

        if (age && weight && height && antibiotics && cold && tattoo && pregnant) {
            document.getElementById('msg').innerHTML = 'YOU ARE ELIGIBLE TO DONATE!'
            localStorage.setItem("quizResult", 'YOU ARE ELIGIBLE TO DONATE!')

        } else {
            document.getElementById('msg').innerHTML = 'YOU ARE NOT ELIGIBLE TO DONATE!'
            localStorage.setItem("quizResult", 'YOU ARE NOT ELIGIBLE TO DONATE!')
        }
        document.getElementById('msg').innerHTML = localStorage.getItem('quizResult')

        console.log("age = " + age + " weight= " + weight + "height=" + height + "antibiotics = " + antibiotics + "cold =" + cold + "tattoo = " + tattoo + " pregnant= " + pregnant)


        // event.preventDefault();
        const iduser = localStorage.getItem('iduser');


        let quizResult = await createQuiz(iduser, age, weight, height, antibiotics, cold, tattoo, pregnant)
    }

    return (

        <div>

            <div className="titleQuiz">Am I eligible to become a Donor ?
            </div>

            <div className="textQuiz">
                In order to donate blood, plasma or platelets, you must pass a list of criteria to ensure that your donation is safe
            </div>

            <div className="imgLogoQuiz">
                <img src={Logo}
                    alt="logo"/>
            </div>
            <div>
                <form onSubmit={handleSubmit}
                    className='formQuiz'>
                    <h4 className='textForm'>your age?
                    </h4>
                    <label className='answerQuiz'>
                        under 18
                        <input onChange= {(e) => setAge(false)} className='radioForm' name="age" type="radio"/>
                    </label>
                    <label className='answerQuiz'>
                        above 18
                        <input onChange= {(e) => setAge(true)} className='radioForm' name="age" type="radio"/>
                    </label>

                    <h4 className='textForm'>your weight?
                    </h4>
                    <label className='answerQuiz'>
                        under 51kg
                        <input onChange= {(e) => setWeight(false)} className='radioForm' name="weight" type="radio"/>
                    </label>
                    <label className='answerQuiz'>
                        over 51kg
                        <input onChange= {(e) => setWeight(true)} className='radioForm' name="weight" type="radio"/>
                    </label>


                    <h4 className='textForm'>your height?
                    </h4>
                    <label className='answerQuiz'>
                        under 151cm
                        <input onChange= {(e) => setHeight(false)} className='radioForm' name="height" type="radio"/>
                    </label>
                    <label className='answerQuiz'>
                        over 151cm
                        <input onChange= {(e) => setHeight(true)} className='radioForm' name="height" type="radio"/>
                    </label>

                    <h4 className='textForm'>have you had a cough, cold, sore throat or influenza in last 28 days?
                    </h4>
                    <label className='answerQuiz'>
                        yes
                        <input onChange= {(e) => setCold(false)} className='radioForm' name="cold" type="radio"/>
                    </label>
                    <label className='answerQuiz'>
                        no
                        <input onChange= {(e) => setCold(true)} className='radioForm' name="cold" type="radio"/>
                    </label>


                    <h4 className='textForm'>have you had a tattoo or piercing in the last 3 months?
                    </h4>
                    <label className='answerQuiz'>
                        yes
                        <input onChange= {(e) => setTattoo(false)} className='radioForm' name="tattoo" type="radio"/>
                    </label>
                    <label className='answerQuiz'>
                        no
                        <input onChange= {(e) => setTattoo(true)} className='radioForm' name="tattoo" type="radio"/>
                    </label>

                    <h4 className='textForm'>have you been pregnant or given in the last 9 months?
                    </h4>
                    <label className='answerQuiz'>
                        yes
                        <input onChange= {(e) => setPregnant(false)} className='radioForm' name="pregnant" type="radio"/>
                    </label>
                    <label className='answerQuiz'>
                        no
                        <input onChange= {(e) => setPregnant(true)} className='radioForm' name="pregnant" type="radio"/>
                    </label>

                    <h4 className='textForm'>have you taken antibiotics in the last seven days?
                    </h4>
                    <label className='answerQuiz'>
                        yes
                        <input onChange= {(e) => setAntibiotics(false)} className='radioForm' name="antibiotics" type="radio"/>
                    </label>
                    <label className='answerQuiz'>
                        no
                        <input onChange= {(e) => setAntibiotics(true)} className='radioForm' name="antibiotics" type="radio"/>
                    </label>

                </form>
            </div>

            <button onClick={
                    () => handleSubmit()
                }
                type="submit"
                className="btnQuiz">
                Submit
            </button>
            <p className='resultQuiz' id="msg"></p>


        </div>


    )
}

export default Quiz
