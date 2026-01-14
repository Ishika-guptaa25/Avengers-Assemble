import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'
import ThanosSnap from './ThanosSnap'

// Assets
import antmanImg from './assets/antman.png'
import blackpantherImg from './assets/blackpanther.png'
import blackwidowImg from './assets/blackwidow.png'
import snapImg from './assets/snap.png';
import wintersoldierImg from './assets/buckybarnes.png'
import captainamericaImg from './assets/captainamerica.png'
import doctorstrangeImg from './assets/doctorstrange.png'
import falconImg from './assets/falcon.png'
import hawkeyeImg from './assets/hawkeye.png'
import hulkImg from './assets/hulk.png'
import ironmanImg from './assets/ironman.png'
import scarletwitchImg from './assets/scarletwitch.png'
import spidermanImg from './assets/spiderman.png'
import thorImg from './assets/thor.png'
import visionImg from './assets/vision.png'
import warmachineImg from './assets/warmachine.png'
import waspImg from './assets/wasp.png'
import heheheImg from './assets/hehehe.png'

// Movie Assets
import endgameImg from './assets/movies/endgame.jpg'
import infinitywarImg from './assets/movies/infinitywar.webp'
import theavengersImg from './assets/movies/theavengers.webp'

// Comic Assets
import avengers1Img from './assets/comic/avengers1.jpg'
import civilcomicImg from './assets/comic/civilcomic.jpg'
import gauntletcomicImg from './assets/comic/gauntletcomic.jpg'
import infinitycomicImg from './assets/comic/infinitycomic.jpg'

