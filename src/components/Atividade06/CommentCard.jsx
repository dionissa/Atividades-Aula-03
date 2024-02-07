export function CommentCard({ comment }) {
    return (
        <>
            <div class="flex flex-col">

                <div className="border border-solid border-slate-500 rounded-md p-3 ml-3 my-3">
                <div class="flex gap-3 items-center">

                    <img src={comment.profilePicture}
                        className="object-cover w-8 h-8 rounded-full 
                        border-2 border-emerald-400  shadow-emerald-400
                        "/>

                    <h3 className="font-bold text-slate-900">
                        {comment.username}
                    </h3>
                </div>


                <p className="text-gray-600 mt-2">
                    {comment.comment}
                </p>

                </div>

            </div>
</>
    )
}