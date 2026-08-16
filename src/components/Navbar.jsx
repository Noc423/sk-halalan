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

  // true = mobile drawer is open, false = closed
  const [menuOpen, setMenuOpen] = useState(false)

  // true = about dropdown/accordion is open, false = closed
  // Used on both desktop (dropdown) and mobile (accordion)
  const [aboutOpen, setAboutOpen] = useState(false)

  // 'en' or 'fil' — controls the language toggle
  const [lang, setLang] = useState('en')

  // isMobile = screen width less than 768px (phone)
  // Anything above = desktop layout
  const { isMobile } = useWindowSize()

  // ================================================
  // STYLES
  // ================================================

  // Desktop nav link style
  // Active page = dark red color + red underline
  // Inactive page = gray, no underline
  const desktopLinkStyle = (path) => ({
    fontSize: '13px',
    textDecoration: 'none',
    color: location.pathname === path ? '#8b0000' : '#444',
    fontWeight: location.pathname === path ? 600 : 400,
    paddingBottom: '2px',
    borderBottom: location.pathname === path ? '2px solid #cc0000' : 'none',
  })

  // Mobile drawer link style
  // Bigger font and padding = easier to tap on phone
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

  // Style for each item inside the desktop About dropdown
  const dropdownItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 16px',
    fontSize: '13px',
    color: '#333',
    textDecoration: 'none',
    borderBottom: '0.5px solid #f5f5f5',
    background: '#fff',
  }

  // Style for sub-links inside the mobile About accordion
  const accordionSubLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    // Extra left padding to show it's a sub-item
    padding: '12px 16px 12px 32px',
    fontSize: '13px',
    color: '#555',
    textDecoration: 'none',
    borderBottom: '0.5px solid #eee',
  }

  return (
    <>

      {/* ================================================ */}
      {/* TOP STRIP                                        */}
      {/* Thin dark red bar at the very top               */}
      {/* Shows official government name + quick links    */}
      {/* ================================================ */}
      <div style={{ 
        background: '#8b0000', 
        padding: '5px 32px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
      }}>

        {/* Left: official government label */}
        <span style={{ 
          fontSize: '11px', 
          color: '#ffcccc',
        }}>
          Republic of the Philippines · Municipality of Candaba · Pampanga
        </span>

        {/* Right: quick links with dividers between them */}
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

          {/* Divider line */}
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

          {/* Divider line */}
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
      {/* position sticky = stays on screen when scrolling*/}
      {/* zIndex 100 = always on top of page content      */}
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
        {/* LEFT SIDE: Logos + Municipality Name         */}
        {/* Clicking logos goes back to Home page        */}
        {/* ============================================= */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>

          {/* Both logos inside a Link                    */}
          {/* Clicking either logo navigates to Home      */}
          <Link 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              textDecoration: 'none',
            }}
          >
            {/* Candaba municipal seal — circular red border */}
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

          {/* Thin vertical divider line */}
          <div style={{ 
            width: '1px', 
            height: '32px', 
            background: '#eee',
            margin: '0 4px',
          }} />

          {/* Municipality name — visible on all sizes */}
          <div style={{ 
            fontSize: '11px', 
            color: '#666', 
            lineHeight: 1.5,
          }}>
            Municipality of Candaba<br />
            Pampanga Province
          </div>

        </div>

        {/* ============================================= */}
        {/* RIGHT SIDE                                   */}
        {/* Mobile = hamburger ☰ button                  */}
        {/* Desktop = nav links + dropdown + toggle      */}
        {/* ============================================= */}
        {isMobile ? (

          // MOBILE: hamburger button
          // Clicking opens the side drawer
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
            {/* 3 lines = hamburger ☰ icon */}
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

          // DESKTOP: nav links + about dropdown + EN/FIL toggle
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '28px',
          }}>

            {/* Home nav link */}
            <Link to="/" style={desktopLinkStyle('/')}>Home</Link>

            {/* ========================================= */}
            {/* ABOUT DROPDOWN — desktop only            */}
            {/* Hovering opens a dropdown menu below     */}
            {/* Invisible bridge prevents it from        */}
            {/* closing when mouse moves into the menu   */}
            {/* ========================================= */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >

              {/* About trigger + rotating arrow */}
              <div style={{
                ...desktopLinkStyle('/about'),
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
              }}>
                About
                {/* Arrow rotates 180deg when dropdown is open */}
                <span style={{
                  fontSize: '10px',
                  color: location.pathname.startsWith('/about') ? '#8b0000' : '#888',
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  transform: aboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                  ▾
                </span>
              </div>

              {/* Invisible bridge                         */}
              {/* 8px tall transparent div that fills gap */}
              {/* between trigger and dropdown menu       */}
              {/* Without this the dropdown closes when   */}
              {/* mouse moves from trigger to menu        */}
              {aboutOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '100%',
                  height: '8px',
                  background: 'transparent',
                }}/>
              )}

              {/* Dropdown menu — shows when aboutOpen = true */}
              {aboutOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#fff',
                  border: '0.5px solid #eee',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  minWidth: '210px',
                  overflow: 'hidden',
                  zIndex: 999,
                }}>

                  {/* Option 1: About SK Halalan 2025 */}
                  <Link
                    to="/about"
                    style={dropdownItemStyle}
                    onMouseEnter={e => e.currentTarget.style.background = '#fff0f0'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                  >
                    <span style={{ fontSize: '16px' }}>ℹ️</span>
                    About SK Halalan 2025
                  </Link>

                  {/* Option 2: Municipal Leadership */}
                  <Link
                    to="/leadership"
                    style={dropdownItemStyle}
                    onMouseEnter={e => e.currentTarget.style.background = '#fff0f0'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                  >
                    <span style={{ fontSize: '16px' }}>🏛️</span>
                    Municipal Leadership
                  </Link>

                  {/* Option 3: Developer — last item, no border */}
                  <Link
                    to="/developer"
                    style={{ 
                      ...dropdownItemStyle, 
                      borderBottom: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#fff0f0'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                  >
                    <span style={{ fontSize: '16px' }}>💻</span>
                    Developer
                  </Link>

                </div>
              )}
            </div>

            {/* Candidates nav link */}
            <Link to="/candidates" style={desktopLinkStyle('/candidates')}>Candidates</Link>

            {/* ========================================= */}
            {/* EN / FIL LANGUAGE TOGGLE                 */}
            {/* Clicking switches between EN and FIL     */}
            {/* Red pill slides left = EN, right = FIL   */}
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
              {/* Red sliding pill */}
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

              {/* EN label */}
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 500, 
                padding: '4px 12px', 
                borderRadius: '99px', 
                color: lang === 'en' ? '#fff' : '#888', 
                zIndex: 1, 
                position: 'relative',
              }}>
                EN
              </span>

              {/* FIL label */}
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
      {/* Dark background behind the mobile drawer        */}
      {/* Only shows on mobile when drawer is open        */}
      {/* Clicking it closes the drawer                   */}
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
      {/* Slides in from the right on mobile only         */}
      {/* right: 0 = on screen and visible               */}
      {/* right: -220px = hidden off the right edge      */}
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
          overflowY: 'auto',
        }}>

          {/* Drawer header — dark red background */}
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
              Municipality of Candaba · Pampanga Province
            </div>
          </div>

          {/* ========================================= */}
          {/* DRAWER LINKS                             */}
          {/* ========================================= */}
          <div style={{ padding: '8px 0' }}>

            {/* Home link */}
            <Link 
              to="/" 
              onClick={() => setMenuOpen(false)} 
              style={drawerLinkStyle('/')}
            >
              🏠 Home
            </Link>

            {/* ======================================= */}
            {/* ABOUT ACCORDION — mobile only          */}
            {/* Tapping About expands sub-links below  */}
            {/* ======================================= */}

            {/* About accordion header */}
            {/* Tapping toggles aboutOpen true/false   */}
            <div
              onClick={() => setAboutOpen(!aboutOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                fontSize: '14px',
                color: location.pathname.startsWith('/about') ? '#8b0000' : '#444',
                fontWeight: location.pathname.startsWith('/about') ? 600 : 400,
                borderBottom: '0.5px solid #eee',
                cursor: 'pointer',
              }}
            >
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px',
              }}>
                ℹ️ About
              </span>
              {/* Arrow rotates when accordion opens */}
              <span style={{
                fontSize: '11px',
                color: '#888',
                transition: 'transform 0.2s',
                transform: aboutOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                display: 'inline-block',
              }}>
                ▾
              </span>
            </div>

            {/* About sub-links — only shows when aboutOpen = true */}
            {/* Light gray background to show they are sub-items  */}
            {aboutOpen && (
              <div style={{ background: '#fafafa' }}>

                {/* Sub-link 1: About SK Halalan 2025 */}
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  style={accordionSubLinkStyle}
                >
                  <span style={{ color: '#cc0000' }}>ℹ️</span>
                  About SK Halalan 2025
                </Link>

                {/* Sub-link 2: Municipal Leadership */}
                <Link
                  to="/leadership"
                  onClick={() => setMenuOpen(false)}
                  style={accordionSubLinkStyle}
                >
                  <span style={{ color: '#cc0000' }}>🏛️</span>
                  Municipal Leadership
                </Link>

                {/* Sub-link 3: Developer */}
                <Link
                  to="/developer"
                  onClick={() => setMenuOpen(false)}
                  style={accordionSubLinkStyle}
                >
                  <span style={{ color: '#cc0000' }}>💻</span>
                  Developer
                </Link>

              </div>
            )}

            {/* Candidates link */}
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