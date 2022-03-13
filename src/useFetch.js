export default function useFetch(baseurl){
  const get = (url)=>{
    return fetch(url).then(resp => resp.json())
  }
  return {get}
}