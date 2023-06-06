import React from 'react'

export default function Table(props) {
    return <div>
        <table className={'table mt-5'}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Sprite</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody id={'table-body'}>
            {
                props.pokemonList.map((pokemon) => {
                    return (
                        <tr key={pokemon.id}>
                            <td>{pokemon.id}</td>
                            <td><img src={pokemon.sprites.front_default}/></td>
                            <td>{pokemon.name}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    </div>
}
