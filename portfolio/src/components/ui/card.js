/** @format */

export const Card = ({ title, children }) => (
	<div className="Card">
		{title && <h2>{title}</h2>}
		{children}
	</div>
);
