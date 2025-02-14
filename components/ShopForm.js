import { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export default function ShopForm() {
    const { addToCart } = useContext(CartContext);
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0);
    const pricePerItem = 20; 

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart({ item, quantity, price: quantity * pricePerItem });
        setItem('');
        setQuantity(0);
    };

    return (
        <section id="shop" className="py-10 bg-gray-200">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Tech Shop</h2>
                <form className="bg-white shadow-md rounded p-6" onSubmit={handleAddToCart}>
                    <div className="mb-4">
                        <label htmlFor="item" className="block text-gray-700 font-bold mb-2">Gadget Name</label>
                        <input
                            type="text"
                            id="item"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="border rounded w-full py-2 px-3"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
                </form>
            </div>
        </section>
    );
}