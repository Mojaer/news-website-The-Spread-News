import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <h5>All Category</h5>
            <div className='p-2'>
                {
                    category.map(category =>
                        <p key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none text-dark'>{category.name}</Link>

                        </p>)
                }

            </div>
        </div>
    );
};

export default LeftNavbar;