 export function FetchImages (name){
    return (
        fetch(`https://pixabay.com/api/?key=43324490-9271efc526d8e6f2666c059a2&q=${name}&image_type=photo&orientation=horizontal&per_page=12`)
       .then(response => response.json())
    )
}
const api =  FetchImages

export default api;