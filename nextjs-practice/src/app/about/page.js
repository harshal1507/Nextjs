async function takeTime(){
    await new Promise((resolve) => {
        throw new Error("this is manual error");
        setTimeout(resolve, 3000);
    });
}

export default async function About(){
    await takeTime();
    return(
        <div>
            <h1>About Page Route</h1>
        </div>
    );
}