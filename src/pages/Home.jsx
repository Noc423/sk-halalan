import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'

function Home() {

  // useNavigate lets us go to another page programmatically
  const navigate = useNavigate()

  // Get current screen size
  const { isMobile, isTablet, isDesktop } = useWindowSize()

  // ================================================
  // COUNTDOWN TIMER
  // Calculates time remaining until election day
  // Updates every second using setInterval
  // ================================================
  const [timeLeft, setTimeLeft] = useState({ 
    days: 0, 
    hours: 0, 
    minutes: 0, 
    seconds: 0 
  })

  useEffect(() => {
    // Election date — change this when official date is announced
    const electionDate = new Date('2025-11-01T08:00:00')

    const tick = () => {
      const now = new Date()
      const diff = electionDate - now
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }

    // Run immediately then every second
    tick()
    const timer = setInterval(tick, 1000)

    // Cleanup: stop the timer when component unmounts
    return () => clearInterval(timer)
  }, [])

  // ================================================
  // TYPEWRITER EFFECT
  // Cycles through messages one character at a time
  // ================================================
  const messages = [
    'Your vote is your voice.',
    'Know your candidates. Own your future.',
    'Kabataan ang pag-asa ng bayan.',
    'One vote can change everything.',
    'Ang boto mo, ang kinabukasan natin.',
  ]

  const [twText, setTwText] = useState('')
  const [twIndex, setTwIndex] = useState(0)
  const [twDeleting, setTwDeleting] = useState(false)
  const [twChar, setTwChar] = useState(0)

  useEffect(() => {
    const current = messages[twIndex]

    const timeout = setTimeout(() => {
      if (!twDeleting) {
        setTwChar((c) => c + 1)
        setTwText(current.substring(0, twChar + 1))
        if (twChar + 1 === current.length) {
          setTimeout(() => setTwDeleting(true), 2200)
        }
      } else {
        setTwChar((c) => c - 1)
        setTwText(current.substring(0, twChar - 1))
        if (twChar - 1 === 0) {
          setTwDeleting(false)
          setTwIndex((i) => (i + 1) % messages.length)
        }
      }
    }, twDeleting ? 35 : 65)

    return () => clearTimeout(timeout)
  }, [twChar, twDeleting, twIndex])

  // ================================================
  // COUNTDOWN BOX COMPONENT
  // Small reusable box showing a number + label
  // ================================================
  const CountdownBox = ({ value, label }) => (
    <div style={{
      background: '#fff',
      border: '1px solid #e0e0e0',
      borderBottom: '2px solid #cc0000',
      borderRadius: '4px',
      // Smaller padding on mobile, bigger on desktop
      padding: isMobile ? '4px 10px' : '6px 14px',
      textAlign: 'center',
      minWidth: isMobile ? '46px' : '60px',
    }}>
      <span style={{
        // Smaller font on mobile, bigger on desktop
        fontSize: isMobile ? '16px' : isTablet ? '20px' : '24px',
        fontWeight: 700,
        color: '#8b0000',
        display: 'block',
        lineHeight: 1,
        fontFamily: 'Georgia, serif',
      }}>
        {String(value).padStart(2, '0')}
      </span>
      <span style={{
        fontSize: isMobile ? '8px' : '9px',
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}>
        {label}
      </span>
    </div>
  )

  return (
    <div>

      {/* ================================================ */}
      {/* HERO SECTION                                     */}
      {/* Full width banner with background image         */}
      {/* Height changes based on screen size             */}
      {/* ================================================ */}
      <div style={{
        position: 'relative',
        // Taller hero on bigger screens
        height: isMobile ? '280px' : isTablet ? '340px' : '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>

        {/* Background image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/candaba-hall.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }} />

        {/* Dark red tint overlay so text is readable */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(35,0,0,0.65)',
        }} />

        {/* Hero content — centered, max width on desktop */}
        <div style={{
          position: 'relative',
          textAlign: 'center',
          padding: isMobile ? '0 20px' : '0 60px',
          width: '100%',
          maxWidth: isDesktop ? '900px' : '100%',
        }}>

          {/* Small label above title */}
          <div style={{
            fontSize: isMobile ? '10px' : '12px',
            color: '#ffaaaa',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Official SK Halalan 2026
          </div>

          {/* Main title — bigger on desktop */}
          <h1 style={{
            fontSize: isMobile ? '26px' : isTablet ? '36px' : '48px',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'Georgia, serif',
            marginBottom: '6px',
            lineHeight: 1.2,
          }}>
            Know Your <span style={{ color: '#ffaaaa' }}>Candidates.</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: isMobile ? '12px' : '14px',
            color: '#ffcccc',
            marginBottom: '12px',
          }}>
            Candaba, Pampanga · November 2026
          </p>

          {/* Typewriter box — wider on desktop */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            border: '0.5px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            padding: '8px 14px',
            margin: '0 auto 14px',
            maxWidth: isMobile ? '300px' : '480px',
            minHeight: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontSize: isMobile ? '12px' : '14px',
              color: '#ffe0e0',
              fontStyle: 'italic',
            }}>
              {twText}
              {/* Blinking cursor */}
              <span style={{
                display: 'inline-block',
                width: '1.5px',
                height: '12px',
                background: '#ff9999',
                marginLeft: '2px',
                verticalAlign: 'middle',
                animation: 'blink 0.7s infinite',
              }} />
            </span>
          </div>

          {/* Action buttons */}
          <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
          }}>
            <button
              onClick={() => navigate('/candidates')}
              style={{
                background: '#cc0000',
                color: '#fff',
                border: 'none',
                padding: isMobile ? '10px 20px' : '12px 28px',
                borderRadius: '4px',
                fontSize: isMobile ? '13px' : '15px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              View Candidates
            </button>

            <button
              onClick={() => navigate('/about')}
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: isMobile ? '10px 20px' : '12px 28px',
                borderRadius: '4px',
                fontSize: isMobile ? '13px' : '15px',
                cursor: 'pointer',
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* ================================================ */}
      {/* COUNTDOWN TIMER                                  */}
      {/* Shows days, hours, minutes, seconds until       */}
      {/* election day                                    */}
      {/* ================================================ */}
      <div style={{
        background: '#f8f8f8',
        borderBottom: '1px solid #eee',
        padding: isMobile ? '12px 20px' : '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontSize: '11px',
          color: '#666',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}>
          Election Countdown
        </span>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <CountdownBox value={timeLeft.days} label="Days" />
          <span style={{ color: '#cc0000', fontSize: '18px', fontWeight: 700 }}>:</span>
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <span style={{ color: '#cc0000', fontSize: '18px', fontWeight: 700 }}>:</span>
          <CountdownBox value={timeLeft.minutes} label="Mins" />
          <span style={{ color: '#cc0000', fontSize: '18px', fontWeight: 700 }}>:</span>
          <CountdownBox value={timeLeft.seconds} label="Secs" />
        </div>
      </div>

      {/* ================================================ */}
      {/* STATS BAR                                        */}
      {/* 3 key numbers about the election               */}
      {/* ================================================ */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        background: '#8b0000',
      }}>
        {[
          { number: '8', label: 'Open Positions' },
          { number: 'TBA', label: 'Candidates' },
          { number: 'Nov 2026', label: 'Election Date' },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: isMobile ? '14px' : '18px',
            textAlign: 'center',
            borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.15)' : 'none',
          }}>
            <div style={{
              fontSize: isMobile ? '20px' : '26px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Georgia, serif',
            }}>
              {stat.number}
            </div>
            <div style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#ffcccc',
              marginTop: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ================================================ */}
      {/* ABOUT + INFO CARDS                               */}
      {/* Side by side on desktop, stacked on mobile      */}
      {/* ================================================ */}
      <div style={{
        display: isDesktop ? 'grid' : 'block',
        // On desktop: 2 columns side by side
        // On mobile/tablet: stacked
        gridTemplateColumns: isDesktop ? '1fr 1fr' : undefined,
        borderBottom: '0.5px solid #eee',
      }}>

        {/* About section */}
        <div style={{
          padding: isMobile ? '20px' : '28px 32px',
          background: '#fff',
          borderRight: isDesktop ? '0.5px solid #eee' : 'none',
          borderBottom: isDesktop ? 'none' : '0.5px solid #eee',
        }}>
          <div style={{
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 700,
            color: '#8b0000',
            fontFamily: 'Georgia, serif',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{
              display: 'block',
              width: '3px',
              height: '16px',
              background: '#cc0000',
              borderRadius: '2px',
            }} />
            About SK Halalan 2026
          </div>
          <p style={{
            fontSize: isMobile ? '13px' : '14px',
            color: '#555',
            lineHeight: 1.8,
          }}>
            SK Halalan 2026 is an official online candidate information platform for the 
            Sangguniang Kabataan elections in the Municipality of Candaba, Pampanga. It provides 
            equal access to the profiles, qualifications, and platforms of all official SK candidates, 
            helping the youth make informed and responsible voting decisions.

          </p>
        </div>

        {/* Info cards */}
        <div style={{
          padding: isMobile ? '20px' : '28px 32px',
          background: '#fafafa',
        }}>
          <div style={{
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 700,
            color: '#8b0000',
            fontFamily: 'Georgia, serif',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{
              display: 'block',
              width: '3px',
              height: '16px',
              background: '#cc0000',
              borderRadius: '2px',
            }} />
            Election Details
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
          }}>
            {[
              { icon: '📅', label: 'Election Date', value: 'November 2026' },
              { icon: '📍', label: 'Location', value: 'Candaba, Pampanga' },
              { icon: '👑', label: 'Chairperson', value: '1 seat open' },
              { icon: '👤', label: 'Councilors', value: '7 seats open' },
            ].map((card, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '0.5px solid #eee',
                borderTop: '2px solid #cc0000',
                borderRadius: '4px',
                padding: '12px 10px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '22px', marginBottom: '5px' }}>{card.icon}</div>
                <div style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#333',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}>
                  {card.label}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginTop: '3px',
                }}>
                  {card.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================ */}
      {/* CTA BANNER                                       */}
      {/* Call to action to view candidates              */}
      {/* ================================================ */}
      <div style={{
        padding: isMobile ? '24px 20px' : '40px 32px',
        background: 'linear-gradient(135deg, #1a0000 0%, #6b0000 100%)',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: isMobile ? '18px' : '24px',
          fontWeight: 700,
          color: '#fff',
          fontFamily: 'Georgia, serif',
          marginBottom: '6px',
        }}>
          Ready to know your candidates?
        </div>
        <div style={{
          fontSize: isMobile ? '12px' : '14px',
          color: '#ffcccc',
          marginBottom: '16px',
        }}>
          Candidates will be officially announced soon.
        </div>
        <button
          onClick={() => navigate('/candidates')}
          style={{
            background: '#cc0000',
            color: '#fff',
            border: 'none',
            padding: isMobile ? '12px 28px' : '14px 36px',
            borderRadius: '4px',
            fontSize: isMobile ? '13px' : '15px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          View All Candidates
        </button>
      </div>

      {/* Blinking cursor animation */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

    </div>
  )
}

export default Home