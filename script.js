let arr = [4,2,1,5,6]
const bColor = "#ccdbdc";
const rColor = "#4361ee";
const lColor = "#7371fc";
const dColor = "#fb8500";
function generatearray() {
  for (var i = 0; i < 5; i++) {

      // Return a value from 1 to 100 (both inclusive)
      var value = Math.ceil(Math.random() * 100);

      // Creating element div
      let arr = document.createElement("div");

      // Adding class 'block' to div
      arr.classList.add("box");
      // arr.id = "${i]";

      // Adding style to div
      // arr.style.transform = `translate(${i * 30}px)`;

      // Creating label element for displaying 
      // size of particular block
      var arr_label = document.createElement("label");
      arr_label.classList.add("block_id");
      arr_label.innerText = value;

      // Appending created elements to index.html 
      arr.appendChild(arr_label);
      document.querySelector(".array").appendChild(arr);
  }
} 


generatearray();

let boxes = document.querySelectorAll(".box");

for(let box of boxes){
  box.classList.add("start");
  box.style.backgroundColor = bColor;
}

function swap(one, two) {
  return new Promise((resolve) => {

      // For exchanging styles of two blocks
one.classList.add("m-right");
two.classList.add("m-left");

  

     setTimeout( ()=>{
      let temp = one.innerText;
      one.innerText = two.innerText;
      two.innerText = temp;
      one.classList.remove("m-right");
two.classList.remove("m-left");
resolve();
     }, 1000);
  });
}

async function bubbleSort(){

  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, 1000);
  });

  for(let i = 0; i <boxes.length ; ++i){

    for(let j = 0; j < boxes.length - i - 1; ++j){

      boxes[j].style.backgroundColor = lColor;
      boxes[j+1].style.backgroundColor = rColor;

      boxes[j].style.color = "whitesmoke";
      boxes[j + 1].style.color = "whitesmoke";

      await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        }, 1000);
      });
      
      const n1 = parseInt(boxes[j].innerText);
      const n2 = parseInt(boxes[j + 1].innerText);
      if( n1 > n2)
      await swap(boxes[j], boxes[j+1]);
      
      else{
        await new Promise((resolve)=>{
          setTimeout(()=>{
            resolve();
          }, 1000);
        });
      }
 
      boxes[j].style.backgroundColor = bColor;

      boxes[j+1].style.backgroundColor = bColor;

      boxes[j].style.color = "black";
      boxes[j + 1].style.color = "black";

      await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve();
        }, 500);
      });

    }
 
    boxes[boxes.length - i - 1].style.backgroundColor = dColor; 

    await new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
      }, 500);
    });

   }

   for(let box of boxes){

    box.style.color = "whitesmoke";
    box.classList.add("box_done");
  }

}

bubbleSort();



function swap2(one, two, diff = 78){

  diff *= 3;
  let pos = 0;
  let id = null;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame(){
    if( pos == diff){
      clearInterval(id);
    }

    else{
      ++pos;
      one.style.left = pos + 'px';
    }
  }
}

// boxes[0].style.backgroundColor = "red";
// swap2(boxes[0], boxes[3]);

