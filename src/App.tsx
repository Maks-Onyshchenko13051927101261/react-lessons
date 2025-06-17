import './App.css'
import {Comments} from "./components/comment-components/comments-component/Comments.tsx";
import {Posts} from "./components/post-components/posts-component/Posts.tsx";
import {Todos} from "./components/todo-components/todos-component/Todos.tsx";


function App() {
    return (
        <>
            <Comments/>
            <Posts/>
            <Todos/>
        </>
    )
}

export default App
