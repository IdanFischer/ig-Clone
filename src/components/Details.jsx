import { View } from "react-native";
import Posts from "./Posts";
import { useContext } from "react";
import { PostContext } from "../../App";

export default function Details() {
  const { currentPost } = useContext(PostContext)
  return (
    <View>
      <Posts post={currentPost}/>
    </View>
  )
}
