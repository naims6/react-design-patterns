import { startTransition, useOptimistic, useState } from "react";
interface IComment {
  id: number;
  content: string;
  author: string;
  createdAt: string;
}

const dummyComments = [
  {
    id: 1,
    content: "This is a really helpful post. Thanks for sharing!",
    author: "Rahim Ahmed",
    createdAt: "2026-02-15T10:15:00.000Z",
  },
  {
    id: 2,
    content: "I tried this approach in my project and it worked perfectly.",
    author: "Ayesha Khan",
    createdAt: "2026-02-15T11:30:00.000Z",
  },
  {
    id: 3,
    content:
      "Can you explain more about how useOptimistic works behind the scenes?",
    author: "Imran Hossain",
    createdAt: "2026-02-15T12:45:00.000Z",
  },
];

const PostComments = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(dummyComments);
  const [optimisticComment, addOptimisticComment] = useOptimistic(
    comments,
    (currentComment: IComment[], delta: IComment) => [...currentComment, delta],
  );

  const handleComment = async (e: any) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      content: commentText,
      author: "Unknown",
      createdAt: "date",
    };
    addOptimisticComment(newComment);

    try {
      await new Promise((res) => {
        setTimeout(() => {
          return res("solved");
        }, 2000);
      });

      if (Math.random() < 0.3) throw new Error("NEtwork error");

      setComments((prev) => [...prev, newComment]);
    } catch (e) {
      console.error(e);
      setComments((prev) => prev)
    }
  };
  return (
    <div>
      <div className="border border-red-500 overflow-hidden">
        <div className="space-y-4 overflow-y-auto h-100 w-100 p-6 ">
          {optimisticComment.map((c, key) => (
            <p
              key={key}
              className="border border-gray-100 text-right w-2/3 p-3"
            >
              {c.content}
            </p>
          ))}
        </div>
      </div>

      <form className="mt-8">
        <input
          className="border border-gray-700"
          type="text"
          placeholder="type comment.."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button onClick={(e) => startTransition(async () => handleComment(e))}>
          Post comment
        </button>
      </form>
    </div>
  );
};

export default PostComments;
