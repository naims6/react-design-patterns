import { startTransition, useOptimistic, useState } from "react";

const LikeButton = ({
  postId,
  initialLike = 0,
}: {
  postId: string;
  initialLike?: number;
}) => {
  const [likes, setLikes] = useState(initialLike);

  const [optimisticLikes, addOptimisticLikes] = useOptimistic(
    likes,
    (currentLikes, delta: number) => currentLikes + delta,
  );

  const sendLikeToServer = async (postId: string) => {
    await new Promise((r) => setTimeout(r, 1500));

    if (Math.random() < 0.3) throw new Error("NEtwork error occured");
    console.log(`Sent a like for the post id ${postId}`);
    return { success: true };
  };

  const handleLike = async () => {
    addOptimisticLikes(1);

    // start server call
    try {
      await sendLikeToServer(postId);
      setLikes((prev) => prev + 1);
    } catch (err) {
      console.error("Like Failed", err);
      setLikes((s) => s);
    }
  };

  return (
    <button onClick={() => startTransition(async () => handleLike())}>
      ❤️ {optimisticLikes}
    </button>
  );
};

export default LikeButton;
