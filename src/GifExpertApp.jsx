import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; //Se valida que la categoria no exista en el array "categories"
        setCategories([newCategory, ...categories]);        
    }

    return (
        <div
            className='flex flex-col h-full w-full px-5 py-10 text-white font-semibold items-center'
        >
            <h1 className='font-bold text-5xl'>GifsAPP</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </div>
    );
};
