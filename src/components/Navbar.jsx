import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {

  // useLocation tells us which page we're currently on
  // so we can highlight the active nav link
  const location = useLocation()

  // menuOpen controls whether the hamburger drawer is open or closed
  // false = closed, true = open
  const [menuOpen, setMenuOpen] = useState(false)

  // This function returns different styles depending on
  // whether the link matches the current page or not
  const linkStyle = (path) => ({
    fontSize: '14px',
    textDecoration: 'none',
    // If this link is the current page → dark red, else gray
    color: location.pathname === path ? '#8b0000' : '#444',
    // If this link is the current page → bold, else normal
    fontWeight: location.pathname === path ? 600 : 400,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 10px',
    borderBottom: '0.5px solid #eee',
  })

  return (
    <>

      {/* ================================================ */}
      {/* TOP STRIP                                        */}
      {/* The dark red bar at the very top of the page    */}
      {/* Shows the government info and quick links       */}
      {/* ================================================ */}
      <div style={{ 
        background: '#8b0000', 
        padding: '5px 16px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>

        {/* Left side: government label */}
        <span style={{ 
          fontSize: '10px', 
          color: '#ffcccc' 
        }}>
          Republic of the Philippines · Candaba · Pampanga
        </span>

        {/* Right side: quick links */}
        <div style={{ 
          display: 'flex', 
          gap: '12px' 
        }}>
          <a href="#" style={{ 
            fontSize: '10px', 
            color: '#ffcccc', 
            textDecoration: 'none' 
          }}>
            COMELEC
          </a>
          <a href="#" style={{ 
            fontSize: '10px', 
            color: '#ffcccc', 
            textDecoration: 'none' 
          }}>
            Contact
          </a>
        </div>
      </div>

      {/* ================================================ */}
      {/* MAIN NAVBAR                                      */}
      {/* White bar with logos and hamburger button       */}
      {/* position: sticky means it stays at top          */}
      {/* when user scrolls down                          */}
      {/* ================================================ */}
      <div style={{ 
        background: '#fff', 
        borderBottom: '2px solid #cc0000', 
        padding: '0 16px', 
        height: '56px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        // sticky = stays visible when scrolling
        position: 'sticky', 
        top: 0, 
        // zIndex makes sure navbar stays on top of other elements
        zIndex: 100 
      }}>

        {/* LEFT SIDE: logos */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>

          {/* Candaba seal logo - circular with red border */}
          <div style={{ 
            width: '36px', 
            height: '36px', 
            borderRadius: '50%', 
            border: '1.5px solid #cc0000', 
            overflow: 'hidden', 
            flexShrink: 0 
          }}>
            <img 
              src="/candaba-logo.png" 
              alt="Candaba" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>

          {/* SK Halalan 2025 logo */}
          <img 
            src="/sk-logo.png" 
            alt="SK Halalan 2025" 
            style={{ 
              height: '38px', 
              width: 'auto', 
              objectFit: 'contain' 
            }} 
          />
        </div>

        {/* RIGHT SIDE: hamburger button */}
        {/* onClick toggles menuOpen between true and false */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '4px', 
            padding: '4px' 
          }}
        >
          {/* 3 lines that make the hamburger ☰ icon */}
          <span style={{ 
            display: 'block', 
            width: '22px', 
            height: '2px', 
            background: '#8b0000', 
            borderRadius: '1px' 
          }}/>
          <span style={{ 
            display: 'block', 
            width: '22px', 
            height: '2px', 
            background: '#8b0000', 
            borderRadius: '1px' 
          }}/>
          <span style={{ 
            display: 'block', 
            width: '22px', 
            height: '2px', 
            background: '#8b0000', 
            borderRadius: '1px' 
          }}/>
        </button>
      </div>

      {/* ================================================ */}
      {/* OVERLAY                                          */}
      {/* Dark background behind the drawer               */}
      {/* Only shows when menuOpen is true                */}
      {/* Clicking it closes the drawer                   */}
      {/* ================================================ */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.5)', 
            zIndex: 200 
          }}
        />
      )}

      {/* ================================================ */}
      {/* DRAWER                                           */}
      {/* Slides in from the right when hamburger clicked */}
      {/* right: 0 = visible, right: -220px = hidden      */}
      {/* transition makes the sliding smooth             */}
      {/* ================================================ */}
      <div style={{
        position: 'fixed', 
        top: 0, 
        // If menuOpen is true → show (right: 0)
        // If menuOpen is false → hide (right: -220px)
        right: menuOpen ? 0 : '-220px',
        width: '220px', 
        height: '100%', 
        background: '#fff',
        borderLeft: '0.5px solid #eee', 
        zIndex: 300,
        // Smooth slide animation
        transition: 'right 0.25s ease',
      }}>

        {/* Drawer header - dark red with title */}
        <div style={{ 
          background: '#8b0000', 
          padding: '20px 16px' 
        }}>
          <div style={{ 
            fontSize: '14px', 
            fontWeight: 700, 
            color: '#fff', 
            fontFamily: 'Georgia, serif' 
          }}>
            SK Halalan 2025
          </div>
          <div style={{ 
            fontSize: '11px', 
            color: '#ffcccc', 
            marginTop: '2px' 
          }}>
            Municipality of Candaba
          </div>
        </div>

        {/* Drawer navigation links */}
        {/* onClick closes the drawer when a link is clicked */}
        <div style={{ padding: '8px 0' }}>
          <Link to="/" onClick={() => setMenuOpen(false)} style={linkStyle('/')}>
            🏠 Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} style={linkStyle('/about')}>
            ℹ️ About
          </Link>
          <Link to="/candidates" onClick={() => setMenuOpen(false)} style={linkStyle('/candidates')}>
            👥 Candidates
          </Link>
        </div>

      </div>

    </>
  )
}

export default Navbar