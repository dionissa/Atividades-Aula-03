import { CommentCard } from "./CommentCard";

export const comments = [
    {
      username: 'Alice',
      profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
      comment: `I really enjoyed reading this article! The insights provided were eye-opening and thought-provoking. Looking forward to more content like this in the future.`,
    },
    {
      username: 'Bob',
      profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
      comment: `Great job on this video! The production quality is top-notch, and the information shared is incredibly valuable. Keep up the fantastic work!`,
    },
    {
      username: 'Charlie',
      profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
      comment: `This blog post resonated with me deeply. The author's perspective is refreshing, and the writing style is engaging. Can't wait to share this with my friends!`,
    },
    {
      username: 'Diana',
      profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
      comment: `I found this podcast episode to be incredibly insightful. The guests provided unique perspectives, and the host did a fantastic job guiding the conversation. Can't wait for the next episode!`,
    },
    {
      username: 'Eve',
      profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
      comment: `As someone new to this topic, I found this tutorial to be extremely helpful. The step-by-step explanations made complex concepts easy to understand. Thank you for sharing your expertise!`,
    },
    {
      username: 'Frank',
      profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg',
      comment: `This product review was exactly what I needed before making a purchase decision. The reviewer provided thorough insights and addressed all my concerns. I feel confident about my choice now!`,
    },
    {
      username: 'Grace',
      profilePicture: 'https://randomuser.me/api/portraits/women/7.jpg',
      comment: `I stumbled upon this article, and I'm so glad I did! The information provided was exactly what I was looking for. Keep up the excellent work!`,
    }
  ];
  

export function CommentList() {

    return (
        <>{
            comments.map((comment => (
            <CommentCard key={comment.username} comment={comment}/>
    )))
            }</>
    )

}