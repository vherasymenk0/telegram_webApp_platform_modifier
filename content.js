function modifyIframeSrc(iframe) {
  let src = iframe.getAttribute('src')
  if (src && src.includes('tgWebAppPlatform=')) {
    const newSrc = src.replace(/tgWebAppPlatform=[^&]*/, 'tgWebAppPlatform=android')
    iframe.setAttribute('src', newSrc)
  }
}

const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        try {          
          if (node.nodeName === 'IFRAME') modifyIframeSrc(node)
        } catch (error) {
          console.error('[Telegram WebApp Platform Modifier]: error while changing tgWebAppPlatform parameter', error)
        }
      })
    }
  })
})


observer.observe(document.body, { childList: true, subtree: true })