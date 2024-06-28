

class LesParamatreDeApi {
    #url="http://127.0.0.1:8000";
    #path=""

    constructor(pathParammatre) {
        this.#path = `/api/${pathParammatre}`;
    }
    
    setPath(pathParammatre){
        this.#path=`/api/${pathParammatre}`;
    }
    getPath(){
        return this.#path;
    }
    getUrl(){
        return this.#url;
    }
}



export default LesParamatreDeApi;