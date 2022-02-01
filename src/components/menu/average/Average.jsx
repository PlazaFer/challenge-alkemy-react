import { AverageStats } from './AverageStats';


export const Average = ({ average }) => {


    const { price, time, healt } = average;

    const priceRounded = price?.toFixed(2);
    
    return (
      <div className="container-fluid mb-5">
        <div className="row d-flex justify-content-center">
          <div
            className="col-12 col-md-6 card border-0 shadow p-3 bg-light"
            style={{ borderRadius: "15px" }}
          >
            <div className="row d-flex justify-content-center mb-3">
              <div className="col-12 col-md-6">
                <h5 className="text-center">Average</h5>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
            <AverageStats 
              name="PRICE"
              icon="bi bi-currency-dollar"
              stat={priceRounded}
            />
            <AverageStats 
              name="TIME"
              icon="bi bi-alarm"
              stat={`${time}m`}
            />
            <AverageStats 
              name="HEALT SCORE"
              icon="bi bi-bandaid"
              stat={healt}
            />
            </div>
          </div>
        </div>
      </div>
    );
}