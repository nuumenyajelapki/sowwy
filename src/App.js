import './App.css';
import Ic from './img/Ic.svg'

function App() {
  let month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]

  let then = new Date(2020, 11, 28)

  let dateStamp = new Date();

  if (localStorage.getItem('days') === null) localStorage.setItem('days', Math.round(then / (1000 * 60 * 60 * 24)));

  return (
    <div className="container" style={{textAlign: "center", color: "whitesmoke", marginTop: "15vh"}}>
        <div className="App-logo">
          <img src={Ic} alt=""></img>
        </div>
        <div style={{marginTop: "50px"}}>
          <h4>Сегодня</h4>
          <h1>{ month[dateStamp.getMonth()] + ', '} {dateStamp.getDate() }</h1>
        </div>
        <div style={{marginTop: "50px"}}>
          <h4>Дней без sowwy</h4>
          <h1 style={{ fontSize: "4.5rem" }}>{ Math.round((dateStamp / (1000 * 60 * 60 * 24)) - localStorage.getItem('days')) }</h1>
        </div>
        <button type="button"
        className="btn btn-outline-secondary"
        style={{marginTop: "50px"}}
        onClick={
          () => {
            localStorage.setItem('days', Math.round(dateStamp / (1000 * 60 * 60 * 24)));
            window.location.reload();
          }
        }
        >Сброс</button>
    </div>
  );
}

export default App;
