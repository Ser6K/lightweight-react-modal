import React, { useState } from 'react'
import ModalHeader from '../ModalHeader/ModalHeader'
import ModalFooter from '../ModalFooter/ModalFooter'
import ModalContent from '../ModalContent/ModalContent'
import Modal from './Modal'

export default { title: 'Modal' }

export const defaultExample = () => (
  <Modal closable={false} style={{ textAlign: 'center' }}>
    <ModalHeader>
      <h1>Modal Header</h1>
    </ModalHeader>
    <ModalContent>
      Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no
      dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed assurance
      defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses. At on he total their he songs.
      Related compact effects is on settled do. Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way
      pleasant whatever. At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham
      intention promotion engrossed assurance defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor
      expenses. At on he total their he songs. Related compact effects is on settled do. Sportsman delighted improving dashwoods gay instantly happiness six.
      Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If
      polite he active county in spirit an. Mrs ham intention promotion engrossed assurance defective. Confined so graceful building opinions whatever trifling
      in. Insisted out differed ham man endeavor expenses. At on he total their he songs. Related compact effects is on settled do. Sportsman delighted
      improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood
      thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed assurance defective.
      Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses. At on he total their he songs. Related
      compact effects is on settled do.
    </ModalContent>
    <ModalFooter>
      <h1>Modal Footer</h1>
    </ModalFooter>
  </Modal>
)

export const fluidExample = () => (
  <Modal closable={false} fluid style={{ textAlign: 'center' }}>
    <ModalHeader>
      <h1>Modal Header</h1>
    </ModalHeader>
    <ModalContent>
      Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no
      dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed assurance
      defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses. At on he total their he songs.
      Related compact effects is on settled do. Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way
      pleasant whatever. At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham
      intention promotion engrossed assurance defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor
      expenses. At on he total their he songs. Related compact effects is on settled do. Sportsman delighted improving dashwoods gay instantly happiness six.
      Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If
      polite he active county in spirit an. Mrs ham intention promotion engrossed assurance defective. Confined so graceful building opinions whatever trifling
      in. Insisted out differed ham man endeavor expenses. At on he total their he songs. Related compact effects is on settled do. Sportsman delighted
      improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood
      thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed assurance defective.
      Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses. At on he total their he songs. Related
      compact effects is on settled do.
    </ModalContent>
    <ModalFooter>
      <h1>Modal Footer</h1>
    </ModalFooter>
  </Modal>
)

export const closableModalExample = () => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <button
        onClick={() => {
          setOpen(true)
        }}
        type="button"
      >
        Open Modal
      </button>
      {open ? (
        <Modal
          style={{ textAlign: 'center' }}
          onClose={() => {
            setOpen(false)
          }}
        >
          <ModalHeader>
            <h1>Modal Header</h1>
          </ModalHeader>
          <ModalContent>
            Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still
            no dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed
            assurance defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses. At on he total
            their he songs. Related compact effects is on settled do. Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted
            absolute not mistaken way pleasant whatever. At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If polite he
            active county in spirit an. Mrs ham intention promotion engrossed assurance defective. Confined so graceful building opinions whatever trifling in.
            Insisted out differed ham man endeavor expenses. At on he total their he songs. Related compact effects is on settled do. Sportsman delighted
            improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly
            stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed assurance
            defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses. At on he total their he
            songs. Related compact effects is on settled do. Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not
            mistaken way pleasant whatever. At an these still no dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in
            spirit an. Mrs ham intention promotion engrossed assurance defective. Confined so graceful building opinions whatever trifling in. Insisted out
            differed ham man endeavor expenses. At on he total their he songs. Related compact effects is on settled do.
          </ModalContent>
          <ModalFooter>
            <h1>Modal Footer</h1>
          </ModalFooter>
        </Modal>
      ) : null}
    </>
  )
}

export const multiModalExample = () => {
  const [open, setOpen] = useState(true)
  const [secondOpen, setSecondOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setOpen(true)
        }}
        type="button"
      >
        Open Modal
      </button>
      {open ? (
        <Modal
          style={{ textAlign: 'center' }}
          onClose={() => {
            setOpen(false)
          }}
        >
          <ModalHeader>
            <h1>Modal Header</h1>
          </ModalHeader>
          <ModalContent>
            <p>Click to Open second modal!</p>
            <button
              onClick={() => {
                setSecondOpen(true)
              }}
              type="button"
            >
              Open Second Modal
            </button>
          </ModalContent>
          <ModalFooter>
            <h1>Modal Footer</h1>
          </ModalFooter>
        </Modal>
      ) : null}
      {secondOpen ? (
        <Modal
          style={{ textAlign: 'center' }}
          onClose={() => {
            setSecondOpen(false)
          }}
        >
          <ModalHeader>
            <h1>Second Modal Header</h1>
          </ModalHeader>
          <ModalContent>
            Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still
            no dried folly stood thing. Rapid it on hours hills it seven years. If polite he active county in spirit an. Mrs ham intention promotion engrossed
            assurance defective. Confined so graceful building opinions whatever trifling in. Insisted out differed ham man endeavor expenses. At on he total
            their he songs. Related compact effects is on settled do.
          </ModalContent>
          <ModalFooter>
            <h1>Second Modal Footer</h1>
          </ModalFooter>
        </Modal>
      ) : null}
    </>
  )
}
