import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {questions} from './data/data';
import {QuestionInterface} from "./type/type";
import {Question} from "./components/Question/Question";

function App() {
  const [quesetions, setQuestions] = useState<QuestionInterface[]>(questions);
  return (
   <main>
     <div className="container">
       <h3>quesetions and answers about login</h3>
         <section className="info">
             {
                 quesetions.map((question) => <Question key={question.id} question={question}/>)
             }
         </section>
     </div>
   </main>
  );
}

export default App;
