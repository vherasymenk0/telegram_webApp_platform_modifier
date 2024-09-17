function modifyIframeSrc(iframe) {
  let src = iframe.getAttribute('src')
  if (src && src.includes('tgWebAppPlatform=')) {
    const newSrc = src.replace(/tgWebAppPlatform=[^&]*/, 'tgWebAppPlatform=android')
    iframe.setAttribute('src', newSrc)
  }
}

function handleMutations(mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        try {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const iframe = node.getElementsByTagName('iframe')[0]
            if (iframe) modifyIframeSrc(iframe)
          }
        } catch (error) {
          console.error(
            '[Telegram WebApp Platform Modifier]: error while changing the tgWebAppPlatform parameter',
            error
          )
        }
      })
    } else if (mutation.type === 'attributes' && mutation.target.nodeName === 'IFRAME') {
      modifyIframeSrc(mutation.target)
    }
  })
}

const observer = new MutationObserver(handleMutations)

document.addEventListener('DOMContentLoaded', function () {
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  } else {
    console.error('[Telegram WebApp Platform Modifier]: document.body is not ready.')
  }
})
