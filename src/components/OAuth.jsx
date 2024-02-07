import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import googlepng from "./googlpng.png";
export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center my-8">
        <span className="w-1/3 mr-2 h-0.5 bg-gray-400 opacity-70"></span>
        <p className=" text-sm font-semibold text-slate-500"> OR CONTINUE WITH </p>
        <span className=" w-1/3 ml-2 h-0.5 bg-gray-400 opacity-70"></span>
      </div>
      <button
        onClick={handleGoogleClick}
        type="button"
        className="btn text-lg flex justify-center items-center w-full mt-5 px-4 py-1 bg-blue-300 rounded-md font-semibold hover:bg-blue-400"
      >
        <span>
          <img width={36} src={googlepng} alt="" />
        </span>
        Google
      </button>
    </div>
  );
}
