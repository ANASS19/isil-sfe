import React from 'react'
import Announce from '../components/Announce';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
function CategoryPage() {
  return (
    <div>
    <Announce />
    <Navbar />
    <div className='flex flex-col p-5'> 
        <h1 className='text-[30px]'>Vêtements</h1>
        <div className=' flex items-center justify-between mt-3 '>
            <div className='flex mobile:flex-col '>
                <p>filtrer par</p>
                <select className='ml-3 border-2 border-silver'>
                    <option selected disabled>Taille</option>
                    <option>S</option>
                    <option >M</option>
                    <option >L</option>
                    <option>XL</option>
                </select>
                <select className='ml-3 border-2 border-silver mobile:mt-3' >
                <option selected disabled >Couleur</option>
                <option >noire</option>
                <option >blanche</option>
                
                </select>
            </div>
            <div className='flex ' >
                <p>Trier par</p>
                <select className='ml-3 border-2 border-silver'>
                <option >Nouvel</option>
                <option >Ancien</option>
                <option >Prix (Asc)</option>
                <option > Prix(Des)</option>
                </select>
            </div>
        </div>
    </div>
    <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default CategoryPage