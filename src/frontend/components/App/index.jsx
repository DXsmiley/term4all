'use strict';

const React = require('react');

function App(props) {
	const { output, runCommand } = props;
	const outputChildren = output.map(function(o) {
		return <li key={o.id} className={`output__item line_${o.type}`}><pre>{o.value}</pre></li>
	});

	return (
		<div className="terminal">
			<ul className="terminal__output">
				{outputChildren}
			</ul>

			<input className="terminal__input"
				   type="text"
				   onKeyUp={runCommand} />
		</div>
	);
};

module.exports = App;
