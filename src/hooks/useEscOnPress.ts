import { useEffect } from 'react'
import { onCloseType } from 'src/types'

function useEscOnPress(ref: HTMLDivElement | null, onClose: onCloseType, closable: boolean) {
  if (onClose == null || !closable) {
    return
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (ref == null) {
      return
    }
    if (event.code === 'Escape') {
      onClose(ref)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])
}

export default useEscOnPress
