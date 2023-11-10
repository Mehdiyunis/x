import { createAccountClose } from "@/features/createAccounState";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function CreateAccount() {

    const dispatch = useDispatch()

  return (
    <div>
      <AiOutlineClose
        className="text-white w-6 h-6"
        onClick={() => dispatch(createAccountClose())}
      />
      mehdi
    </div>
  );
}
