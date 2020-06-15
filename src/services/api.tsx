const URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";

export async function setProductStorage() {
  const response = await fetch(URL);
  return await response.json();
}
