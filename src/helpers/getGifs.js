export const getGifs = async(category) => {
  const apiKey = 'Iyle3kkornOssEmVtXTYyGVcnATsfkpm';
  const url = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
  const {data} = await url.json();
  const gifs = data.map(img => ({
    id: img.id,
    url: img.images.downsized_medium.url,
    title: img.title
  }))
  return gifs;
}
