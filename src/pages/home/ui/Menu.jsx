import filter from '../../../shared/icons/filter.svg'
import search from '../../../shared/icons/search.svg'
import '../../../app/styles/index.css'
import './Menu.css'
import FoodCard from '../../../widgets/foodcard/ui/FoodCard'
import { productsApi } from '../../../shared/api/products'
import { useEffect, useState } from 'react'

const Menu = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        productsApi().then(data => setProducts(data.products));
    }, []);

    return(
        <div className='container'>
            <header className="header">
                <div className="header__content">
                    <div className="header__filter">
                        <h1>Каталог</h1>
                        <button><img src={filter} alt="Filter" />Сортировать по:</button>
                    </div>
                    <div className="header__search">
                        <img src={search} alt="Search" />
                        <input type="text" 
                            placeholder='Введите название товара'
                        />
                    </div>
                </div>
            </header>
            <main className="main">
                <section className='food__cards'>
                    { products.map((product) => (
                        <FoodCard key={product.id} product={product} />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Menu;