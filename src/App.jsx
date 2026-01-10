import { useState } from 'react'

function App() {
  const [selectedChar, setSelectedChar] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const characters = {
    ironman: {
      icon: '🦾',
      name: 'IRON MAN',
      realName: 'Tony Stark',
      quote: 'I am Iron Man.',
      powers: ['Genius Intelligence', 'Advanced Technology', 'Flight', 'Repulsor Beams'],
      stats: { strength: 85, speed: 90, intelligence: 100, combat: 85 }
    },
    captainamerica: {
      icon: '🛡️',
      name: 'CAPTAIN AMERICA',
      realName: 'Steve Rogers',
      quote: 'I can do this all day.',
      powers: ['Super Strength', 'Enhanced Agility', 'Master Tactician', 'Vibranium Shield'],
      stats: { strength: 90, speed: 85, intelligence: 85, combat: 100 }
    },
    thor: {
      icon: '⚡',
      name: 'THOR',
      realName: 'Thor Odinson',
      quote: 'I am Thor, son of Odin!',
      powers: ['God of Thunder', 'Mjolnir Mastery', 'Lightning Control', 'Immortality'],
      stats: { strength: 100, speed: 85, intelligence: 75, combat: 95 }
    },
    hulk: {
      icon: '💚',
      name: 'HULK',
      realName: 'Bruce Banner',
      quote: 'Hulk Smash!',
      powers: ['Superhuman Strength', 'Rapid Healing', 'Invulnerability', 'Rage Power'],
      stats: { strength: 100, speed: 75, intelligence: 70, combat: 80 }
    },
    blackwidow: {
      icon: '🕷️',
      name: 'BLACK WIDOW',
      realName: 'Natasha Romanoff',
      quote: "I've got red in my ledger.",
      powers: ['Master Spy', 'Expert Martial Artist', 'Espionage', 'Weapons Expert'],
      stats: { strength: 70, speed: 85, intelligence: 90, combat: 95 }
    },
    hawkeye: {
      icon: '🏹',
      name: 'HAWKEYE',
      realName: 'Clint Barton',
      quote: 'The city is flying and I have a bow and arrow.',
      powers: ['Master Archer', 'Expert Marksman', 'Peak Human Condition', 'Tactical Genius'],
      stats: { strength: 70, speed: 75, intelligence: 80, combat: 95 }
    },
    spiderman: {
      icon: '🕸️',
      name: 'SPIDER-MAN',
      realName: 'Peter Parker',
      quote: 'With great power comes great responsibility.',
      powers: ['Wall Crawling', 'Spider-Sense', 'Web Shooting', 'Super Strength'],
      stats: { strength: 85, speed: 90, intelligence: 90, combat: 85 }
    },
    blackpanther: {
      icon: '🐾',
      name: 'BLACK PANTHER',
      realName: 'T\'Challa',
      quote: 'Wakanda Forever!',
      powers: ['Vibranium Suit', 'Enhanced Abilities', 'Master Tactician', 'Genius Intellect'],
      stats: { strength: 85, speed: 90, intelligence: 95, combat: 95 }
    },
    doctorstrange: {
      icon: '🔮',
      name: 'DOCTOR STRANGE',
      realName: 'Stephen Strange',
      quote: 'We\'re in the endgame now.',
      powers: ['Mystic Arts', 'Time Manipulation', 'Astral Projection', 'Portal Creation'],
      stats: { strength: 65, speed: 70, intelligence: 100, combat: 80 }
    },
    scarletwitch: {
      icon: '🔴',
      name: 'SCARLET WITCH',
      realName: 'Wanda Maximoff',
      quote: 'You took everything from me.',
      powers: ['Reality Manipulation', 'Chaos Magic', 'Telekinesis', 'Mind Control'],
      stats: { strength: 75, speed: 75, intelligence: 85, combat: 80 }
    },
    vision: {
      icon: '💎',
      name: 'VISION',
      realName: 'Vision',
      quote: 'I am on the side of life.',
      powers: ['Mind Stone', 'Density Control', 'Flight', 'Super Strength'],
      stats: { strength: 90, speed: 85, intelligence: 95, combat: 85 }
    },
    warmachine: {
      icon: '🤖',
      name: 'WAR MACHINE',
      realName: 'James Rhodes',
      quote: 'Boom! You looking for this?',
      powers: ['Advanced Armor', 'Heavy Artillery', 'Flight', 'Military Tactics'],
      stats: { strength: 80, speed: 85, intelligence: 85, combat: 90 }
    },
    falcon: {
      icon: '🦅',
      name: 'FALCON',
      realName: 'Sam Wilson',
      quote: 'On your left.',
      powers: ['Flight', 'Tactical Combat', 'Redwing Drone', 'Expert Marksman'],
      stats: { strength: 70, speed: 90, intelligence: 80, combat: 85 }
    },
    wintersoldier: {
      icon: '🦾',
      name: 'WINTER SOLDIER',
      realName: 'Bucky Barnes',
      quote: 'I remember all of them.',
      powers: ['Vibranium Arm', 'Super Soldier', 'Expert Assassin', 'Master Combatant'],
      stats: { strength: 85, speed: 85, intelligence: 75, combat: 95 }
    },
    antman: {
      icon: '🐜',
      name: 'ANT-MAN',
      realName: 'Scott Lang',
      quote: 'I do some dumb things, and the people I love the most pay the price.',
      powers: ['Size Manipulation', 'Ant Communication', 'Enhanced Strength', 'Quantum Realm'],
      stats: { strength: 75, speed: 80, intelligence: 85, combat: 75 }
    },
    wasp: {
      icon: '🐝',
      name: 'WASP',
      realName: 'Hope van Dyne',
      quote: 'It\'s about damn time.',
      powers: ['Flight', 'Size Manipulation', 'Bio-Electric Energy', 'Expert Fighter'],
      stats: { strength: 75, speed: 90, intelligence: 90, combat: 90 }
    }
  }

  const movies = [
    {
      title: 'The Avengers',
      year: '2012',
      rating: '8.0/10',
      videoUrl: 'https://www.youtube.com/embed/eOrNdBpGMv8?autoplay=1'
    },
    {
      title: 'Infinity War',
      year: '2018',
      rating: '8.4/10',
      videoUrl: 'https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1'
    },
    {
      title: 'Endgame',
      year: '2019',
      rating: '8.4/10',
      videoUrl: 'https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1'
    }
  ]

  const comics = [
    { title: 'Avengers #1', year: 'Classic' },
    { title: 'New Avengers', year: '2005' },
    { title: 'Secret Wars', year: '2015' },
    { title: 'Infinity Gauntlet', year: '1991' }
  ]

  const handleExploreClick = () => {
    // Random hero select karo
    const heroKeys = Object.keys(characters)
    const randomHero = heroKeys[Math.floor(Math.random() * heroKeys.length)]

    // Hero select karo
    setSelectedChar(randomHero)

    // Smooth scroll to characters section
    setTimeout(() => {
      document.getElementById('characters')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  const handleVideoPlay = (url) => {
    setVideoUrl(url)
    setShowVideo(true)
    document.body.style.overflow = 'hidden'
  }

  const handleVideoClose = () => {
    setShowVideo(false)
    setVideoUrl('')
    document.body.style.overflow = 'auto'
  }

  const handleCharacterSelect = (charKey) => {
    setSelectedChar(charKey)
    setTimeout(() => {
      document.getElementById('characterDetails')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  return (
    <div className="min-h-screen">
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={handleVideoClose}>
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-600 transition z-10"
            onClick={handleVideoClose}
          >
            ✕
          </button>
          <div className="w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full rounded-lg"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-md fixed w-full z-50 border-b border-red-900/30">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold bebas tracking-wider text-red-600">MARVEL STUDIOS</span>
            <div className="hidden md:flex gap-2">
              <a href="#" className="nav-link text-white px-4 py-2 rounded hover:bg-white/10 transition">Home</a>
              <a href="#characters" className="nav-link text-white px-4 py-2 rounded hover:bg-white/10 transition">Characters</a>
              <a href="#movies" className="nav-link text-white px-4 py-2 rounded hover:bg-white/10 transition">Movies</a>
              <a href="#comics" className="nav-link text-white px-4 py-2 rounded hover:bg-white/10 transition">Comics</a>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold transition">
            🔍 Search
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative bg-gradient-to-br from-purple-900/30 to-red-900/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative z-10">
              <h1 className="text-6xl md:text-8xl font-black bebas leading-none">
                BEST CHARACTERS<br/>
                <span className="text-red-600">EVER MADE IN</span><br/>
                COMICS
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Earth's Mightiest Heroes stand as a beacon against darkness.
                When threats arise that no single hero can face alone, they assemble.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleExploreClick}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(200,16,46,0.8)]"
                >
                  EXPLORE NOW →
                </button>
                <button
                  onClick={() => handleVideoPlay('https://www.youtube.com/embed/kH1XlwHQv9o?autoplay=1')}
                  className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 px-8 py-3 rounded font-semibold transition"
                >
                  WATCH TRAILER
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="text-9xl floating">🛡️</div>
              <div className="absolute -left-20 top-10 text-6xl floating" style={{animationDelay: '0.5s'}}>🕷️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black bebas mb-4">ALL AVENGERS</h2>
            <p className="text-gray-400">Select any hero to see their stats, powers, and iconic quotes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {Object.entries(characters).map(([key, char]) => (
              <div
                key={key}
                onClick={() => handleCharacterSelect(key)}
                className={`character-card bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border rounded-xl p-4 text-center cursor-pointer transition-all duration-300 hover:scale-110 hover:border-red-600 hover:shadow-[0_0_20px_rgba(200,16,46,0.5)] ${selectedChar === key ? 'border-red-600 scale-110 shadow-[0_0_30px_rgba(200,16,46,0.8)] ring-2 ring-red-600 bg-gradient-to-b from-red-900/30 to-purple-900/30' : 'border-white/10'}`}
              >
                <div className="text-5xl mb-3 animate-bounce">{char.icon}</div>
                <h3 className="text-sm font-bold">{char.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{char.realName}</p>
              </div>
            ))}
          </div>

          {/* Character Details */}
          {selectedChar && (
            <div id="characterDetails" className="bg-gradient-to-br from-red-900/20 to-purple-900/20 backdrop-blur-lg border border-red-600/50 rounded-2xl p-8 shadow-[0_0_50px_rgba(200,16,46,0.5)] animate-fadeIn">
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 rounded-2xl opacity-50 blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-black/60 to-black/40 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-9xl mb-4 animate-bounce filter drop-shadow-[0_0_30px_rgba(200,16,46,0.8)]">{characters[selectedChar].icon}</div>
                  <h2 className="text-4xl font-black bebas bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">{characters[selectedChar].name}</h2>
                  <p className="text-lg text-gray-400 mb-4">{characters[selectedChar].realName}</p>
                  <p className="text-xl italic text-red-400 animate-pulse filter drop-shadow-[0_0_10px_rgba(200,16,46,0.8)]">"{characters[selectedChar].quote}"</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">⚡ POWERS & ABILITIES</h3>
                  <div className="space-y-3 mb-8">
                    {characters[selectedChar].powers.map((power, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-gradient-to-r from-red-900/30 to-purple-900/30 p-3 rounded-lg border-l-4 border-red-600 hover:bg-red-900/40 hover:scale-105 transition transform shadow-lg hover:shadow-red-600/50"
                        style={{animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`}}
                      >
                        <span className="text-2xl animate-pulse">💥</span>
                        <span className="font-semibold">{power}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">📊 HERO STATS</h3>
                  <div className="space-y-3">
                    {Object.entries(characters[selectedChar].stats).map(([stat, value]) => (
                      <div key={stat}>
                        <div className="flex justify-between mb-1">
                          <span className="capitalize font-semibold text-gray-200">{stat}</span>
                          <span className="font-bold text-red-400">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden shadow-inner">
                          <div
                            className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 h-3 rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(200,16,46,0.8)] animate-pulse"
                            style={{width: `${value}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Movies Section */}
      <section id="movies" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="hidden lg:block flex-shrink-0">
              <div className="text-9xl glow floating">✊💎</div>
            </div>

            <div className="flex-1">
              <h2 className="text-5xl font-black bebas mb-4">RECENT AVENGER MOVIES</h2>
              <p className="text-gray-400 mb-8">
                Experience the epic saga of Earth's Mightiest Heroes across the multiverse.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-bold mb-8 transition hover:scale-105">
                EXPLORE MORE
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {movies.map((movie, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleVideoPlay(movie.videoUrl)}
                    className="movie-card bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-red-600 transition cursor-pointer hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
                  >
                    <div className="h-64 bg-gradient-to-br from-red-900/50 to-purple-900/50 flex items-center justify-center text-6xl relative group">
                      🎬
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <div className="text-white text-6xl">▶️</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="bg-red-600 text-sm px-3 py-1 rounded-full inline-block mb-2 font-bold">⭐ {movie.rating}</div>
                      <h3 className="font-bold text-lg">{movie.title}</h3>
                      <p className="text-sm text-gray-400">{movie.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comics Section */}
      <section id="comics" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black bebas mb-8">OUR COMICS</h2>
          <p className="text-gray-400 mb-8">Discover the legendary comic book stories that started it all</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {comics.map((comic, idx) => (
              <div key={idx} className="comic-card bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-red-600 transition cursor-pointer hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div className="h-80 bg-gradient-to-br from-red-900/50 to-blue-900/50 flex items-center justify-center text-6xl">
                  📚
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{comic.title}</h3>
                  <p className="text-sm text-gray-400">{comic.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-red-900/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bebas">AVENGERS</h3>
              <p className="text-sm text-gray-400">Earth's Mightiest Heroes</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Comics</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Avengers #1</a></li>
                <li><a href="#" className="hover:text-white transition">New Avengers</a></li>
                <li><a href="#" className="hover:text-white transition">Secret Wars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Movies</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">The Avengers</a></li>
                <li><a href="#" className="hover:text-white transition">Infinity War</a></li>
                <li><a href="#" className="hover:text-white transition">Endgame</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">TV Guide</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">WandaVision</a></li>
                <li><a href="#" className="hover:text-white transition">Loki</a></li>
                <li><a href="#" className="hover:text-white transition">What If...?</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2025 MARVEL. All Rights Reserved. | Made with ❤️ for fans</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App