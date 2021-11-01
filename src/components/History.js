import { useEffect } from "react";
export default function History({ searchHistory }) {
	const renderedHistory = () => {
		return searchHistory.map((historyItem) => {
			<p>{historyItem}</p>;
		});
	};

	return (
		<div>
			{searchHistory.map((item) => (
				<p>{item}</p>
			))}
		</div>
	);
}
