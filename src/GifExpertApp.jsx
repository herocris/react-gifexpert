import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punsh']);

    const onAddCategory = (NewCategory) => {

        //if (categories.includes(NewCategory)) return;
        if (categories.find(category => category.toUpperCase() === NewCategory.toUpperCase())) return; //transforma todo a minusculas y valida si ya esta en el arreglo

        setCategories([NewCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category} />
                )
            }
        </>
    )
}

export default GifExpertApp
