export function NewComment() {
    return (
        <>
            <div className="w-full px-3 my-2">
        <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-900 focus:outline-none focus:bg-white"
            name="body" placeholder='Type Your Comment' required></textarea>
    </div>

    <div className="w-full flex justify-end px-3">
        <label className="text-slate-500 mx-4" htmlFor="username">User:</label>
        <input className="mx-2 px-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="text" name="username" id="username" placeholder="User"/>
        <input type='submit' className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value='Post Comment'/>
    </div>
    </>
    )
}