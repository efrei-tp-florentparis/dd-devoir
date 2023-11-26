import Image from 'next/image';
import Link from 'next/link';

/* styles */
import styles from './answer.module.css';

/* components */
import Tableau from '@/components/templates/Tableau';
import Text from '@/components/atoms/Text';

/* datas */
import questions from '@/assets/questions.json';

export default function Answer() {
  return (
    <Tableau>
      <div className={styles.first_column}>
        <div className={styles.header}>
          <Text size="lg" weight="bold">
            Devoir - Développement Durable
          </Text>
          <Text weight="bold">Florent PARIS</Text>
        </div>
        <ul className={styles.questions_list}>
          {questions.map((question, key) => {
            return (
              <li className={styles.question}>
                <Text weight="semibold">Question {key + 1}</Text>
                <Text size="sm">{question.question}</Text>
              </li>
            );
          })}
        </ul>

        <Link href="/" className={styles.bottom_redirection}>
          <Image
            className={styles.redirect_icon}
            src="/icons/arrow_back.svg"
            alt="arrow back"
            width={80}
            height={80}
          />
          <Text
            style={{ maxWidth: '300px' }}
            size="2xl"
            color="dark-green"
            weight="regular"
          >
            Retour
          </Text>
        </Link>
      </div>
      <div className={styles.second_column}>
        <ul className={styles.answers_list}>
          {questions.map((question, key) => {
            return (
              <li className={styles.answer}>
                <Text weight="semibold">Question {key + 1}</Text>
                <Text size="sm">{question.question}</Text>

                {typeof question.answer === 'object' ? (
                  question.answer.map((element: string) => {
                    return (
                      <Text
                        size="sm"
                        color="brown"
                        className={styles.element_list}
                      >
                        {element}
                      </Text>
                    );
                  })
                ) : (
                  <Text size="sm" color="brown">
                    {question.answer}
                  </Text>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.third_column}>
        <Image
          className={styles.image}
          src="/img/boy-tree.jpeg"
          alt="a boy against a tree with a laptop"
          width={540}
          height={1000}
        />
      </div>
    </Tableau>
  );
}
