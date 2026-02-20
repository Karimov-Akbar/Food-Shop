import filter from '../../../shared/icons/filter.svg'
import search from '../../../shared/icons/search.svg'
import '../../../app/styles/index.css'
import './Menu.css'
import ProductCard from '../../../widgets/productcard/ui/ProductCard'
import { productsApi } from '../../../shared/api/products'
import { useEffect, useState } from 'react'
import Paginaton from '../../../shared/ui/pagination/Pagination'
import { useSearchParams } from 'react-router-dom'

const Menu = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const currentPage = Number(searchParams.get('page') || 1);
    const LIMIT = 30;
    
    const fetchProducts = (page) => {
        const skip = (page - 1) * LIMIT;
        productsApi(LIMIT, skip).then(data => { 
            setProducts(data.products);
            setTotalPages(Math.ceil(data.total / LIMIT));
            window.scrollTo(0,0);
        });
    }


    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) =>{
        setSearchParams({ page: page + 1});
    }

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
                <section className='product__cards'>
                    { products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
                <Paginaton
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    forcePage={currentPage -1}
                />
            </main>
        </div>
    );
}

export default Menu;