import './App.css'
import LikeButton from './components/LikeButton'
import PostComments from './components/task/PostComments'

function App() {

  return (
    <>
      <LikeButton postId='123'/>
      <PostComments/>
    </>
  )
}

export default App
