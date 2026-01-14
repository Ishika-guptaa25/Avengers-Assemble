import { useState } from 'react'
import ParticlesBackground from './ParticlesBackground'

// Assets based on your project structure
import antmanImg from './assets/antman.png'
import blackpantherImg from './assets/blackpanther.png'
import blackwidowImg from './assets/blackwidow.png'
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

function App() {
  const [selectedChar, setSelectedChar] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const characters = {
    ironman: { icon: ironmanImg, name: 'IRON MAN', realName: 'Tony Stark', quote: 'I am Iron Man.', powers: ['Genius Intelligence', 'Technology'], stats: { strength: 85, speed: 90, intelligence: 100, combat: 85 } },
    captainamerica: { icon: captainamericaImg, name: 'CAPTAIN AMERICA', realName: 'Steve Rogers', quote: 'I can do this all day.', powers: ['Super Strength', 'Master Tactician'], stats: { strength: 90, speed: 85, intelligence: 85, combat: 100 } },
    thor: { icon: thorImg, name: 'THOR', realName: 'Thor Odinson', quote: 'I am Thor, son of Odin!', powers: ['God of Thunder', 'Mjolnir'], stats: { strength: 100, speed: 85, intelligence: 75, combat: 95 } },
    hulk: { icon: hulkImg, name: 'HULK', realName: 'Bruce Banner', quote: 'Hulk Smash!', powers: ['Superhuman Strength', 'Rage Power'], stats: { strength: 100, speed: 75, intelligence: 70, combat: 80 } },
    blackwidow: { icon: blackwidowImg, name: 'BLACK WIDOW', realName: 'Natasha Romanoff', quote: "I've got red in my ledger.", powers: ['Master Spy', 'Martial Artist'], stats: { strength: 70, speed: 85, intelligence: 90, combat: 95 } },
    hawkeye: { icon: hawkeyeImg, name: 'HAWKEYE', realName: 'Clint Barton', quote: 'I have a bow and arrow.', powers: ['Master Archer', 'Marksman'], stats: { strength: 70, speed: 75, intelligence: 80, combat: 95 } },
    spiderman: { icon: spidermanImg, name: 'SPIDER-MAN', realName: 'Peter Parker', quote: 'With great power comes great responsibility.', powers: ['Spider-Sense', 'Web Shooting'], stats: { strength: 85, speed: 90, intelligence: 90, combat: 85 } },
    blackpanther: { icon: blackpantherImg, name: 'BLACK PANTHER', realName: "T'Challa", quote: 'Wakanda Forever!', powers: ['Vibranium Suit', 'Enhanced Abilities'], stats: { strength: 85, speed: 90, intelligence: 95, combat: 95 } },
    doctorstrange: { icon: doctorstrangeImg, name: 'DOCTOR STRANGE', realName: 'Stephen Strange', quote: "We're in the endgame now.", powers: ['Mystic Arts', 'Time Mastery'], stats: { strength: 65, speed: 70, intelligence: 100, combat: 80 } },
    scarletwitch: { icon: scarletwitchImg, name: 'SCARLET WITCH', realName: 'Wanda Maximoff', quote: 'You took everything from me.', powers: ['Chaos Magic', 'Reality Warp'], stats: { strength: 75, speed: 75, intelligence: 85, combat: 80 } },
    vision: { icon: visionImg, name: 'VISION', realName: 'Vision', quote: 'I am on the side of life.', powers: ['Mind Stone', 'Density Control'], stats: { strength: 90, speed: 85, intelligence: 95, combat: 85 } },
    warmachine: { icon: warmachineImg, name: 'WAR MACHINE', realName: 'James Rhodes', quote: 'Boom! You looking for this?', powers: ['Advanced Armor', 'Heavy Artillery'], stats: { strength: 80, speed: 85, intelligence: 85, combat: 90 } },
    falcon: { icon: falconImg, name: 'FALCON', realName: 'Sam Wilson', quote: 'On your left.', powers: ['Flight', 'Tactical Combat'], stats: { strength: 70, speed: 90, intelligence: 80, combat: 85 } },
    wintersoldier: { icon: wintersoldierImg, name: 'WINTER SOLDIER', realName: 'Bucky Barnes', quote: 'I remember all of them.', powers: ['Vibranium Arm', 'Super Soldier'], stats: { strength: 85, speed: 85, intelligence: 75, combat: 95 } },
    antman: { icon: antmanImg, name: 'ANT-MAN', realName: 'Scott Lang', quote: 'I do some dumb things.', powers: ['Size Manipulation', 'Ants'], stats: { strength: 75, speed: 80, intelligence: 85, combat: 75 } },
    wasp: { icon: waspImg, name: 'WASP', realName: 'Hope van Dyne', quote: "It's about damn time.", powers: ['Flight', 'Bio-Electric'], stats: { strength: 75, speed: 90, intelligence: 90, combat: 90 } }
  };

  const movies = [
    { title: 'The Avengers', year: '2012', rating: '8.0/10', url: 'https://www.youtube.com/embed/eOrNdBpGMv8?autoplay=1' },
    { title: 'Infinity War', year: '2018', rating: '8.4/10', url: 'https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1' },
    { title: 'Endgame', year: '2019', rating: '8.4/10', url: 'https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1' }
  ];

  const comics = [
    { title: 'Avengers #1', year: '1963', type: 'Origin' },
    { title: 'Civil War', year: '2006', type: 'Event' },
    { title: 'Secret Wars', year: '2015', type: 'Multiverse' },
    { title: 'Infinity Gauntlet', year: '1991', type: 'Cosmic' }
  ];

  const handleVideoPlay = (url) => { setVideoUrl(url); setShowVideo(true); document.body.style.overflow = 'hidden'; }
  const handleVideoClose = () => { setShowVideo(false); setVideoUrl(''); document.body.style.overflow = 'auto'; }

  return (
    <div className="min-h-screen text-white selection:bg-red-600/30">

      {/* Cinematic Background Layer */}
      <ParticlesBackground />

      {/* Modern Navigation */}
      <nav className="bg-black/40 backdrop-blur-xl fixed w-full z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black bebas tracking-tighter text-red-600 italic">MARVEL STUDIOS</span>
            <div className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-red-600 transition">Home</a>
              <a href="#characters" className="hover:text-red-600 transition">Characters</a>
              <a href="#movies" className="hover:text-red-600 transition">Movies</a>
              <a href="#comics" className="hover:text-red-600 transition">Comics</a>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-sm text-sm font-black uppercase tracking-tighter transition shadow-lg shadow-red-600/20">
            🔍 Search
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative z-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-7xl md:text-9xl font-black bebas leading-[0.85] tracking-tighter">
              BEST CHARACTERS<br/>
              <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">EVER MADE IN</span><br/>
              COMICS
            </h1>
            <p className="text-gray-300 text-lg max-w-lg leading-relaxed font-medium">
              Earth's Mightiest Heroes stand as a beacon against darkness.
              When threats arise that no single hero can face alone, they assemble.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById('characters').scrollIntoView({behavior:'smooth'})}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest transition transform hover:scale-105"
              >
                EXPLORE NOW →
              </button>
              <button
                onClick={() => handleVideoPlay('https://www.youtube.com/embed/kH1XlwHQv9o?autoplay=1')}
                className="bg-white/5 hover:bg-white/10 border border-white/20 px-10 py-4 rounded-sm font-black uppercase tracking-widest transition"
              >
                WATCH TRAILER
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="text-[15rem] md:text-[20rem] animate-pulse drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] filter grayscale-[0.2]">
              🛡️
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-24 px-6 relative z-10 bg-black/30 backdrop-blur-md border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black bebas tracking-tighter mb-4">THE AVENGERS</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {Object.entries(characters).map(([key, char]) => (
              <div
                key={key}
                onClick={() => setSelectedChar(key)}
                className={`group p-4 rounded-lg border transition-all duration-500 cursor-pointer ${selectedChar === key ? 'border-red-600 bg-red-900/40 shadow-2xl scale-110' : 'border-white/10 bg-white/5 hover:border-red-600/50'}`}
              >
                <img src={char.icon} alt={char.name} className="w-16 h-16 mx-auto mb-3 object-contain transition-transform group-hover:scale-125" />
                <h3 className="text-[10px] font-black tracking-widest text-center uppercase">{char.name}</h3>
              </div>
            ))}
          </div>

          {selectedChar && (
            <div className="mt-16 bg-black/60 border border-red-600/30 rounded-2xl p-8 md:p-12 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left space-y-6">
                  <h2 className="text-6xl font-black bebas text-red-600 tracking-tighter">{characters[selectedChar].name}</h2>
                  <p className="text-3xl font-bold italic text-gray-400">"{characters[selectedChar].quote}"</p>
                  <div className="flex flex-wrap gap-3">
                    {characters[selectedChar].powers.map(p => (
                      <span key={p} className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{p}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  {Object.entries(characters[selectedChar].stats).map(([stat, val]) => (
                    <div key={stat}>
                      <div className="flex justify-between text-xs font-black uppercase mb-1 tracking-widest">
                        <span>{stat}</span>
                        <span className="text-red-600">{val}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-red-600 transition-all duration-1000" style={{width: `${val}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Movies Section (Restored) */}
      <section id="movies" className="py-24 px-6 relative z-10 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black bebas tracking-tighter mb-12">CINEMATIC SAGA</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <div
                key={movie.title}
                onClick={() => handleVideoPlay(movie.url)}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-red-600 transition-all duration-500"
              >
                <div className="aspect-video bg-gradient-to-br from-red-900/40 to-black flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  🎬
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="bg-red-600 px-4 py-2 rounded-sm text-xs font-black uppercase tracking-widest">PLAY TRAILER</span>
                  </div>
                </div>
                <div className="p-6 bg-black/60 backdrop-blur-md">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-red-500 font-black text-xs tracking-widest uppercase">{movie.year}</span>
                     <span className="text-white font-black text-xs tracking-widest uppercase">⭐ {movie.rating}</span>
                   </div>
                   <h3 className="text-2xl font-black bebas tracking-tighter group-hover:text-red-600 transition">{movie.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comics Section (Restored) */}
      <section id="comics" className="py-24 px-6 relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/5">
        <div className="container mx-auto">
          <h2 className="text-6xl font-black bebas tracking-tighter mb-12">LEGENDARY COMICS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {comics.map((comic) => (
              <div key={comic.title} className="group cursor-pointer">
                <div className="aspect-[2/3] bg-gradient-to-tr from-blue-900/40 to-red-900/40 rounded-lg border border-white/10 mb-4 flex items-center justify-center text-6xl group-hover:border-red-600 transition transform group-hover:-translate-y-2">
                  📚
                </div>
                <h3 className="text-lg font-black bebas tracking-tighter group-hover:text-red-600 transition">{comic.title}</h3>
                <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">{comic.year} • {comic.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5 text-center relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black bebas tracking-widest text-red-600 mb-6 italic italic uppercase">AVENGERS ASSEMBLE</h2>
          <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">© 2026 MARVEL STUDIOS. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={handleVideoClose}>
          <div className="w-full max-w-5xl aspect-video relative group">
            <button className="absolute -top-12 right-0 text-white hover:text-red-600 text-2xl font-black transition">CLOSE ✕</button>
            <iframe className="w-full h-full rounded-lg shadow-2xl" src={videoUrl} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default App