function App() {
  const [selectedChar, setSelectedChar] = useState('ironman')
  const [showVideo, setShowVideo] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const [isUniverseAlive, setIsUniverseAlive] = useState(true)
  const contentRef = useRef(null)

  const characters = {
    ironman: { icon: ironmanImg, name: 'IRON MAN', quote: 'I am Iron Man.', powers: ['Genius Intelligence', 'Technology'], stats: { strength: 85, speed: 90, intelligence: 100, combat: 85 } },
    captainamerica: { icon: captainamericaImg, name: 'CAPTAIN AMERICA', quote: 'I can do this all day.', powers: ['Super Strength', 'Master Tactician'], stats: { strength: 90, speed: 85, intelligence: 85, combat: 100 } },
    thor: { icon: thorImg, name: 'THOR', quote: 'I am Thor, son of Odin!', powers: ['God of Thunder', 'Mjolnir'], stats: { strength: 100, speed: 85, intelligence: 75, combat: 95 } },
    hulk: { icon: hulkImg, name: 'HULK', quote: 'Hulk Smash!', powers: ['Superhuman Strength', 'Rage Power'], stats: { strength: 100, speed: 75, intelligence: 70, combat: 80 } },
    blackwidow: { icon: blackwidowImg, name: 'BLACK WIDOW', quote: "I've got red in my ledger.", powers: ['Master Spy', 'Martial Artist'], stats: { strength: 70, speed: 85, intelligence: 90, combat: 95 } },
    hawkeye: { icon: hawkeyeImg, name: 'HAWKEYE', quote: 'I have a bow and arrow.', powers: ['Master Archer', 'Marksman'], stats: { strength: 70, speed: 75, intelligence: 80, combat: 95 } },
    spiderman: { icon: spidermanImg, name: 'SPIDER-MAN', quote: 'With great power comes great responsibility.', powers: ['Spider-Sense', 'Web Shooting'], stats: { strength: 85, speed: 90, intelligence: 90, combat: 85 } },
    blackpanther: { icon: blackpantherImg, name: 'BLACK PANTHER', quote: 'Wakanda Forever!', powers: ['Vibranium Suit', 'Enhanced Abilities'], stats: { strength: 85, speed: 90, intelligence: 95, combat: 95 } },
    doctorstrange: { icon: doctorstrangeImg, name: 'DOCTOR STRANGE', quote: "We're in the endgame now.", powers: ['Mystic Arts', 'Time Mastery'], stats: { strength: 65, speed: 70, intelligence: 100, combat: 80 } },
    scarletwitch: { icon: scarletwitchImg, name: 'SCARLET WITCH', quote: 'You took everything from me.', powers: ['Chaos Magic', 'Reality Warp'], stats: { strength: 75, speed: 75, intelligence: 85, combat: 80 } },
    vision: { icon: visionImg, name: 'VISION', quote: 'I am on the side of life.', powers: ['Mind Stone', 'Density Control'], stats: { strength: 90, speed: 85, intelligence: 95, combat: 85 } },
    warmachine: { icon: warmachineImg, name: 'WAR MACHINE', quote: 'Boom! You looking for this?', powers: ['Advanced Armor', 'Heavy Artillery'], stats: { strength: 80, speed: 85, intelligence: 85, combat: 90 } },
    falcon: { icon: falconImg, name: 'FALCON', quote: 'On your left.', powers: ['Flight', 'Tactical Combat'], stats: { strength: 70, speed: 90, intelligence: 80, combat: 85 } },
    wintersoldier: { icon: wintersoldierImg, name: 'WINTER SOLDIER', quote: 'I remember all of them.', powers: ['Vibranium Arm', 'Super Soldier'], stats: { strength: 85, speed: 85, intelligence: 75, combat: 95 } },
    antman: { icon: antmanImg, name: 'ANT-MAN', quote: 'I do some dumb things.', powers: ['Size Manipulation', 'Ants'], stats: { strength: 75, speed: 80, intelligence: 85, combat: 75 } },
    wasp: { icon: waspImg, name: 'WASP', quote: "It's about damn time.", powers: ['Flight', 'Bio-Electric'], stats: { strength: 75, speed: 90, intelligence: 90, combat: 90 } }
  };

  const movies = [
    { title: 'The Avengers', year: '2012', rating: '8.0/10', url: 'https://www.youtube.com/embed/eOrNdBpGMv8?autoplay=1', img: theavengersImg },
    { title: 'Infinity War', year: '2018', rating: '8.4/10', url: 'https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1', img: infinitywarImg },
    { title: 'Endgame', year: '2019', rating: '8.4/10', url: 'https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1', img: endgameImg }
  ];

  // Updated Comics data with info strings
  const comics = [
    { title: 'Avengers #1', year: '1963', type: 'Origin', img: avengers1Img, info: "The first assembly of Earth's Mightiest Heroes against Loki." },
    { title: 'Civil War', year: '2006', type: 'Event', img: civilcomicImg, info: "A conflict breaks out between heroes over the Registration Act." },
    { title: 'Infinity Gauntlet', year: '1991', type: 'Cosmic', img: gauntletcomicImg, info: "Thanos wields the Gauntlet to reshape reality itself." },
    { title: 'Infinity', year: '2013', type: 'Event', img: infinitycomicImg, info: "The Avengers take to the stars while Thanos attacks Earth." }
  ];

  const handleVideoPlay = (url) => { setVideoUrl(url); setShowVideo(true); document.body.style.overflow = 'hidden'; }
  const handleVideoClose = () => { setShowVideo(false); setVideoUrl(''); document.body.style.overflow = 'auto'; }

  return (
    <div className="min-h-screen text-white selection:bg-red-600/30 overflow-x-hidden">
      <ParticlesBackground />
      <ThanosSnap contentRef={contentRef} onSnapComplete={() => setIsUniverseAlive(false)} snapIcon={snapImg} />

      <AnimatePresence mode="wait">
        {isUniverseAlive ? (
          <motion.div key="universe" ref={contentRef} initial={{ opacity: 1 }} exit={{ opacity: 0, filter: 'grayscale(100%) blur(20px)', x: 50, transition: { duration: 1.5 } }}>

            {/* Navigation */}
            <nav className="bg-black/40 backdrop-blur-xl fixed w-full z-50 border-b border-white/10">
              <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                <span className="text-xl md:text-2xl font-black bebas tracking-tighter text-red-600 italic">MARVEL STUDIOS</span>
                <div className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest">
                  <a href="#" className="hover:text-red-600 transition">Home</a>
                  <a href="#characters" className="hover:text-red-600 transition">Characters</a>
                  <a href="#movies" className="hover:text-red-600 transition">Movies</a>
                  <a href="#comics" className="hover:text-red-600 transition">Comics</a>
                </div>
              </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 md:pt-48 pb-16 md:pb-32 px-4 md:px-6 relative z-10">
              <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 md:space-y-8 text-center md:text-left">
                  <h1 className="text-5xl md:text-8xl font-black bebas leading-[0.9] md:leading-[0.8] tracking-tighter">
                    BEST CHARACTERS<br/>
                    <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">EVER MADE IN</span><br/>
                    COMICS
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
                    Earth's Mightiest Heroes stand as a beacon against darkness.
                    Explore the legends that defined the cinematic multiverse.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 md:gap-6">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-red-600 px-8 md:px-10 py-4 rounded-sm font-black uppercase tracking-widest text-sm">
                      Explore Now →
                    </motion.button>
                    <motion.button onClick={() => handleVideoPlay('https://www.youtube.com/embed/kH1XlwHQv9o?autoplay=1')} className="border border-white/20 bg-white/5 px-8 md:px-10 py-4 rounded-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 text-sm">
                      <span className="text-red-600">▶️</span> Watch Trailer
                    </motion.button>
                  </div>
                </div>

                <div className="relative flex justify-center order-first md:order-last">
                  <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="relative z-10 w-full max-w-xl">
                    <div className="absolute inset-0 bg-red-600/10 blur-[60px] md:blur-[100px] rounded-full"></div>
                    <img src={heheheImg} alt="All Avengers" className="w-full h-auto drop-shadow-[0_0_40px_rgba(220,38,38,0.3)] filter brightness-110" />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Characters Section */}
            <section id="characters" className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-black/30 backdrop-blur-md border-y border-white/5">
              <div className="container mx-auto">
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-6xl font-black bebas tracking-tighter mb-4">THE AVENGERS</h2>
                  <div className="h-1 w-16 md:w-24 bg-red-600 mx-auto"></div>
                </div>

                <div className="flex md:grid md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 mb-8 md:mb-12 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                  {Object.entries(characters).map(([key, char]) => (
                    <motion.div
                      key={key}
                      onClick={() => setSelectedChar(key)}
                      onMouseEnter={() => setSelectedChar(key)}
                      className={`min-w-[100px] md:min-w-0 p-3 md:p-4 rounded-lg border transition-all cursor-pointer flex-shrink-0 ${selectedChar === key ? 'border-red-600 bg-red-900/40 scale-105' : 'border-white/10 bg-white/5'}`}
                    >
                      <img src={char.icon} alt={char.name} className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 object-contain" />
                      <h3 className="text-[8px] md:text-[10px] font-black tracking-widest text-center uppercase truncate">{char.name}</h3>
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={selectedChar} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-black/60 border border-red-600/30 rounded-xl md:rounded-2xl p-6 md:p-12 backdrop-blur-2xl">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                      <div className="text-center md:text-left space-y-4 md:space-y-6">
                        <h2 className="text-4xl md:text-6xl font-black bebas text-red-600 tracking-tighter leading-none">{characters[selectedChar].name}</h2>
                        <p className="text-xl md:text-3xl font-bold italic text-gray-400">"{characters[selectedChar].quote}"</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {characters[selectedChar].powers.map(p => (
                            <span key={p} className="bg-white/10 px-3 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">{p}</span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4 md:space-y-6">
                        {Object.entries(characters[selectedChar].stats).map(([stat, val]) => (
                          <div key={stat}>
                            <div className="flex justify-between text-[8px] md:text-[10px] font-black uppercase mb-1 tracking-widest">
                              <span className="text-gray-400">{stat}</span>
                              <span className="text-red-600">{val}%</span>
                            </div>
                            <div className="h-1 md:h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: `${val}%` }} transition={{ duration: 0.8 }} className="h-full bg-red-600" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>

            {/* Movies Section */}
            <section id="movies" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
              <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl font-black bebas tracking-tighter mb-8 md:mb-12">CINEMATIC SAGA</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {movies.map((movie) => (
                    <motion.div key={movie.title} whileHover={{ y: -10 }} onClick={() => handleVideoPlay(movie.url)} className="group cursor-pointer rounded-xl border border-white/10 bg-black/40 overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <img src={movie.img} alt={movie.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <span className="text-3xl md:text-4xl">▶️</span>
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                         <h3 className="text-xl md:text-2xl font-black bebas tracking-tighter group-hover:text-red-600 transition">{movie.title}</h3>
                         <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">{movie.year} • {movie.rating}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Comics Section - ADDED HOVER INFO FEATURE */}
            <section id="comics" className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-black/20 border-t border-white/5">
              <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl font-black bebas tracking-tighter mb-8 md:mb-12">LEGENDARY COMICS</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {comics.map((comic) => (
                    <motion.div
                      key={comic.title}
                      initial="initial"
                      whileHover="hover"
                      className="group cursor-pointer relative"
                    >
                      <div className="aspect-[2/3] rounded-lg border border-white/10 mb-3 md:mb-4 overflow-hidden group-hover:border-red-600 transition relative">
                         <img src={comic.img} alt={comic.title} className="w-full h-full object-cover" />

                         {/* Hover Overlay Info */}
                         <motion.div
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                hover: { opacity: 1, y: 0 }
                            }}
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col justify-end"
                         >
                            <p className="text-[10px] md:text-xs font-medium text-gray-200 leading-relaxed italic border-l-2 border-red-600 pl-2">
                                {comic.info}
                            </p>
                         </motion.div>
                      </div>

                      <h3 className="text-base md:text-lg font-black bebas tracking-tighter truncate">{comic.title}</h3>
                      <p className="text-red-600 text-[8px] md:text-[10px] font-black tracking-widest uppercase">{comic.type} • {comic.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <footer className="py-12 md:py-20 bg-black/80 border-t border-white/5 text-center relative z-10">
              <h2 className="text-2xl md:text-3xl font-black bebas tracking-widest text-red-600 mb-4 md:mb-6 italic uppercase">AVENGERS ASSEMBLE</h2>
              <p className="text-gray-500 text-[10px] font-medium tracking-widest uppercase px-4">© 2026 MARVEL STUDIOS. ALL RIGHTS RESERVED.</p>
            </footer>

            {showVideo && (
              <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-2 md:p-4" onClick={handleVideoClose}>
                <div className="w-full max-w-5xl aspect-video relative">
                  <button className="absolute -top-10 md:-top-12 right-0 text-white text-lg md:text-2xl font-black">CLOSE ✕</button>
                  <iframe className="w-full h-full rounded-lg" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 flex flex-col items-center justify-center z-[110] bg-black/60 text-center px-6">
            <h1 className="text-3xl md:text-5xl font-black bebas tracking-[0.2em] md:tracking-[0.3em] text-gray-400 uppercase leading-tight">The Universe is Balanced</h1>
            <button onClick={() => setIsUniverseAlive(true)} className="mt-8 px-8 md:px-10 py-3 md:py-4 bg-blue-600 text-white font-black uppercase tracking-widest rounded-full shadow-lg text-sm md:text-base">Rewind Time</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App