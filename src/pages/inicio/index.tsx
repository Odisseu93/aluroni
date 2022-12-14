import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <section className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <article key={item.id} className={styles.recomendado}>
            <figure className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <figcaption className={styles.recomendado__imagem__caption}>{item.title}</figcaption>
            </figure>
            <button className={styles.recomendado__botao}>Ver mais</button>
          </article>
        ))}
        <h3 className={stylesTema.titulo}> Nossa casa </h3>
        <article className={styles.nossaCasa}>
          <figure>
            <img src={nossaCasa} alt="Casa do aluroni" />
          </figure>
          <p className={styles.nossaCasa__endereco}>
            Rau vergeiro, 3185 <br /> <br /> Vila Mariana - SP
          </p>
        </article>
      </section>
    </>
  );
}
