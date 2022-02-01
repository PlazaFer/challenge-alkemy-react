import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../../context/menuContext/MenuContext";
import { Button } from "./Button";
import { CardStats } from "./CardStats";
import { addMenuValidation } from "../../services/addMenuValidation";
import { sweetAlertConfirm, sweetAlertMixin } from "../../services/sweetAlert";

export const Card = ({ result, add, deleteDish }) => {

  const { menu, setMenu } = useContext(MenuContext);

  const navigate = useNavigate();

  const {
    id,
    image,
    title,
    pricePerServing,
    readyInMinutes,
    servings,
    vegan,
    healthScore,
    sourceUrl,
  } = result;

  const addDishToMenu = (result) => {

    const validation = addMenuValidation(menu, result);

    if (menu.length === 4) {
      return sweetAlertMixin("error","You can only choose 4 dishes, please delete some");
    }else if(validation.vegan >= 3 && result.vegan) {
       return sweetAlertMixin("error", "Must be 2 vegan dish or less");
     } else if (validation.noVegan >= 3 && !result.vegan) {
       return sweetAlertMixin("error", "Must be 2 no vegan dish or less");
     }

    setMenu((prevState) => {
      return [...prevState, result]
      });

    sweetAlertMixin("success", "Add to menu successfuly");
  };

  

   const deleteDishToMenu = async (id) => {
    const deleteIt = await sweetAlertConfirm();

    if (deleteIt) {
      setMenu((prevState) => {
        return prevState.filter((dish) => dish.id !== id);
      });
    }
  };

  return (
    <div
      className="card border-0 shadow mb-4"
      style={{ maxWidth: "18rem", borderRadius: "15px" }}
    >
      <img
        src={image}
        style={{ borderRadius: "25px 25px 0px 0px" }}
        className="card-img-top"
        alt="Dish"
      />
      <div className="card-body p-2">
        <h5 className="card-title">{title}</h5>
        <div className="row mt-4">
          <CardStats
            icon='bi bi-currency-dollar'
            stat={pricePerServing}
          />
          <CardStats 
            icon='bi bi-alarm-fill'
            stat={`${readyInMinutes}m`}
          />
          <CardStats 
            name='Servings:'
            stat={servings}
          />
          <CardStats 
            name='Healt:'
            stat={healthScore}
          />
          <CardStats 
            name='Vegan:'
            stat={vegan ? 'Yes' : 'No'}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center mb-2">
        {add && (
          <>
            <a
              href={sourceUrl}
              role="button"
              target="_blank"
              rel="noreferrer"
              className="text-danger me-5"
            >
              <Button name="More" />
            </a>
            <Button name="Add" onClick={() => addDishToMenu(result)} />
          </>
        )}
        {deleteDish && (
          <>
            <Button name="Details" onClick={() => navigate(`/dish/${id}`)} />
            <Button name="Delete" onClick={() => deleteDishToMenu(id)} />
          </>
        )}
      </div>
    </div>
  );
};
