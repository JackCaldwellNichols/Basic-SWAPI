import React from "react";
import { Card, Grid } from "semantic-ui-react";

const Planets = ({data}) => {
    return (
        <div>
            <h1>Planets</h1>
            <Grid columns={3}>
                {data.map((planet, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <img src ="https://via.placeholder.com/150C/" />
                                <Card.Content>
                                    <Card.Header>{planet.name}</Card.Header>
                                    <Card.Description>
                                    <strong>Climate</strong>
                                        <p>{planet.climate}</p>
                                        <strong>Terrain</strong>
                                        <p>{planet.terrain}</p>
                                        <strong>Population</strong>
                                        <p>{planet.population}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )

                })}
            </Grid>
        </div>
    )
}

export default Planets;