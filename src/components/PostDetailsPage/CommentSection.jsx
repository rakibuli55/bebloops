import { useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import userImg from "../../assets/images/profile-avatar.png";
import Comment from "./Comment";

const initialComments = [
  {
    id: uuidv4(),
    author: "Tariqul Islam",
    text: "An excellent chance to boost speaking skills, & confidence!",
    time: "2 days ago",
    replies: [
      {
        id: uuidv4(),
        author: "Sania Amal",
        text: "Thank you so much. ❤️",
        time: "2 days ago",
        replies: [
          {
            id: uuidv4(),
            author: "Sania Amal",
            text: "miss u. ❤️",
            time: "2 days ago",
            replies: [
              {
                id: uuidv4(),
                author: "Sania Amal",
                text: "love you. ❤️",
                time: "2 days ago",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    author: "Tariqul Islam",
    text: "An excellent chance to boost speaking skills, & confidence!",
    time: "2 days ago",
    replies: [],
  },
  {
    id: uuidv4(),
    author: "Tariqul Islam",
    text: "An excellent chance to boost speaking skills, & confidence!",
    time: "2 days ago",
    replies: [],
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const commentBoxRef = useRef(null);

  const getAllReplies = (commentList) => {
    let allReplies = [];

    const collectReplies = (comments) => {
      comments.forEach((comment) => {
        if (comment.replies.length > 0) {
          allReplies.push(...comment.replies);
          collectReplies(comment.replies);
        }
      });
    };

    collectReplies(comments);
    return allReplies;

  }
  // addComment
  const addComment = () => {
    if (!newComment.trim()) return;

    setComments([
      ...comments,
      {
        id: uuidv4(),
        author: "User",
        text: newComment,
        time: "Just now",
        replies: [],
      },
    ]);
    setNewComment("");
  };

  const addReplay = (parentId, replyText) => {
    const updateComments = (commentsList) =>
      commentsList.map((comment) =>
        comment.id === parentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: uuidv4(),
                  author: "author",
                  text: replyText,
                  time: "just now",
                  replies: [],
                },
              ],
            }
          : {
              ...comment,
              replies: updateComments(comment.replies),
            }
      );

    setComments(updateComments(comments));
  };

  return (
    <div className="py-6 px-5 bg-white rounded-tl-[16px] rounded-tr-[16px] min-h-[695px]">
      <h3 className="text-lg font-semibold mb-6">
        {comments?.length} Comments
      </h3>
      {/* comments  */}
      <div className="comments-area h-[530px] overflow-y-auto" ref={commentBoxRef}>
        {comments?.map((comment) => (
          <Comment key={comment?.id} comment={comment} addReplay={addReplay} />
        ))}
      </div>
      {/* add comment  */}
      <div className="mt-4 flex justify-end gap-4">
        <img
          className="h-8 w-8 rounded-full object-cover"
          src={userImg}
          alt="userImg"
        />
        <div className="w-full relative">
          <input
            className="border-b border-[#4D4D4D] bg-transparent pb-2 text-sm font-medium focus:outline-none w-full"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button
            className="absolute bottom-[10px] right-0 h-8 w-8 bg-primaryColor flex items-center justify-center rounded-full text-white"
            onClick={addComment}
          >
            <BsFillSendFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
