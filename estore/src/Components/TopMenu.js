import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTopMenu } from "../redux/actions/topMenu";

const TopMenu = () => {
  const dispatch = useDispatch();
  const topMenu = useSelector((state) => state.topMenu);

  useEffect(() => {
    // Dispatch the action when the component mounts
    dispatch(getTopMenu());
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div className="bg-slate-600 h-8">
      <ul className="text-white flex justify-start space-x-7">
        {topMenu?.map((item, index) => (
          <li key={index} className="hover:text-fuchsia-300">
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopMenu;