
// function getElement (id){
//     const element = document.getElementById(id)
//     return element
// }




// document.getElementById("card-btn-2").addEventListener('click', function(){
//     const title = getElement('card-title-1').innerText
//     const serviceNumber = getElement('card-service-number-1').innerText
//     console.log(title, serviceNumber)
    
//     const cardContainer = getElement('card-container')


//     const newCard = document.createElement("div");

//     newCard.innerHTML = `
//     <div class="flex place-content-between items-center rounded-[8px] bg-gray-100 p-5">
//                         <div>
//                             <h1 >card</h1>
//                             <span>999</span>
//                         </div>
//                         <div class="time" id="timeBox"></div>
//                     </div>
                
//     `

//     cardContainer.append(newCard)



// })

//  const timeBox = document.getElementById('timeBox');
//     const now = new Date();
//     timeBox.textContent = now.toLocaleTimeString('en-US', {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       hour12: true
//     });





//  let copyCount = 0;

// document.getElementById('copy-btn-1').addEventListener('click', function(){
    
//        const copyValue = getElement('copy').innerText
//     const copyNumber = getElement('number1').innerText
//      copyCount++;
//       copyValue.textContent = copyCount ;

//         navigator.clipboard.writeText(copyNumber).then(() => {
//         alert('নম্বর কপি হয়েছে:' + " " + copyNumber);
//     }) 
// })
// // document.getElementById('copy-btn-2').addEventListener('click', function(){
    
// //        const copyValue = getElement('copy')
// //     const copyNumber = getElement('number1').innerText
// //      copyCount++;
// //       copyValue.textContent = copyCount ;

// //         navigator.clipboard.writeText(copyNumber).then(() => {
// //         alert('নম্বর কপি হয়েছে:' + " " + copyNumber );
// //     }) 
// // })

// // সব Copy বাটন বের করি
// const copyButtons = document.querySelectorAll("button[id^='copy-btn']");

// // হেডারের Copy কাউন্টার
// const copyCounter = document.getElementById("copy");

// // কাউন্টার এর প্রাথমিক ভ্যালু
// let counter = 0;

// // প্রতিটি Copy বাটনের জন্য লুপ চালাই
// copyButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // কার্ডের ভেতরের নাম্বার খুঁজে বের করি
//     const card = btn.closest(".bg-white"); // প্রতিটি কার্ড div
//     const numberElement = card.querySelector("span[id^='number']");
//     const number = numberElement.textContent;

//     // ক্লিপবোর্ডে কপি করি
//     navigator.clipboard.writeText(number).then(() => {
//       console.log(`Copied: ${number}`);
//     });

//     // হেডারের কাউন্টার আপডেট করি
//     counter++;
//     copyCounter.textContent = counter;



//   });
// });

// ================== COPY BUTTON HANDLE ==================
// ================== COPY BUTTON HANDLE ==================
const copyButtons = document.querySelectorAll("button[id^='copy-btn']");
const copyCounter = document.getElementById("copy");
let copyCount = 0;

copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const numberElement = card.querySelector("span[id^='number']");
    const copyNumber = numberElement.textContent;

    // ক্লিপবোর্ডে কপি
    navigator.clipboard.writeText(copyNumber).then(() => {
      console.log(`Copied: ${copyNumber}`);
    });

    // Copy কাউন্টার বাড়াও
    copyCount++;
    copyCounter.textContent = copyCount;

    // Alert দেখাও
    alert("নম্বর কপি হয়েছে: " + copyNumber);
  });
});


// ================== HEART ICON HANDLE ==================
const heartIcons = document.querySelectorAll(".fa-heart");
const headerHeartCounter = document.querySelector(
  "header div:first-child ~ div div:first-child span"
);

let heartCount = 0;

heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    heartCount++;
    headerHeartCounter.textContent = heartCount;
    icon.classList.toggle("text-red-500"); // ক্লিক করলে লাল হবে
  });
});


// ================== CALL BUTTON HANDLE ==================
const callButtons = document.querySelectorAll("button[id^='card-btn']");
const coinCounter = document.querySelector(
  "header div:first-child ~ div div:nth-child(2) span"
); // হেডারের কয়েন counter
let coins = parseInt(coinCounter.textContent); // শুরুতে 100 কয়েন

const callHistoryBox = document.getElementById("card-container");
const clearBtn = document.querySelector("aside button"); // Clear button

callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (coins < 20) {
      alert("আপনার কাছে পর্যাপ্ত কয়েন নেই (কমপক্ষে ২০ লাগবে)!");
      return;
    }

    // কয়েন কমাও
    coins -= 20;
    coinCounter.textContent = coins;

    // কার্ড থেকে নাম্বার + টাইটেল বের করো
    const card = btn.closest(".bg-white");
    const numberElement = card.querySelector("span[id^='number']");
    const callNumber = numberElement.textContent;

    const titleElement = card.querySelector("h3");
    const callTitle = titleElement ? titleElement.textContent : "Unknown";

    // লোকাল টাইম (English format)
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Call History Item বানাও
    const historyItem = document.createElement("div");
    historyItem.className =
      "p-3 mb-2 border-b flex justify-between items-center text-sm";
    historyItem.innerHTML = `
      <div>
        <span class="font-bold">${callTitle}</span><br/>
        📞 ${callNumber}
      </div>
      <span class="text-gray-500">${time}</span>
    `;

    callHistoryBox.prepend(historyItem); // হিস্টোরির উপরে যোগ করো
  });
});

// ================== CLEAR CALL HISTORY ==================
clearBtn.addEventListener("click", () => {
  callHistoryBox.innerHTML = "";
});





    











  