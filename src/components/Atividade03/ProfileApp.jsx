import { CardProfile } from './CardProfile';

export function ProfileApp() {
    return (
        <div className=" mx-auto grid w-11/12 m-5 bg-slate-900 rounded-lg shadow-md p-7">
            <h1  className=' font-extrabold text-xl antialiased'>Atividade 3 - JSX via children</h1>
            <CardProfile>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Mollitia dolorem odit alias officia qui quisquam cum repellat.
            Cumque molestiae tempora temporibus, in esse, fugiat delectus 
            voluptatum soluta aut voluptate beatae.</CardProfile>
        </div>
    )

}