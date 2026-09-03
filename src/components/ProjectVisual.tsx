import { ArrowUpRight, BookOpen, Braces, Cpu, Sparkles, Utensils } from 'lucide-react'
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

function UpscaleVisual() {
  return (
    <div className="project-visual visual-upscale" aria-hidden="true">
      <div className="compare-window">
        <div className="compare-side compare-before"><span>BEFORE</span></div>
        <div className="compare-side compare-after"><span>AFTER</span></div>
        <div className="compare-handle"><span>↔</span></div>
        <div className="resolution-pill"><Sparkles size={13} /> 4K enhanced</div>
      </div>
      <div className="upscale-progress"><i /></div>
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

function CompilerVisual() {
  return (
    <div className="project-visual visual-compiler" aria-hidden="true">
      <div className="terminal-bar"><span><i /><i /><i /></span><small>rpal / evaluate</small><Braces size={15} /></div>
      <div className="terminal-code">
        <p><b>let</b> square = <b>fn</b> x . x * x</p>
        <p><b>in</b> square 8</p>
        <p className="terminal-result"><span>→</span> 64</p>
      </div>
      <div className="ast-tree">
        <span>γ</span>
        <div><span>λ</span><span>τ</span></div>
        <div><span>x</span><span>*</span><span>8</span></div>
      </div>
    </div>
  )
}

function ChipVisual() {
  return (
    <div className="project-visual visual-chip" aria-hidden="true">
      <div className="chip-grid" />
      <svg className="circuit-lines" viewBox="0 0 420 250">
        <path d="M0 58h98l27 27h46M420 48h-78l-28 37h-61M0 196h112l22-30h37M420 202h-92l-26-36h-49" />
        <path d="M112 0v46l39 39M310 0v43l-34 42M101 250v-47l50-37M326 250v-52l-50-32" />
      </svg>
      <div className="processor-chip">
        <Cpu size={32} />
        <strong>NANO</strong>
        <span>4-BIT PROCESSOR</span>
      </div>
      <div className="binary binary-one">0010 1011</div>
      <div className="binary binary-two">ALU / REG / ROM</div>
    </div>
  )
}

export function ProjectVisual({ type }: ProjectVisualProps) {
  if (type === 'maple') return <MapleVisual />
  if (type === 'forknet') return <ForknetVisual />
  if (type === 'upscale') return <UpscaleVisual />
  if (type === 'plate') return <PlateVisual />
  if (type === 'library') return <LibraryVisual />
  if (type === 'compiler') return <CompilerVisual />
  return <ChipVisual />
}
