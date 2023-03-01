import { auth , db } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { deleteDoc, getDocs , doc } from "@firebase/firestore";
import { toast } from "react-toastify";
export const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [alert, setAlert] = useState({ isShow: false, duration: 3000, message: "", type: "" })
    const [pageLoading, setPageLoading] = useState(true)
    const [Loading, setLoading] = useState(false)
    const [user, setUser] = useState()

    const signInUser = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setAlert({ isShow: true, duration: 3000, message: "Successfully logged in", type: "success" })
        } catch (error) {
            console.log(error)
            setAlert({ isShow: true, duration: 3000, message: error.response?.data?.message || error.message, type: "error" })
        }
    }
    const logout = () => {
        return signOut(auth);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setPageLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);



  const handleDelete = async (blog) => {
    try {

      setLoading(true);

      console.log('blog object CLICKEDDDDD' , blog)
    
      await deleteDoc(doc(db, "blog", blog.id));
      console.log("Document successfully deleted!");
      toast.success('Blog deleted successfully')
      window.location.reload

    } catch (error) {
      console.error("Error removing document: ", error);
      toast.error({message:error})

      setLoading(false)
    }
    
  };




    return (
        <StateContext.Provider value={{
            alert,
            setAlert,
            user,
            pageLoading,
            signInUser,
            logout,
            handleDelete 
        }}>
            {children}
        </StateContext.Provider>
    )
}