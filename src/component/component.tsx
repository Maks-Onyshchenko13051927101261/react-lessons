const coursesTitleArray: string[] = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
export const Component = () => {
    return (
        <ul>{
            coursesTitleArray.map((title: string, index: number) => <li key={index}>{title}</li>)
        }</ul>
    );
};
