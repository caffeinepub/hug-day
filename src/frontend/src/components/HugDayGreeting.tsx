function HugDayGreeting() {
    return (
        <div className="relative z-10 flex flex-col items-center px-4 pb-20">
            {/* Hero Emoji */}
            <div className="hero-emoji mt-10 text-[120px] sm:text-[160px] leading-none">
                🤗
            </div>

            {/* Card */}
            <div className="card-container mt-8 w-full max-w-[640px] rounded-[30px] px-6 py-8 sm:px-9 sm:py-10">
                <h1 className="text-2xl sm:text-3xl font-semibold text-hug-red mb-0">
                    🤗 Happy Hug Day, baby
                </h1>

                {/* Image */}
                <img
                    src="https://i.postimg.cc/ZYw99DbC/74018c00-f446-44c8-bc01-706f58bf9cf5.jpg"
                    alt="Hug Memory"
                    className="w-[65%] max-w-[260px] mx-auto my-5 rounded-[20px] shadow-image block"
                />

                {/* Message */}
                <p className="text-base sm:text-[17px] leading-[2.2] text-hug-text mt-5 italic whitespace-pre-line">
                    {`"Baby… 🤍

Hug Day makes me think of something so simple,  
but so deeply mine.  

Every single day after college,  
you would come to my house.  

I still remember the small pause before I opened the door.  
And the second it opened…  
you wouldn't say much.  

You would just pull me into your arms. 🤗  

And kiss my forehead like it was the most natural thing in the world.  

That moment — every day —  
was the best part of my day.  

No matter how tired I was,  
no matter how stressful things felt,  
no matter how heavy life seemed…  

that hug made everything lighter.  

It made me feel safe.  
It made me feel chosen.  
It made me feel like I belonged somewhere. 💗  

I never took that for granted.  
Not once.  

Because it wasn't dramatic.  
It wasn't a movie scene.  

It was real.  
It was us.  

And those small, ordinary, everyday hugs  
became some of the most extraordinary memories of my life. 🤍  

Some things stay warm in the heart,  
even when everything else changes."`}
                </p>

                {/* Signature */}
                <div className="signature mt-6 italic text-hug-signature">
                    Yours,
                    <br />
                    Baby 🤍
                </div>
            </div>
        </div>
    );
}

export default HugDayGreeting;
