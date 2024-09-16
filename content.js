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
          if (node.nodeName === 'IFRAME') modifyIframeSrc(node)
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

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['src'],
})
