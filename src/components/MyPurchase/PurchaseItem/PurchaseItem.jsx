import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const PurchaseItem = ({item, items, setItem}) => {
    const {_id, date, image, foodname, price, owner, quantity} = item;
    const total_price = (price*quantity).toFixed(2);
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://trioeats-server.vercel.app/purchases/${id}`, {
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your food has been deleted.",
                            icon: "success"
                          });
                          setItem(items.filter(i=>i._id !==id))
                    }
                })
            }
          });
    }
    return (
        <tr className="poppins text-center">
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
                    {date}
                    <br/>
                </td>
                <td>{quantity}</td>
                <td>$ {price}</td>
                <td>$ {total_price}</td>
                <td>{owner.name}</td>
                <th>
                <button onClick={()=>handleDelete(_id)} className="btn bg-[#A75D5D] btn-ghost text-white"><MdDelete></MdDelete> Delete</button>
                </th>
            </tr>
    );
};

export default PurchaseItem;