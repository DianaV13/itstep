class Reviews{
    client;
    text;
    rating;
    date;
    constructor(client, text,date, rating){
        this.client = client;
        this.text = text;
        this.date = date;
        this.rating = rating;
    }
}
export{Reviews};