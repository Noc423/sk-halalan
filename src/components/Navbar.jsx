import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'

function Navbar() {

  // ================================================
  // HOOKS & STATE
  // ================================================

  // Tells us the current URL path (e.g. "/" or "/about")
  // Used to highlight the active nav link
  const location = useLocation()

  // true = drawer is open, false = drawer is closed
  // Only used on mobile
  const [menuOpen, setMenuOpen] = useState(false)

  // 'en' or 'fil' — controls the language toggle
  const [lang, setLang] = useState('en')

  // isMobile = screen width less than 768px (phone)
  // isDesktop = screen width 1024px and above (laptop/desktop)
  const { isMobile } = useWindowSize()

  // ================================================
  // STYLES
  // ================================================

  // Style for desktop nav links (Home, About, Candidates)
  // Active link gets dark red color + red underline
  // Inactive link stays gray
  const desktopLinkStyle = (path) => ({
    fontSize: '13px',
    textDecoration: 'none',
    color: location.pathname === path ? '#8b0000' : '#444',
    fontWeight: location.pathname === path ? 600 : 400,
    paddingBottom: '2px',
    borderBottom: location.pathname === path ? '2px solid #cc0000' : 'none',
  })

  // Style for mobile drawer links
  // Bigger font and padding for easier tapping on phone
  const drawerLinkStyle = (path) => ({
    fontSize: '14px',
    textDecoration: 'none',
    color: location.pathname === path ? '#8b0000' : '#444',
    fontWeight: location.pathname === path ? 600 : 400,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 16px',
    borderBottom: '0.5px solid #eee',
  })

  return (
    <>

      {/* ================================================ */}
      {/* TOP STRIP                                        */}
      {/* Thin dark red bar at the very top of the page   */}
      {/* Shows the official government name on the left  */}
      {/* Shows quick links on the right                  */}
      {/* ================================================ */}
      <div style={{ 
        background: '#8b0000', 
        padding: '5px 32px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
      }}>

        {/* Official government label */}
        <span style={{ 
          fontSize: '11px', 
          color: '#ffcccc',
        }}>
          Republic of the Philippines · Municipality of Candaba · Pampanga
        </span>

        {/* Quick links on the right side */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: '14px',
        }}>
          <a href="#" style={{ 
            fontSize: '11px', 
            color: '#ffcccc', 
            textDecoration: 'none',
          }}>
            COMELEC
          </a>

          {/* Vertical divider line between links */}
          <div style={{ 
            width: '1px', 
            height: '12px', 
            background: 'rgba(255,255,255,0.25)',
          }}/>

          <a href="#" style={{ 
            fontSize: '11px', 
            color: '#ffcccc', 
            textDecoration: 'none',
          }}>
            Official Gazette
          </a>

          <div style={{ 
            width: '1px', 
            height: '12px', 
            background: 'rgba(255,255,255,0.25)',
          }}/>

          <a href="#" style={{ 
            fontSize: '11px', 
            color: '#ffcccc', 
            textDecoration: 'none',
          }}>
            Contact Us
          </a>
        </div>
      </div>

      {/* ================================================ */}
      {/* MAIN NAVBAR                                      */}
      {/* White bar with logos and navigation             */}
      {/* position sticky = stays visible when scrolling  */}
      {/* zIndex 100 = stays on top of all other content  */}
      {/* ================================================ */}
      <div style={{ 
        background: '#fff', 
        borderBottom: '2px solid #cc0000', 
        padding: isMobile ? '0 16px' : '0 32px', 
        height: '60px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
      }}>

        {/* ============================================= */}
        {/* LEFT SIDE: Logos                             */}
        {/* Wrapped in Link so clicking goes to Home     */}
        {/* ============================================= */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>

          {/* Logos wrapped in Link — clicking takes user to Home page */}
          <Link 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              textDecoration: 'none',
            }}
          >

            {/* Candaba municipal seal — circular shape with red border */}
            <div style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              border: '1.5px solid #cc0000', 
              overflow: 'hidden', 
              flexShrink: 0,
            }}>
              <img 
                src="/candaba-logo.png" 
                alt="Candaba Municipal Seal" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                }} 
              />
            </div>

            {/* SK Halalan 2025 official logo */}
            <img 
              src="/sk-logo.png" 
              alt="SK Halalan 2025" 
              style={{ 
                height: '44px', 
                width: 'auto', 
                objectFit: 'contain',
              }} 
            />
          </Link>

          {/* Municipality name — only shows on desktop */}
          {/* Hidden on mobile to save space            */}
          {!isMobile && (
            <>
              {/* Vertical divider between logo and text */}
              <div style={{ 
                width: '1px', 
                height: '32px', 
                background: '#eee',
                margin: '0 4px',
              }} />

              <div style={{ 
                fontSize: '11px', 
                color: '#666', 
                lineHeight: 1.5,
              }}>
                Municipality of Candaba<br />
                Pampanga Province
              </div>
            </>
          )}
        </div>

        {/* ============================================= */}
        {/* RIGHT SIDE                                   */}
        {/* Mobile: shows hamburger ☰ button             */}
        {/* Desktop: shows nav links + EN/FIL toggle     */}
        {/* ============================================= */}
        {isMobile ? (

          // MOBILE — hamburger button
          // Clicking it opens the drawer from the right
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '4px', 
              padding: '4px',
            }}
          >
            {/* 3 horizontal lines = hamburger icon ☰ */}
            <span style={{ 
              display: 'block', 
              width: '22px', 
              height: '2px', 
              background: '#8b0000', 
              borderRadius: '1px',
            }}/>
            <span style={{ 
              display: 'block', 
              width: '22px', 
              height: '2px', 
              background: '#8b0000', 
              borderRadius: '1px',
            }}/>
            <span style={{ 
              display: 'block', 
              width: '22px', 
              height: '2px', 
              background: '#8b0000', 
              borderRadius: '1px',
            }}/>
          </button>

        ) : (

          // DESKTOP — navigation links + language toggle
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '28px',
          }}>

            {/* Navigation links */}
            <Link to="/" style={desktopLinkStyle('/')}>Home</Link>
            <Link to="/about" style={desktopLinkStyle('/about')}>About</Link>
            <Link to="/candidates" style={desktopLinkStyle('/candidates')}>Candidates</Link>

            {/* ========================================= */}
            {/* EN / FIL LANGUAGE TOGGLE                 */}
            {/* Clicking switches between English        */}
            {/* and Filipino language                    */}
            {/* The red pill slides left or right        */}
            {/* ========================================= */}
            <div 
              onClick={() => setLang(lang === 'en' ? 'fil' : 'en')}
              style={{ 
                display: 'flex', 
                background: '#f5f5f5', 
                borderRadius: '99px', 
                padding: '3px', 
                position: 'relative', 
                cursor: 'pointer', 
                userSelect: 'none', 
                border: '0.5px solid #ddd',
              }}
            >
              {/* Red sliding pill — moves left for EN, right for FIL */}
              <div style={{ 
                position: 'absolute', 
                top: '3px', 
                left: lang === 'en' ? '3px' : 'calc(50%)',
                height: 'calc(100% - 6px)', 
                width: 'calc(50% - 3px)',
                background: '#8b0000', 
                borderRadius: '99px', 
                transition: 'left 0.25s ease',
                zIndex: 0,
              }}/>

              {/* EN option */}
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 500, 
                padding: '4px 12px', 
                borderRadius: '99px', 
                // White text when active, gray when inactive
                color: lang === 'en' ? '#fff' : '#888', 
                zIndex: 1, 
                position: 'relative',
              }}>
                EN
              </span>

              {/* FIL option */}
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 500, 
                padding: '4px 12px', 
                borderRadius: '99px', 
                color: lang === 'fil' ? '#fff' : '#888', 
                zIndex: 1, 
                position: 'relative',
              }}>
                FIL
              </span>
            </div>

          </div>
        )}
      </div>

      {/* ================================================ */}
      {/* OVERLAY                                          */}
      {/* Semi-transparent dark background                */}
      {/* Only appears on mobile when drawer is open      */}
      {/* Clicking anywhere on it closes the drawer       */}
      {/* ================================================ */}
      {isMobile && menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.5)', 
            zIndex: 200,
          }}
        />
      )}

      {/* ================================================ */}
      {/* MOBILE DRAWER                                    */}
      {/* Slides in from the right side on mobile only    */}
      {/* right: 0 = fully visible on screen              */}
      {/* right: -220px = hidden off screen to the right  */}
      {/* transition = smooth sliding animation           */}
      {/* ================================================ */}
      {isMobile && (
        <div style={{
          position: 'fixed', 
          top: 0, 
          right: menuOpen ? 0 : '-220px',
          width: '220px', 
          height: '100%', 
          background: '#fff',
          borderLeft: '0.5px solid #eee', 
          zIndex: 300,
          transition: 'right 0.25s ease',
        }}>

          {/* Drawer header — dark red with website title */}
          <div style={{ 
            background: '#8b0000', 
            padding: '20px 16px',
          }}>
            <div style={{ 
              fontSize: '14px', 
              fontWeight: 700, 
              color: '#fff', 
              fontFamily: 'Georgia, serif',
            }}>
              SK Halalan 2025
            </div>
            <div style={{ 
              fontSize: '11px', 
              color: '#ffcccc', 
              marginTop: '2px',
            }}>
              Municipality of Candaba
            </div>
          </div>

          {/* Drawer navigation links                     */}
          {/* onClick on each link closes the drawer      */}
          {/* so the page doesn't stay covered           */}
          <div style={{ padding: '8px 0' }}>
            <Link 
              to="/" 
              onClick={() => setMenuOpen(false)} 
              style={drawerLinkStyle('/')}
            >
              🏠 Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setMenuOpen(false)} 
              style={drawerLinkStyle('/about')}
            >
              ℹ️ About
            </Link>
            <Link 
              to="/candidates" 
              onClick={() => setMenuOpen(false)} 
              style={drawerLinkStyle('/candidates')}
            >
              👥 Candidates
            </Link>
          </div>

        </div>
      )}

    </>
  )
}

export default Navbar