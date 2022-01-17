function showTime() {
  // Türkçe günleri dizi oluşturduk. Format farkından ilk başa Pazar yazdık. Format değiştirerek dizi düzeltilebilir.
  let days = ['Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  // Günü oluşturduğumuz diziden almasını sağladık.
  let showDay = days[date.getDay()];
  // let timeOutput = `${hour}:${minute}:${seconds}`
  let timeOutput =
    ("0" + hour).substr(-2) + ":" + ("0" + minute).substr(-2) + ":" + ("0" + seconds).substr(-2);
  let output = `${timeOutput} ${showDay}`
  
  let dateElement = document.querySelector('#myClock');
  dateElement.innerText = output;
}
setInterval(showTime, 1000);