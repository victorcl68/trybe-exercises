window.onload = () => {
  const setBackgroundColor = (color) => {
    let content = document.querySelector('.content');
    content.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
  }

  const setFontColor = (color) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.color = color;
    localStorage.setItem('fontColor', color);
  }

  const setFontSize = (size) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.fontSize = size;
    localStorage.setItem('fontSize', size);
  }

  const setLineHeight = (height) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.lineHeight = height;
    localStorage.setItem('lineHeight', height);
  }

  const setFontFamily = (family) => {
    let paragraph = document.querySelector('.paragraph');
    paragraph.style.fontFamily = family;
    localStorage.setItem('fontFamily', family);
  }

  let backgroundColorInput = document.querySelector('#background-color>input');
  backgroundColorInput.addEventListener('change', () => {
    setBackgroundColor(backgroundColorInput.value);
  })

  let fontColorInput = document.querySelector('#font-color>input');
  fontColorInput.addEventListener('change', () => {
      setFontColor(fontColorInput.value);
    })

  let fontSizeInput = document.querySelector('#font-size>input');
  fontSizeInput.addEventListener('change', () => {
      setFontSize(fontSizeInput.value);
    })

  let lineHeightInput = document.querySelector('#line-height>input');
    lineHeightInput.addEventListener('change', () => {
      setLineHeight(lineHeightInput.value);
    })

  let fontFamilyInput = document.querySelector('#font-family>input');
    fontFamilyInput.addEventListener('change', () => {
      setFontFamily(fontFamilyInput.value);
    })

  const initialize = () => {
    let backgroundColor = localStorage.getItem('backgroundColor');
    if (backgroundColor) setBackgroundColor(backgroundColor);

    let fontColor = localStorage.getItem('fontColor');
    if (fontColor) setFontColor(fontColor);

    let fontSize = localStorage.getItem('fontSize');
    if (fontSize) setFontSize(fontSize);

    let lineHeight = localStorage.getItem('lineHeight');
    if (lineHeight) setLineHeight(lineHeight);

    let fontFamily = localStorage.getItem('fontFamily');
    if (fontFamily) setFontSize(fontFamily);
  }

  initialize();
}
