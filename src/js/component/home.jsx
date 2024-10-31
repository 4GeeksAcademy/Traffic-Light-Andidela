import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState(" ");
	console.log(color);

	return (
		<>
			<span className="traffic-light" >
				<div className="text-center" style={{ marginTop: 15 }}>
					<div onClick={() => setColor("red")}>
						<button type="button" style={{ width: 60, height: 60 }} className={"btn btn-danger rounded-circle" + " " + (color === "red" ? "sombra" : " ")}></button>
					</div>
					<div onClick={() => setColor("yellow")}>
						<button type="button" style={{ width: 60, height: 60, marginTop: 5}} className={"btn btn-warning rounded-circle" + " " + (color === "yellow" ? "sombra" : " ")}></button>
					</div>
					<div onClick={() => setColor("green")}>
						<button type="button" style={{ width: 60, height: 60, marginTop: 5 }} className={"btn btn-success rounded-circle" + " " + (color === "green" ? "sombra" : " ")}></button>
					</div>
				</div>
			</span>
			
		</>
	);
};

export default Home;
