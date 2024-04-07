const reactDescriptions = ['React', 'Java', 'Python']

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
            <h1>This is Header</h1>
            <p>
                {description} Component concepts you will need
                for almost any app you are going to build!
            </p>
        </header>
    )
}