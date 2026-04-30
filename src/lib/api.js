const animalDataFetch = async () => {
  const res = await fetch("https://qurbanihat.vercel.app/data.json");
  const data = await res.json();
  return data;
};
export default animalDataFetch;
