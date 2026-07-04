'use client'

import { useEffect, useRef, useState } from 'react'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { gsap } from '@/lib/gsap'
import styles from '@/styles/ui/BackgroundMusic.module.css'

// Fixed bottom-right music toggle. Autoplay is blocked by browsers until the
// user interacts with the page, so we start muted/paused and unmute on the
// first click, then remember the user's choice for the session.
export default function BackgroundMusic({ src = '/assets/background-music.mp3' }) {
  const audioRef = useRef(null)
  const btnRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35

    const wasOn = typeof window !== 'undefined' && sessionStorage.getItem('bgm') === 'on'
    if (wasOn) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready || !btnRef.current) return
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.6, delay: 1.2, ease: 'power2.out' }
    )
  }, [ready])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
      sessionStorage.setItem('bgm', 'off')
    } else {
      audio.play().then(() => {
        setPlaying(true)
        sessionStorage.setItem('bgm', 'on')
      }).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        ref={btnRef}
        type="button"
        onClick={toggle}
        className={styles.toggle}
        aria-label={playing ? 'Mute background music' : 'Play background music'}
        aria-pressed={playing}
        title={playing ? 'Mute background music' : 'Play background music'}
      >
        {playing ? <FaVolumeUp size={14} /> : <FaVolumeMute size={14} />}
        <span className={styles.bars} data-playing={playing}>
          <i /><i /><i /><i />
        </span>
      </button>
    </>
  )
}
