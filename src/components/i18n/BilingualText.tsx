import { useEffect } from 'react'
import { translateText } from '../../i18n/translations.ts'

const skipTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'PATH', 'VIDEO', 'SOURCE'])
const optionLikeTags = new Set(['OPTION', 'TITLE'])
const processedAttribute = 'data-bilingual-processed'

function hasDevanagari(text: string) {
  return /[\u0900-\u097F]/.test(text)
}

function shouldSkipNode(node: Node) {
  const element = node.parentElement
  if (!element) return true
  if (skipTags.has(element.tagName)) return true
  if (element.closest('[data-bilingual-skip], .bilingual-copy')) return true
  if (element.classList.contains('sr-only')) return true
  return false
}

function createPair(english: string, hindi: string) {
  const wrapper = document.createElement('span')
  wrapper.className = 'bilingual-copy'
  wrapper.setAttribute('data-bilingual-skip', 'true')

  const englishText = document.createElement('span')
  englishText.className = 'bilingual-en'
  englishText.textContent = english

  const hindiText = document.createElement('span')
  hindiText.className = 'bilingual-hi'
  hindiText.lang = 'hi'
  hindiText.textContent = hindi

  wrapper.append(englishText, hindiText)
  return wrapper
}

function processTextNode(node: Text) {
  if (shouldSkipNode(node)) return

  const raw = node.nodeValue ?? ''
  const english = raw.replace(/\s+/g, ' ').trim()
  if (!english || hasDevanagari(english)) return

  const hindi = translateText(english)
  if (!hindi) return

  const parent = node.parentElement
  if (!parent) return

  if (optionLikeTags.has(parent.tagName)) {
    parent.setAttribute(processedAttribute, 'true')
    node.nodeValue = `${english} / ${hindi}`
    return
  }

  const leading = raw.match(/^\s*/)?.[0] ?? ''
  const trailing = raw.match(/\s*$/)?.[0] ?? ''
  const fragment = document.createDocumentFragment()
  if (leading) fragment.append(document.createTextNode(leading))
  fragment.append(createPair(english, hindi))
  if (trailing) fragment.append(document.createTextNode(trailing))
  parent.setAttribute(processedAttribute, 'true')
  node.replaceWith(fragment)
}

function processAttributes(root: ParentNode) {
  if (!(root instanceof Element || root instanceof Document)) return
  const elements = root instanceof Document ? root.querySelectorAll('[placeholder], [aria-label], [title]') : root.querySelectorAll('[placeholder], [aria-label], [title]')

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) return
    if (element.closest('[data-bilingual-skip]')) return

    ;(['placeholder', 'aria-label', 'title'] as const).forEach((attribute) => {
      const value = element.getAttribute(attribute)
      if (!value || hasDevanagari(value)) return
      const hindi = translateText(value)
      if (hindi) element.setAttribute(attribute, `${value} / ${hindi}`)
    })
  })
}

function processRoot(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const textNodes: Text[] = []
  let node = walker.nextNode()
  while (node) {
    textNodes.push(node as Text)
    node = walker.nextNode()
  }

  textNodes.forEach(processTextNode)
  processAttributes(root)
}

export function BilingualText() {
  useEffect(() => {
    document.documentElement.lang = 'en-IN'
    processRoot(document.body)

    let frame = 0
    const observer = new MutationObserver((mutations) => {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof Text) processTextNode(node)
            if (node instanceof Element) processRoot(node)
          })
        })
        frame = 0
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })
    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
