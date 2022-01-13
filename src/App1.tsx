import {useEffect, useState} from "react";

function App1() {
    const [count, setCount] = useState<number>(1)
    useEffect(() => {
        document.title = `You pressed ${count} times`;
    })

    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click here
            </button>
        </div>
    )
}

export default App1
