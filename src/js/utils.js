export const openModal = () => {
  document.body.classList.add(`openModal`)
}

export const closeModal = () => {
  document.body.classList.remove(`openModal`)
}

export const transformPrice = (value) => {
  const formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB"
  });
  return formatter.format(value)
}

export const trimStringLength = (string, length) => {
  return( string.length < length) ? string :  `${string.slice(0, length - 3)}...`
}

export const smoothScroll = (element) => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export const CLIENT_WIDTH = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}