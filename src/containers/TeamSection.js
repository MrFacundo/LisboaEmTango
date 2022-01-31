import useCollapse from "react-collapsed";

const TeamSection = () => {
	const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

	return (
		<div>
			<button {...getToggleProps()}>
				{isExpanded ? "Collapse" : "Expand"}
			</button>
			<section {...getCollapseProps()}>Collapsed content 🙈</section>
		</div>
	);
};

export default TeamSection;
