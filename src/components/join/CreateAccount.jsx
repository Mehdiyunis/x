import { AiOutlineClose } from "react-icons/ai";
import { closeCreatePopup } from "@/feature/createPopUp";
import { useDispatch } from "react-redux";

export default function CreateAccount() {
  const dispatch = useDispatch();

  return (
    <div>
      <AiOutlineClose
        className="text-white w-6 h-6"
        onClick={()=>dispatch(closeCreatePopup())}
      />
      mehdi
    </div>
  );
}
