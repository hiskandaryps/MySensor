// api url
const api_url = "https://api.thingspeak.com/channels/2058114/feeds.json?results=1";

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("field-1").innerHTML = obj.field1+" Rad/s";
      if (Number(obj.field1)>0){
        document.getElementById("s1").innerHTML = "Device is rotating clockwise,";
      }
      else if (Number(obj.field1)<0){
        document.getElementById("s1").innerHTML = "Device is rotating counter-clockwise,";
      }
      else {
        document.getElementById("s1").innerHTML = "Device is not rotating,";
      }
      document.getElementById("field-2").innerHTML = obj.field2+" \u00B0Celcius";
      if (Number(obj.field2) >= 50){
        document.getElementById("s2").innerHTML = " with high temperature,";
      }
      else if (Number(obj.field2) >= 20 && Number(obj.field1) < 50){
        document.getElementById("s2").innerHTML = " with normal temperature,";
      }
      else if (Number(obj.field2) < 20){
        document.getElementById("s2").innerHTML = " with low temperature,";
      }
      document.getElementById("field-3").innerHTML = obj.field3+" cm";
      if (Number(obj.field3) >= 100){
        document.getElementById("s3").innerHTML = " and a safe distance.";
      }
      else if (Number(obj.field3) < 100){
        document.getElementById("s3").innerHTML = " and a dangerous distance.";
      }
    });
}, 1000);