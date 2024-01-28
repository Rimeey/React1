import './description.scss';

export default function Description({ desc }) {
    return (
        <div className="description">
            {
                desc &&
                <div key={desc.id}>
                    <img src={desc.url} alt={desc.name}/>
                    <h1>{desc.name}</h1>
                    <p>{desc.description}</p>
                </div>
            }
        </div>
    );
}