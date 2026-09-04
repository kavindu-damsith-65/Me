import {
  Activity,
  ArrowUpRight,
  AudioLines,
  BookOpen,
  GraduationCap,
  HeartPulse,
  Languages,
  Ticket,
  Utensils,
} from 'lucide-react'
import type { ProjectVisual as ProjectVisualType } from '../data/portfolio'

interface ProjectVisualProps {
  type: ProjectVisualType
}

function MapleVisual() {
  return (
    <div className="project-visual visual-maple" aria-hidden="true">
      <img
        className="maple-floor-image"
        src="./images/maple-wraps-floor.jpg"
        alt=""
        width="1200"
        height="800"
        loading="lazy"
        decoding="async"
      />
      <div className="maple-image-shade" />
      <div className="maple-browser">
        <div className="maple-browser-bar">
          <span><i /><i /><i /></span>
          <small>maplewraps.ca / quote</small>
          <strong><i /> LIVE</strong>
        </div>
        <div className="maple-quote-card">
          <p>MAPLE WRAPS</p>
          <h4>Design your space</h4>
          <div className="maple-dimensions">
            <span><small>WIDTH</small><b>16 ft</b></span>
            <i>×</i>
            <span><small>LENGTH</small><b>20 ft</b></span>
          </div>
          <div className="maple-quote-line"><span>Custom floor wrap</span><strong>320 sq ft</strong></div>
          <div className="maple-quote-action"><span>Instant quote workflow</span><ArrowUpRight size={15} /></div>
        </div>
      </div>
      <div className="maple-build-note"><span><i /> LIVE STOREFRONT</span><strong>PLATFORM / EVOLVING</strong></div>
    </div>
  )
}

function ForknetVisual() {
  return (
    <div className="project-visual visual-forknet" aria-hidden="true">
      <div className="visual-topline">
        <span><i /> LIVE PIPELINE</span>
        <span>60 FPS</span>
      </div>
      <div className="forknet-panes">
        <div className="video-pane video-pane-before">
          <span>INPUT · 480P</span>
          <div className="pixel-grid" />
        </div>
        <div className="flow-arrow"><ArrowUpRight size={18} /></div>
        <div className="video-pane video-pane-after">
          <span>OUTPUT · 4×</span>
          <div className="scan-line" />
        </div>
      </div>
      <svg className="metric-graph" viewBox="0 0 360 58" preserveAspectRatio="none">
        <path d="M0 42 C35 44, 40 18, 72 29 S118 49, 145 22 S186 5, 210 27 S257 50, 282 22 S325 35, 360 8" />
      </svg>
      <div className="metric-row"><span>Latency</span><strong>real-time</strong><span>Quality</span><strong>enhanced</strong></div>
    </div>
  )
}

function LibraryVisual() {
  return (
    <div className="project-visual visual-library" aria-hidden="true">
      <div className="library-shell">
        <div className="library-head">
          <span><BookOpen size={16} /> My library</span>
          <i />
        </div>
        <div className="study-progress">
          <div><small>THIS WEEK</small><strong>12 topics</strong></div>
          <span><b>72</b>%</span>
        </div>
        <div className="subject-card subject-card-one"><i>CS</i><div><strong>Algorithms</strong><small>8 chapters</small></div><b>→</b></div>
        <div className="subject-card subject-card-two"><i>ML</i><div><strong>Deep Learning</strong><small>6 chapters</small></div><b>→</b></div>
      </div>
    </div>
  )
}

function PlateVisual() {
  return (
    <div className="project-visual visual-plate" aria-hidden="true">
      <div className="phone-shell">
        <div className="phone-head"><span>PlateShare</span><Utensils size={14} /></div>
        <div className="food-image"><span>Rescue a meal</span></div>
        <div className="food-row"><i /><div><strong>Fresh near you</strong><small>1.2 km away</small></div><b>+</b></div>
        <div className="food-row"><i /><div><strong>Community box</strong><small>Ready today</small></div><b>+</b></div>
      </div>
      <div className="impact-bubble"><strong>4 roles</strong><span>one ecosystem</span></div>
    </div>
  )
}

function HealthVisual() {
  return (
    <div className="project-visual visual-health" aria-hidden="true">
      <div className="health-window">
        <div className="health-head"><span><HeartPulse size={15} /> HealthLink</span><i>CARE HUB</i></div>
        <div className="health-grid">
          <div className="mri-panel">
            <span>MRI ANALYSIS</span>
            <div className="mri-scan"><i /><b /></div>
            <small><Activity size={12} /> Segmentation ready</small>
          </div>
          <div className="health-metrics">
            <div><small>NEXT APPOINTMENT</small><strong>09:30</strong><span>Dr. Silva</span></div>
            <div><small>REPORT STATUS</small><strong>Ready</strong><span>Secure record</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SignVisual() {
  return (
    <div className="project-visual visual-sign" aria-hidden="true">
      <div className="sign-stage">
        <div className="sign-top"><span><Languages size={15} /> LIVE TRANSLATION</span><i>CV / ACTIVE</i></div>
        <div className="gesture-frame">
          <span className="gesture-palm" />
          <i className="gesture-point gesture-one" />
          <i className="gesture-point gesture-two" />
          <i className="gesture-point gesture-three" />
          <i className="gesture-line gesture-line-one" />
          <i className="gesture-line gesture-line-two" />
        </div>
        <div className="translation-result"><AudioLines size={17} /><span><small>RECOGNISED</small><strong>Hello</strong></span><b>98%</b></div>
      </div>
    </div>
  )
}

function LearningVisual() {
  return (
    <div className="project-visual visual-learning" aria-hidden="true">
      <div className="learning-shell">
        <div className="learning-sidebar"><GraduationCap size={22} /><i /><i /><i /></div>
        <div className="learning-main">
          <div className="learning-head"><span>Learning path</span><b>72%</b></div>
          <div className="course-progress"><i /></div>
          <div className="lesson-card active"><span>01</span><div><strong>Core concepts</strong><small>Completed</small></div><b>✓</b></div>
          <div className="lesson-card"><span>02</span><div><strong>Guided practice</strong><small>In progress</small></div><b>→</b></div>
          <div className="lesson-card locked"><span>03</span><div><strong>Final assessment</strong><small>Unlocks next</small></div><b>•</b></div>
        </div>
      </div>
    </div>
  )
}

function CinemaVisual() {
  const seats = Array.from({ length: 28 }, (_, index) => index)

  return (
    <div className="project-visual visual-cinema" aria-hidden="true">
      <div className="cinema-shell">
        <div className="cinema-head"><span><Ticket size={16} /> SELECT SEATS</span><b>19:30</b></div>
        <div className="cinema-screen">SCREEN</div>
        <div className="seat-map">
          {seats.map((seat) => <i key={seat} className={[9, 10, 16].includes(seat) ? 'selected' : [4, 18, 23].includes(seat) ? 'taken' : ''} />)}
        </div>
        <div className="cinema-total"><span>3 seats selected</span><strong>LKR 4,500</strong></div>
      </div>
    </div>
  )
}

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === 'maple') return <MapleVisual />
  if (type === 'forknet') return <ForknetVisual />
  if (type === 'plate') return <PlateVisual />
  if (type === 'library') return <LibraryVisual />
  if (type === 'health') return <HealthVisual />
  if (type === 'sign') return <SignVisual />
  if (type === 'learning') return <LearningVisual />
  return <CinemaVisual />
}
