     // looping  autotype with setTimeout
     let sentences =['My name is Samuel', 'I love coding', 'My hobby is coding' ];
     let display = document.getElementById('display')

     let sentenceIndex = 0;
     let wordIndex = 0;
    //  let timer;


function start(){
    let sentence = sentences[sentenceIndex];
    console.log(sentence);
    writeIt(sentence);
}

function writeIt(towrite){
    display.innerHTML += towrite[wordIndex]
    if (towrite[wordIndex+1]){
        wordIndex++
        setTimeout(() => {
            writeIt(towrite)
        }, 200);

    } else{
        setTimeout(() =>{
            removeIt();
        }, 200);
    }
};

function removeIt(){
    if (display.innerHTML !=''){
        setTimeout(() => {
            display.innerHTML = display.innerHTML.slice(0, -1)
            removeIt();
        }, 200);

    }
    else{
        wordIndex = 0;
        if (!sentences[sentenceIndex+1]){
            sentenceIndex = 0
            writeIt(sentences[sentenceIndex])
        }else{
            sentenceIndex++
            writeIt(sentences[sentenceIndex])
        }
    }
};

// console.log(removeIt);
start();