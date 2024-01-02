import { useSelector } from "react-redux";

const Header = () => {
    const { cart } = useSelector((obj) => obj);

    return (
        <div className="bg-slate-900 flex justify-around h-15 rounded">
            <div className="text-white">E-Store</div>
            <div className="flex">
                <form>
                    <select className="h-10 bg-lime-700">
                        <option key="all">All</option>
                        <option key="mens">Mens</option>
                        <option key="women">Women</option>
                        <option key="kids">Kids</option>
                    </select>
                </form>
                <input type="search" />
                <button className="text-white bg-lime-700">Search</button>
            </div>
            <button className="text-white">SignIn</button>
            <button className="text-white">SignUp</button>
            {cart.item.length >= 0 && (
                <button className="text-white">Cart - {cart.item.length}</button>
            )}
        </div>
    );
};

export default Header;
