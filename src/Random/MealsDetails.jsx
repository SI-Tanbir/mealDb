import { useLoaderData } from "react-router-dom"


const MealsDetails = () => {
    const data= useLoaderData();
    let {meals}=data
  return (
    
    <div>
        <h3>{meals}</h3>

    </div>
  )
}

export default MealsDetails