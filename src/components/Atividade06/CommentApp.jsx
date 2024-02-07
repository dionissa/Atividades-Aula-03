import { CommentList } from "./CommentList";
import { NewComment } from "./NewComment";

export function CommentApp() {
    return (
        <>
        <div className=" mx-auto grid w-11/12 m-5 bg-slate-900 rounded-lg shadow-md p-7">
            <h1  className=' font-extrabold text-xl antialiased'>Atividade [Entrega] - Comentarios de blog</h1>
            <div class="bg-slate-200 rounded-lg border p-2 my-4 mx-6">

<h3 class="font-bold text-slate-800">Discussion</h3>

<form>

        <CommentList/>
        <NewComment/>
</form>


</div>
        </div>
        </>
    )
}