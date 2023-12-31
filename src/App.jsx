import logo from "./assets/logo.svg";
import "./scss/style.scss";
import Footer from "./component/Footer";
import data from "../data.json";

function App() {
  const date = new Date(Date());
  const today = date.getDay();

  return (
    <div className="App">
      <header className="header">
        <div>
          <p>My balance</p>
          <h1>$921.48</h1>
        </div>
        <img src={logo} alt="logo" />
      </header>
      <main className="content">
        <h1>Spending - Last 7 days</h1>
        <div className="bars">
          {data &&
            data.length > 0 &&
            data.map((days, index) => (
              <div className="single_bar" key={days.day}>
                {/* <div>{days.amount}</div> */}
                <div className="single_r">
                  <div
                    id={`${days.day}`}
                    style={{ height: `${days.amount * 3.1}px` }}
                    className={`${index === today ? "active" : "height"}`}
                  />
                  <p>{days.day}</p>
                </div>
              </div>
            ))}
        </div>
        <hr />
        <small id="total">Total this month</small>
        <div className="footer">
          <p>$478.33</p>
          <div>
            <p id="percent">
              <b>+2.4%</b>
            </p>
            <small id="last">from last month</small>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
