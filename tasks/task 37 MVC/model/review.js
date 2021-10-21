class Reviews{
    client;
    date;
    rate;
    text;
    constructor(client, text,date, rate){
        this.client = client;
        this.text = text;
        this.date = date;
        this.rate = rate;
    }
}
export{Reviews};