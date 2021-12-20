async function sendRequest()
{
    
    fetch("https://restcountries.com/v3.1/region/europe")
    .then((res)=>
    {
        return res.json()}).then((res)=>
    {
        let r=JSON.stringify(res[0].region);
       // let r2=JSON.stringify(res[27].currencies);
        
        document.getElementById("fr1").innerText=r;
       // document.getElementById("fr4").innerText=r2;
        
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
        let r1=JSON.stringify(res[0].regionalBlocs);
        let r2=res[0].flags["png"];
        let r3=JSON.stringify(res[0].currencies);
        document.getElementById("fr3").innerHTML=r;
        document.getElementById("fr5").innerHTML=r1;
        document.getElementById("fr0").innerHTML=`<img src=${r2}>`;
        document.getElementById("fr4").innerText=r3;
        
    }).catch((e)=>
    {
        console.log(e)
    });
   
    fetch(" https://restcountries.com/v3.1/subregion/europe")
    .then((res)=>
    {
        return res.json()}).then((res)=>
    {
        let r=JSON.stringify(res[0].name);
    //    console.log(res.map((data)=>
    //    {
    //    console.log(data.name);
    //    }));
        
        let r1=JSON.stringify(res[0].population);
        console.log(r);
        
        document.getElementById("fr2").innerHTML=r;
        document.getElementById("fr6").innerHTML=r1;
        
        
    }).catch((e)=>
    {
        console.log(e)
    });
}
sendRequest();
