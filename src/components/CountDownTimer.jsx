import React, { useState, useEffect } from "react";
import "../css/Countdown.css";
import flash from "../assets/icons/flash logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { data } from "../Db/ProductDb";
import { Link } from "react-router-dom";

const CountDownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(24, 0, 0, 0);

    const timeDiff = endOfDay.getTime() - now.getTime();

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const flashProduct = data.slice(4, 8);

  return (
    <>
      <section className="flash-conatinerM">
        <div className="flash-header">
          <div className="left-flashM">
            <img src={flash} alt="flash" />
            <span>Flash Sale</span>
          </div>
          <span>
            Time Left:{" "}
            {`${timeRemaining.hours}h : ${timeRemaining.minutes}m : ${timeRemaining.seconds}s`}
          </span>
          <span>
            View all <FaArrowRightLong />
          </span>
        </div>
        <div className="flash-product">
          {flashProduct.map((product) => {
            const {_id, image, name, description,priceCents, isavailability} = product
            let price = (priceCents / 100).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              });
            return (
              <>
              <Link className="link" to={`/detail/${product._id}`}>
                <div key={_id}>
                  <div className="m-card-Container" key={_id}>
                    <div className="m-image">
                      <img src={image} />
                    </div>
                    <div className="m-card-info">
                      <div className="m-card-text">
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <h2>&#x20A6;{price}</h2>
                      </div>
                      <div className="m-card-btn">
                        {isavailability ? (
                          <button>Add to cart</button>
                        ) : (
                          <button className="not-ava" disabled>
                            Sold Out
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CountDownTimer;
