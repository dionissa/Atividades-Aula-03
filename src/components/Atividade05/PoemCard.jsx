export function PoemCard({ poem }) {
    const lines = poem.poem.split('\n');
    for (let i = 2; i < lines.length - 1; i += 2) {
        lines.splice(i, 0, "<hr/>");
    }
    
    const poemWithHR = lines.join('');

    return (
        <div className="bg-slate-500 p-6 rounded-lg shadow-xl">
            <h1 className="text-4xl font-extrabold tracking-tighter">Author: {poem.author}</h1>
            <p dangerouslySetInnerHTML={{ __html: poemWithHR }} />
        </div>
    );
}
