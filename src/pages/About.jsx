import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'

function About() {

  const navigate = useNavigate()
  const { isMobile, isDesktop } = useWindowSize()

  // ================================================
  // HERO ANIMATION STATE
  // Fades in the hero content on page load
  // ================================================
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    // Small delay then fade in
    const timer = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // ================================================
  // FAQ ACCORDION STATE
  // ================================================
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // ================================================
  // FAQ DATA
  // ================================================
  const faqs = [
    {
      question: 'Who can vote in the SK Elections?',
      answer: 'Filipino citizens who are 15 to 30 years old on election day and are registered SK voters in their barangay.',
    },
    {
      question: 'How many candidates can I vote for?',
      answer: 'You can vote for one SK Chairperson and up to seven SK Councilors in your barangay.',
    },
    {
      question: 'What does an SK Chairperson do?',
      answer: 'The SK Chairperson leads the Sangguniang Kabataan and represents the youth in the Sangguniang Barangay as an ex-officio member.',
    },
    {
      question: 'What do SK Councilors do?',
      answer: 'SK Councilors assist the Chairperson in implementing youth programs and serve in various committees like sports, education, and livelihood.',
    },
    {
      question: 'Where can I view candidate profiles?',
      answer: 'You can view all candidate profiles in the Candidates section of this website. Select your barangay to see the teams and their members.',
    },
    {
      question: 'When is election day?',
      answer: 'The SK Halalan 2026 is scheduled for November 2026. The exact date will be announced by COMELEC.',
    },
  ]

  // ================================================
  // REUSABLE SECTION TITLE COMPONENT
  // ================================================
  const SectionTitle = ({ icon, title }) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '16px',
    }}>
      <span style={{ fontSize: '22px' }}>{icon}</span>
      <h2 style={{
        fontSize: isMobile ? '16px' : '18px',
        fontWeight: 700,
        color: '#8b0000',
        fontFamily: 'Georgia, serif',
        margin: 0,
      }}>
        {title}
      </h2>
    </div>
  )

  // ================================================
  // REUSABLE CARD COMPONENT
  // ================================================
  const Card = ({ children, style = {} }) => (
    <div style={{
      background: '#fff',
      border: '0.5px solid #eee',
      borderRadius: '12px',
      padding: isMobile ? '20px' : '28px',
      ...style,
    }}>
      {children}
    </div>
  )

  return (
    <div style={{ background: '#f5f5f5' }}>

      {/* ================================================ */}
      {/* ANIMATIONS via style tag                        */}
      {/* ================================================ */}
      <style>{`

        /* Fade up animation for hero content */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade in animation */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Subtle pulse on the eyebrow line */
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Shimmer effect on hero pattern */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* FAQ hover effect */
        .faq-item:hover {
          border-color: #ffcccc !important;
        }

        /* Card hover lift effect */
        .hover-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        }
        .hover-card:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important;
        }

        /* Responsibility icon hover */
        .resp-icon:hover {
          background: #cc0000 !important;
          transform: scale(1.1) !important;
        }
        .resp-icon {
          transition: background 0.2s, transform 0.2s !important;
        }

      `}</style>

      {/* ================================================ */}
      {/* HERO SECTION                                     */}
      {/* Matches home page hero style                    */}
      {/* Candaba Hall bg + dark red tint + animations    */}
      {/* ================================================ */}
      <div style={{
        position: 'relative',
        height: isMobile ? '280px' : '340px',
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
          // Slightly zoomed in for depth effect
          transform: 'scale(1.05)',
          transition: 'transform 8s ease',
        }} />

        {/* Dark red tint — same as home page */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(35,0,0,0.65)',
        }} />

        {/* Diagonal pattern overlay — same as home page */}


        {/* Bottom gradient fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, rgba(60,0,0,0.3))',
        }} />

        {/* Hero content — fades up on load */}
        <div style={{
          position: 'relative',
          textAlign: 'center',
          padding: isMobile ? '0 20px' : '0 48px',
          maxWidth: '800px',
          width: '100%',
          // Fade up animation triggered by heroVisible state
          animation: heroVisible ? 'fadeUp 0.7s ease forwards' : 'none',
          opacity: heroVisible ? 1 : 0,
        }}>

          {/* Eyebrow — small label above title */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '12px',
          }}>
            <div style={{
              width: '32px',
              height: '1px',
              background: '#ff6666',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#ffaaaa',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}>
              Official SK Halalan 2026
            </span>
            <div style={{
              width: '32px',
              height: '1px',
              background: '#ff6666',
              animation: 'pulse 2s infinite',
            }} />
          </div>

          {/* Main title */}
          <h1 style={{
            fontSize: isMobile ? '28px' : '42px',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'Georgia, serif',
            marginBottom: '10px',
            lineHeight: 1.2,
            // Text shadow for depth
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>
            About SK Halalan{' '}
            <span style={{ color: '#ffaaaa' }}>2026</span>
          </h1>



          {/* Divider line */}
          <div style={{
            width: '200px',
            height: '2px',
            background: 'rgba(255,100,100,0.5)',
            margin: '0 auto 14px',
            borderRadius: '1px',
          }} />

          {/* Description */}
          <p style={{
            fontSize: isMobile ? '12px' : '14px',
            color: '#ffdddd',
            lineHeight: 1.8,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Official online platform that provides
            accurate and accessible information about all official candidates
            for the Sangguniang Kabataan Elections in the Municipality of Candaba.
          </p>

        </div>

        {/* Floating badges — desktop only */}
        {isDesktop && (
          <>
            {/* Left badge */}
            <div style={{
              position: 'absolute',
              left: '40px',
              bottom: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: '0.5px solid rgba(255,255,255,0.2)',
              borderRadius: '99px',
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              animation: 'fadeIn 1s ease 0.5s both',
            }}>
              <span style={{ fontSize: '14px' }}>🗳️</span>
              <span style={{ fontSize: '11px', color: '#ffcccc', fontWeight: 500 }}>
                November 2026
              </span>
            </div>

            {/* Right badge */}
            <div style={{
              position: 'absolute',
              right: '40px',
              bottom: '30px',
              background: 'rgba(255,255,255,0.1)',
              border: '0.5px solid rgba(255,255,255,0.2)',
              borderRadius: '99px',
              padding: '6px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              animation: 'fadeIn 1s ease 0.7s both',
            }}>
              <span style={{ fontSize: '14px' }}>📍</span>
              <span style={{ fontSize: '11px', color: '#ffcccc', fontWeight: 500 }}>
                Candaba, Pampanga
              </span>
            </div>
          </>
        )}

      </div>

      {/* ================================================ */}
      {/* MAIN CONTENT                                     */}
      {/* ================================================ */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '20px 16px' : '32px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>

        {/* ============================================= */}
        {/* WHAT IS THE SANGGUNIANG KABATAAN             */}
        {/* ============================================= */}
        <Card style={{ borderLeft: '3px solid #cc0000' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
          }}>


            {/* Text */}
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontSize: isMobile ? '16px' : '20px',
                fontWeight: 700,
                color: '#8b0000',
                fontFamily: 'Georgia, serif',
                marginBottom: '10px',
              }}>
                What is the Sangguniang Kabataan?
              </h2>
              <p style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#555',
                lineHeight: 1.9,
              }}>
                The Sangguniang Kabataan (SK) is the official youth council in every
                barangay in the Philippines. It represents the youth sector and acts
                as a partner in promoting programs and projects that address the
                needs and welfare of young people and the community.
              </p>
            </div>

            {/* Illustration — desktop only */}
            {isDesktop && (
              <div style={{
                width: '160px',
                height: '120px',
                background: 'linear-gradient(135deg, #fff0f0, #ffd6d6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                flexShrink: 0,
                border: '1px solid #ffcccc',
              }}>
                🙌
              </div>
            )}
          </div>
        </Card>

        {/* ============================================= */}
        {/* WHO CAN VOTE + WHO CAN RUN                  */}
        {/* ============================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: '20px',
        }}>

          {/* WHO CAN VOTE */}
          <Card className="hover-card">
            <SectionTitle  title="Who Can Vote?" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              marginBottom: '14px',
            }}>
              {[
                { icon: '👥', title: 'Age Requirement', value: '15–30 years old', sub: 'Registered SK voters' },
                { icon: '🏠', title: 'Residency', value: 'Must be a resident', sub: 'of the barangay' },
                { icon: '📋', title: 'Registration', value: 'Must be registered', sub: 'with COMELEC' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'linear-gradient(135deg, #fafafa, #fff8f8)',
                  border: '0.5px solid #eee',
                  borderRadius: '8px',
                  borderTop: '2px solid #cc0000',
                  padding: '12px 8px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '22px', marginBottom: '6px' }}>{item.icon}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#333', marginBottom: '4px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#cc0000', fontWeight: 600, lineHeight: 1.4 }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: '10px', color: '#888', lineHeight: 1.4 }}>
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              background: '#fff8f8',
              borderRadius: '6px',
              padding: '10px 12px',
            }}>

              <span style={{ fontSize: '11px', color: '#666', lineHeight: 1.5 }}>
                * Voters must be registered in the barangay where they reside.
              </span>
            </div>
          </Card>

          {/* WHO CAN RUN */}
          <Card className="hover-card">
            <SectionTitle icon="🏃" title="Who Can Run for SK?" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
              {[
                'Filipino citizen',
                'At least 15 years old and not more than 30 years old on election day',
                'A resident of the barangay for at least six (6) months immediately preceding the election',
                'Not disqualified by law',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#cc0000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}>
                    <span style={{ color: '#fff', fontSize: '10px', fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontSize: '13px', color: '#444', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              background: '#fff8f8',
              border: '0.5px solid #ffcccc',
              borderRadius: '6px',
              padding: '10px 12px',
            }}>
              <span style={{ fontSize: '11px', color: '#8b0000', lineHeight: 1.5 }}>
                * For complete qualifications and disqualifications, please refer
                to the Omnibus Election Code and COMELEC guidelines.
              </span>
            </div>
          </Card>
        </div>

        {/* ============================================= */}
        {/* POSITIONS + RESPONSIBILITIES                 */}
        {/* ============================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: '20px',
        }}>

          {/* POSITIONS */}
          <Card className="hover-card">
            <SectionTitle title="Positions to be Elected" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {[
                { icon: '👑', label: 'SK Chairperson', count: '1 Position' },
                { icon: '👥', label: 'SK Councilors', count: '7 Positions' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'linear-gradient(135deg, #fafafa, #fff8f8)',
                  border: '0.5px solid #eee',
                  borderTop: '3px solid #cc0000',
                  borderRadius: '10px',
                  padding: '24px 20px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '10px' }}>{item.icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#333', marginBottom: '6px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '14px', color: '#cc0000', fontWeight: 700 }}>
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* RESPONSIBILITIES */}
          <Card className="hover-card">
            <SectionTitle  title="Responsibilities of the SK" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '10px',
              marginBottom: '16px',
            }}>
              {[
                { icon: '🏀', label: 'Sports Development' },
                { icon: '📚', label: 'Education Programs' },
                { icon: '🌿', label: 'Environmental Projects' },
                { icon: '🤝', label: 'Youth Participation' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div
                    className="resp-icon"
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      background: '#fff0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      margin: '0 auto 8px',
                      cursor: 'pointer',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ fontSize: '11px', color: '#555', fontWeight: 600, lineHeight: 1.4 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>
              The SK works to promote the general welfare of the youth and
              initiates programs that build a stronger and better community.
            </p>
          </Card>
        </div>

        {/* ============================================= */}
        {/* WHY YOUR VOTE MATTERS + ELECTION TIMELINE   */}
        {/* ============================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: '20px',
        }}>

          {/* WHY YOUR VOTE MATTERS */}
          <Card className="hover-card">
            <SectionTitle title="Why Your Vote Matters" />
            <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>
              Your vote gives you the power to choose young leaders who will
              represent your voice, your ideas, and your future. Together,
              let's build a more progressive and empowered youth community.
            </p>
            <div style={{
              background: 'linear-gradient(135deg, #fff0f0, #fff8f8)',
              border: '0.5px solid #ffcccc',
              borderLeft: '3px solid #cc0000',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}>

              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#8b0000', }}>
                Vote wisely. Vote responsibly. || 
                </div>
                <div style={{ fontSize: '11px', color: '#666' }}>
                    Your voice. Your choice. Your future.
                </div>
              </div>
            </div>
          </Card>

          {/* ELECTION TIMELINE */}
          <Card className="hover-card">
            <SectionTitle title="Election Timeline" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
              position: 'relative',
            }}>
              {[
                { num: '1', icon: '📄', label: 'Candidate Filing', date: 'To be announced' },
                { num: '2', icon: '📢', label: 'Campaign Period', date: 'To be announced' },
                { num: '3', icon: '🗳️', label: 'Election Day', date: 'Nov 2026' },
                { num: '4', icon: '🏆', label: 'Proclamation', date: 'To be announced' },
              ].map((step, i) => (
                <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                  {i < 3 && (
                    <div style={{
                      position: 'absolute',
                      top: '24px',
                      left: '60%',
                      width: '80%',
                      borderTop: '2px dotted #ffcccc',
                      zIndex: 0,
                    }}/>
                  )}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: step.num === '3' ? '#cc0000' : '#fff0f0',
                    border: step.num === '3' ? 'none' : '1px solid #ffcccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    margin: '0 auto 8px',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ fontSize: '10px', color: '#aaa', marginBottom: '3px' }}>{step.num}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: '#333', marginBottom: '2px', lineHeight: 1.3 }}>
                    {step.label}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: step.num === '3' ? '#cc0000' : '#999',
                    fontWeight: step.num === '3' ? 700 : 400,
                  }}>
                    {step.date}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ============================================= */}
        {/* FAQ ACCORDION                               */}
        {/* ============================================= */}
        <Card>
          <SectionTitle  title="Frequently Asked Questions" />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            gap: '10px',
          }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item"
                style={{
                  border: '0.5px solid #eee',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.15s',
                }}
                onClick={() => toggleFaq(i)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  background: openFaq === i ? '#fff8f8' : '#fff',
                  transition: 'background 0.15s',
                }}>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    color: openFaq === i ? '#8b0000' : '#333',
                    lineHeight: 1.4,
                    paddingRight: '10px',
                  }}>
                    {faq.question}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    color: '#cc0000',
                    flexShrink: 0,
                    transition: 'transform 0.2s',
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                  }}>
                    ▾
                  </span>
                </div>
                {openFaq === i && (
                  <div style={{
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: '#555',
                    lineHeight: 1.7,
                    background: '#fff',
                    borderTop: '0.5px solid #eee',
                    animation: 'fadeIn 0.2s ease',
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* ============================================= */}
        {/* DISCLAIMER                                  */}
        {/* ============================================= */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
          background: '#fff',
          border: '0.5px solid #eee',
          borderRadius: '10px',
          padding: '16px 20px',
        }}>

          <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.7, margin: 0 }}>
            Information on this platform is based on official announcements and applicable election laws.
            Voters are encouraged to refer to the Commission on Elections (COMELEC) and the Municipality
            of Candaba for official updates.
          </p>
        </div>

        {/* ============================================= */}
        {/* CTA BANNER                                  */}
        {/* ============================================= */}
        <div style={{
          background: 'linear-gradient(135deg, #1a0000, #6b0000)',
          borderRadius: '12px',
          padding: isMobile ? '24px 20px' : '36px 48px',
          display: isDesktop ? 'flex' : 'block',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          textAlign: isMobile ? 'center' : 'left',
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Subtle pattern overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px',
          }} />

          <div style={{ position: 'relative' }}>
            <div style={{
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: 700,
              color: '#fff',
              fontFamily: 'Georgia, serif',
              marginBottom: '6px',
            }}>
              Ready to meet the candidates?
            </div>
            <div style={{
              fontSize: '13px',
              color: '#ffcccc',
              marginBottom: isMobile ? '16px' : 0,
            }}>
              Browse all official SK Halalan 2026 candidates across all barangays of Candaba.
            </div>
          </div>

          <button
            onClick={() => navigate('/candidates')}
            style={{
              position: 'relative',
              background: '#cc0000',
              color: '#fff',
              border: 'none',
              padding: '13px 28px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              display: 'block',
              margin: isMobile ? '0 auto' : 0,
              transition: 'background 0.15s, transform 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#8b0000'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#cc0000'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
             View Candidates
          </button>
        </div>

      </div>
    </div>
  )
}

export default About