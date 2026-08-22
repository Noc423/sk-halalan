import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'

function Leadership() {

  const navigate = useNavigate()
  const { isMobile, isDesktop } = useWindowSize()

  // ================================================
  // HERO ANIMATION
  // ================================================
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  // ================================================
  // OFFICIALS DATA
  // ================================================
  const mayor = {
    name: 'Hon. Rene E. Maglanque',
    position: 'Municipal Mayor',
    photo: '/images/Rene.jpg',
    description: 'Leading Candaba towards sustainable development, inclusive growth, and better opportunities for every Kandeño.',
    term: '2025 – 2028',
  }

  const viceMayor = {
    name: 'Hon. Thelma C. Macapagal',
    position: 'Municipal Vice Mayor',
    photo: '/images/Thelma.jpg',
    description: 'Supporting the vision of progress and unity for a stronger, more resilient Municipality of Candaba.',
    term: '2025 – 2028',
  }

  const sbMembers = [
    { name: 'Hon. Donato K. Bondoc III', photo: '/images/Donato.jpg', term: '2025 – 2028' },
    { name: 'Hon. Joy Marie M. Sagum', photo: '/images/joy.jpg', term: '2025 – 2028' },
    { name: 'Hon. Quenie A. Culala', photo: '/images/Quenie.jpg', term: '2025 – 2028' },
    { name: 'Hon. Camille Dela Cruz Bulaon', photo: '/images/Camille.jpg', term: '2025 – 2028' },
    { name: 'Hon. Elmer G. Gonzales', photo: null, term: '2025 – 2028' },
    { name: 'Hon. Lycca N. Basa', photo: '/images/lycca.jpg', term: '2025 – 2028' },
    { name: 'Hon. Alvin M. Carpio', photo: '/images/Alvin.jpg', term: '2025 – 2028' },
    { name: 'Hon. Erlinda P. Salac', photo: '/images/Erlinda.jpg', term: '2025 – 2028' },
  ]

  // ================================================
  // OFFICIAL CARD — for Mayor and Vice Mayor
  // ================================================
  const LeaderCard = ({ official, color }) => (
    <div style={{
      background: '#fff',
      border: '0.5px solid #eee',
      borderRadius: '12px',
      overflow: 'hidden',
      flex: 1,
      minWidth: isMobile ? '100%' : '300px',
      animation: 'fadeUp 0.6s ease both',
    }}>

      {/* Card header label */}
      <div style={{
        background: '#8b0000',
        padding: '8px 16px',
        display: 'inline-block',
        borderRadius: '0 0 8px 0',
      }}>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          {official.position === 'Municipal Mayor' ? 'Mayor' : 'Vice Mayor'}
        </span>
      </div>

      {/* Card body */}
      <div style={{
        padding: '20px',
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
        flexWrap: isMobile ? 'wrap' : 'nowrap',
      }}>

        {/* Photo */}
        <div style={{
          width: isMobile ? '100%' : '150px',
          height: isMobile ? '200px' : '180px',
          flexShrink: 0,
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#f5f5f5',
        }}>
          <img
            src={official.photo}
            alt={official.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: 700,
            color: '#8b0000',
            fontFamily: 'Georgia, serif',
            marginBottom: '4px',
          }}>
            {official.name}
          </h3>
          <div style={{
            fontSize: '13px',
            color: '#cc0000',
            fontWeight: 600,
            marginBottom: '12px',
          }}>
            {official.position}
          </div>

          {/* Red divider */}
          <div style={{
            width: '32px',
            height: '2px',
            background: '#cc0000',
            borderRadius: '1px',
            marginBottom: '12px',
          }} />

          <p style={{
            fontSize: '13px',
            color: '#555',
            lineHeight: 1.7,
            marginBottom: '14px',
            textAlign: 'left',
          }}>
            {official.description}
          </p>
        </div>
      </div>

      {/* Term footer */}
      <div style={{
        borderTop: '0.5px solid #eee',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: '#fafafa',
      }}>
        <span style={{ fontSize: '14px' }}>👤</span>
        <span style={{
          fontSize: '12px',
          color: '#666',
        }}>
          Term: {official.term}
        </span>
      </div>
    </div>
  )

  // ================================================
  // SB MEMBER CARD
  // ================================================
  const SBCard = ({ member, index }) => (
    <div style={{
      background: '#fff',
      border: '0.5px solid #eee',
      borderRadius: '10px',
      overflow: 'hidden',
      textAlign: 'center',
      animation: `fadeUp 0.5s ease ${index * 0.08}s both`,
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >

      {/* Photo */}
      <div style={{
        width: '100%',
        height: '160px',
        background: '#f5f5f5',
        overflow: 'hidden',
      }}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        ) : (
          // Placeholder when no photo
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff0f0',
            fontSize: '48px',
          }}>
            👤
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: '12px 10px' }}>
        <div style={{
          fontSize: '12px',
          fontWeight: 700,
          color: '#333',
          marginBottom: '3px',
          lineHeight: 1.3,
        }}>
          {member.name}
        </div>
        <div style={{
          fontSize: '11px',
          color: '#cc0000',
          fontWeight: 600,
          marginBottom: '6px',
        }}>
          SB Member
        </div>
      </div>

      {/* Term footer */}
      <div style={{
        borderTop: '0.5px solid #eee',
        padding: '6px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        background: '#fafafa',
      }}>
        <span style={{ fontSize: '12px' }}>👤</span>
        <span style={{ fontSize: '10px', color: '#888' }}>Term: {member.term}</span>
      </div>
    </div>
  )

  return (
    <div style={{ background: '#f5f5f5' }}>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* ================================================ */}
      {/* HERO                                            */}
      {/* ================================================ */}
      <div style={{
        position: 'relative',
        height: isMobile ? '240px' : '300px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>

        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/candaba-hall.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          transform: heroVisible ? 'scale(1)' : 'scale(1.06)',
          transition: 'transform 1.2s ease',
        }} />

        {/* Tint */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(80,0,0,0.70)',
        }} />

        {/* Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '12px 12px',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          padding: isMobile ? '0 20px' : '0 48px',
          animation: heroVisible ? 'fadeUp 0.7s ease both' : 'none',
        }}>

          {/* Breadcrumb */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px',
            fontSize: '12px',
            color: '#ffaaaa',
          }}>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              Home
            </span>
            <span>›</span>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/about')}
            >
              About
            </span>
            <span>›</span>
            <span style={{ color: '#fff', fontWeight: 600 }}>Municipal Leadership</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: isMobile ? '26px' : '38px',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'Georgia, serif',
            marginBottom: '8px',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            Municipal Leadership
          </h1>

          {/* Red accent line */}
          <div style={{
            width: '40px',
            height: '3px',
            background: '#cc0000',
            borderRadius: '2px',
            marginBottom: '12px',
            animation: 'pulse 2s infinite',
          }} />

          {/* Description */}
          <p style={{
            fontSize: isMobile ? '12px' : '14px',
            color: '#ffdddd',
            lineHeight: 1.7,
            maxWidth: '500px',
            textAlign: 'left',
          }}>
            Meet the leaders of the Municipality of Candaba who are committed
            to good governance, transparency, and the welfare of every Kandeño.
          </p>
        </div>
      </div>

      {/* ================================================ */}
      {/* MAIN CONTENT                                    */}
      {/* ================================================ */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '24px 16px' : '40px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>

        {/* =========================================== */}
        {/* SECTION HEADER                            */}
        {/* =========================================== */}
        <div style={{ textAlign: 'center', animation: 'fadeUp 0.6s ease both' }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🏛️</div>
          <h2 style={{
            fontSize: isMobile ? '22px' : '28px',
            fontWeight: 700,
            color: '#8b0000',
            fontFamily: 'Georgia, serif',
            marginBottom: '8px',
          }}>
            Our Local Leaders
          </h2>
          <p style={{ fontSize: '14px', color: '#777' }}>
            Working together for a progressive and empowered Candaba.
          </p>
        </div>

        {/* =========================================== */}
        {/* MAYOR + VICE MAYOR                        */}
        {/* Side by side on desktop, stacked on mobile */}
        {/* =========================================== */}
        <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
        }}>
          <LeaderCard official={mayor} />
          <LeaderCard official={viceMayor} />
        </div>

        {/* =========================================== */}
        {/* SB MEMBERS                                */}
        {/* =========================================== */}
        <div>

          {/* Section label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <div style={{ flex: 1, height: '0.5px', background: '#ddd' }} />
            <div style={{
              background: '#8b0000',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              padding: '6px 16px',
              borderRadius: '99px',
              textTransform: 'uppercase',
            }}>
              Sangguniang Bayan Members
            </div>
            <div style={{ flex: 1, height: '0.5px', background: '#ddd' }} />
          </div>

          {/* Members grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile
              ? 'repeat(2, 1fr)'
              : isDesktop
              ? 'repeat(4, 1fr)'
              : 'repeat(3, 1fr)',
            gap: '16px',
          }}>
            {sbMembers.map((member, i) => (
              <SBCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* =========================================== */}
        {/* MESSAGE TO THE PEOPLE                     */}
        {/* =========================================== */}
        <div style={{
          background: '#fff',
          border: '0.5px solid #eee',
          borderRadius: '12px',
          padding: isMobile ? '24px 20px' : '36px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          flexWrap: isMobile ? 'wrap' : 'nowrap',
          animation: 'fadeUp 0.6s ease both',
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Decorative watermark */}
          <div style={{
            position: 'absolute',
            right: '-20px',
            bottom: '-20px',
            fontSize: '120px',
            opacity: 0.04,
            userSelect: 'none',
          }}>
            🏛️
          </div>

          {/* Icon */}
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: '#8b0000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            flexShrink: 0,
          }}>
            👥
          </div>

          {/* Text */}
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: isMobile ? '16px' : '20px',
              fontWeight: 700,
              color: '#8b0000',
              fontFamily: 'Georgia, serif',
              marginBottom: '8px',
            }}>
              A Message to the People
            </h3>

            {/* Red underline */}
            <div style={{
              width: '32px',
              height: '2px',
              background: '#cc0000',
              borderRadius: '1px',
              marginBottom: '12px',
            }} />

            <p style={{
              fontSize: '13px',
              color: '#555',
              lineHeight: 1.8,
              textAlign: 'left',
            }}>
              We, the local leaders of Candaba, remain committed to serving our people
              with integrity, dedication, and compassion. Together, let us build a brighter
              future for the youth and for generations to come.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Leadership