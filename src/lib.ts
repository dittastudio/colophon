const icon = [
  `display: inline-block;`,
  `font-size: 18px;`,
  `font-weight: 900;`,
  `font-style: italic;`,
  `line-height: 1;`,
  `padding: 30px 20px;`,
  `color: #191919;`,
  `border-radius: 5px;`,
  'background-color: #ffb9b9;',
  `font-family: 'Greycliff CF', Helvetica, sans-serif, monospace;`,
].join(' ')

const text = [
  `display: inline-block;`,
  `font-size: 12px;`,
  `font-weight: bold;`,
  `font-style: normal;`,
  `font-family: 'Greycliff CF', Helvetica, sans-serif, monospace;`,
].join(' ')

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

const colophon = () => {
  if (isBrowser) {
    console.log(`%cditta`, icon)
    console.log(`%cMade by ditta`, text)
    console.log(`%chttps://ditta.studio`, text)
  }
}

export default colophon
