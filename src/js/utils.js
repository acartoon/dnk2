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