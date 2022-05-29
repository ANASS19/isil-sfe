import React, { useState } from 'react'
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
function CategoryPage() {
    const location = useLocation();
   const cat = location.pathname.split("/")[2];
   const [filters,setFilters] = useState({});
   const [sort,setSort] = useState("newest");

   const handleFilters = (e) => {
       const value = e.target.value;
       setFilters({
           ...filters,
           [e.target.name]:value,
       });
   };

  
  return (
    <div>
    <Announce />
    <Navbar />
    <div className='flex flex-col p-5'> 
        <h1 className='text-[30px]'>Vêtements : {cat}</h1>
        <div className=' flex items-center justify-between mt-3 '>
            <div className='flex mobile:flex-col '>
                <p>filtrer par</p>
                <select className='ml-3 border-2 border-silver' name='size' onChange={handleFilters} >
                    <option  disabled>Taille</option>
                    <option>S</option>
                    <option >M</option>
                    <option >L</option>
                    <option>XL</option>
                </select>
                <select className='ml-3 border-2 border-silver mobile:mt-3' name='color' onChange={handleFilters}>
                <option  disabled >Couleur</option>
                <option >noire</option>
                <option >blanche</option>
                
                </select>
            </div>
            <div className='flex ' >
                <p>Trier par</p>
                <select className='ml-3 border-2 border-silver' onChange={(e) => setSort(e.target.value)}>
                <option value="newest">Nouvel</option>
                <option value="asc">Prix (Asc)</option>
                <option value="desc"> Prix(Des)</option>
                </select>
            </div>
        </div>
    </div>
    <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter />
        <Footer />
    </div>

  )
}

export default CategoryPage