
const defaultPosts = [
    {
        id: 1,
        preview: "https://letstalkscience.ca/sites/default/files/2020-02/balanced-stones-on-a-pebble-beach.jpg",
        caption: "Rocks are made up of two or more minerals. Rocks containing valuable minerals are called ore."
    },
    {
        id: 2,
        preview: "https://thumbs.dreamstime.com/b/cloudy-sunset-ocean-to-get-free-ocena-behind-cloud-shows-orange-color-264573856.jpg",
        caption: "The vastness of the ocean is both awe-inspiring and humbling. Its deep blue waters hold mysteries and wonders beyond our imagination."
    },
    {
        id: 3,
        preview: "https://www.treehugger.com/thmb/nSp8ESJ1N6zq_bsTVL_MoSrKAqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg",
        caption: "Lost in the beauty of the forest 🌳"
    },
    {
        id: 4,
        preview: "https://st3.depositphotos.com/5295026/16266/i/450/depositphotos_162666166-stock-photo-business-man-pushing-large-stone.jpg",
        caption: "Hard work beats talent when talent doesn't work hard."
    },
    {
        id: 5,
        preview: "https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/fathers+day/tribute-to-father-s-day.jpg",
        caption: "Throughout the world, fathers are considered to be the head of their family."
    },
    {
        id: 6,
        preview: "https://static.india.com/wp-content/uploads/2018/08/The-road-from-Manali-to-Rohtang-Pass-the-valley-of-Spiti-and-Leh-Himachal-Pradesh-India.jpg",
        caption: "Manali is one of India's most popular destinations."
    },

]


export const getPosts = async () => {
    return new Promise((resolve, _) => { 
        setTimeout(() => {
            resolve(defaultPosts);
        }, 1000);
    });
}