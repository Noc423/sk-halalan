import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'

function About() {

  const navigate = useNavigate()
  const { isMobile, isDesktop } = useWindowSize()

  // ================================================
  // FAQ ACCORDION STATE
  // Tracks which FAQ item is open
  // null = none open, number = index of open item
  // ================================================
  const [openFaq, setOpenFaq] = useState(null)

  // Toggles FAQ open/close
  // If clicking the same one = close it
  // If clicking different one = open it
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
  // Shows icon + red title text
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
  // White card with subtle border and rounded corners
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
      {/* HERO SECTION                                     */}
      {/* Dark red with Candaba Hall background            */}
      {/* Text is centered                                */}
      {/* ================================================ */}
      <div style={{
        position: 'relative',
        height: isMobile ? '220px' : '280px',
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

        {/* Dark red tint overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(80,0,0,0.72)',
        }} />

        {/* Hero text — centered */}
        <div style={{
          position: 'relative',
          padding: isMobile ? '0 20px' : '0 48px',
          maxWidth: '700px',
          width: '100%',
          textAlign: 'center',
          margin: '0 auto',
        }}>

          {/* Page title */}
          <h1 style={{
            fontSize: isMobile ? '24px' : '34px',
            fontWeight: 700,
            color: '#fff',
            fontFamily: 'Georgia, serif',
            marginBottom: '8px',
          }}>
            About SK Halalan 2026
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: isMobile ? '12px' : '14px',
            color: '#ffcccc',
            marginBottom: '12px',
            fontWeight: 500,
          }}>
            Official Candidate Information Portal
          </p>

          {/* Description */}
          <p style={{
            fontSize: isMobile ? '12px' : '13px',
            color: '#ffdddd',
            lineHeight: 1.7,
          }}>
            SK Halalan 2026 is an official online platform that provides
            accurate and accessible information about all official candidates
            for the Sangguniang Kabataan Elections in the Municipality of Candaba.
          </p>
        </div>
      </div>

      {/* ================================================ */}
      {/* MAIN CONTENT                                     */}
      {/* Wider max width to fill desktop screen          */}
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
        <Card>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
          }}>



            {/* Middle: text */}
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
                lineHeight: 1.8,
              }}>
                The Sangguniang Kabataan (SK) is the official youth council in every
                barangay in the Philippines. It represents the youth sector and acts
                as a partner in promoting programs and projects that address the
                needs and welfare of young people and the community.
              </p>
            </div>

          </div>
        </Card>

        {/* ============================================= */}
        {/* WHO CAN VOTE + WHO CAN RUN                  */}
        {/* 2 columns on desktop, stacked on mobile     */}
        {/* ============================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: '20px',
        }}>

          {/* WHO CAN VOTE */}
          <Card>
            <SectionTitle  title="Who Can Vote?" />

            {/* 3 requirement cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              marginBottom: '14px',
            }}>
              {[
                {
                  icon: '👥',
                  title: 'Age Requirement',
                  value: '15–30 years old',
                  sub: 'Registered SK voters',
                },
                {
                  icon: '🏠',
                  title: 'Residency',
                  value: 'Must be a resident',
                  sub: 'of the barangay',
                },
                {
                  icon: '📋',
                  title: 'Registration',
                  value: 'Must be registered',
                  sub: 'with COMELEC',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#fafafa',
                  border: '0.5px solid #eee',
                  borderRadius: '8px',
                  padding: '12px 8px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '22px', marginBottom: '6px' }}>{item.icon}</div>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#333',
                    marginBottom: '4px',
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#cc0000',
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}>
                    {item.value}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: '#888',
                    lineHeight: 1.4,
                  }}>
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              background: '#fff8f8',
              borderRadius: '6px',
              padding: '10px 12px',
            }}>
              <span style={{ fontSize: '14px', flexShrink: 0 }}>ℹ️</span>
              <span style={{ fontSize: '11px', color: '#666', lineHeight: 1.5 }}>
                Voters must be registered in the barangay where they reside.
              </span>
            </div>
          </Card>

          {/* WHO CAN RUN */}
          <Card>
            <SectionTitle title="Who Can Run for SK?" />

            {/* Checklist */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '14px',
            }}>
              {[
                'Filipino citizen',
                'At least 15 years old and not more than 30 years old on election day',
                'A resident of the barangay for at least six (6) months',
                'Not disqualified by law',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}>
                  {/* Red checkmark circle */}
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
                    <span style={{
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: 700,
                    }}>
                      ✓
                    </span>
                  </div>
                  <span style={{
                    fontSize: '13px',
                    color: '#444',
                    lineHeight: 1.6,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              background: '#fff8f8',
              border: '0.5px solid #ffcccc',
              borderRadius: '6px',
              padding: '10px 12px',
            }}>
              <span style={{ fontSize: '14px', flexShrink: 0 }}>📋</span>
              <span style={{ fontSize: '11px', color: '#8b0000', lineHeight: 1.5 }}>
                For complete qualifications and disqualifications, please refer
                to the Omnibus Election Code and COMELEC guidelines.
              </span>
            </div>
          </Card>
        </div>

        {/* ============================================= */}
        {/* POSITIONS + RESPONSIBILITIES                 */}
        {/* 2 columns on desktop, stacked on mobile     */}
        {/* ============================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: '20px',
        }}>

          {/* POSITIONS TO BE ELECTED */}
          <Card>
            <SectionTitle title="Positions to be Elected" />

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
            }}>

              {/* SK Chairperson */}
              <div style={{
                background: '#fafafa',
                border: '0.5px solid #eee',
                borderRadius: '10px',
                padding: '24px 20px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>👑</div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#333',
                  marginBottom: '6px',
                }}>
                  SK Chairperson
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#cc0000',
                  fontWeight: 700,
                }}>
                  1 Position
                </div>
              </div>

              {/* SK Councilors */}
              <div style={{
                background: '#fafafa',
                border: '0.5px solid #eee',
                borderRadius: '10px',
                padding: '24px 20px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '10px' }}>👥</div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#333',
                  marginBottom: '6px',
                }}>
                  SK Councilors
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#cc0000',
                  fontWeight: 700,
                }}>
                  7 Positions
                </div>
              </div>
            </div>
          </Card>

          {/* RESPONSIBILITIES OF THE SK */}
          <Card>
            <SectionTitle title="Responsibilities of the SK" />

            {/* 4 responsibility icons in a row */}
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
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: '#fff0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    margin: '0 auto 8px',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#555',
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p style={{
              fontSize: '13px',
              color: '#666',
              lineHeight: 1.7,
            }}>
              The SK works to promote the general welfare of the youth and
              initiates programs that build a stronger and better community.
            </p>
          </Card>
        </div>

        {/* ============================================= */}
        {/* WHY YOUR VOTE MATTERS + ELECTION TIMELINE   */}
        {/* 2 columns on desktop, stacked on mobile     */}
        {/* ============================================= */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
          gap: '20px',
        }}>

          {/* WHY YOUR VOTE MATTERS */}
          <Card>
            <SectionTitle title="Why Your Vote Matters" />

            <p style={{
              fontSize: '13px',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}>
              Your vote gives you the power to choose young leaders who will
              represent your voice, your ideas, and your future. Together,
              let's build a more progressive and empowered youth community.
            </p>

            {/* Quote box */}
            <div style={{
              background: '#fff0f0',
              border: '0.5px solid #ffcccc',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>✅</span>
              <div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#8b0000',
                  marginBottom: '3px',
                }}>
                  Vote wisely. Vote responsibly.
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                }}>
                  Your voice. Your choice. Your future.
                </div>
              </div>
            </div>
          </Card>

          {/* ELECTION TIMELINE */}
          <Card>
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
                <div key={i} style={{
                  textAlign: 'center',
                  position: 'relative',
                }}>

                  {/* Dotted connecting line — not on last item */}
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

                  {/* Icon circle */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    // Election Day highlighted in red
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

                  {/* Step number */}
                  <div style={{
                    fontSize: '10px',
                    color: '#aaa',
                    marginBottom: '3px',
                  }}>
                    {step.num}
                  </div>

                  {/* Step label */}
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#333',
                    marginBottom: '2px',
                    lineHeight: 1.3,
                  }}>
                    {step.label}
                  </div>

                  {/* Date */}
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
        {/* 2 columns on desktop, 1 on mobile          */}
        {/* ============================================= */}
        <Card>
          <SectionTitle title="Frequently Asked Questions" />

          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            gap: '10px',
          }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: '0.5px solid #eee',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={() => toggleFaq(i)}
              >
                {/* Question row */}
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
                  {/* Arrow rotates when open */}
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

                {/* Answer — only shows when this FAQ is open */}
                {openFaq === i && (
                  <div style={{
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: '#555',
                    lineHeight: 1.7,
                    background: '#fff',
                    borderTop: '0.5px solid #eee',
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* ============================================= */}
        {/* DISCLAIMER NOTE                             */}
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

          <p style={{
            fontSize: '12px',
            color: '#666',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Information on this platform is based on official announcements
            and applicable election laws. Voters are encouraged to refer to
            the Commission on Elections (COMELEC) and the Municipality of
            Candaba for official updates.
          </p>
        </div>

        {/* ============================================= */}
        {/* CTA BANNER                                  */}
        {/* Text left, button right on desktop          */}
        {/* Centered on mobile                          */}
        {/* ============================================= */}
        <div style={{
          background: 'linear-gradient(135deg, #1a0000, #6b0000)',
          borderRadius: '12px',
          padding: isMobile ? '24px 20px' : '32px 40px',
          display: isDesktop ? 'flex' : 'block',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <div>
            <div style={{
              fontSize: isMobile ? '18px' : '22px',
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