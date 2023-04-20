export const loadPosts = async () => {
    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

    const [posts, photos ] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json(); // converte p/ JSON
    const photosJson = await photos.json();

    // com o indíce de cada post retornado, carrega uma foto no array~
    // para carregar foto usa a url que é uma propriedade do objeto photos que está a ser carregado

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    return postsAndPhotos;
}