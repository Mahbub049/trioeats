import { Link } from "react-router-dom";

const ItemsRow = ({item}) => {
    const {_id, image, foodname, price, category} = item;
    return (
            <tr className="poppins">
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold text-lg">{foodname}</div>
                    </div>
                </div>
                </td>
                <td>
                {category}
                <br/>
                </td>
                <td>{price}</td>
                <th>
                <Link to={`/update/${_id}`} className="btn bg-[#5092da] btn-ghost text-white">Update</Link>
                </th>
            </tr>
    );
};

export default ItemsRow;