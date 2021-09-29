import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import { useState } from "react";
import { Container } from "./style";
const AddComment = () => {
  const [string, setString] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.user);

  return (
    <Container>
      <section>
        {comments.comments.map((element, index) => (
          <p key={index}> {element} </p>
        ))}
      </section>
      <div>
        <input
            onChange={(e) => setString(e.target.value)}
            placeholder="Comment"
            type="text"
        />
        <button onClick={() => dispatch(addCommentThunk(string))}>
            Send
        </button>
      </div>
    </Container>
  );
};
export default AddComment;
