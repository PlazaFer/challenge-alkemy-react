import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MenuContext } from "../../context/menuContext/MenuContext";
import { MenuItemDetailsStats } from './MenuItemDetailsStats';



export const MenuItemDetails = () => {
  const { menu } = useContext(MenuContext);

    const [descriptionFull, setDescriptionFull] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const dish = menu.find((element) => element.id == id);

  const shortDescription = dish.summary.substring(150, 0)



  return (
    <div className="container vh-100 w-100">
      <button
        className="btn btn-primary mt-3"
        style={{ borderRadius: "15px" }}
        onClick={() => navigate("/", { replace: true })}
      >
        Back to menu
      </button>
      <div className="row w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-sm-10 col-md-6 d-flex justify-content-center">
          <div
            className="card mb-5 mt-5 border-0 shadow"
            style={{ maxWidth: "25rem", borderRadius: "25px" }}
          >
            <img
              src={dish.image}
              alt="dish image"
              style={{ borderRadius: "25px 25px 0px 0px" }}
            />
            <div className="card-body">
              <div className="card-title text-center fw-bold mb-3">
                {dish.title}
              </div>
              <div className="d-flex justify-content-center align-items-center w-100">
              <MenuItemDetailsStats 
                stat={dish.pricePerServing}
                icon="bi bi-currency-dollar me-1"
              />
              <MenuItemDetailsStats 
                stat={dish.readyInMinutes}
                icon="bi bi-alarm me-1"
              />
              <MenuItemDetailsStats 
                stat={dish.healthScore}
                icon="bi bi-bandaid me-1"
              />
              <MenuItemDetailsStats 
                stat={dish.servings}
                icon="bi bi-palette me-1"
              />
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: descriptionFull
                    ? `${dish.summary}`
                    : `${shortDescription}`,
                }}
                className="card-text"
              />
              <button
                className="btn btn-link"
                onClick={() => setDescriptionFull(!descriptionFull)}
              >
                {descriptionFull ? "Hide" : "Read more"}
              </button>

              <div className="d-flex justify-content-end">
                <a
                  href={dish.sourceUrl}
                  role="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="btn btn-primary me-3"
                    style={{ borderRadius: "15px" }}
                  >
                    See more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
