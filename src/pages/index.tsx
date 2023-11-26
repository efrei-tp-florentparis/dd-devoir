import React, { useState } from 'react';
import Image from 'next/image';

/* style */
import styles from './homepage.module.css';

/* composants */
import Tableau from '@/components/templates/Tableau';
import Text from '@/components/atoms/Text';
import Button from '@/components/molecules/Button';

/* datas */
import questions from '@/assets/questions.json';
import Link from 'next/link';

export default function Home() {
  const [actualQuestion, setActualQuestion] = useState(0);

  const handleChangeQuestion = (action: string) => {
    const totalQuestions = questions.length;

    if (action === 'lower') {
      setActualQuestion(
        actualQuestion === 0 ? totalQuestions - 1 : actualQuestion - 1
      );
    } else if (action === 'up') {
      setActualQuestion(
        actualQuestion === totalQuestions - 1 ? 0 : actualQuestion + 1
      );
    }
  };

  return (
    <Tableau>
      <div className={styles.first_column}>
        <div className={styles.header}>
          <Text size="lg" weight="bold">
            Devoir - Développement Durable
          </Text>
          <Text weight="bold">Florent PARIS</Text>
        </div>

        <Text size="3xl" color="brown" weight="bold">
          CE SITE EST CONÇU DE FAÇON RESPONSABLE
        </Text>
        <Text size="sm" color="brown" weight="semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          fermentum ipsum tellus, in sagittis dolor mattis et. Quisque hendrerit
          leo vitae nibh posuere efficitur. Nullam ac volutpat nunc. Sed id
          dolor tincidunt, blandit mauris quis, lacinia urna. Donec ut nunc
          quam.
        </Text>

        <Link href="/creation" className={styles.bottom_redirection}>
          <Image
            className={styles.redirect_icon}
            src="./arrow-redirect.svg"
            alt="arrow redirection"
            width={80}
            height={80}
          />
          <Text
            style={{ maxWidth: '300px' }}
            size="2xl"
            color="dark-green"
            weight="regular"
          >
            Découvrir comment
          </Text>
        </Link>
      </div>

      <div className={styles.second_column}>
        <Image
          className={styles.image}
          src="/img/boy-tree.jpeg"
          alt="a boy against a tree with a laptop"
          width={540}
          height={1000}
        />
      </div>

      <div className={styles.third_column}>
        {questions.map((question, key) => {
          return (
            key == actualQuestion && (
              <div className={styles.question}>
                <Text color="dark-brown" weight="bold">
                  Question {key + 1}
                </Text>

                <Text size="sm" color="brown" weight="semibold">
                  {question.question}
                </Text>

                <Link href={`answer#${key + 1}`} className={styles.cta}>
                  <Button>
                    <Text>{question.cta_text}</Text>
                  </Button>
                </Link>
              </div>
            )
          );
        })}

        <div className={styles.arrow_container}>
          <Image
            onClick={() => handleChangeQuestion('lower')}
            src="/icons/arrow_long.svg"
            alt=""
            width={100}
            height={27}
          />
          <Image
            onClick={() => handleChangeQuestion('up')}
            src="/icons/arrow_long.svg"
            alt=""
            width={100}
            height={27}
          />
        </div>
      </div>
    </Tableau>
  );
}
