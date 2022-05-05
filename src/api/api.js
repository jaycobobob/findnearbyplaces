const api = {
    search: (searchTerm, category, sortByRating) => {
        searchTerm = searchTerm === "" ? "any" : searchTerm;
        category = category === "" ? "any" : category;
        sortByRating = sortByRating ? 1 : 0;
        return fetch(
            `https://jaycobobob-findnearbyplaces.herokuapp.com/search/${searchTerm}/10/${category}/${sortByRating}`
        ).then((res) => res.json());
    },
};

export default api;
