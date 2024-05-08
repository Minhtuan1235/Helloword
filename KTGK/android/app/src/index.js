import { Children, createContext,useContext,useMemo,useReducer } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
const   myContext =createContext() 
myContext.displayName="abc"
const reducer =(state,action)=>{
    switch(action.type){
        case "USER LOGIN":
            return {...state,userLogin: action.value}
        case "LOGouT":
            return {...state,userLogin:null}
        default:
            return new Error("Action not found")
            break;
    }
}
const myContextControllerProvider=({children})=>{
    const inotalState={
        userLogin:null,
        service:[]
    }
    const [controller,dispacth]= useReducer(reducer,inotalState)
    const value= useMemo(()=>[controller,dispacth][controller,dispacth])
    return(
        <myContext.Provider value={value}>{children}</myContext.Provider>
    )
}
const usemycontextCTL =()=>{
    const context =useContext(myContext)
    if(context == null)
        return new Error("Error")
    return context
}
const users=firestore().collection("users")
const login=(dispacth,email,password) =>{
    auth().signInWithEmailAndPassword(email,password)
    .then(response=>
        users.doc(email)
        .onSnapshot(u=>dispacth({type:"Users login",value:u.data}))
    )
    .catch(e=>Alert.alert("Sai email va password"))

}
const logout =(dispacth)=>{
    auth().signOut()
    .then(()=>dispacth({type:"LOg out"}))
}
export {
    myContextControllerProvider,
    usemycontextCTL,
    login,
    logout
}
