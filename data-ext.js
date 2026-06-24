// EVRYWHR — extended content for Projects / Shop / Dispatches / Work views.
(function () {
  const E = window.EVRYWHR;

  // ---- Rich project detail, keyed by project id ----------------------------
  E.PROJECT_DETAIL = {
    gedo: {
      tagline: "Travel stories for people who believe the world is worth understanding, not just visiting.",
      year: "2023 — now", role: "Creators · Directors · Editors", location: "Everywhere",
      watch: "youtube.com/@go_everywhere_do_everything",
      logo: "assets/logo-variants/sage_98b672.png?v=2",
      cover: "assets/cover-gedo-logo.jpg?v=1",
      body: [
        "A travel channel built on curiosity. We take the questions people ask most about the world and turn each one into a journey."
      ],
      portrait: "assets/gede-stas-nick.jpg?v=2",
      storyTitle: "How it started",
      story: [
        { p: ["Before this channel existed, travel was our impossible dream."], drop: true },
        { p: ["Stas grew up in Kamchatka, Russia, and crossed the world alone at 15, which became her first big act of exploration. Nick grew up in the mountains of Ouray, Colorado, where the outdoors was his backyard. We met in college at UCSB, and Nick introduced Stas to hiking, camping, and ", { mark: "just how FREAKING EPIC the great outdoors is!!" }] },
        { p: ["For years, we dreamed of traveling the world together, but we couldn't freely leave the U.S. because of Stas's immigration status and worsening Russia/U.S. relations. Then life happened and pulled us to opposite sides of the country \u2014 Stas working 80-hour weeks as an auditor in SF & Nick protecting the oceans through policy in D.C. Still, whenever we could, we met somewhere in the middle for road trips, hikes, and little adventures that kept the dream alive."] },
        { p: ["One day, we were climbing Half Dome in Yosemite, exhausted and stupidly dehydrated. ", { aside: "(There\u2019s a whole hilarious story here involving a 5-day backpacking trip, lots of whiskey, running out of water & a sunrise summit \u2014 but that\u2019s a story for another time haha;)" }] },
        { p: ["That morning, standing on the granite rock with Yosemite Valley at our feet, everything became simple and clear for Nick. He didn't want Stas to fall ", { aside: "(yes, the man literally wrote this into his wedding vows)" }, " and that's when \u201che knew\u201d ", { aside: "(look, I think there are more poetic ways to confess one's love, but hey, I'll take it)." }] },
        { beat: "Long story short, we got married! Twice, lol. ANDDD Stas got a green card!!" },
        { p: ["For the first time, traveling abroad together was actually possible. So we planned a wildly ambitious, financially-irresponsible-in-the-best-way honeymoon. The catch? As a green card holder, Stas couldn't be out of the U.S. for too long without risking issues with residency. So we squeezed ", { mark: "10 countries across 3 continents into 3 months" }, " and decided to document the whole thing."] },
        { beat: "That's how this channel began." },
        { p: ["Now, we use travel as a way to ask bigger questions and tell stories that help curious people understand the world more deeply \u2014 one place, one question, and one perspective shift at a time."] },
        { p: ["So if you're curious about the world, love a good adventure, or just want to see where this journey takes us next, we'd love to have you along. Welcome to the channel."] }
      ],
      gallery: [], hasVideo: true
    },
    corcovado: {
      tagline: "Into a place that refuses to be background.",
      year: "2024", role: "Travel film · Photography", location: "Corcovado N.P., Costa Rica · 8.5°N 83.6°W",
      watch: "Watch the film",
      body: [
        "Can you experience the Rainforest the way it's shown in nature documentaries? Spend 3 days exploring Costa Rica's most biodiverse rainforest with a local conservationist tracking endangered tapirs and rare wildlife."
      ],
      gallery: ["TAPIR · RIVER BEND", "CANOPY · DAWN", "THE CONSERVATIONIST", "MACRO · TREE FROG"], hasVideo: true, youtube: "8VZ0bVINwxo", cover: "assets/cover-corcovado.png",
      shorts: [
        { url: "https://www.tiktok.com/t/ZP8sGscKr/", label: "TikTok · 01" },
        { url: "https://www.tiktok.com/t/ZP8sGfegq/", label: "TikTok · 02" },
        { url: "https://www.tiktok.com/t/ZP8sGqswP/", label: "TikTok · 03" },
        { url: "https://www.tiktok.com/t/ZP8sGsr92/", label: "TikTok · 04" },
        { url: "https://www.tiktok.com/t/ZP8sGyosG/", label: "TikTok · 05" }
      ],
      mosaic: [
        { t: "lead", text: "Can you experience the Rainforest the way it's shown in nature documentaries? Spend 3 days exploring Costa Rica's most biodiverse rainforest with a local conservationist tracking endangered tapirs and rare wildlife.", c: 5, r: 6 },
        { t: "photo", src: "assets/corcovado/macaws.jpg?v=1", alt: "Scarlet macaws perched in a tree", caption: "Scarlet macaws · the canopy", c: 7, r: 6 },

        { t: "short", i: 0, c: 4, r: 11 },
        { t: "photo", src: "assets/corcovado/caiman.jpg?v=1", alt: "Spectacled caiman half-submerged in river mud", caption: "Spectacled caiman · river mud", c: 8, r: 6 },
        { t: "photo", src: "assets/corcovado/iguana.jpg?v=1", alt: "Green iguana resting on a palm frond", caption: "Green iguana · palm frond", c: 8, r: 5 },

        { t: "photo", src: "assets/corcovado/tamandua.jpg?v=1", alt: "Tamandua anteater in the palm canopy", caption: "Tamandua · up in the palms", c: 6, r: 6 },
        { t: "photo", src: "assets/corcovado/toucan.jpg?v=1", alt: "Yellow-throated toucan on a branch", caption: "Yellow-throated toucan", c: 6, r: 6 },

        { t: "photo", src: "assets/corcovado/coati.jpg?v=1", alt: "Coati foraging on the forest floor", caption: "Coati · forest floor", c: 4, r: 11 },
        { t: "quote", q: "To feel the magic, you have to slow down and let the forest reveal itself.", bg: "accent", c: 4, r: 11 },
        { t: "short", i: 1, c: 4, r: 11 },

        { t: "photo", src: "assets/corcovado/plane.jpg?v=1", alt: "Wreck of a small plane being reclaimed by the jungle", caption: "The wreck the forest is eating", c: 7, r: 6 },
        { t: "photo", src: "assets/corcovado/ants.jpg?v=1", alt: "Leafcutter ants carrying leaf fragments along a rail", caption: "Leafcutter ants · the highway", c: 5, r: 6 },

        { t: "photo", src: "assets/corcovado/snake.jpg?v=1", alt: "Tiger rat snake coiled on vines", caption: "Tiger rat snake · climbing", c: 4, r: 11 },
        { t: "short", i: 2, c: 4, r: 11 },
        { t: "photo", src: "assets/corcovado/berries.jpg?v=1", alt: "Pokeweed berries on a pink stem, macro", caption: "Pokeweed · macro", c: 4, r: 11 },

        { t: "photo", src: "assets/corcovado/river.jpg?v=1", alt: "River mouth lined with mangrove and jungle", caption: "River mouth · mangrove edge", c: 12, r: 6 },

        { t: "short", i: 3, c: 4, r: 11 },
        { t: "photo", src: "assets/corcovado/guide.jpg?v=1", alt: "Conservationist talking with Nick on a riverbank", caption: "The conservationist · riverbank", c: 4, r: 11 },
        { t: "quote", q: "Sometimes when you haven't had Wi-Fi for a while, even just watching something roll over during a midday nap can feel exciting.", c: 4, r: 11 },

        { t: "photo", src: "assets/corcovado/mushrooms.jpg?v=1", alt: "Tiny orange bonnet mushrooms on a mossy log", caption: "Bonnet mushrooms · deadfall", c: 6, r: 6 },
        { t: "photo", src: "assets/corcovado/rain.jpg?v=1", alt: "Family watching the afternoon rain from a covered porch", caption: "Waiting out the afternoon rain", c: 6, r: 6 },

        { t: "photo", src: "assets/corcovado/fig.jpg?v=1", alt: "Two people dwarfed by an enormous strangler fig", caption: "Strangler fig · for scale", c: 4, r: 11 },
        { t: "photo", src: "assets/corcovado/sunset.jpg?v=1", alt: "Drift logs silhouetted against a beach sunset", caption: "Drift logs · last light", c: 8, r: 6 },
        { t: "photo", src: "assets/corcovado/camp.jpg?v=1", alt: "Beach camp fire under a pink sky", caption: "Camp fire · pink hour", c: 8, r: 5 },

        { t: "photo", src: "assets/corcovado/sign.jpg?v=1", alt: "Standing at the Parque Nacional Corcovado entrance sign", caption: "Parque Nacional Corcovado", c: 12, r: 6 },

        { t: "photo", src: "assets/corcovado/mural.jpg?v=1", alt: "Town mural with a bottle-cap rainbow and a giving shelf", caption: "Para Regalar · town mural", c: 4, r: 11 },
        { t: "quote", q: "It feels a lot more like a hot forest than a scene from National Geographic.", c: 4, r: 11 },
        { t: "short", i: 4, c: 4, r: 11 }
      ]
    },
    dagestan: {
      tagline: "Past the headline version of a place.",
      intro: "Deep in the Caucasus, a region the outside world has barely seen in a hundred years — rugged, misunderstood, and far warmer than its reputation.",
      year: "2024", role: "Documentary · Photography", location: "Dagestan, Russia · 43.0°N 47.5°E",
      watch: "Watch the documentary", hasPlaylist: true,
      body: [
        "Stas and Nick take you deep into the rugged and misunderstood Dagestan, a region in the Caucasus Mountains that has remained largely hidden from the outside world for the last 100 years."
      ],
      quotes: [
        "You know, one of my biggest fears is if we die on a hike, my mom will tell everyone that we died on an easy hike, like we told her.",
        "You can't come to Dagestan to diet.",
        "Seems like tourism is just getting started in Dagestan right as many of the old mountain towns are breathing their last breath…"
      ],
      gallery: ["MOUNTAIN VILLAGE", "THE ROAD", "PORTRAIT · ELDER", "GUNIB AT DUSK"], hasVideo: true, youtube: "SIHo3f-Mq5U", cover: "assets/cover-dagestan.png",
      shorts: [
        { id: "7584961308605336862", url: "https://www.tiktok.com/@go3verywheredo3verything/video/7584961308605336862", label: "TikTok · 01" },
        { id: "7585722193636642079", url: "https://www.tiktok.com/@go3verywheredo3verything/video/7585722193636642079", label: "TikTok · 02" },
        { id: "7592701754190368030", url: "https://www.tiktok.com/@go3verywheredo3verything/video/7592701754190368030", label: "TikTok · 03" },
        { id: "7606501765504191775", url: "https://www.tiktok.com/@go3verywheredo3verything/video/7606501765504191775", label: "TikTok · 04" },
        { id: "7586360403685379358", url: "https://www.tiktok.com/@go3verywheredo3verything/video/7586360403685379358", label: "TikTok · 05" }
      ],
      mosaic: [
        { t: "quote", q: "You can't come to Dagestan to diet.", bg: "accent", c: 4, r: 11 },
        { t: "photo", src: "assets/dagestan/d2797.jpg?v=1", c: 4, r: 11 },
        { t: "short", i: 0, c: 4, r: 11 },

        { t: "short", i: 1, c: 4, r: 11 },
        { t: "photo", src: "assets/dagestan/d2826.jpg?v=1", c: 8, r: 6 },
        { t: "photo", src: "assets/dagestan/d2978.jpg?v=1", c: 8, r: 5 },

        { t: "photo", src: "assets/dagestan/d3062.jpg?v=1", c: 6, r: 6 },
        { t: "photo", src: "assets/dagestan/d3085.jpg?v=1", c: 6, r: 6 },

        { t: "photo", src: "assets/dagestan/d3011.jpg?v=1", c: 4, r: 11 },
        { t: "quote", q: "One of my biggest fears is if we die on a hike, my mom will tell everyone we died on an easy hike — like we told her.", c: 4, r: 11 },
        { t: "short", i: 2, c: 4, r: 11 },

        { t: "photo", src: "assets/dagestan/d3107.jpg?v=1", c: 7, r: 6 },
        { t: "photo", src: "assets/dagestan/d3146.jpg?v=1", c: 5, r: 6 },

        { t: "short", i: 3, c: 4, r: 11 },
        { t: "photo", src: "assets/dagestan/d3157.jpg?v=1", c: 8, r: 6 },
        { t: "photo", src: "assets/dagestan/d3208.jpg?v=1", c: 8, r: 5 },

        { t: "photo", src: "assets/dagestan/d2818.jpg?v=1", caption: "Tobot waterfall, Khunzakh", c: 12, r: 6 },

        { t: "photo", src: "assets/dagestan/d3258.jpg?v=1", c: 4, r: 11 },
        { t: "short", i: 4, c: 4, r: 11 },
        { t: "quote", q: "Tourism is just getting started in Dagestan, right as many of the old mountain towns are breathing their last breath.", c: 4, r: 11 },

        { t: "photo", src: "assets/dagestan/d3310.jpg?v=1", c: 6, r: 6 },
        { t: "photo", src: "assets/dagestan/d3372.jpg?v=1", c: 6, r: 6 },

        { t: "photo", src: "assets/dagestan/d3355.jpg?v=1", c: 4, r: 11 },
        { t: "photo", src: "assets/dagestan/d3486.jpg?v=1", caption: "Stalin still stands in Chokh", c: 8, r: 6 },
        { t: "photo", src: "assets/dagestan/d3519.jpg?v=1", c: 8, r: 5 },

        { t: "photo", src: "assets/dagestan/d3541.jpg?v=1", c: 6, r: 6 },
        { t: "photo", src: "assets/dagestan/d3568.jpg?v=1", c: 6, r: 6 },

        { t: "photo", src: "assets/dagestan/d3601.jpg?v=1", c: 6, r: 11 },
        { t: "photo", src: "assets/dagestan/d3537.jpg?v=1", c: 6, r: 11 },

        { t: "photo", src: "assets/dagestan/d3624.jpg?v=1", c: 12, r: 6 }
      ]
    },
    michoacan: {
      tagline: "A place seen through craft, ritual, color, and complexity.",
      intro: "A fascinating look at the intersection of political conflict and natural beauty. Embark on a road trip along the coast of Michoacán, Mexico — a state under a Level 4 travel advisory due to cartel violence — for a rare glimpse into a region that most people are too afraid to visit.",
      year: "2024", role: "Travel film", location: "Maruata, Michoacán · 18.3°N 103.3°W",
      watch: "Watch the film",
      body: [
        "A fascinating look at the intersection of political conflict and natural beauty. Stas and Nick embark on a road trip along the coast of Michoacán, Mexico — a state under a Level 4 travel advisory due to cartel violence — to provide a rare glimpse into a region that most people are too afraid to visit."
      ],
      quotes: [
        "Once you trade away a place like this, it's unlikely you or your descendants would ever be able to live somewhere this spectacular again. The longer you spend here, the easier it is to understand. The land is everything.",
        "The truth is, if you don't go looking for trouble on the coast of Michoacán, you probably won't find any. As outsiders with the passport and privilege of the world's primary superpower, we're unlikely to be bothered here. The real danger here is for locals who can't leave easily.",
        "If you can brush aside the security concerns, Michoacán has some of the most incredible beaches I've ever seen."
      ],
      gallery: ["COASTAL VILLAGE", "THE HIGHWAY", "FISHERMAN · DAWN"], hasVideo: true, youtube: "1a1SQ951wfw", cover: "assets/cover-michoacan.png",
      shorts: [
        { url: "https://www.tiktok.com/t/ZP8svDkuC/", label: "TikTok · 01" },
        { url: "https://www.tiktok.com/t/ZP8svBgeE/", label: "TikTok · 02" },
        { url: "https://www.tiktok.com/t/ZP8svhYhy/", label: "TikTok · 03" }
      ],
      mosaic: [
        { t: "photo", src: "assets/michoacan/aerial-cove.jpg?v=1", alt: "Aerial view of a cove with cliff-top palapas above a curving beach", caption: "The cove from above · palapas on the headland", c: 12, r: 6 },

        { t: "photo", src: "assets/michoacan/palm-boat.jpg?v=1", alt: "A leaning palm over a beached panga and a palm-thatched kitchen", caption: "A leaning palm over the panga and the palapa kitchen", pos: "center 60%", c: 4, r: 11 },
        { t: "quote", q: "If you don't go looking for trouble on the Michoacán coast, you probably won't find any. The real danger is for locals who can't leave easily.", c: 4, r: 11 },
        { t: "short", i: 0, c: 4, r: 11 },

        { t: "photo", src: "assets/michoacan/hammocks.jpg?v=1", alt: "Hammocks strung under a driftwood shelter on a headland above the bay", caption: "Hammocks strung on the headland, the bay on both sides", c: 12, r: 6 },

        { t: "quote", q: "Once you trade away a place like this, it's unlikely you'd ever live somewhere this spectacular again. The land is everything.", bg: "accent", c: 4, r: 11 },
        { t: "photo", src: "assets/michoacan/wave-cactus.jpg?v=1", alt: "A breaking wave seen through the blurred ribs of a tall cardón cactus", caption: "A set wave, seen through the cardón cactus", pos: "center 40%", c: 4, r: 11 },
        { t: "short", i: 1, c: 4, r: 11 },

        { t: "photo", src: "assets/michoacan/surfer.jpg?v=1", alt: "Aerial of a surfer crossing wide black sand toward a palm-lined village", caption: "Black sand, a board, and the long walk home", c: 12, r: 6 },

        { t: "short", i: 2, c: 4, r: 11 },
        { t: "photo", src: "assets/michoacan/egrets.jpg?v=1", alt: "Two snowy egrets working the foam line on golden sand", caption: "Snowy egrets working the foam line at golden hour", pos: "center 55%", c: 4, r: 11 },
        { t: "quote", q: "If you can brush aside the security concerns, Michoacán has some of the most incredible beaches I've ever seen.", c: 4, r: 11 }
      ]
    },
    polynesia: {
      tagline: "What changes when water is not the edge of life, but the center of it?",
      year: "2025", role: "Film · Photo series", location: "French Polynesia · 17.6°S 149.5°W",
      watch: "Watch the Rangiroa doc", hasPlaylist: true,
      body: [
        "A captivating travel documentary that takes you to Rangiroa, a remote coral atoll in French Polynesia that feels worlds away from the typical honeymoon resort clichés. It's an authentic, raw look at what it's actually like to live on a thin ring of coral that is 95% water and relies entirely on rainwater collection."
      ],
      quotes: [
        "Outside of space, I doubt there's anywhere better suited to contemplating the abyss than the ocean. The world is getting smaller every day… but being in the ocean will always make you feel small and lost.",
        "Sharks represent the mana or power of the ocean in Polynesian folklore. It's easy to see why. They're powerful and mysterious and indifferent to our presence, just like the ocean.",
        "After seeing the raw beauty of this place and all the animals that live here, I was starting to think less about how Rangiroa is different from the rest of the world and more about how the rest of the world should be like Rangiroa."
      ],
      gallery: ["RANGIROA LAGOON", "MOOREA · RAYS", "SHARK · SHALLOWS", "TEAHUPO'O"], hasVideo: true, youtube: "wUjesYXCq-k", cover: "assets/cover-polynesia.png",
      shorts: [
        { id: "7574463657086569758", url: "https://www.tiktok.com/t/ZP8spHHkd/", label: "Teahupo'o" },
        { id: "7564479365065493791", url: "https://www.tiktok.com/t/ZP8spt9YB/", label: "Va'a fishing · Moorea" },
        { id: "7559363081642544414", url: "https://www.tiktok.com/t/ZP8spQ51e/", label: "Crossing paths" },
        { id: "7558985955378564382", url: "https://www.tiktok.com/t/ZP8spENGm/", label: "Underwater rollercoaster" },
        { id: "7562238807249063199", url: "https://www.tiktok.com/t/ZP8spbwxU/", label: "Chose violence" },
        { id: "7567130411625712926", url: "https://www.tiktok.com/t/ZP8spCGYt/", label: "Giant eels" },
        { id: "7577440002053786911", url: "https://www.tiktok.com/t/ZP8spQtC5/", label: "Breadfruit" }
      ],
      mosaic: [
        { t: "lead", text: "On a thin ring of coral that is 95% water, life doesn't happen beside the ocean — it happens inside it.", c: 5, r: 6 },
        { t: "photo", src: "assets/polynesia/DSCF0123.jpg?v=1", alt: "Moorea peaks in morning mist", caption: "Moorea's jagged spires in the morning mist", c: 7, r: 6 },

        { t: "short", i: 0, c: 4, r: 11 },
        { t: "photo", src: "assets/polynesia/DSCF0928.jpg?v=1", alt: "Stas at St. Joseph church", caption: "Stas at St. Joseph church, Moorea", c: 4, r: 11 },
        { t: "quote", q: "Sharks are powerful, mysterious, and indifferent to our presence — just like the ocean.", bg: "accent", c: 4, r: 11 },

        { t: "photo", src: "assets/polynesia/DSCF0940.jpg?v=1", alt: "Sailboats at golden hour", caption: "Sailboats at golden hour", c: 6, r: 6 },
        { t: "photo", src: "assets/polynesia/DSCF0842.jpg?v=1", alt: "Waterfront picnic tables", caption: "A waterfront picnic under a lit ridgeline", c: 6, r: 6 },

        { t: "photo", src: "assets/polynesia/DSCF0601.jpg?v=1", alt: "Low tide on the sand", caption: "Low tide, nowhere to be", c: 4, r: 11 },
        { t: "short", i: 1, c: 4, r: 11 },
        { t: "photo", src: "assets/polynesia/DSCF0766.jpg?v=1", alt: "Palm frond over water", caption: "A palm frond over clear water", c: 4, r: 11 },

        { t: "photo", src: "assets/polynesia/DSCF0905.jpg?v=1", alt: "Green walls of Moorea", caption: "Green walls of Moorea over the lagoon", c: 12, r: 6 },

        { t: "photo", src: "assets/polynesia/DSCF0700.jpg?v=1", alt: "Leaning palms and a chair", caption: "Leaning palms, a chair, the lagoon", c: 4, r: 11 },
        { t: "quote", q: "Nowhere is better suited to contemplating the abyss than the ocean.", c: 4, r: 11 },
        { t: "short", i: 3, c: 4, r: 11 },

        { t: "quote", q: "I stopped asking how Rangiroa is different from the world, and started thinking the world should be more like it.", c: 5, r: 6 },
        { t: "photo", src: "assets/polynesia/turtle.jpg?v=1", alt: "Nick diving with a sea turtle", caption: "Nick diving with a green sea turtle", c: 7, r: 6 },

        { t: "short", i: 2, c: 4, r: 11 },
        { t: "photo", src: "assets/polynesia/DSCF0664.jpg?v=1", alt: "The dive boat at its mooring", caption: "The dive boat at its mooring", c: 4, r: 11 },
        { t: "photo", src: "assets/polynesia/DSCF0945.jpg?v=1", alt: "Sunset over the shallows", caption: "Sunset over the shallows", c: 4, r: 11 },

        { t: "photo", src: "assets/polynesia/DSCF1628-2.jpg?v=1", alt: "The lineup at Teahupo'o", caption: "The lineup at Teahupo'o", c: 12, r: 6 },

        { t: "photo", src: "assets/polynesia/DSCF0867.jpg?v=1", alt: "Lagoon framed in blossoms", caption: "Lagoon framed in blue blossoms", c: 6, r: 6 },
        { t: "photo", src: "assets/polynesia/DSCF0884.jpg?v=1", alt: "The road to Mont Mouaroa", caption: "The road to Mont Mouaroa", c: 6, r: 6 },

        { t: "photo", src: "assets/polynesia/DSCF1135.jpg?v=1", alt: "Lantana on the roadside", caption: "Lantana on the roadside", c: 4, r: 11 },
        { t: "short", i: 4, c: 4, r: 11 },
        { t: "photo", src: "assets/polynesia/DSCF0799.jpg?v=1", alt: "Wing over the reef", caption: "Wing over the reef", c: 4, r: 11 },

        { t: "photo", src: "assets/polynesia/DSCF0530.jpg?v=1", alt: "A shack at the end of the sand", caption: "A shack at the end of the sand", c: 6, r: 6 },
        { t: "photo", src: "assets/polynesia/DSCF0639.jpg?v=1", alt: "Us on the beach", caption: "Us, somewhere on the beach", c: 6, r: 6 },

        { t: "short", i: 5, c: 4, r: 11 },
        { t: "photo", src: "assets/polynesia/DSCF0101.jpg?v=1", alt: "Nick in the shade of a rain tree", caption: "Nick in the shade of a rain tree", c: 4, r: 11 },
        { t: "short", i: 6, c: 4, r: 11 },

        { t: "photo", src: "assets/polynesia/DSCF1807.jpg?v=1", alt: "Inside the wave at Teahupo'o", caption: "Inside the wave · Teahupo'o", c: 6, r: 6 },
        { t: "photo", src: "assets/polynesia/DSCF2262.jpg?v=1", alt: "An atoll from the air", caption: "An atoll from the air", c: 6, r: 6 }
      ]
    },
    puravida: {
      tagline: "Past the postcard, looking for the real thing.",
      year: "2024", role: "Travel film", location: "Costa Rica · 9.7°N 84.0°W",
      watch: "Watch the film",
      body: [
        "From white-water rafting mishaps to up-close wildlife encounters and moments that seriously tested our sanity, this cinematic adventure goes way beyond the tourist trail. Here's the raw truth behind Costa Rica's most famous phrase, told through unfiltered adventure, local culture, and the unexpected."
      ],
      gallery: ["COAST · MORNING", "MARKET · TOWN", "JUNGLE ROAD"], hasVideo: true, youtube: "qlxitISJesQ", cover: "assets/cover-puravida.png",
      quotes: [
        "Pura Vida doesn't mean everything is chill. It means life is messy, unpredictable… and sometimes a crocodile shows up at sunset.",
        "In today's world, it feels like a privilege to experience truly wild places.",
        "The plan was perfectly planned. I just didn't plan on ants ruining it.",
        "Driving takes longer, but that's when you start to notice things."
      ],
      shorts: [
        { url: "https://www.tiktok.com/t/ZP8stY3FB/", label: "TikTok · 01" },
        { url: "https://www.tiktok.com/t/ZP8sGKmqQ/", label: "TikTok · 02" },
        { url: "https://www.tiktok.com/t/ZP8st8DjE/", label: "TikTok · 03" },
        { url: "https://www.tiktok.com/t/ZP8strpEu/", label: "TikTok · 04" }
      ],
      mosaic: [
        { t: "lead", text: "Here's the raw truth behind Costa Rica's most famous phrase. From white-water rafting mishaps to up-close wildlife encounters and moments that seriously tested our sanity, this cinematic adventure goes way beyond the tourist trail.", c: 5, r: 6 },
        { t: "photo", src: "assets/puravida/pv-dscf6015.jpg?v=1", alt: "Beach camp with a palm-thatch shelter and bonfire under a pink sky", caption: "Camp fire · pink hour", c: 7, r: 6 },

        { t: "short", i: 0, c: 4, r: 11 },
        { t: "photo", src: "assets/puravida/pv-dscf6005.jpg?v=1", alt: "Red, blue and yellow plastic chairs under jungle trees", caption: "Plastic chairs · waiting on no one", c: 4, r: 11 },
        { t: "quote", q: "Pura Vida doesn't mean everything is chill. It means life is messy, unpredictable… and sometimes a crocodile shows up at sunset.", bg: "accent", c: 4, r: 11 },

        { t: "photo", src: "assets/puravida/pv-dscf5875.jpg?v=1", alt: "Man reading at a picnic table on a covered terrace above a cloud-filled valley", caption: "Morning on the deck · valley in cloud", c: 7, r: 6 },
        { t: "photo", src: "assets/puravida/pv-dscf5883.jpg?v=1", alt: "Hands holding a Costa Rican 2000-colón note showing a reef shark", caption: "The 2000-colón reef shark", c: 5, r: 6 },

        { t: "short", i: 1, c: 4, r: 11 },
        { t: "photo", src: "assets/puravida/pv-dscf6009.jpg?v=1", alt: "Dramatic orange sunset over the ocean with silhouetted figures on the beach", caption: "Sunset — and a crocodile somewhere", c: 8, r: 6 },
        { t: "photo", src: "assets/puravida/pv-dscf5988.jpg?v=1", alt: "Family on the beach at dusk, a child on someone's shoulders", caption: "Last light · the family swim", c: 8, r: 5 },

        { t: "photo", src: "assets/puravida/pv-dscf5905.jpg?v=1", alt: "A lone dog at low tide below a jungle headland", caption: "Low tide · one dog, one headland", c: 6, r: 6 },
        { t: "photo", src: "assets/puravida/pv-dscf5973.jpg?v=1", alt: "Brindle dog lying in a lagoon with sun bursting through the palms", caption: "River-mouth dog · sun through the palms", c: 6, r: 6 },

        { t: "photo", src: "assets/puravida/pv-img1716.jpg?v=1", alt: "A cat-eyed snake in the foliage seen through a spotting scope", caption: "Cat-eyed snake · through the scope", c: 4, r: 11 },
        { t: "quote", q: "In today's world, it feels like a privilege to experience truly wild places.", c: 4, r: 11 },
        { t: "short", i: 2, c: 4, r: 11 },


        { t: "photo", src: "assets/puravida/pv-img1893.jpg?v=1", alt: "Hand holding a plate of halved passion fruit in front of the jungle", caption: "Maracuyá, straight off the vine", c: 4, r: 11 },
        { t: "photo", src: "assets/puravida/pv-dscf5880.jpg?v=1", alt: "Mountain village above the clouds, power lines and a tin-roof house", caption: "Above the clouds · wires and tin", c: 8, r: 6 },
        { t: "photo", src: "assets/puravida/pv-dsc019712.jpg?v=1", alt: "Chestnut-mandibled toucan silhouetted on a branch with the gulf behind", caption: "Chestnut-mandibled toucan · the gulf behind", c: 8, r: 5 },

        { t: "photo", src: "assets/puravida/pv-dscf5845.jpg?v=1", alt: "Brown river rushing through a misty jungle valley", caption: "The river, the morning after rain", c: 7, r: 6 },
        { t: "photo", src: "assets/puravida/pv-dscf5884.jpg?v=1", alt: "Bare foot in a sandal with a swollen bug bite, on river gravel", caption: "The ant bite, for the record", c: 5, r: 6 },

        { t: "short", i: 3, c: 4, r: 11 },
        { t: "photo", src: "assets/puravida/pv-img3492.jpg?v=1", alt: "Person climbing a palm tree leaning out over the surf", caption: "The leaning palm · everyone's photo", c: 4, r: 11 },
        { t: "quote", q: "The plan was perfectly planned. I just didn't plan on ants ruining it.", c: 4, r: 11 },

        { t: "photo", src: "assets/puravida/pv-dscf6485.jpg?v=1", alt: "Two of the crew hiking a jungle trail carrying a tripod past bird's-nest ferns", caption: "The crew · tripod down the trail", c: 4, r: 11 },
        { t: "quote", q: "Driving takes longer, but that's when you start to notice things.", c: 4, r: 11 },
        { t: "photo", src: "assets/puravida/pv-dscf5725.jpg?v=1", alt: "Dark cabin interior looking out through a screen wall to the river and jungle", caption: "The cabin · river on the doorstep", c: 4, r: 6 },
        { t: "photo", src: "assets/puravida/pv-dscf5838.jpg?v=1", alt: "Golden orb-weaver spider in its web at night", caption: "Golden orb-weaver · after dark", c: 4, r: 5 }
      ]
    },
    moscow: {
      tagline: "The everyday city behind the headlines.",
      year: "2024", role: "Documentary", location: "Moscow, Russia · 55.8°N 37.6°E",
      watch: "Watch the documentary",
      body: [
        "Ever wonder what life in Moscow is actually like, beyond the headlines and the stereotypes? In this cinematic journey, we pull back the iron curtain to reveal a city that is far more vibrant, chaotic, and human than the news would have you believe."
      ],
      quotes: [
        { t: "Russia is a riddle wrapped in a mystery inside an enigma.", by: "Winston Churchill" },
        "Like a lot of Russian history, it doesn't always make sense, but it doesn't have to.",
        "In Russia, grass is just for looking. It's a nice thing and if you sit on it or walk on it, you're going to mess it up. So, don't do it if you ever come to Russia."
      ],
      gallery: ["METRO · PLATFORM", "RED SQUARE · DUSK", "STREET · WINTER"], hasVideo: true, youtube: "_Pfh3mDZYVk", cover: "assets/cover-moscow.png",
      shorts: [
        { id: "7580108272833744158", url: "https://www.tiktok.com/@go3verywheredo3verything/video/7580108272833744158", label: "TikTok · 01" },
        { id: "7581217079496428830", url: "https://www.tiktok.com/@go3verywheredo3verything/video/7581217079496428830", label: "TikTok · 02" },
        { id: "7584164354971503902", url: "https://www.tiktok.com/@go3verywheredo3verything/video/7584164354971503902", label: "TikTok · 03" }
      ],
      flow: null,
      mosaic: [
        { t: "short", i: 0, c: 4, r: 11 },
        { t: "photo", src: "assets/moscow/selfie.jpg?v=1", alt: "Stas and Nick in Red Square", caption: "Red Square · St. Basil's behind us", c: 4, r: 11 },
        { t: "quote", q: "Russia is a riddle wrapped in a mystery inside an enigma.", by: "Winston Churchill", bg: "accent", c: 4, r: 11 },
        { t: "lead", text: "Beyond the headlines — a city far more vibrant, chaotic, and human than the news would have you believe.", c: 5, r: 6 },
        { t: "photo", src: "assets/moscow/church.jpg?v=1", alt: "Church of St. Clement", caption: "Baroque red · Church of St. Clement", c: 7, r: 6 },
        { t: "photo", src: "assets/moscow/metro.jpg?v=1", alt: "Komsomolskaya metro station", caption: "Komsomolskaya — the Metro as a palace", c: 4, r: 11 },
        { t: "short", i: 1, c: 4, r: 11 },
        { t: "quote", q: "Like a lot of Russian history, it doesn't always make sense — but it doesn't have to.", c: 4, r: 11 },
        { t: "photo", src: "assets/moscow/museum-night.jpg?v=1", alt: "State Historical Museum at night", caption: "The State Historical Museum, after dark", c: 6, r: 6 },
        { t: "photo", src: "assets/moscow/tower-moon.jpg?v=1", alt: "A Stalin skyscraper under a full moon", caption: "A full moon over one of the Seven Sisters", c: 6, r: 6 },
        { t: "quote", q: "In Russia, grass is just for looking. Sit on it or walk on it and you'll mess it up — so don't, if you ever come.", c: 4, r: 11 },
        { t: "photo", src: "assets/moscow/poster-wall.jpg?v=1", alt: "Old brick wall with a Russian fairy-tale poster", caption: "Old brick, new stories · Winzavod", c: 4, r: 11 },
        { t: "short", i: 2, c: 4, r: 11 }
      ]
    },
    hagiang: {
      tagline: "Three days, two wheels, one mountain loop.",
      intro: "Two wheels through the switchbacks, villages, and river valleys of Vietnam's wild north — the Ha Giang Loop, mud, weather and all.",
      year: "2024", role: "Travel film", location: "Ha Giang, Vietnam · 23.1°N 105.0°E",
      watch: "Watch the film",
      body: [],
      quotes: [
        "We wanted adventure. The kind you can't plan for. The kind that leaves you different than when you started.",
        "What doesn't kill you makes you stronger, right?",
        "The towering limestone mountains of Ha Giang are over 400 million years old. Once part of a prehistoric ocean, they've been eroded into dramatic cliffs and deep valleys."
      ],
      gallery: [], hasVideo: true, youtube: "PR6luikNSjk", cover: "assets/cover-hagiang.png",
      shorts: [
        { url: "https://www.tiktok.com/t/ZP8stuy4S/", label: "TikTok · 01" },
        { url: "https://www.tiktok.com/t/ZP8stS9wQ/", label: "TikTok · 02" }
      ],
      mosaic: [
        { t: "photo", src: "assets/hagiang/h-road-sunset.jpg?v=1", alt: "Winding mountain road at sunset with layered ranges", caption: "The pass at sunset · switchbacks for days", c: 12, r: 6 },

        { t: "lead", text: "Two wheels through the switchbacks, villages, and river valleys of Vietnam's wild north.", c: 4, r: 11 },
        { t: "photo", src: "assets/hagiang/h-0098.jpg?v=1", alt: "A lone house in a karst valley with a dirt road", caption: "A lone house deep in the karst valley", c: 4, r: 11 },
        { t: "short", i: 0, c: 4, r: 11 },

        { t: "photo", src: "assets/hagiang/h-6145.jpg?v=1", alt: "Hanoi Train Street at night with lanterns and neon", caption: "Hanoi Train Street · waiting for the 7:45", c: 12, r: 6 },

        { t: "quote", q: "What doesn't kill you makes you stronger, right?", bg: "accent", c: 4, r: 11 },
        { t: "photo", src: "assets/hagiang/h-terraces-tall.jpg?v=1", alt: "Rice terraces cascading down to a valley road", caption: "Rice terraces cascading to the road", c: 4, r: 11 },
        { t: "photo", src: "assets/hagiang/h-9926.jpg?v=1", alt: "Motorbike POV on a rocky dirt trail toward a mountain", caption: "Two wheels, one very bad road", c: 4, r: 11 },

        { t: "photo", src: "assets/hagiang/h-9164.jpg?v=1", alt: "Layered blue mountain ranges fading into haze at dusk", caption: "Layered ranges fading into the haze", c: 12, r: 6 },

        { t: "short", i: 1, c: 4, r: 11 },
        { t: "photo", src: "assets/hagiang/h-0259.jpg?v=1", alt: "Farmhouses and cornfields tucked beneath green peaks", caption: "Farmhouses tucked under the green peaks", c: 4, r: 11 },
        { t: "quote", q: "We wanted adventure. The kind you can't plan for. The kind that leaves you different than when you started.", c: 4, r: 11 },

        { t: "photo", src: "assets/hagiang/h-9956.jpg?v=1", alt: "Two bowls of Vietnamese fish noodle soup on a stone table", caption: "Bún cá · breakfast on the road", c: 4, r: 11 },
        { t: "quote", q: "The limestone mountains of Ha Giang are over 400 million years old — once a prehistoric ocean, eroded into cliffs and deep valleys.", c: 4, r: 11 },
        { t: "photo", src: "assets/hagiang/h-9973.jpg?v=1", alt: "Wide view of rice terraces and the winding road threading them", caption: "Terraces, and the road that threads them", c: 4, r: 11 }
      ]
    },
    dutch: {
      tagline: "What actually sits under all that happiness?",
      intro: "A travel documentary attempting to understand the Dutch mindset and why the country consistently ranks as one of the happiest in the world.",
      year: "2025", role: "Travel film", location: "Netherlands · 52.4°N 4.9°E",
      watch: "Watch the film",
      body: [],
      quotes: [
        "Gezellig is one of those wonderfully untranslatable Dutch words that describes a feeling rather than an actual literal thing.",
        "Dutch people are obsessive planners. Good luck trying to grab a beer with someone if you don't schedule it two months in advance.",
        "Anywhere can be a party venue."
      ],
      gallery: [], hasVideo: true, youtube: "VB2PXOi64G4", cover: "assets/cover-dutch.png",
      shorts: [
        { url: "https://www.tiktok.com/t/ZP8stDDjR/", label: "TikTok · 01" },
        { url: "https://www.tiktok.com/t/ZP8stmQAv/", label: "TikTok · 02" },
        { url: "https://www.tiktok.com/t/ZP8st567R/", label: "TikTok · 03" },
        { url: "https://www.tiktok.com/t/ZP8stXsrP/", label: "TikTok · 04" }
      ],
      mosaic: [
        { t: "photo", src: "assets/dutch/d-3965.jpg?v=1", alt: "Green polder with sheep, a swan, and an NS train passing behind a canal", caption: "Sheep, a swan, and the passing train", pos: "center 38%", c: 12, r: 6 },

        { t: "photo", src: "assets/dutch/d-3647.jpg?v=1", alt: "Amsterdam canal with a Lovers tour boat and a bicycle in the foreground", caption: "A canal, a tour boat, a borrowed bike", c: 4, r: 11 },
        { t: "quote", q: "Gezellig is one of those wonderfully untranslatable Dutch words — a feeling rather than an actual literal thing.", bg: "accent", c: 4, r: 11 },
        { t: "short", i: 0, c: 4, r: 11 },

        { t: "photo", src: "assets/dutch/d-3739.jpg?v=1", alt: "The Cuypers Library at the Rijksmuseum", caption: "The Cuypers Library · Rijksmuseum", c: 6, r: 6 },
        { t: "photo", src: "assets/dutch/d-3687.jpg?v=1", alt: "A red-lit bar with chandeliers and mannequin heads in cabinets", caption: "Red light, chandeliers, a strange little bar", c: 6, r: 6 },

        { t: "short", i: 1, c: 4, r: 11 },
        { t: "quote", q: "Dutch people are obsessive planners. Good luck grabbing a beer if you don't schedule it two months in advance.", c: 4, r: 11 },
        { t: "photo", src: "assets/dutch/d-3936.jpg?v=1", alt: "A gilt mirror reflecting toile wallpaper, a chandelier, and an old portrait", caption: "Gilt, toile, and a borrowed reflection", c: 4, r: 11 },

        { t: "photo", src: "assets/dutch/d-3683.jpg?v=1", alt: "Gothic cloister garden with a bronze fountain at the Domkerk", caption: "The cloister garden · Domkerk", pos: "center 42%", c: 7, r: 6 },
        { t: "photo", src: "assets/dutch/d-3947.jpg?v=1", alt: "A couple drinking house wine by a window at night", caption: "House wine, late, by the window", c: 5, r: 6 },

        { t: "photo", src: "assets/dutch/d-3751.jpg?v=1", alt: "A phone photographing Van Gogh's self-portrait on the gallery wall", caption: "Everyone photographs the Van Gogh", c: 4, r: 11 },
        { t: "quote", q: "Anywhere can be a party venue.", c: 4, r: 11 },
        { t: "short", i: 2, c: 4, r: 11 }
      ]
    },
    scarves: {
      tagline: "A place turned into an object you can carry.",
      year: "In progress", role: "Object · Wearable archive", location: "Sonoran, Mojave, Colorado Plateau",
      watch: "Join the waitlist", hasShop: true,
      waitlist: {
        popup: "4n6QbL",
        action: "https://assets.mailerlite.com/jsonp/2464597/forms/191040686694335815/subscribe",
        headline: "Be first to the Deserts.",
        sub: "One-of-a-kind scarves, released in small batches. Get the early word.",
        successTitle: "Noted.",
        successBody: "The desert will find you first. We\u2019ll email the list before the next collection goes public."
      },
      intro: "Wearable artwork inspired by the desert landscape. Photography transferred to airy scarf pieces made for movement, travel and heat.",
      body: [],
      gallery: [], hasVideo: false, cover: "assets/cover-deserts.jpg?v=2", coverPos: "center 64%",
      mosaic: [
        { t: "quote", q: "The Deserts collection — one-of-one chiffon scarves. Join the waitlist.", bg: "accent", c: 4, r: 11 },
        { t: "photo", src: "assets/deserts/woman-strapless.jpg?v=1", alt: "Scarf worn as a strapless top against an ocotillo", caption: "No.1 · worn against the ocotillo", pos: "center 78%", c: 8, r: 6 },
        { t: "photo", src: "assets/deserts/cholla.jpg?v=1", alt: "Cholla cactus field under a wide desert sky", caption: "Cholla field · open desert", c: 8, r: 5 },

        { t: "photo", src: "assets/deserts/canyon.jpg?v=1", alt: "Ocotillo in a desert canyon", caption: "Ocotillo · the canyon floor", c: 6, r: 6 },
        { t: "photo", src: "assets/deserts/woman-full.jpg?v=1", alt: "Full-length, scarf top in the desert wash", caption: "Made for movement, travel, heat", c: 6, r: 6 }
      ]
    },
    scoby: {
      tagline: "A live set for open air, dust, and distortion.",
      year: "2025", role: "Film · Photography", location: "Sonoran Desert",
      cover: "assets/cover-scoby.jpg?v=1",
      youtube: "BchCeTYBDtE",
      intro: "A collaboration with DJ and producer SCOBY — a music film set against the Sonoran Desert, alongside album-cover photography captured around the world.",
      body: [],
      releases: [
        { id: "1UTHv9dyaHSPirx4PvQhwU" },
        { id: "3AmwztaA2zpMO6V4MUBx7l" },
        { id: "46aTLaHqLxwMNanRureMXr" },
        { id: "3nmHlL02SeFRz4AqRgJxWf" },
        { id: "3vmJjDaq84ptD7gdE7uPrb" }
      ],
      hasVideo: true
    },
    atlas: {
      tagline: "A negroni in every city, on the way to a book.",
      year: "In progress", role: "Book · Photography", location: "Every city, one negroni",
      watch: "Join the waitlist",
      waitlist: {
        action: "https://assets.mailerlite.com/jsonp/2464597/forms/191042343574439422/subscribe",
        headline: "Happy hour?",
        sub: "Leave your email and we\u2019ll pour you the first round before it\u2019s anywhere else.",
        successTitle: "First round\u2019s yours.",
        successBody: "We\u2019ll call you to the bar before the Atlas Negroni is anywhere else."
      },
      intro: "This coffee-table recipe book and travel guide that explores the world through the lens of a single cocktail: the Negroni.",
      body: [],
      gallery: [], hasVideo: false, cover: "assets/cover-atlas.jpg?v=1"
    }
  };

  // ---- Work With Us: services ----------------------------------------------
  E.SERVICES = [
    { id: "stays", name: "Stays", tag: "01", blurb: "Films and stills for hotels, lodges, retreats, and places people choose because they want to feel somewhere.", eg: "FILM · BOUTIQUE LODGE" },
    { id: "experiences", name: "Experiences", tag: "02", blurb: "Films and visuals for tours, expeditions, routes, and activities that are better felt than explained.", eg: "FILM · EXPEDITION CO." },
    { id: "products", name: "Products", tag: "03", blurb: "Gear, apparel, objects, and art captured in real use — on bodies, in weather, in motion, in the world.", eg: "FILM · OUTDOOR BRAND" },
    { id: "sound", name: "Sound & Sets", tag: "04", blurb: "Live sessions, music films, and visual worlds for artists who want sound to live somewhere specific.", eg: "FILM · LIVE SET" }
  ];

  // ---- Shop products --------------------------------------------------------
  E.SHOP = [
    { id: "atlas", name: "The Atlas Negroni", cat: "Book", price: 48, ph: "BOOK · COVER", note: "A travel-by-cocktail book. Every city, a negroni." },
    { id: "scarf1", name: "Deserts Scarf · No.1", cat: "Scarves", price: 120, ph: "CHIFFON · SCARF 01", note: "One of one. Watercolor on chiffon." },
    { id: "scarf2", name: "Deserts Scarf · No.2", cat: "Scarves", price: 120, ph: "CHIFFON · SCARF 02", note: "One of one. Watercolor on chiffon." },
    { id: "print-rangiroa", name: "Rangiroa Lagoon", cat: "Prints", price: 45, ph: "PRINT · RANGIROA", note: "Archival giclée, signed." },
    { id: "print-dagestan", name: "Dagestan Peaks", cat: "Prints", price: 45, ph: "PRINT · DAGESTAN", note: "Archival giclée, signed." },
    { id: "hoodie-gedo", name: "Go Everywhere Do Everything Hoodie", cat: "Merch", price: 68, ph: "HOODIE · GEDO", note: "Heavyweight fleece, embroidered wordmark. The flagship piece." },
    { id: "tee", name: "Field Tee", cat: "Merch", price: 38, ph: "TEE · FRONT", note: "Heavyweight, road-tested." },
    { id: "cap", name: "Everywhere Cap", cat: "Merch", price: 34, ph: "CAP · 6-PANEL", note: "For the 4am bus." },
    { id: "stickers", name: "Sticker Pack", cat: "Stickers", price: 12, ph: "STICKERS · PACK", note: "Six die-cut. Stick everywhere." }
  ];
  E.SHOP_CATS = ["All", "Scarves", "Prints", "Book", "Merch", "Stickers"];

  // ---- Dispatches (blog) ----------------------------------------------------
  E.DISPATCHES = [
    { id: "moorea-guide", cat: "Guides", title: "How to Do Moorea Right: The Ultimate Island Guide", excerpt: "A month on Moorea, distilled: hidden beaches, the healthiest reef, scenic drives, local eats, and the small details that make a trip feel less touristy.", read: "18 min", coord: "17.5\u00b0S", hero: "assets/dispatch-moorea/hero.jpg", heroPos: "center 60%", feat: true },
    { id: "kyrgyzstan-roadtrip", cat: "Guides", title: "How to Road Trip Kyrgyzstan on Your Own", excerpt: "Skip the group tour: rent the car, drive the passes yourself, find yurts on arrival. The logistics, the apps, and the breakdown plan that make independent travel work.", read: "14 min", coord: "41.2\u00b0N" },
    { id: "hagiang-loop", cat: "Itineraries", title: "The Exact 5-Day Ha Giang Loop Itinerary We Rode", excerpt: "5 days, self-driven, counterclockwise \u2014 the exact route we rode. Every overnight stop, every meal worth mentioning, and an honest verdict on each place. (Yes, we made a map.)", read: "12 min", coord: "23.1\u00b0N" }
  ];
  E.DISPATCH_CATS = ["All", "Guides", "Itineraries"];

  // ---- Dispatch articles (full reads) ---------------------------------------
  const IMG = "assets/dispatch-moorea/";
  E.DISPATCH_DETAIL = {
    "moorea-guide": {
      kicker: "Guide",
      title: "How to Do Moorea Right: The Ultimate Island Guide",
      standfirst: "After a month of exploring Moorea, we packed everything we learned into this guide \u2014 from hidden beaches and reef-friendly snorkel spots to scenic drives, local eats, and the small details that make a trip feel less touristy and more connected to the island.",
      hero: IMG + "hero.jpg", heroPos: "center 58%",
      meta: [["Read", "18 min"], ["Region", "Moorea \u00b7 French Polynesia"], ["Coords", "17.5\u00b0S 149.8\u00b0W"]],
      blocks: [
        { t: "lead", text: "Moorea is a volcanic island in French Polynesia\u2019s Society Islands. Its jagged peaks, lush valleys, and turquoise lagoons make it one of the most striking destinations in the South Pacific. But many visitors come for the overwater bungalows and leave without discovering what makes the island truly special." },
        { t: "p", text: "To experience Moorea properly, set aside the pi\u00f1a colada and explore beyond the resort. The best experiences are easy to miss without a little local know-how: which beaches are genuinely public, where to find the healthiest coral, and which small roadside snack stands are worth planning your day around." },
        { t: "toc", title: "In this guide", items: [
          ["getting-here", "Getting here"],
          ["water", "Water activities"],
          ["beaches", "Public beaches"],
          ["hiking", "Hiking"],
          ["adventures", "Other adventures"],
          ["food", "Food"],
          ["tips", "Practical tips & local secrets"],
          ["stay", "Where to stay"]
        ] },

        { t: "h2", id: "getting-here", n: "01", text: "Getting here" },
        { t: "img", src: IMG + "getting-here.jpg", alt: "View of Moorea from a small plane window", caption: "The 15-minute hop from Tahiti \u2014 pretty, but skippable." },
        { t: "deflist", items: [
          ["Fly into", "Tahiti International Airport (PPT)."],
          ["Getting to Moorea", "Take the ferry over. It\u2019s a quick 30 to 60 minute ride, and boats run all day between roughly 6 a.m. and 5:30 p.m. (later on weekends). Tickets cost $12 to $18 per person, plus $20 if you\u2019re bringing a car. Reserve the car spot ahead of time, because they fill up."],
          ["Companies", "Terevau, Aremiti, Vaearai, and Tauati. Book directly on their websites."],
          ["Getting around", "Rent a car or scooter the second you land in Tahiti, so you can drive it straight onto the ferry. Taxis in Moorea are expensive and weirdly hard to find. Having your own ride turns the island from \u201cpretty\u201d into \u201climitless.\u201d"]
        ] },
        { t: "note", text: "And yes, there\u2019s a 15 minute flight too. But honestly? Skip it unless you genuinely enjoy hanging around airports." },

        { t: "h2", id: "water", n: "02", text: "Water activities" },
        { t: "img", src: IMG + "water-shark.jpg", alt: "A snorkeler swimming face-to-face with a blacktip reef shark", caption: "Moorea is basically one enormous natural aquarium." },
        { t: "p", text: "Moorea is basically one enormous natural aquarium. The water is warm, glassy clear, and stuffed with coral, rays, reef sharks, and fish that look like they swam out of a Pixar movie. Most of the action lives along the northwest lagoon, but there are incredible snorkeling spots all the way around the island if you know where to look." },

        { t: "h3", text: "The northwest lagoon" },
        { t: "img", src: IMG + "northwest-lagoon.jpg", alt: "Aerial of the northwest lagoon and reef", caption: "The northwest lagoon \u2014 where most of the action lives." },
        { t: "label", text: "Top snorkeling spots" },
        { t: "spots", items: [
          ["Coral Garden Tiahura", "A lagoon classic. Shallow, calm, and packed with coral and fish. It\u2019s the perfect place to drift snorkel between Motu Tiahura and Motu Fareone, letting the current do the work while you stare at all the pretty things."],
          ["Sharks and Rays Sandbar", "The most famous spot on the island. Shallow sandbar, warm water, and a surreal mix of stingrays and blacktip reef sharks swimming right around you. Local guides feed them, so they\u2019re friendly and curious."]
        ] },
        { t: "note", text: "There are so many stingrays you have to look before you jump in so you don\u2019t land on one, and they\u2019re shockingly affectionate. The sharks play it cooler \u2014 they won\u2019t come close if you swim at them, but hold still and look away and they\u2019ll happily glide up right behind you. It gets crowded around lunchtime, so come earlier if you want the sandbar more to yourself." },
        { t: "label", text: "How to explore" },
        { t: "spots", items: [
          ["Rent a kayak or SUP", "Tip Nautic does these for $10 to $20 an hour. WhatsApp them to reserve in advance at (+689) 87 78 76 73."],
          ["Rent your own boat", "This was easily our favorite day on Moorea. You can rent your own little boat for a few hours, no license needed. They hand you a map and set you loose. Pack fruit, snorkel gear, and a Bluetooth speaker, then cruise from the coral gardens to the sharks and rays sandbar at your own pace. WhatsApp to reserve at (+689) 87 78 13 39."],
          ["Coco Beach (Motu Tiahura)", "Eat at the restaurant and you can hang there the rest of the day and snorkel around. Fair warning though: other businesses claim most of the motu as \u201cprivate.\u201d"],
          ["Guided tours", "There are plenty online, and most bundle in snorkeling and lunch. Just read the reviews before you book."]
        ] },
        { t: "note", text: "Both the kayak/SUP and the boat rental run out of Tipaniers beach (beach access details below)." },
        { t: "img", src: IMG + "boat-banner.jpg", alt: "A small rental boat moored in shallow water", caption: "No license needed \u2014 they hand you a map and set you loose.", wide: true },

        { t: "h3", text: "The east lagoon" },
        { t: "img", src: IMG + "bungalows.jpg", alt: "Overwater bungalows framed by palms", caption: "Off Temae Beach, inside the Sofitel lagoon." },
        { t: "label", text: "Top snorkeling spots" },
        { t: "spots", items: [
          ["Sofitel Coral Garden", "Right off Temae Beach, with easy access and excellent visibility. It sits inside Sofitel Moorea Resort\u2019s lagoon, so you can either snorkel from the public half of the beach or buy a day pass (around $100) that gets you their kayaks, paddleboards, loungers, and pool. It\u2019s a solid deal if you commit to a full day: show up early, snorkel, have lunch, and paddle around until the sun drops."],
          ["Jardin de Corail (Motu Ahi)", "A gorgeous coral garden off Motu Ahi. You\u2019ll need a boat to get there, but it pays off. Clear water, healthy coral, and far fewer people than the northwest lagoon."]
        ] },

        { t: "h3", text: "The west lagoon" },
        { t: "img", src: IMG + "canoe.jpg", alt: "Bow of an outrigger canoe over clear water", caption: "We Do Va\u2019a \u2014 traditional outrigger canoes, built by hand." },
        { t: "p", text: "The reef out here is hands down the healthiest we saw anywhere on the island, bursting with colorful coral and fish. The only catch is there\u2019s no public beach access. If you want to see it, your best move is to book an activity." },
        { t: "p", text: "We recommend We Do Va\u2019a, a local family run experience that takes you out on traditional outrigger canoes (va\u2019a) for fishing, snorkeling, and a beach picnic with whatever you catch. Tehei, the son, builds the canoes by hand and races for the Moorea team." },
        { t: "contact", label: "We Do Va\u2019a", value: "+689 87 74 60 21" },

        { t: "h2", id: "beaches", n: "03", text: "Public beaches" },
        { t: "img", src: IMG + "beach.jpg", alt: "A public beach backed by green mountains", caption: "Half public, half resort \u2014 know where to point yourself." },
        { t: "p", text: "Most of Moorea\u2019s beaches are private, but the public ones are stunning once you know where to point yourself." },
        { t: "spots", items: [
          ["Plage Publique de Temae", "Near the airport, this is Moorea\u2019s longest and prettiest beach. Half public, half Sofitel. You can grab a Sofitel day pass (around $100) that includes a meal, a drink, and access to their kayaks, pool, and beach chairs. Worth it if you arrive early and make a day of it."],
          ["Plage de Ta\u2019ahiamanu (Opunohu Bay)", "Family friendly and wrapped in epic mountain views. Perfect for a picnic or a slow sunset swim."],
          ["Plage de Tipaniers", "Small and easy to reach through Les Tipaniers Hotel. Parking across the street runs about $2 an hour."],
          ["Plage de Tiahura", "Quiet and calm. Nice for a short dip, though not the most thrilling."]
        ] },

        { t: "h2", id: "hiking", n: "04", text: "Hiking" },
        { t: "img", src: IMG + "swing.jpg", alt: "A person on a swing overlooking a green valley", caption: "The swing at the end of the Three Pines Trail." },
        { t: "p", text: "Moorea is a hiker\u2019s paradise. Trails wind through rainforest, climb along ridges, pass waterfalls, and usually reward you with views that don\u2019t feel real." },
        { t: "p", text: "The first thing everyone notices about this island is the peaks. The walls, crags, and spires at the heart of Moorea are unbelievably steep, the leftovers of a massive volcanic crater that partly slid into the sea in a catastrophic landslide. A lot of these peaks have never been climbed, and it\u2019s unclear whether anyone has ever stood on top of the tallest one, Mount Tohie\u2019a." },
        { t: "p", text: "We can vouch for how serious they are. Mount Mou\u2019aputa is one of the few summits you can actually reach, but only if the weather plays along. Ours didn\u2019t. Even though we checked the forecast, it rained all morning, the trail turned to mud, and the final stretch gets so steep you haul yourself up on hundreds of knotted ropes. The summit \u201creward\u201d was a cloud so thick we couldn\u2019t see a thing, even after waiting an hour for it to clear. Lesson learned: you can\u2019t always rely on the forecast." },
        { t: "table",
          head: ["Trail", "Distance", "Gain", "Description"],
          rows: [
            ["Three Coconuts Trail (Col des Trois Cocotiers)", "6.4 km", "290 m", "Moderate jungle trail with panoramic ridge views over Opunohu Valley and Mount Rotui."],
            ["Three Pines Trail (Col des Trois Pinus)", "2.9 km", "147 m", "Quiet forested trail ending at a scenic lookout with a swing."],
            ["Afareaitu Waterfalls", "4.3 km", "210 m", "Rainforest hike to two waterfalls and natural swimming pools."],
            ["Mount Rotui", "7.0 km", "899 m", "Challenging climb with steep ridges and exposed sections, plus an incredible summit view."],
            ["Mount Mou\u2019aputa (Pierced Mountain)", "7.7 km", "650 m", "Demanding trail with ropes and scrambling, leading to a pierced rock summit."],
            ["Vai\u2019are to Paopao", "11.4 km", "655 m", "Cross island trek through dense jungle and ridges linking Vai\u2019are and Paopao Valleys."],
            ["Mount Paaru Iti (Paaruiti)", "4.8 km", "622 m", "Steep, less traveled route with overgrown sections and sweeping mountain views."],
            ["Vaiare Pass (Col de Vai\u2019are)", "5.0 km", "321 m", "Moderate forest trail passing ancient marae sites and bamboo groves."],
            ["Belvedere Lookout", "Short walk", "Minimal", "Easy viewpoint with a stunning panorama of Cook\u2019s and Opunohu Bays."],
            ["Toatea Lookout", "Roadside", "Minimal", "Roadside viewpoint overlooking the lagoon, the Sofitel bungalows, and Tahiti across the channel."]
          ] },

        { t: "h2", id: "adventures", n: "05", text: "Other adventures" },
        { t: "img", src: IMG + "eels.jpg", alt: "A guide standing in a stream with giant freshwater eels", caption: "The giant freshwater eels \u2014 fed on canned tuna, weirdly bold." },
        { t: "spots", items: [
          ["Te Fare Natura (House of Nature Museum)", "A small eco museum that makes everything you see afterward click into place. Go early in your trip so the rest of the island makes more sense."],
          ["Kayak or SUP in Cook\u2019s Bay", "Calm water and endless mountain reflections. Hard to beat at first light."]
        ] },
        { t: "p", text: "Scuba diving. French Polynesia has around 3,500 square kilometers of land and 5 million square kilometers of sea, roughly the size of the entire European Union, so to really understand this place you have to go beneath the surface." },
        { t: "p", text: "We did, and the first thing that greeted us was a sickle finned lemon shark, which can grow up to 12 feet long. The sharks here are so relaxed you get comfortable fast, though one still managed to sneak up and scare the life out of Stas. Not everything is that mellow: one clownfish guarded its anemone with full battle scars and zero fear, so we took the hint and cleared out." },
        { t: "p", text: "You\u2019ll also notice a lot of the coral might look dead. It mostly is, but it isn\u2019t the disaster it seems. These reefs bleach on a natural cycle of heat waves and storms and are expected to bounce back within a few years. The sea turtles don\u2019t seem to mind at all. There are loads of them grazing the algae on the dead coral, completely unfazed by divers, and some swim right up to look you in the eyes. One guide told us a turtle we saw was 150 years old." },
        { t: "note", text: "If you\u2019re diving multiple islands (Rangiroa, Fakarava), grab a Moana Pass to save money." },
        { t: "spots", items: [
          ["Mountain biking", "Trails roll through pineapple fields and quiet valleys."],
          ["Find the giant freshwater eels", "One of the strangest, most fun things we did. Huge eels gliding straight toward your toes might not sound like the typical idea of fun, but they are genuinely unlike anything we\u2019ve ever seen. Local guides feed them canned tuna, which is part of why they\u2019re so bold. Find them at 17\u00b031\u201913.3\u2033S 149\u00b050\u201947.7\u2033W. (Shhhhhh \ud83e\udd2b)"],
          ["Swim with whales (July to November)", "The single best thing you can do on Moorea. It\u2019s now pricier and tightly regulated, but it is 100% worth it. We recommend Nemo Z Diving. A private four person tour runs around $225 per person for a half day, which compares well against the roughly $250 per person you\u2019ll pay for a half day group tour crammed onto a boat with six people."]
        ] },

        { t: "h3", text: "Bonus trip: Teahupo\u2019o" },
        { t: "img", src: IMG + "teahupoo.jpg", alt: "The heavy barreling wave at Teahupo'o", caption: "Teahupo\u2019o \u2014 it looks like the ocean folding itself in half." },
        { t: "p", text: "Take a ferry back to Tahiti and go watch Teahupo\u2019o, one of the most dangerous waves on the planet. Watching it from a boat is hypnotic." },
        { t: "p", text: "We were up at 5:45, on the boat by six, and out there before the sun, with a handful of surfers already in the water. What makes Teahupo\u2019o so unlike anywhere else is that you can sit in a boat right next to giant breaking waves and be completely safe. The seafloor drops away so sharply that the wave can\u2019t break past the edge of the reef no matter how big the swell gets, and that same shelf is why it folds into those deep, perfect barrels. When it hits, it looks like the ocean is folding itself in half." },
        { t: "p", text: "The waves come in sets, and between them more boats arrive until it feels like a party that lives and dies with every passing wave, right up until someone catches a bomb. We were mesmerized the whole time, couldn\u2019t pull our eyes off the wave even when no one was on it." },
        { t: "note", text: "Check the swell before you go. The biggest waves roll in between April and October. Tour contact: +689 89 27 16 26 (around $40 per person for an hour. We booked one and immediately wished we\u2019d stayed longer.)" },

        { t: "h2", id: "food", n: "06", text: "Food" },
        { t: "img", src: IMG + "sunset-picnic.jpg", alt: "Picnic tables set in shallow water at sunset", caption: "Tables in the sand \u2014 sometimes literally in the water." },
        { t: "p", text: "Groceries are pricey here, since almost everything is imported. The glorious exception is tuna. A pound of it costs about the same as a single cauliflower. You can buy sushi grade tuna at Champion (the grocery store by the ferry) or straight from local fishermen on the side of the road, who usually sell their catch early in the morning." },
        { t: "p", text: "Definitely try poisson cru, the national dish: raw tuna with lime juice and coconut milk. Simple, fresh, perfect. If you want to go deeper, take a cooking class at Food & CookLab, an organic farm that teaches traditional Polynesian recipes." },
        { t: "h3", text: "Our top eats" },
        { t: "p", text: "We tried nearly every spot on the island during our month here. These are the ones you can\u2019t skip:" },
        { t: "spots", items: [
          ["Chez Irene", "The only place we found serving coconut crab. Message ahead to book."],
          ["Snack Mahana", "The ultimate lunch spot. Beachfront tables and rays gliding past your feet while you eat."],
          ["Roulotte Rendez-vous Chez Nous", "A food truck on the east side with incredible coconut curry shrimp."],
          ["O Moana Snack", "Live music on weekends, relaxed vibe, tables in the sand, sometimes literally in the water."],
          ["Tropical Garden", "Tasty food, beautiful views, and a small vanilla farm. The road up is rough, so take it slow."],
          ["Snack Autea", "A great local lunch spot on the south side."],
          ["Le L\u00e9zard Jaune", "We never got in (booked solid for weeks), but locals swear it\u2019s the best on the island. Message them early on WhatsApp."]
        ] },
        { t: "note", text: "Quick translation: a \u201csnack\u201d here isn\u2019t a small bite. It\u2019s what locals call the small family run restaurants that serve full meals, and they\u2019re often the best food on the island." },

        { t: "h2", id: "tips", n: "07", text: "Practical tips & local secrets" },
        { t: "spots", items: [
          ["Hit the juice factory", "There\u2019s a local juice factory that hands out free juice and rum samples. Absolutely worth a stop."],
          ["Buy your booze at duty free", "Alcohol is taxed 200%, so cocktails at bars get expensive fast. Stock up before your flight and mix your own. Homemade pi\u00f1a coladas taste even better with a lagoon view."],
          ["Bring reef safe sunscreen", "It\u2019s pricey here and essential for protecting the reef."],
          ["Pack water shoes", "You\u2019ll want them for walking over coral and hopping off boats."],
          ["Carry cash", "Smaller spots and food trucks often don\u2019t take cards."],
          ["Grocery hack", "Champion is your best bet for basics. Stop in right after the ferry, before you head to your Airbnb."],
          ["Fuel up often", "Gas stations can be far apart, especially on the south side."],
          ["Learn two words", "Polynesians are incredibly kind, and a simple \u201cIa orana\u201d (hello) goes a long way. \u201cMaururu\u201d means \u201cthank you.\u201d \ud83d\ude42"]
        ] },

        { t: "h2", id: "stay", n: "08", text: "Where to stay" },
        { t: "img", src: IMG + "dock-aerial.jpg", alt: "Aerial of a dock and boats on a pale sandbar", caption: "Pick your side \u2014 each end of the island has a different rhythm." },
        { t: "spots", items: [
          ["North side", "Best for convenience. Close to restaurants, beaches, and most of the activities. Great Airbnb options, especially if you\u2019re splitting costs with friends."],
          ["West side", "Healthiest reef, spinner dolphins, and a quieter pace. More local stays and small hotels."],
          ["South side", "Very local, fewer restaurants, cheaper rooms. The move if you want peace and a slower rhythm."]
        ] },

        { t: "videos", title: "Watch: French Polynesia on YouTube", items: [
          { id: "Kd7065lDI7o", label: "Travel film \u00b7 01" },
          { id: "5LhoQBO7AyI", label: "Travel film \u00b7 02" },
          { id: "wUjesYXCq-k", label: "Travel film \u00b7 03" }
        ] },

        { t: "outro", text: "We hope this guide helps! We tried to pack in everything we learned, but if you\u2019ve still got questions, feel free to DM us. We\u2019re always happy to help. :)" }
      ],
      socialsTitle: "More stories from French Polynesia",
      socials: [
        ["Instagram", "@goeverywhere_doeverything", "https://instagram.com/goeverywhere_doeverything"],
        ["TikTok", "@go3verywheredo3verything", "https://tiktok.com/@go3verywheredo3verything"],
        ["YouTube", "@go_everywhere_do_everything", "https://www.youtube.com/@go_everywhere_do_everything"]
      ]
    },

    "kyrgyzstan-roadtrip": {
      kicker: "Guide",
      title: "How to Road Trip Kyrgyzstan on Your Own",
      standfirst: "Most people see Kyrgyzstan from the back seat of a group tour. Here's how to do it independently \u2014 rent the car, drive the passes yourself, find yurts on arrival \u2014 and why it might be the best trip you ever take.",
      heroPh: undefined,
      hero: "assets/dispatch-kyrgyzstan/hero.jpg", heroPos: "center 55%",
      meta: [["Read", "14 min"], ["Region", "Kyrgyzstan \u00b7 Tian Shan"], ["Coords", "41.2\u00b0N 74.8\u00b0E"]],
      blocks: [
        { t: "lead", text: "Most people see Kyrgyzstan from the back seat of a group tour. A guide drives, the yurts are pre-booked, the permits are sorted, and you just look out the window. It's a perfectly good way to travel \u2014 but it isn't the only way, and for a certain kind of traveler it isn't the best way." },
        { t: "p", text: "We did Kyrgyzstan independently: rented a car, drove it ourselves across the country, found most of our yurts on arrival, chased camels on foot when we felt like it, and got a flat tire on a 12-hour mountain day that we'll be telling stories about for years. It was harder than a group tour. It was also the best trip we've ever taken." },
        { t: "p", text: "If you're the type who'd rather have the freedom and take on the logistics yourself, here's how to actually do it." },
        { t: "toc", title: "In this guide", items: [
          ["fit", "Is self-drive right for you?"],
          ["car", "Renting the car"],
          ["apps", "Apps & prep"],
          ["sleep", "Yurts & the CBT network"],
          ["permits", "Permits & paperwork"],
          ["driving", "The driving reality"],
          ["hybrid", "The hybrid option"],
          ["verdict", "Should you do it yourself?"]
        ] },

        { t: "h2", id: "fit", n: "01", text: "Is self-drive right for you?" },
        { t: "duo", items: [
          { src: "assets/dispatch-kyrgyzstan/trail-portrait.jpg", alt: "A traveler standing on a green mountain trail by the parked car" },
          { src: "assets/dispatch-kyrgyzstan/switchbacks.jpg", alt: "A long series of switchbacks carved into a mountainside" }
        ], caption: "Be honest before you commit — some of these roads are genuinely demanding." },
        { t: "p", text: "A group tour makes sense if you don't want to drive rough mountain passes, you're short on time, you want zero logistics, or you're nervous about doing it without the language. There's no shame in it \u2014 some of these roads are genuinely demanding." },
        { t: "p", text: "Going independent makes sense if you want to set your own pace, linger where you love a place and bail where you don't, save money by splitting a car between two or more people, and have the kind of unscripted encounters that only happen when there's no guide steering the day. The trade-off is that you are now the driver, the navigator, the booking agent, and the roadside mechanic." },
        { t: "note", text: "There's also a middle path, which we'll come back to at the end: rent a car with a driver, or self-drive the easy stretches and hire local transfers for the gnarly ones. You don't have to choose all-or-nothing." },

        { t: "h2", id: "car", n: "02", text: "Renting the car" },
        { t: "img", src: "assets/dispatch-kyrgyzstan/rental-car.jpg", wide: true, alt: "A dusty white Toyota SUV parked on a remote road at sunset", caption: "Our rental — a well-used Toyota. Easy to service, parts everywhere." },
        { t: "spots", items: [
          ["2WD vs 4x4", "A regular sedan will comfortably get you to the cities and all the way around Issyk-Kul on paved roads. But the moment you want Song-K\u00f6l, the high Tian Shan passes, Altyn-Arashan, or the Peak Lenin area, you need a high-clearance 4x4. The interesting stuff in Kyrgyzstan is almost always at the end of a bad road. If your itinerary is mountains, get the real machine."],
          ["What it costs", "Expect a standard sedan from roughly $60\u201365 a day. A proper 4x4 runs more like \u20ac90\u2013160 a day depending on the season and the age of the vehicle. Camping gear or a rooftop tent is usually around an extra \u20ac20 a day \u2014 and if you go that route, the car is your accommodation, which can offset the cost over a week."],
          ["Book the 4x4 early", "Seriously early. There are plenty of regular cars in Bishkek, but specialist 4x4s \u2014 especially the ones with rooftop tents \u2014 are limited and sell out fast in peak summer. Travelers reserve months ahead; some book the last available 4x4 in spring for a September trip. We booked late and had slim pickings. Don't repeat that."],
          ["Where to rent", "Most agencies are based in Bishkek, and several have English-speaking owners who'll sort gear, permits, and roadside backup. You can usually pick up at Manas Airport and arrange a one-way drop-off in Osh for an extra fee. The popular, easy-to-service 4x4s are Toyotas (Land Cruiser, Prado, 4Runner, Sequoia) \u2014 if something breaks, Toyota parts and mechanics are far easier to find."],
          ["The paperwork", "You'll need your home driver's license plus, ideally, an International Driving Permit. Latin-alphabet licenses can often drive without the IDP, but carrying one avoids hassle with police; other scripts need an IDP or a Russian translation. Drivers usually need to be 21\u201324+ with a couple of years' experience. There's a refundable deposit, and insurance typically carries an excess of a few hundred dollars/euros you're liable for."],
          ["Bring cash for the rental", "Many agencies want payment in Kyrgyz som, and you'll get better rates pulling cash before you're standing in their office. This is a running theme of the whole trip."]
        ] },

        { t: "h2", id: "apps", n: "03", text: "Apps & prep that make it possible" },
        { t: "img", src: "assets/dispatch-kyrgyzstan/camels.jpg", wide: true, alt: "A herd of camels crossing the open steppe", caption: "No signal, no card readers — prep is what keeps a remote day from going sideways." },
        { t: "p", text: "This is the part that quietly determines whether your trip is smooth or miserable." },
        { t: "spots", items: [
          ["Use Yandex Maps, not Google Maps", "Google is fine in the cities and unreliable the second you leave them. Yandex is what locals use and it's dramatically better on the back roads. Download the offline maps before you go."],
          ["Download offline translation", "Get Kyrgyz or Russian for offline Google Translate. There is no signal in the high mountains, and offline translation is how you'll talk to yurt hosts, shepherds, and the mechanic in a town where nobody speaks English."],
          ["Double every drive-time estimate", "Whatever the app says, assume it'll take twice as long. Potholes, passes, livestock, and washed-out sections turn a \u201c3-hour\u201d leg into a full afternoon. On our worst day we averaged about 20 mph."],
          ["Have a fuel strategy", "Petrol is widely available, but station locations don't always show up correctly in navigation apps. Fill up whenever you're near a town, and always top off before long remote stretches (Naryn before Song-K\u00f6l; Sary-Mogol before Peak Lenin)."],
          ["Carry cash \u2014 more than you think", "ATMs and card readers disappear in remote areas, and outages can knock out payments without warning. We rolled into a town in August where the power had been switched off for the day for \u201cwinter prep,\u201d and nothing electronic worked."]
        ] },

        { t: "h2", id: "sleep", n: "04", text: "Yurts & the CBT network" },
        { t: "img", src: "assets/dispatch-kyrgyzstan/yurt-interior.jpg", wide: true, alt: "The warm, lattice-framed interior of a Kyrgyz yurt at night", caption: "In the mountains, a solution almost always appears — often someone's spare yurt." },
        { t: "p", text: "Independent travelers don't need everything booked in advance, because Kyrgyzstan has an unusually good safety net: Community-Based Tourism (CBT), a nationwide network with offices in towns like Karakol, Naryn, Kochkor, and Osh. They arrange yurt stays, homestays, horses, guides, and transfers on short notice \u2014 the classic backbone of doing this trip on your own." },
        { t: "spots", items: [
          ["Pre-book where you can", "You can reserve some yurt camps on Booking.com, which is reassuring for your first night or two."],
          ["Message ahead on WhatsApp", "For remote camps, a quick WhatsApp the day before confirms they're open and holding space."],
          ["Or just show up", "In many places we found a yurt on arrival without a reservation. That's normal here."],
          ["Don't panic if you're overbooked", "We arrived at a pre-booked camp in Altyn-Arashan that had double-booked us \u2014 and a local family simply took us into their spare yurt, then rented us the horses we rode the next day."]
        ] },
        { t: "note", text: "Two notes: go in August at your own risk on availability \u2014 it's peak hiking and mountaineering season, so camps fill up, and outside summer some simply aren't standing yet. And bring serious warm layers. Our first night in Altyn-Arashan we piled on four blankets and were still cold." },

        { t: "h2", id: "permits", n: "05", text: "Permits & paperwork you might not expect" },
        { t: "img", src: "assets/dispatch-kyrgyzstan/pass-road.jpg", wide: true, alt: "A dirt road threading through a remote high mountain valley", caption: "The Peak Lenin / Alay area and Kel-Suu sit inside border-permit zones." },
        { t: "p", text: "Here's one that catches independent travelers off guard: some regions near international borders require a border-zone permit. This matters for the classic route, because the Peak Lenin / Alay valley area near the Tajik border and Kel-Suu (K\u00f6l-Suu) near China typically fall inside permit zones." },
        { t: "p", text: "The permits are cheap and bureaucratic rather than difficult \u2014 roughly \u20ac25 for a single zone (like Naryn) up to about \u20ac40\u201360 for a multi-zone permit \u2014 but they take time to process, often a couple of weeks, so they can't be last-minute. The easiest move is to let your rental company arrange them; most do it routinely if you send your passport details and rough itinerary in advance. If you're tacking on a crossing into Kazakhstan, Tajikistan, or Uzbekistan, confirm with the rental company that the car is allowed across the border first." },

        { t: "h2", id: "driving", n: "06", text: "The driving reality (& a breakdown plan)" },
        { t: "img", src: "assets/dispatch-kyrgyzstan/cattle.jpg", wide: true, alt: "Cattle and yaks grazing on a green slope beside the road", caption: "Watch constantly for cattle and free-roaming horses on the road." },
        { t: "spots", items: [
          ["The rules", "Speed limits are generally 60 km/h in towns, 90 on rural roads, 110 on highways. The blood-alcohol limit is effectively zero \u2014 do not drink and drive. Headlights on at night, no handheld phone, and pedestrians have right of way."],
          ["The roads", "Paved and decent between the main cities (Bishkek\u2013Karakol\u2013Osh), but a pothole can appear on a \u201cgood\u201d 90 km/h road with no warning. Remote tracks involve mud, water crossings, and steep passes that get dangerous after rain. Watch constantly for cattle and free-roaming horses."],
          ["The passes", "If you're an inexperienced off-road driver, don't push a high pass in bad weather. Turn around. The mountain will be there next year."]
        ] },
        { t: "note", text: "Our flat-tire saga turned into a 12-hour ordeal partly because we only had a flimsy donut spare and were far from a repair shop. Two lessons: check that your rental comes with a real, full-size spare and a basic repair kit before you drive off \u2014 and choose a reputable agency with roadside support. The good ones genuinely deliver: travelers regularly report a replacement spare sent out by taxi within hours of a breakdown hundreds of kilometers from Bishkek." },

        { t: "h2", id: "hybrid", n: "07", text: "The hybrid option" },
        { t: "img", src: "assets/dispatch-kyrgyzstan/yurt-valley.jpg", wide: true, alt: "A single yurt in a green valley ringed by peaks at dusk", caption: "You don't have to drive every meter yourself to travel independently." },
        { t: "p", text: "You don't have to drive every meter yourself to travel independently. A few ways to split the difference:" },
        { t: "spots", items: [
          ["Rent a car with a driver", "Common and affordable in Kyrgyzstan. It hands the scary passes to someone who drives them every week while you keep full control of your own itinerary."],
          ["Self-drive the easy parts, transfer the hard parts", "Drive the paved routes and Issyk-Kul yourself, then hire a local 4x4 transfer (CBT can arrange this) up to Altyn-Arashan or Song-K\u00f6l, exactly as our host did for us."],
          ["Hire local guides for specific days", "A guide for a horse trek or a high pass costs little and almost always comes with stories about the place that you'd never get otherwise."]
        ] },

        { t: "h2", id: "verdict", n: "08", text: "So, should you do it yourself?" },
        { t: "img", src: "assets/dispatch-kyrgyzstan/horses.jpg", wide: true, alt: "A herder driving horses and cattle across the grassland under a dark sky", caption: "Cowboys at dawn, horses at 4,000 meters — the trip becomes genuinely yours." },
        { t: "p", text: "Kyrgyzstan does not hand independent travelers a smooth, frictionless vacation. It hands you cowboys at dawn, horses at 4,000 meters, fermented mare's milk with mystery floaties, the occasional flat tire, and a kind of freedom you can't get from the back of a tour van. You'll work harder for it. You'll also have the trip be genuinely yours \u2014 the lingering, the detours, the family who takes you in when the yurt's full." },
        { t: "videos", title: "Watch: Kyrgyzstan on YouTube", items: [
          { id: "RYkBsfR4DrU", label: "The Kyrgyzstan film" }
        ] },
        { t: "outro", text: "If that sounds worth a few rough miles to you, rent the car, download Yandex Maps, take out the cash, and go. We can't wait to do it again." }
      ],
      socials: [
        ["Instagram", "@goeverywhere_doeverything", "https://instagram.com/goeverywhere_doeverything"],
        ["TikTok", "@go3verywheredo3verything", "https://tiktok.com/@go3verywheredo3verything"],
        ["YouTube", "@go_everywhere_do_everything", "https://www.youtube.com/@go_everywhere_do_everything"]
      ]
    },

    "hagiang-loop": {
      kicker: "Itinerary",
      title: "The Exact 5-Day Ha Giang Loop Itinerary We Rode",
      standfirst: "Most Ha Giang Loop itineraries online are 3 days, written by people who did it on the back of an easy-rider's bike. Ours is different: 5 days, self-driven, counterclockwise \u2014 the exact route we actually rode, every overnight stop, every meal worth mentioning, and the honest verdict on each place we stayed.",
      hero: "assets/dispatch-hagiang/hero.jpg", heroPos: "center 60%",
      meta: [["Read", "12 min"], ["Region", "Ha Giang \u00b7 Vietnam"], ["Distance", "~350 km / 5 days"]],
      blocks: [
        { t: "lead", text: "We made a map of the whole thing with every overnight and stop pinned (one of us is a bit type A about this stuff.)" },
        { t: "embed", src: "assets/dispatch-hagiang/map.html", title: "The Ha Giang Loop \u2014 interactive map", caption: "Our exact 5-day route \u2014 click any day in the sidebar to focus it." },
        { t: "note", text: "A quick note before we start: we rode this counterclockwise on purpose, to stay out of sync with the tour convoys that mostly run clockwise. That's why our Day 1 heads to Du Gia instead of Quan Ba." },

        { t: "label", text: "The route at a glance" },
        { t: "deflist", items: [
          ["Getting there", "Overnight sleeper bus, Hanoi \u2192 Ha Giang City."],
          ["Day 1", "Ha Giang City \u2192 Du Gia."],
          ["Day 2", "Du Gia \u2192 Meo Vac."],
          ["Day 3", "Meo Vac \u2192 Ma Pi Leng Pass & Nho Que River \u2192 Dong Van."],
          ["Day 4", "Dong Van \u2192 Quan Ba, via the Can Ty\u2013Yen Minh back road."],
          ["Day 5", "Quan Ba \u2192 Heaven's Gate at sunrise \u2192 back to Ha Giang City by 10 AM."]
        ] },
        { t: "note", text: "Total: roughly 350 km of riding over 5 days, at a deliberately slow pace." },

        { t: "h2", id: "getting-there", n: "01", text: "Getting there: the overnight bus from Hanoi" },
        { t: "p", text: "We took the sleeper bus north from Hanoi. It's the standard move and a good one \u2014 you sleep through the boring ~6 hours and wake up ready to ride, saving yourself a night's accommodation in the process." },
        { t: "p", text: "We started and ended at HuongThao2 Hotel in Ha Giang City, which doubles as a motorbike rental. The rooms are basic and the place gets a little damp (as does everything in these mountains), but the couple who run it are genuinely kind, they sorted our bikes, and they let us leave our extra luggage there while we did the loop. That last part matters \u2014 you don't want to ride five days with a full pack." },
        { t: "note", text: "One warning we learned the hard way: the International Driving Permit you get from AAA in the US doesn't technically cover motorbikes in Vietnam. We got pulled over and fined for incorrect paperwork \u2014 the one bit of luck was that the officer gave us a receipt, so we only paid once. Sort out the correct permit before you go, and budget a little cash for the possibility regardless." },

        { t: "h2", id: "day1", n: "02", text: "Day 1: Ha Giang City to Du Gia" },
        { t: "duo", caption: "Left: the second, quieter waterfall \u2014 worth the extra climb. Right: the balcony at Du Gia Panorama Ecolodge.", items: [
          { src: "assets/dispatch-hagiang/d1-waterfall.jpg", alt: "A stream and waterfall in a green jungle valley" },
          { src: "assets/dispatch-hagiang/d1-balcony.jpg", alt: "Balcony view over misty mountains from the ecolodge" }
        ] },
        { t: "p", text: "Going counterclockwise means you skip the famous northern stuff on Day 1 and instead drop southeast into the green, quiet, jungly part of the loop. We loved this as an opener. It eases you into the riding before the big cliff passes, and Du Gia is one of the most relaxed stops on the whole route precisely because most people save it for last (or skip it)." },
        { t: "p", text: "The riding was rough in patches \u2014 a typhoon had blown through just before us, so we spent the day dodging debris and the occasional washed-out section. It's beautiful regardless: towering 400-million-year-old limestone, deep valleys, terraced hillsides." },
        { t: "p", text: "The highlight was a spur-of-the-moment hike to a waterfall we could barely see from the road. If you want the good version, push past the first, busier falls and keep following the stream uphill \u2014 the second waterfall is quieter and better for a swim. (Go after about 11 AM and the easy-rider groups have usually cleared out.)" },
        { t: "stay", text: "Du Gia Panorama Ecolodge, on top of a mountain. This was one of the best stays of the trip \u2014 a corner room at the end of the hall with a balcony view that genuinely stopped us in our tracks. Highly recommend asking for one of the corner rooms if they're free." },
        { t: "eat", text: "A family-style dinner at the homestay with the other guests, plus a few drinks. This is the homestay experience people talk about \u2014 big shared plates, strangers becoming friends, someone's bottle of happy water making the rounds. Don't skip the included dinner here; by several accounts it's some of the best food on the loop." },

        { t: "h2", id: "day2", n: "03", text: "Day 2: Du Gia to Meo Vac" },
        { t: "p", text: "This was our hardest and most eventful day, mostly because we made it that way. We took a \u201cshortcut\u201d back road that we immediately regretted \u2014 steep, loose, and brutal for a newer rider. (Stas was learning to ride basically from scratch on this trip, and this was the day of the great Drop The Bike On A Hill incident. We survived. The bike survived. Our pride, less so.) We later found out there was a perfectly good paved road the whole time. Learn from us: when the map looks uncertain, take the pavement." },
        { t: "img", src: "assets/dispatch-hagiang/d2-road.jpg", alt: "Motorbike POV looking up a rocky, rutted dirt road", portrait: true, pos: "center 60%", caption: "The \u201cshortcut.\u201d Take the pavement." },
        { t: "p", text: "Once we found tarmac again, the day opened up into endless mountain road and our first proper \u201cthis is why we came\u201d moments. We also got lost looking for a swimming hole and ended up flying the drone to find it, which is its own kind of fun." },
        { t: "p", text: "On a bad-day low, we stopped at a roadside shack with exactly one thing on the menu: a spicy noodle soup. Rich broth, perfect noodles, chilies that burned in the best possible way. Hot soup on a hot day sounds wrong and is somehow exactly right. It fixed everything." },
        { t: "img", src: "assets/dispatch-hagiang/d2-soup.jpg", alt: "Two bowls of spicy Vietnamese noodle soup topped with chili and herbs", portrait: true, caption: "One item on the menu. It fixed everything." },
        { t: "stay", text: "Xua Vu Homestay, just north of Meo Vac town on QL4C. A real gem \u2014 a sweet owner, a clean room with a view over the vegetable farms, and a quiet little nook of a village setting. We were greeted by puppies, which is the correct way to end a hard day." },
        { t: "eat", text: "Vietnamese barbecue at the homestay \u2014 grilled meats and vegetables you eat with your hands and a beer. The owner also sent us off with a taste of local happy water. If you'd rather a hot pot, that's a common option here too." },

        { t: "h2", id: "day3", n: "04", text: "Day 3: Meo Vac to Dong Van (the big one)" },
        { t: "img", src: "assets/dispatch-hagiang/d3-river.jpg", alt: "The jade-green Nho Que River walled in by towering canyon cliffs", pos: "center 55%", caption: "The Nho Que River \u2014 jade green, on the floor of Tu San Canyon." },
        { t: "p", text: "This is the day the loop earns its reputation. From Meo Vac you climb onto Ma Pi Leng Pass \u2014 legendary, one of the most dangerous and most beautiful roads in Vietnam. The cliffs fall away to the Nho Que River, a thousand-plus meters below, glowing an unreal jade green. It's the floor of the deepest canyon in Southeast Asia, and it does not feel real." },
        { t: "p", text: "If you have time, take the detour down to the river for a boat ride through Tu San Canyon \u2014 seeing the cliffs from the water after seeing the river from above is worth it. Heads up that the access road down was rough and under construction when we passed." },
        { t: "duo", caption: "Left: the canyon from river level. Right: catching our breath at a viewpoint on the pass.", items: [
          { src: "assets/dispatch-hagiang/d3-canyon.jpg", alt: "Boats on the green river deep in the canyon" },
          { src: "assets/dispatch-hagiang/d3-viewpoint.jpg", alt: "A rider standing arms-wide at a mountain viewpoint", pos: "center 40%" }
        ] },
        { t: "p", text: "The typhoon hit this section hardest. We rode through landslides, washed-out road, and our first real traffic jam of the trip \u2014 trucks, bikes, and excavators all squeezed together while a construction crew cleared rock. It added an hour and a lot of adrenaline. Build buffer into this day; it's the one most likely to run long." },
        { t: "stay", text: "Thai Tam Motel in Dong Van, right on the main street. Solid, clean, friendly family who let us park the bikes inside on the ground floor. We paid around $8 for a room with 3 beds (we used one entirely for laundry \u2014 one pile dirty, one pile clean). The street can be a bit noisy; ask for a room off the front if you're a light sleeper." },
        { t: "img", src: "assets/dispatch-hagiang/d3-cornwine.jpg", alt: "A hand holding a bottle of local corn wine at a bar", portrait: true, caption: "Corn wine \u2014 \u201chappy water.\u201d Our bartender warned us. We did not listen." },
        { t: "eat", label: "What we ate & drank", text: "Dong Van Old Quarter comes alive at night with lanterns and food stalls. We wandered a quiet alley, found a cute caf\u00e9 (more puppies), and then hit the bars for corn wine \u2014 aka \u201chappy water.\u201d It's a regional homemade spirit common in Hmong and Dao cuisine, often over 40% but deceptively smooth going down. Our bartender warned us not to overdo it. We did not listen. Learn from us again." },

        { t: "h2", id: "day4", n: "05", text: "Day 4: Dong Van to Quan Ba (the quiet detour)" },
        { t: "p", text: "Most itineraries run Dong Van straight to Yen Minh on the main road. We took a deliberate deviation \u2014 the Can Ty\u2013Yen Minh back road \u2014 to get off the tourist track for a day, and it was one of our favorite stretches: curvy, quiet, and lined with the kind of cliffside caf\u00e9s that make this region special. Many are tucked right into nooks in the limestone, and they always have a view. More than coffee stops, a lot of these rest spots have hot food, music, and friendly conversation. Build in time to actually sit at one." },
        { t: "p", text: "This was our \u201cmostly just biking\u201d day, in the best way \u2014 long, gorgeous, and unhurried. We grabbed breakfast for about 80 cents at a roadside bar to start." },
        { t: "duo", caption: "The cliffside caf\u00e9s on the Can Ty\u2013Yen Minh back road \u2014 every one of them with a view.", items: [
          { src: "assets/dispatch-hagiang/d4-cafe-view.jpg", alt: "A switchback road seen from a cliffside caf\u00e9 terrace" },
          { src: "assets/dispatch-hagiang/d4-cafe-drinks.jpg", alt: "Iced coffees on a wooden rail overlooking the valley" }
        ] },
        { t: "stay", text: "Honestly? A random cheap hotel in Quan Ba that we can't recommend and won't bother naming. It did the job \u2014 a bed and a roof \u2014 but there are better options in Tam Son. If you've got the planning energy, book something with a view here in advance; we didn't, and it showed." },
        { t: "img", src: "assets/dispatch-hagiang/d4-dinner.jpg", alt: "Plates of rice, curry and stir-fried dishes at a local restaurant", portrait: true, caption: "Dinner in Tam Son \u2014 site of the great pepper roulette." },
        { t: "eat", text: "Our last dinner of the trip in Tam Son, which we turned into a game of \u201cpepper roulette\u201d \u2014 daring each other to eat unidentified peppers off the table. One of them was emphatically not the bell pepper it resembled. Worth it. Mostly." },

        { t: "h2", id: "day5", n: "06", text: "Day 5: Quan Ba to Ha Giang, via Heaven's Gate" },
        { t: "img", src: "assets/dispatch-hagiang/d5-sunrise.jpg", alt: "Mist and orange sunrise light over the valley from Heaven's Gate", pos: "center 60%", caption: "Sunrise from Quan Ba Heaven's Gate \u2014 the perfect closing image." },
        { t: "p", text: "Short and stunning. We got up early \u2014 partly to beat the crowds, partly because we wanted to be back in Ha Giang by 10 AM to return the bikes \u2014 and rode up to Quan Ba Heaven's Gate at sunrise. It's the last mountain pass before the descent to Ha Giang City, looking down over Tam Son town nestled in the valley, and catching it as the sun climbed over the limestone was the perfect closing image for the trip." },
        { t: "p", text: "A practical note for this final stretch: the road from Heaven's Gate down toward Ha Giang was being repaired when we rode it, with gravel, buses, trucks, and motorbikes all funneling through narrow sections. Take it slow; it's the one place you don't want to rush just because you're nearly done." },

        { t: "h2", id: "cost", n: "07", text: "What this cost & what to pack" },
        { t: "p", text: "The loop is cheap once you're on it. Roadside meals run from under a dollar, rooms in guesthouses and homestays typically run $10\u201330 a night, and fuel is minimal. The bus from Hanoi is roughly $10\u201315." },
        { t: "img", src: "assets/dispatch-hagiang/terraces.jpg", alt: "Aerial of rice terraces and a thin road threading the green valley", pos: "center 60%", caption: "Terraces, and the road that threads them." },
        { t: "p", text: "Pack light \u2014 you're carrying it on a bike for 5 days. The essentials: a small backpack with a few changes of clothes, rain gear (the mountains are wet and the weather flips fast), something warm for the mornings and evenings even in summer, sunglasses, sunscreen, and plenty of cash. ATMs are scarce once you leave Ha Giang City, so withdraw what you'll need before you set off." },

        { t: "videos", title: "Watch: the Ha Giang Loop on YouTube", items: [
          { id: "PR6luikNSjk", label: "The Ha Giang film" }
        ] },

        { t: "outro", text: "That's the whole loop, exactly as we rode it. If you've got questions before your own trip, DM us \u2014 we're always happy to help. Ride slow, eat everything, take the pavement." }
      ],
      socials: [
        ["Instagram", "@goeverywhere_doeverything", "https://instagram.com/goeverywhere_doeverything"],
        ["TikTok", "@go3verywheredo3verything", "https://tiktok.com/@go3verywheredo3verything"],
        ["YouTube", "@go_everywhere_do_everything", "https://www.youtube.com/@go_everywhere_do_everything"]
      ]
    }
  };
})();
