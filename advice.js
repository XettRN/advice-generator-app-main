const button = document.getElementById("adviceReroll");
const header = document.getElementById("adviceHeader");
const text = document.getElementById("adviceText");

const ADVICE_URL = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
    try {
        await fetch(ADVICE_URL)
            .then((res) => res.json())
            .then((json) => json.slip)
            .then((slip) => {
                header.innerText = `ADVICE #${slip.id}`;
                text.innerText = `"${slip.advice}"`;
            });
    }
    catch(err) {
        console.error(err);
    }
}

getAdvice();

button.addEventListener("click", () => getAdvice());