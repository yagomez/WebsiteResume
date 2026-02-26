'use client';

import { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '@/utils/assetPath';

export default function Home() {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist = [
    { title: 'Contigo Quiero Estar', artist: 'Grupo Rye', file: 'Contigo Quiero Estar.mp3' },
    { title: 'DtMF', artist: 'Bad Bunny', file: 'DtMF.mp3' },
    { title: 'PREACHER MAN', artist: 'Ye', file: 'PREACHER MAN.mp3' },
    { title: 'Reincarnated', artist: 'Kendrick Lamar', file: 'Reincarnated.mp3' },
    { title: 'The Fall Off', artist: 'J Cole', file: 'The Fall Off.mp3' },
    { title: 'Tu Sancho', artist: 'Fuerza Regida', file: 'Tu Sancho.mp3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev);
    }, 500); // Flash every 500ms

    return () => clearInterval(interval);
  }, []);

  // Track loading
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const file = playlist[currentTrack]?.file;
    if (!file) return;
    
    audio.src = getAssetPath(`/music/${file}`);
  }, [currentTrack]);

  // Play/pause control
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.play().catch(() => {
        // Silent catch - autoplay might be blocked
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Track time updates and metadata
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentTrack < playlist.length - 1) {
        setCurrentTrack(currentTrack + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, playlist.length]);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (currentTrack < playlist.length - 1) {
      setCurrentTrack(currentTrack + 1);
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <main style={{ padding: '0', minHeight: '100vh' }}>
      <style>{`
        .projects-btn:hover + .dropdown-menu,
        .dropdown-menu:hover {
          display: block !important;
        }
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .online-flash {
          animation: flash 1s infinite;
        }
      `}</style>
      
      {/* MySpace-Style Top Navigation */}
      <div style={{
        width: '100%',
        background: '#000',
        padding: '6px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        paddingLeft: '15px',
        paddingRight: '15px',
        boxSizing: 'border-box',
        minHeight: '28px'
      }}>
        {/* Logo in Nav */}
        <img src="/images/ysicon.png" alt="MySpace Logo" style={{
          height: '120px',
          width: 'auto'
        }} />
        
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flex: 1 }}>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Home
          </a>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Profile
          </a>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Friends
          </a>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Music
          </a>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Photos
          </a>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Videos
          </a>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Blog
          </a>
        </div>

        {/* Search Bar */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <input type="text" placeholder="Search" style={{
            padding: '3px 4px',
            fontSize: '10px',
            border: '1px solid #666',
            width: '120px',
            background: '#fff',
            color: '#000'
          }} />
          <button style={{
            padding: '3px 8px',
            background: '#ffcc00',
            color: '#000',
            border: '1px solid #999',
            fontSize: '10px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Go
          </button>
        </div>

        {/* Right Side Account Links */}
        <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto' }}>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            cursor: 'pointer'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Sign Out
          </a>
          <span style={{ color: '#666', fontSize: '10px' }}>|</span>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            cursor: 'pointer'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Help
          </a>
        </div>
      </div>

      {/* Main Content with padding */}
      <div style={{ padding: '20px' }}>
        {/* Profile Header */}
        <div style={{ 
        border: '2px solid', 
        borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
        marginBottom: '20px',
        background: '#c0c0c0'
      }}>
        <div style={{
          background: 'linear-gradient(90deg, #000080, #1084d7)',
          color: 'white',
          padding: '2px 2px',
          fontWeight: 'bold',
          fontSize: '11px'
        }}>
          ★ Welcome to my Myspace Era Inspired Profile ★
        </div>
        <div style={{ padding: '4px 2px', background: '#c0c0c0', fontSize: '11px' }}>
          <p style={{ margin: '4px', color: '#000', lineHeight: '1.6' }}>You may be wondering how you ended up in 2009 when clicking on my website but I wanted to give insight into where my love for building through code began. I started custom making profiles for friends at a very young age, so this is my ode to what started it all.</p>
        </div>
      </div>

      {/* Main Layout - Table-Based 2-Column (35% left, 65% right) - Authentic MySpace */}
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '2px solid',
        borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
        background: '#c0c0c0',
        margin: '0 auto'
      }} cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            {/* LEFT COLUMN - 35% */}
            <td style={{
              width: '35%',
              verticalAlign: 'top',
              paddingRight: '6px',
              paddingBottom: '6px'
            }}>
              {/* PROFILE SECTION TABLE */}
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                background: '#c0c0c0',
                marginBottom: '6px'
              }} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td style={{
                      background: 'linear-gradient(90deg, #000080, #1084d7)',
                      color: 'white',
                      padding: '2px 2px',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      Profile
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', background: '#c0c0c0' }}>
                      <img 
                        src={showFirstImage ? getAssetPath("/images/pp1.JPG") : getAssetPath("/images/pp2.JPG")}
                        alt="Profile" 
                        style={{ width: '100%', marginBottom: '8px', border: '2px solid #000' }}
                      />
                      {/* Profile Metadata Table */}
                      <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '11px'
                      }} cellPadding={0} cellSpacing={0}>
                        <tbody>
                          <tr>
                            <td style={{ width: '45%', fontWeight: 'bold', paddingRight: '4px', color: '#000', paddingBottom: '4px' }}>Username:</td>
                            <td style={{ color: '#000', paddingBottom: '4px' }}>@yarelsthedev</td>
                          </tr>
                          <tr>
                            <td style={{ width: '45%', fontWeight: 'bold', paddingRight: '4px', color: '#000', paddingBottom: '4px' }}>Full Name:</td>
                            <td style={{ color: '#000', paddingBottom: '4px' }}>Yarelly Gomez</td>
                          </tr>
                          <tr>
                            <td style={{ width: '45%', fontWeight: 'bold', paddingRight: '4px', color: '#000', paddingBottom: '4px' }}>Location:</td>
                            <td style={{ color: '#000', paddingBottom: '4px' }}>Seattle, WA</td>
                          </tr>
                          <tr>
                            <td style={{ width: '45%', fontWeight: 'bold', paddingRight: '4px', color: '#000' }}>Status:</td>
                            <td style={{ color: '#000' }}>
                              <img src={getAssetPath('/images/online.png')} alt="Online" style={{ width: '16px', height: '16px', marginRight: '4px', verticalAlign: 'middle' }} />
                              Online
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* ABOUT ME SECTION TABLE */}
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                background: '#c0c0c0'
              }} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td style={{
                      background: 'linear-gradient(90deg, #000080, #1084d7)',
                      color: 'white',
                      padding: '2px 2px',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      About Me
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', background: '#c0c0c0', fontSize: '11px', color: '#000', lineHeight: '1.6' }}>
                      <p style={{ margin: '0 0 8px 0' }}>
                        I'm a passionate software engineer with a love for building elegant, user-centric systems — especially data pipelines and platforms that help businesses make better decisions. My coding journey started in the early 2000s tinkering with HTML & CSS on MySpace layouts, and it was that era of creative code experimentation that ignited my curiosity and shaped how I think about technology today.
                      </p>
                      <p style={{ margin: '0 0 8px 0' }}>
                        Over the years, I've evolved from customizing retro profile pages to architecting real-world data and ETL solutions that scale. I enjoy working across the full stack, but I'm particularly proud of projects that blend clean design with technical depth — whether that's visualizing complex pipelines, building intuitive dashboards, or optimizing backend systems to move and transform data reliably.
                      </p>
                      <p style={{ margin: '0 0 8px 0' }}>
                        My approach to software is rooted in clarity, creativity, and craftsmanship: write code that's expressive and maintainable, design experiences that people enjoy using, and always stay curious about how things work under the hood. This portfolio reflects both my technical accomplishments and the personality that has driven me since day one — from pixel GIFs and wallpaper backgrounds to modern UIs and scalable systems.
                      </p>
                      <p style={{ margin: '0', fontSize: '10px' }}>
                        When I'm not writing code, you'll find me exploring retro tech, sketching UI concepts, or experimenting with new tools that push creative boundaries.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            {/* RIGHT COLUMN - 65% */}
            <td style={{
              width: '65%',
              verticalAlign: 'top',
              paddingLeft: '6px',
              paddingBottom: '6px'
            }}>
              {/* GENERAL INFORMATION SECTION TABLE */}
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                background: '#c0c0c0',
                marginBottom: '6px'
              }} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td style={{
                      background: 'linear-gradient(90deg, #000080, #1084d7)',
                      color: 'white',
                      padding: '2px 2px',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      General Information
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', background: '#c0c0c0' }}>
                      {/* General Info Metadata Table */}
                      <table style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: '11px'
                      }} cellPadding={0} cellSpacing={0}>
                        <tbody>
                          <tr>
                            <td style={{ width: '40%', fontWeight: 'bold', paddingRight: '8px', color: '#000', paddingBottom: '4px' }}>Current Role:</td>
                            <td style={{ color: '#000', paddingBottom: '4px' }}>Software Engineer and Database Architect @ Microsoft</td>
                          </tr>
                          <tr>
                            <td style={{ width: '40%', fontWeight: 'bold', paddingRight: '8px', color: '#000', paddingBottom: '4px' }}>Experience:</td>
                            <td style={{ color: '#000', paddingBottom: '4px' }}>8+ years professional</td>
                          </tr>
                          <tr>
                            <td style={{ width: '40%', fontWeight: 'bold', paddingRight: '8px', color: '#000', paddingBottom: '4px' }}>Specialization:</td>
                            <td style={{ color: '#000', paddingBottom: '4px' }}>Database Systems</td>
                          </tr>
                          <tr>
                            <td style={{ width: '40%', fontWeight: 'bold', paddingRight: '8px', color: '#000', paddingBottom: '4px' }}>Everyday Stack:</td>
                            <td style={{ color: '#000', paddingBottom: '4px' }}>C#, SQL, .Net, Azure</td>
                          </tr>
                          <tr>
                            <td style={{ width: '40%', fontWeight: 'bold', paddingRight: '8px', color: '#000' }}>Current Stack:</td>
                            <td style={{ color: '#000' }}>Next.js, React, AWS, Snowflake</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* FEATURED PROJECTS SECTION TABLE */}
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                background: '#c0c0c0',
                marginBottom: '6px'
              }} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td style={{
                      background: 'linear-gradient(90deg, #000080, #1084d7)',
                      color: 'white',
                      padding: '2px 2px',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      Featured Projects
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', background: '#c0c0c0', fontSize: '11px', color: '#000' }}>
                      <ul style={{ margin: '0', paddingLeft: '20px' }}>
                        <li>🔹 FamilyGPT: A custom built ChatGPT like agent to store family history, data and quickly answer inquiries about the same</li>
                        <li>🔹 DACPAC Conversion of Legacy SQL DB: Taking a manual database and converting it into a fully Ev2 SDP deployable Dacpac</li>
                        <li>🔹 Data Migration Visuals: Visuals that assist in the ETL process for large legacy Systems</li>
                        <li>🔹 Google Cloud Professional Cert Project</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* FRIEND SPACE SECTION TABLE */}
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                background: '#c0c0c0',
                marginBottom: '6px'
              }} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td style={{
                      background: 'linear-gradient(90deg, #000080, #1084d7)',
                      color: 'white',
                      padding: '2px 2px',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      Friend Space
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', background: '#c0c0c0' }}>
                      <p style={{ margin: '0 0 12px 0', color: '#000', fontSize: '10px' }}>
                        yarel has 1 friend.
                      </p>
                      
                      {/* Tom - Original MySpace Creator */}
                      <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                        <img
                          src={getAssetPath('/images/tom.png')}
                          alt="Tom"
                          style={{
                            width: '100px',
                            height: '100px',
                            border: '1px solid #000',
                            marginBottom: '6px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                          }}
                        />
                        <p style={{ margin: '0', color: '#000', fontSize: '10px', fontWeight: 'bold' }}>
                          Tom
                        </p>
                        <p style={{ margin: '2px 0 6px 0', color: '#666', fontSize: '9px' }}>
                          MySpace Creator
                        </p>
                        <img 
                          src={getAssetPath('/images/online.png')} 
                          alt="Online Now" 
                          className="online-flash"
                          style={{
                            width: '120px',
                            height: '120px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                          }} 
                        />
                      </div>
                      
                      <p style={{ margin: '0', fontSize: '9px', textAlign: 'center' }}>
                        <a href="/" style={{
                          color: '#0066cc',
                          textDecoration: 'underline',
                          cursor: 'pointer'
                        }}>
                          View All of yarel&apos;s Friends
                        </a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* FAVORITE MUSIC SECTION TABLE */}
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                background: '#c0c0c0'
              }} cellPadding={0} cellSpacing={0}>
                <tbody>
                  <tr>
                    <td style={{
                      background: 'linear-gradient(90deg, #000080, #1084d7)',
                      color: 'white',
                      padding: '2px 2px',
                      fontWeight: 'bold',
                      fontSize: '11px'
                    }}>
                      🎵 Favorite Music
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', background: '#c0c0c0', fontSize: '11px' }}>
                      {/* Audio Element */}
                      <audio 
                        ref={audioRef}
                        crossOrigin="anonymous"
                        preload="auto"
                        controls
                      >
                      </audio>
                      
                      {/* Player Controls */}
                      <div style={{ marginBottom: '12px', marginTop: '8px' }}>
                        <div style={{
                          display: 'flex',
                          gap: '4px',
                          marginBottom: '8px',
                          alignItems: 'center'
                        }}>
                          <button
                            onClick={handlePrevious}
                            disabled={currentTrack === 0}
                            style={{
                              padding: '4px 8px',
                              background: '#c0c0c0',
                              color: '#000080',
                              border: '2px solid',
                              borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                              fontSize: '9px',
                              cursor: currentTrack === 0 ? 'not-allowed' : 'pointer',
                              fontWeight: 'bold',
                              opacity: currentTrack === 0 ? 0.5 : 1
                            }}
                          >
                            ◀ Prev
                          </button>
                          
                          <button
                            onClick={handlePlayPause}
                            style={{
                              padding: '4px 8px',
                              background: '#c0c0c0',
                              color: '#000080',
                              border: '2px solid',
                              borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                              fontSize: '9px',
                              cursor: 'pointer',
                              fontWeight: 'bold'
                            }}
                          >
                            {isPlaying ? '⏸ Pause' : '▶ Play'}
                          </button>
                          
                          <button
                            onClick={handleNext}
                            disabled={currentTrack === playlist.length - 1}
                            style={{
                              padding: '4px 8px',
                              background: '#c0c0c0',
                              color: '#000080',
                              border: '2px solid',
                              borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                              fontSize: '9px',
                              cursor: currentTrack === playlist.length - 1 ? 'not-allowed' : 'pointer',
                              fontWeight: 'bold',
                              opacity: currentTrack === playlist.length - 1 ? 0.5 : 1
                            }}
                          >
                            Next ▶
                          </button>
                        </div>

                        {/* Progress Bar */}
                        <div style={{ marginBottom: '6px' }}>
                          <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={(e) => {
                              if (audioRef.current) {
                                audioRef.current.currentTime = parseFloat(e.target.value);
                              }
                            }}
                            style={{
                              width: '100%',
                              height: '6px',
                              cursor: 'pointer'
                            }}
                          />
                        </div>

                        {/* Time Display */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '9px',
                          color: '#666',
                          marginBottom: '8px'
                        }}>
                          <span>{formatTime(currentTime)}</span>
                          <span>{formatTime(duration)}</span>
                        </div>

                        {/* Current Track Info */}
                        <div style={{
                          background: '#fff',
                          border: '1px solid #999',
                          padding: '4px 6px',
                          marginBottom: '8px',
                          minHeight: '30px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center'
                        }}>
                          <p style={{ margin: '0', fontWeight: 'bold', fontSize: '9px' }}>
                            {playlist[currentTrack]?.title}
                          </p>
                          <p style={{ margin: '2px 0 0 0', fontSize: '8px', color: '#666' }}>
                            {playlist[currentTrack]?.artist}
                          </p>
                        </div>
                      </div>

                      {/* Playlist */}
                      <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', fontSize: '10px' }}>Playlist:</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {playlist.map((track, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrentTrack(index);
                              setIsPlaying(true);
                            }}
                            style={{
                              padding: '4px 6px',
                              background: currentTrack === index ? '#000080' : '#c0c0c0',
                              color: currentTrack === index ? 'white' : '#000080',
                              border: '2px solid',
                              borderColor: currentTrack === index ? '#000080' : '#dfdfdf #808080 #808080 #dfdfdf',
                              fontSize: '9px',
                              cursor: 'pointer',
                              fontWeight: currentTrack === index ? 'bold' : 'normal',
                              textAlign: 'left',
                              textDecoration: 'none',
                              display: 'block',
                              width: '100%'
                            }}
                            onMouseEnter={(e) => {
                              if (currentTrack !== index) {
                                e.currentTarget.style.background = '#000080';
                                e.currentTarget.style.color = 'white';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (currentTrack !== index) {
                                e.currentTarget.style.background = '#c0c0c0';
                                e.currentTarget.style.color = '#000080';
                              }
                            }}
                          >
                            {isPlaying && currentTrack === index ? '▶' : ' '} {index + 1}. {track.title}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

          {/* Quick Links */}
          <div style={{
            border: '2px solid',
            borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
            background: '#c0c0c0',
            marginTop: '20px'
          }}>
            <div style={{
              background: 'linear-gradient(90deg, #000080, #1084d7)',
              color: 'white',
              padding: '2px 2px',
              fontWeight: 'bold',
              fontSize: '11px'
            }}>
              Navigation
            </div>
            <div style={{ padding: '8px', background: '#c0c0c0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a href="/projects" style={{
                padding: '4px 8px',
                background: '#c0c0c0',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                textDecoration: 'none',
                color: '#000080',
                fontSize: '11px',
                fontWeight: 'bold',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                Projects
              </a>
              <a href="/about" style={{
                padding: '4px 8px',
                background: '#c0c0c0',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                textDecoration: 'none',
                color: '#000080',
                fontSize: '11px',
                fontWeight: 'bold',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                About Me
              </a>
              <a href="/blog" style={{
                padding: '4px 8px',
                background: '#c0c0c0',
                border: '2px solid',
                borderColor: '#dfdfdf #808080 #808080 #dfdfdf',
                textDecoration: 'none',
                color: '#000080',
                fontSize: '11px',
                fontWeight: 'bold',
                textAlign: 'center',
                cursor: 'pointer'
              }}>
                Blog
              </a>
            </div>
          </div>
      </div>

      {/* MySpace-Style Bottom Navigation */}
      <div style={{
        width: '100%',
        background: '#000',
        padding: '6px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        paddingLeft: '15px',
        paddingRight: '15px',
        boxSizing: 'border-box',
        minHeight: '28px',
        marginTop: '20px'
      }}>
        {/* Logo in Nav */}
        <img src={getAssetPath('/images/ysicon.png')} alt="MySpace Logo" style={{
          height: '120px',
          width: 'auto'
        }} />
        
        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Home
          </a>
          <a href="/" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '10px',
            fontWeight: 'normal',
            cursor: 'pointer',
            padding: '2px 4px'
          }} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#ffcc00'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}>
            Profile
          </a>
        </div>
      </div>
    </main>
  );
}
