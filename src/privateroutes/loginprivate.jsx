import {useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"

export const PrivateRoute = (props)=>{
  let login = useSelector((state)=>state.isLoggedIn)
  console.log(login)
  let {Component} = props
  let navigate = useNavigate()
  useEffect(()=>{
    if (!login){
      navigate("/login")
    }
  })
  return (
    <Component/>
  )
}