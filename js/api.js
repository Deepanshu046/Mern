const url = "https://catfact.ninja/fact";

const fact = async () => {
    let promise = await fetch(url);
    let data = await promise.json();
    console.log(data.fact);
}

fact();