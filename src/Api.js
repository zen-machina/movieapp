// Api key "https://api.themoviedb.org/3/movie/550?api_key=ee29c40390695c0309d77e7268823a26"

// Figure out how to get the movie ID from the database.
// Then dynamically add that id by matching the searched for title.
// 3 pieces of data is needed to generate a fully working image URL,
// base_url, file_size, and file_path.

function Api() {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "ee29c40390695c0309d77e7268823a26";

    const fetchPosterImageBase = (e) => {
        // need this for onClick and onSubmit
        e.preventDefault();
        // fetch(apiRequests.fetchConfig)
        fetch(`${API_URL}/configuration?api_key=${API_KEY}`)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                return data;
                // console.log(data);
                // console.log(data.images.base_url);
                // console.log(data.images.poster_sizes[1]);
            });
    };

    return <div>{fetchPosterImageBase}</div>;
}

export default Api;
