import { useState } from "react";
import userAvatar from "../../assets/images/poster.png";

const Comment = ({ comment, addReplay }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  const getAllcomments = (comment) => {
    let allComments = [];

    const collectComments = (commentObj) => {
      
    }
  }

  const handleReplay = () => {
    if (replyText.trim()) {
      addReplay(comment.id, replyText);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  return (
    <div className="mt-5">
      <div className="flex items-start gap-2">
        <div>
          <img
            className="w-8 min-w-8 h-8 object-cover rounded-full"
            src={userAvatar}
            alt="userAvatar"
          />
        </div>
        <div className="w-full">
          <p className="text-sm font-semibold text-themeBlack">
            {comment?.author}{" "}
            <span className="font-medium text-[12px] pl-[6px] border-l-[1px] border-themeBlack ml-1">
              {comment?.time}
            </span>
          </p>
          <p className="mt-1 text-[15px] text-themeBlack">{comment?.text}</p>
          <div className="comment-actions text-sm mt-2 font-medium hover:text-primaryColor duration-100 ease-in-out">
            <button onClick={() => setShowReplyInput(!showReplyInput)}>
              💬 Reply
            </button>
          </div>
          {showReplyInput && (
            <div className="reply-input relative mt-2">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full border-b border-themeBlack pb-2 text-sm focus:outline-none"
              />
              <button
                className="reply-button absolute bottom-2 right-1 text-[12px] py-1 px-2 bg-primaryColor text-white rounded-[20px]"
                onClick={handleReplay}
              >
                Reply
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
