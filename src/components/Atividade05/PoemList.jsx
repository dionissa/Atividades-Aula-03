import { PoemCard } from "./PoemCard";

const poems = [
    {
        author: "Emily Dickinson",
        poem: `
            Hope is the thing with feathers
            That perches in the soul,
            And sings the tune without the words,
            And never stops at all,

            And sweetest in the gale is heard;
            And sore must be the storm
            That could abash the little bird
            That kept so many warm.

            I've heard it in the chillest land,
            And on the strangest sea;
            Yet, never, in extremity,
            It asked a crumb of me.
        `
    },
    {
        author: "Robert Frost",
        poem: `
            The woods are lovely, dark, and deep,
            But I have promises to keep,
            And miles to go before I sleep,
            And miles to go before I sleep.
        `
    },
    {
        author: "Maya Angelou",
        poem: `
            You may write me down in history
            With your bitter, twisted lies,
            You may tread me in the very dirt
            But still, like dust, I'll rise.
        `
    },
    {
        author: "Langston Hughes",
        poem: `
            What happens to a dream deferred?
            Does it dry up
            like a raisin in the sun?
            Or fester like a sore—
            And then run?
            Does it stink like rotten meat?
            Or crust and sugar over—
            like a syrupy sweet?

            Maybe it just sags
            like a heavy load.

            Or does it explode?
        `
    },
    {
        author: "Sylvia Plath",
        poem: `
            I am, I am, I am.
        `
    },
    {
        author: "Pablo Neruda",
        poem: `
            I do not love you as if you were salt-rose, or topaz,
            or the arrow of carnations the fire shoots off.
            I love you as certain dark things are to be loved,
            in secret, between the shadow and the soul.
        `
    },
    {
        author: "Rumi",
        poem: `
            Out beyond ideas of wrongdoing and rightdoing,
            there is a field. I'll meet you there.
            When the soul lies down in that grass,
            the world is too full to talk about.
            Ideas, language, even the phrase "each other"
            doesn't make any sense.
        `
    },
    {
        author: "Walt Whitman",
        poem: `
            I exist as I am, that is enough,
            If no other in the world be aware I sit content,
            And if each and all be aware I sit content.
        `
    },
    {
        author: "William Wordsworth",
        poem: `
            A host, of golden daffodils;
            Beside the lake, beneath the trees,
            Fluttering and dancing in the breeze.
        `
    },
    {
        author: "Robert Burns",
        poem: `
            My love is like a red, red rose
            That’s newly sprung in June:
            My love is like the melody
            That’s sweetly played in tune.
        `
    }
];

export function PoemList() {
    return (
        <div className='grid grid-cols-3 gap-10 my-3 px-2 py-6 rounded'>
        {poems.map(poem => (
            <PoemCard key={poem.author} poem={poem}/>
        ))}
        </div>
    )
    }

