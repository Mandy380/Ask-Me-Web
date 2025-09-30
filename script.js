 function ask_me() {
      let name = prompt("What is you Name?");
      let ans = prompt("Do you love playing Game: Yes or No?");

      if (!name) {
        alert("Please Enter your Name:");
      }
      if (!ans) {
        alert("Please Enter your Ans:");
      } else {
        if (ans === "Yes") {
          alert(`Thank you, ${name}, and I'm glad you Love Games`);
        } else {
          alert(`Sorry to here that ${name}`);
        }
      }
    }

    let btn = document.querySelector("button");
    btn.addEventListener("click", ask_me);
