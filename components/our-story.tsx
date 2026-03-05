'use client'

import Image from 'next/image'
import { Leaf } from 'lucide-react'

export default function OurStory() {
    return (
        <section id="our-story" className="py-16 sm:py-24 bg-secondary/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Header */}
                <div className="text-center space-y-6">
                    <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest">Our Heritage</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                        The Soul of THE LUING VILLAGE
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        THE LUING VILLAGE is not just a name — it’s a living memory of our roots.
                    </p>
                </div>

                {/* Main Story: Logo left, Text right */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="relative aspect-square max-w-sm mx-auto md:mx-0 md:max-w-none w-full">
                        <Image
                            src="/logo2.png"
                            alt="THE LUING VILLAGE - Homestay & Glamping"
                            fill
                            className="object-contain rounded-2xl"
                            sizes="(max-width: 768px) 280px, 50vw"
                        />
                    </div>
                    <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                        <p>
                            Our story begins generations ago in the tranquil village of Lower Luing, Gangtok, where our ancestors settled and lived in harmony with the land. The home we welcome you to today stands proudly on a sunlit slope locally known as &quot;Dara&quot;, a peaceful hill above the village.
                        </p>
                        <p>
                            Our beloved father, lovingly known as Maila (the second son), built this house with care and vision. In the community, he was known as:
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground text-xl font-medium my-6">
                            &quot;Daraghar Maila&quot; — the man from the house on the hill.
                        </blockquote>
                        <p>
                            Today, we carry that legacy forward with love, inviting travelers to experience the same home, stories, and hospitality that shaped our family.
                        </p>
                    </div>
                </div>

                {/* About Sections Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                        <h3 className="text-xl font-bold mb-3 text-primary">Who is Maila?</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            “Maila” is the beloved name locals use for our father — the heart and soul of our homestay. His values and warmth inspire everything we do here.
                        </p>
                    </div>
                    <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                        <h3 className="text-xl font-bold mb-3 text-primary">What is Daraghar?</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            “Daraghar” refers to our ancestral home built on a slope (“Dara”). It represents generations of heritage, respect for land, and community living.
                        </p>
                    </div>
                    <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                        <h3 className="text-xl font-bold mb-3 text-primary">Why We Started</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            We created THE LUING VILLAGE to share our roots, stories, and the peaceful rhythm of Sikkimese village life with travelers from around the world.
                        </p>
                    </div>
                </div>

                {/* Why Stay With Us */}
                <div className="pt-8">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Why Stay With Us?</h3>
                        <p className="text-muted-foreground">
                            A stay at THE LUING VILLAGE is a chance to slow down, reconnect with nature, and experience village life with authenticity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "Peaceful & Plastic-Free Environment",
                            "Organic Sikkimese Cuisine",
                            "Local Tea Garden Walks",
                            "Temple Visit & Meditation Area",
                            "Bonfire, Karaoke & Board Games",
                            "Hammocks, Swings & Kids’ Playground",
                            "Cow & Goat Farm Watching",
                            "Local Guide Available on Request"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-background/50 p-4 rounded-xl border border-primary/10">
                                <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
