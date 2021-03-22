import { FunctionComponent } from 'react';

interface Props {
  name: string;
  value: string | number;
}

export const PokemonProperty: FunctionComponent<Props> = ({ name, value }) => {
  return (
    <div className="property separator-border">
      <h4 className="property-title">{name}</h4>
      <h5 className="property-value">{value}</h5>
    </div>
  );
};
