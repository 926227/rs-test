import styles from './styles.module.css';

interface Props {
  data: any;
  isLoading: boolean;
}

export const PokemonCard = ({data, isLoading}: Props) => {

  return (
    <div className={styles.card}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <figure>
          <img
            width="200px"
            height="200px"
            src={data?.sprites?.front_default}
            alt={data.name}
          />
          <figcaption>
            <h4>{data.name}</h4>
            <h6>No. {data.id}</h6>
          </figcaption>
        </figure>
      )}
    </div>
  );
};
