import { useLoaderData } from "react-router-dom"

function RandomMeal() {

const data =useLoaderData();

let newdata=data.categories;

// idCategory
// : 
// "1"
// strCategory
// : 
// "Beef"
// strCategoryDescription
// : 
// "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
// strCategoryThumb
// : 
// "https://www.themealdb.com/images/category/beef.png"

// console.log(newdata)
    return (
    <div>
        {
            newdata.map((res)=>(

                <div key={res.idCategory} className="grid grid-cols-3 border border-amber-800 rounded-lg m-8 p-4">
                    <img src={res.strCategoryThumb} alt={res.strCategory} />
                    <h3 className="text-xl">{res.strCategory}</h3>
                    <p className="text-xl"> {res.strCategoryDescription}</p>
                    <button>Click to know more</button>
                </div>
            ))
        }


    </div>
  )
}

export default RandomMeal;