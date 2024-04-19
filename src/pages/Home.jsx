import React,{useEffect} from "react"
import { Hero } from "./Hero"
import { useSelector,useDispatch } from "react-redux";
import {getPostDataAction} from "../redux/actions/posts/postDataActions";
import { Trending } from "./TrendingStories";

export const Home  = () => {
  const posts = useSelector(state => state.post_data.data);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPostDataAction({}))
  },[])

   return (
     <>
       <Hero/>
       <Trending props={posts}/>
     </>

   )
}