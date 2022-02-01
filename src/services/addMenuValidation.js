export const addMenuValidation = (menu, result) => {

  let acumulate = {
    vegan: 0,
    noVegan: 0
  }

  result.vegan ? acumulate.vegan += 1 : acumulate.noVegan += 1; 

  const reduce = menu.reduce((acc, el) => {

  if(el.vegan) acc.vegan += 1
  
  if(!el.vegan) acc.noVegan += 1
     
   return acc;

  }, acumulate)

  return acumulate;
  
};