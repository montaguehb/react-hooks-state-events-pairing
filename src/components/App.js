import video from "../data/video.js";
import CommentList from "./CommentList";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <Video video={video}/>
      <CommentList comments={video.comments}/>
    </div>
  );
}

export default App;
