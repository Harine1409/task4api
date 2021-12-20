async function sendRequest()
{
    
    fetch("https://restcountries.com/v3.1/region/europe")
    .then((res)=>
    {
        return res.json()}).then((res)=>
    {
        let r=JSON.stringify(res[0].region);
        let r1=JSON.stringify(res[21].currencies);
        let r2=JSON.stringify(res[27].currencies);
        
        document.getElementById("one").innerText=r;
        document.getElementById("four").innerText=r1;
        document.getElementById("fr1").innerText=r2;
        
    }).catch((e)=>
    {
        console.log(e)
    });

    fetch("https://restcountries.com/v2/lang/es")
    .then((res)=>
    {
        return res.json()}).then((res)=>
    {
     
       
        let r=JSON.stringify(res[0].languages);
        //console.log(r);
        let r1=JSON.stringify(res[3].regionalBlocs);
        let r2=res[20].flags["png"];
        document.getElementById("three").innerHTML=r;
        document.getElementById("five").innerHTML=r1;
        document.getElementById("seven").innerHTML=`<img src=${r2}>`;
        
    }).catch((e)=>
    {
        console.log(e)
    });
   
    fetch(" https://restcountries.com/v3.1/subregion/europe")
    .then((res)=>
    {
        return res.json()}).then((res)=>
    {
        let r=JSON.stringify(res[48].name);
        let r1=JSON.stringify(res[48].population);
      // let gmap=res[1].googleMaps;
        console.log(r);
        document.getElementById("two").innerHTML=r;
        document.getElementById("eight").innerHTML=r1;
        //document.getElementById("card-img").innerHTML=`<iframe src=${gmap}>`;
        
    }).catch((e)=>
    {
        console.log(e)
    });
}
sendRequest();
