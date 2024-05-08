import { View } from "react-native";
import { Button,HelperText,Text,TextInput } from "react-native-paper";
import {login,usemycontextCTL} from "../index"
import { useEffect,useState } from "react";
const login =({navigation})=>{
    const [controller,dispacth] =usemycontextCTL()
    const [userLogin] = controller
    const [email,setEMail]= useState("")
    const [password,setPassword] =useState("")
    const [hiddenPass,setHiddenPass] =useState(false)
    const [hasEMaill] =()=>!email.includes("@")
    const [hasErrorPass] =()=>password.length<6
    const [handLogin]= () =>{

    }
}