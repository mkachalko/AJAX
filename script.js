const sendData = (data) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
      if(xhr.status < 200 || xhr.status > 299) {
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
      } else {
        
        console.log(xhr.response);
      }
    };
};

const xhrGet = new XMLHttpRequest();


xhrGet.open('GET', 'data/db.json');
xhrGet.responseType = 'json';
xhrGet.send();
xhrGet.onload = () => {
  if(xhrGet.status != 200) {
    console.log(`Ошибка ${xhrGet.status}: ${xhrGet.statusText}`);
  } else {
    console.log(xhrGet.response);
    sendData(xhrGet.response);
    
  }
};




