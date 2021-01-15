document.getElementById("SunsetA").addEventListener("click", SunsetHi);

function SunsetHi(){
    let nums=[1,4,2,7,4];
    let currentMax = nums[0];
    let seeCount = 1;
    let textOutput = `Building 1 with height of ${nums[0]} can see the sun <br />`;
    let outputArea = document.getElementById("see");
    //I need to go through the array and check if each number is more than currentMax
    //But since I know the first building always sees the sun I can start my loop
    //at the second position

    for(let loop = 1; loop < nums.length; loop++){
        if(nums[loop] > currentMax){
            currentMax = nums[loop];
            seeCount++;
            textOutput += `Building ${loop + 1} with height of ${nums[loop]} can see the sun <br />`
        }
    }

    outputArea.innerHTML = textOutput;

//     for(let maxNum=1; maxNum < loop.length; maxNum++){
//         let bigger = false;
//     for(let loop= 0 ; loop < maxNum; loop++);
//     if (nums[loop] >= nums[maxNum]){
//         bigger= true;
//         break;
//     } else {
//         continue;
//     }
//     }
//     bigger ? results.push("cant-see") || results.push("See"):


// document.getElementById("See").innerText = results;
}