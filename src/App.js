import React, { useState, useEffect } from "react";
import "./css/App.css";

function App() {
	const [text, setText] = useState("");
	const [timeRemaining, setTimeRemaining] = useState(5);

	function handleChange(event) {
		const { value } = event.target;
		setText(value);
	}

	function wordCount() {
		const wordsArray = text.split(" ");
		const filteredWords = wordsArray.filter((word) => word !== "");
		console.log(filteredWords.length);
		return filteredWords.length;
	}

	useEffect(() => {
		setTimeout(() => {
			setTimeRemaining((time) => time - 1);
		}, 1000);
	}, [timeRemaining]);

	return (
		<div id="Game">
			<header>
				<h1>Speed Type Game</h1>
			</header>
			<main>
				<textarea value={text} onChange={handleChange} />
				<h4>Time remaining: {timeRemaining}</h4>
				<button onClick={() => wordCount()}>Start</button>
				<h1>Word count:</h1>
			</main>
		</div>
	);
}

export default App;
